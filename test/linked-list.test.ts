import {LinkedList} from '../src';
import {defaultEquals} from '../src/utils';

describe('#LinkedList', () => {
  const linkedList = new LinkedList<number>(defaultEquals);

  test('init a linkedList without any elements', () => {
    expect(linkedList.size()).toBe(0);
    expect(linkedList.isEmpty()).toBeTruthy();
    expect(linkedList.toString()).toBe('');
  });

  test(`push multiple elements`, () => {
    linkedList.push(1);
    linkedList.push(3);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.isEmpty()).toBeFalsy();
    expect(linkedList.getHead()?.element).toBe(1);
    expect(linkedList.getElementAt(1)?.element).toBe(3);
  });

  test(`insert multiple elements`, () => {
    linkedList.insert(0, 0);
    linkedList.insert(2, 2);
    linkedList.insert(4, 4);
    expect(linkedList.size()).toBe(5);
    expect(linkedList.getHead()?.element).toBe(0);
    expect(linkedList.toString()).toBe('0,1,2,3,4');
  });

  test(`insert invalid element`, () => {
    expect(linkedList.insert(-1, -1)).toBeFalsy();
    expect(linkedList.insert(10, 10)).toBeFalsy();
    expect(linkedList.size()).toBe(5);
  });

  test(`remove multiple elements`, () => {
    expect(linkedList.remove(0)).toBe(0);
    expect(linkedList.size()).toBe(4);
    expect(linkedList.remove(4)).toBe(4);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.remove(2)).toBe(2);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.toString()).toBe('1,3');
  });

  test(`remove invalid element`, () => {
    expect(linkedList.remove(-1)).toBeUndefined();
    expect(linkedList.remove(10)).toBeUndefined();
    expect(linkedList.removeAt(10)).toBeUndefined();
    expect(linkedList.size()).toBe(2);
  });

  test(`clear linkedList`, () => {
    linkedList.clear();
    expect(linkedList.size()).toBe(0);
    expect(linkedList.getHead()).toBeUndefined();
    expect(linkedList.isEmpty()).toBeTruthy();
  });
});
