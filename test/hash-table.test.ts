import {HashTable} from '../src';
import {defaultToString} from '../src/utils';

describe('#Dictionary', () => {
  const hashTable = new HashTable<string | null | undefined | number, string>(
    defaultToString,
    1000
  );

  test('init a hashTable', () => {
    expect(hashTable.size()).toBe(0);
    expect(hashTable.isEmpty()).toBeTruthy();
    expect(hashTable.toString()).toBe('');
  });

  test(`add multiple elements`, () => {
    hashTable.put(null, 'null');
    hashTable.put(undefined, 'undefined');
    hashTable.put('a', 'a');
    expect(hashTable.put(0, '0')).toBeTruthy();
    expect(hashTable.size()).toBe(4);
    expect(hashTable.isEmpty()).toBeFalsy();
    expect(hashTable.toString()).toBe(
      '#0: 0,#null: null,#a: a,#undefined: undefined'
    );
    expect(hashTable.get(null)).toBe('null');
    expect(hashTable.get('a')).toBe('a');
  });

  test(`add a duplicate element`, () => {
    hashTable.put('a', 'aa');
    expect(hashTable.get('a')).toBe('aa');
    expect(hashTable.get('b')).toBeUndefined();
  });

  test(`remove multiple elements`, () => {
    expect(hashTable.remove(null)).toBeTruthy();
    expect(hashTable.remove(undefined)).toBeTruthy();
    expect(hashTable.remove('b')).toBeFalsy();
    expect(hashTable.size()).toBe(2);
  });

  test(`get the entire table`, () => {
    expect(hashTable.getTable()[670].getHead()?.element.value).toBe('aa');
  });

  test(`add multiple elements with the same key`, () => {
    hashTable.put('JADTwAfMjSDBirmXwgTnFcxcIvD', 'c1');
    hashTable.put('gpcwQkCLSpfGgOItTADjOJFnbkAwiUorsvWg', 'c2');
    expect(hashTable.get('gpcwQkCLSpfGgOItTADjOJFnbkAwiUorsvWg')).toBe('c2');
    expect(
      hashTable.get('TwpDQEimKJNfhUOOsKawFjLTVNlPkqKjAktSBEu')
    ).toBeUndefined();
    expect(hashTable.size()).toBe(4);
  });

  test(`clear hashTable`, () => {
    hashTable.clear();
    expect(hashTable.size()).toBe(0);
  });
});
