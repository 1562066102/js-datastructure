import {Dictionary} from '../src';
import {defaultToString} from '../src/utils';

describe('#Dictionary', () => {
  const dic = new Dictionary<string | null | undefined | number, string>(
    defaultToString
  );

  test('init a dic', () => {
    expect(dic.size()).toBe(0);
    expect(dic.isEmpty()).toBeTruthy();
    expect(dic.toString()).toBe('');
    expect(dic.keys()).toHaveLength(0);
    expect(dic.values()).toHaveLength(0);
  });

  test(`add multiple elements`, () => {
    dic.set(null, 'null');
    dic.set(undefined, 'undefined');
    dic.set('a', 'a');
    dic.set(0, '0');
    expect(dic.size()).toBe(4);
    expect(dic.isEmpty()).toBeFalsy();
    expect(dic.toString()).toBe(
      '#0: 0,#null: null,#undefined: undefined,#a: a'
    );
    expect(dic.get(null)).toBe('null');
    expect(dic.get('a')).toBe('a');
    expect(dic.hasKey('a')).toBeTruthy();
  });

  test(`add a duplicate element`, () => {
    dic.set('a', 'aa');
    expect(dic.get('a')).toBe('aa');
    expect(dic.get('b')).toBeUndefined();
    expect(dic.hasKey('b')).toBeFalsy();
    expect(dic.keys()).toEqual([0, null, undefined, 'a']);
    expect(dic.values()).toEqual(['0', 'null', 'undefined', 'aa']);
  });

  test(`loop the dic`, () => {
    const mockFn = jest.fn(
      (key: string | null | undefined | number) => key !== undefined
    );
    dic.forEach(mockFn);
    expect(mockFn).toBeCalledTimes(3);
  });

  test(`remove multiple elements`, () => {
    expect(dic.remove(null)).toBeTruthy();
    expect(dic.remove(undefined)).toBeTruthy();
    expect(dic.remove('b')).toBeFalsy();
    expect(dic.size()).toBe(2);
  });

  test(`clear dic`, () => {
    dic.clear();
    expect(dic.size()).toBe(0);
  });
});
