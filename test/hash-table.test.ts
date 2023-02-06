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
    expect(hashTable.getTable()).toEqual({
      '0': {key: 0, value: '0'},
      '670': {key: 'a', value: 'aa'},
    });
  });

  test(`clear hashTable`, () => {
    hashTable.clear();
    expect(hashTable.size()).toBe(0);
  });
});
