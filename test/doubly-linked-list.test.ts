import {DoublyLinkedList} from '../src';
import {defaultEquals} from '../src/utils';

describe('#DoublyLinkedList', () => {
  const doublyLinkedList = new DoublyLinkedList<number>(defaultEquals);

  test('init a doublyLinkedList without any elements', () => {
    expect(doublyLinkedList.size()).toBe(0);
    expect(doublyLinkedList.isEmpty()).toBeTruthy();
    expect(doublyLinkedList.getHead()).toBeUndefined();
    expect(doublyLinkedList.getTail()).toBeUndefined();
    expect(doublyLinkedList.toString()).toBe('');
  });

  test(`push multiple elements`, () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(3);
    doublyLinkedList.push(4);
    expect(doublyLinkedList.size()).toBe(3);
    expect(doublyLinkedList.isEmpty()).toBeFalsy();
    expect(doublyLinkedList.getHead()?.element).toBe(1);
    expect(doublyLinkedList.getTail()?.element).toBe(4);
  });

  test(`insert multiple elements`, () => {
    doublyLinkedList.insert(0, 0);
    expect(doublyLinkedList.insert(2, 1)).toBeTruthy();
    expect(doublyLinkedList.insert(5, 5)).toBeTruthy();
    expect(doublyLinkedList.size()).toBe(6);
    expect(doublyLinkedList.getHead()?.element).toBe(0);
    expect(doublyLinkedList.getTail()?.element).toBe(5);
    expect(doublyLinkedList.toString()).toBe('0,2,1,3,4,5');
  });

  test(`insert invalid element`, () => {
    expect(doublyLinkedList.insert(-1, -1)).toBeFalsy();
    expect(doublyLinkedList.insert(10, 10)).toBeFalsy();
    expect(doublyLinkedList.size()).toBe(6);
  });

  test(`remove multiple elements`, () => {
    expect(doublyLinkedList.remove(0)).toBe(0);
    expect(doublyLinkedList.remove(3)).toBe(3);
    expect(doublyLinkedList.remove(4)).toBe(4);
    expect(doublyLinkedList.removeAt(2)).toBe(5);
    expect(doublyLinkedList.size()).toBe(2);
    expect(doublyLinkedList.toString()).toBe('2,1');
  });

  test(`remove invalid element`, () => {
    expect(doublyLinkedList.remove(-1)).toBeUndefined();
    expect(doublyLinkedList.remove(10)).toBeUndefined();
    expect(doublyLinkedList.removeAt(10)).toBeUndefined();
    expect(doublyLinkedList.size()).toBe(2);
  });

  test(`remove the one element`, () => {
    doublyLinkedList.remove(2);
    doublyLinkedList.remove(1);
    expect(doublyLinkedList.size()).toBe(0);
  });

  test(`clear doublyLinkedList`, () => {
    doublyLinkedList.clear();
    expect(doublyLinkedList.size()).toBe(0);
    expect(doublyLinkedList.getHead()).toBeUndefined();
    expect(doublyLinkedList.getTail()).toBeUndefined();
  });
});
