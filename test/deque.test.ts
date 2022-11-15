import {Deque} from '../src';

describe('#Deque', () => {
  const deque = new Deque<string>();

  test('init a deque without any elements', () => {
    expect(deque.size()).toBe(0);
    expect(deque.isEmpty()).toBeTruthy();
    expect(deque.toString()).toBe('');
  });

  test(`push an element from the front`, () => {
    deque.addFront('a');
    expect(deque.size()).toBe(1);
    expect(deque.peekFront()).toBe('a');
    expect(deque.peekBack()).toBe('a');
  });

  test(`removeFront`, () => {
    deque.removeFront();
    expect(deque.size()).toBe(0);
    expect(deque.peekFront()).toBeUndefined();
    expect(deque.peekBack()).toBeUndefined();
  });

  test(`removeFront without any elements`, () => {
    deque.removeFront();
    deque.removeBack();
    expect(deque.size()).toBe(0);
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`push three elements from the front`, () => {
    deque.addFront('d');
    deque.addFront('c');
    deque.addFront('b');
    deque.addBack('e');
    expect(deque.size()).toBe(4);
    expect(deque.peekFront()).toBe('b');
    expect(deque.peekBack()).toBe('e');
    expect(deque.isEmpty()).toBeFalsy();
    expect(deque.toString()).toBe('b,c,d,e');
  });

  test(`removeBack from the end`, () => {
    deque.removeBack();
    expect(deque.size()).toBe(3);
    expect(deque.peekBack()).toBe('d');
  });

  test(`clear deque`, () => {
    deque.clear();
    expect(deque.size()).toBe(0);
    expect(deque.peekFront()).toBeUndefined();
    expect(deque.peekBack()).toBeUndefined();
    expect(deque.isEmpty()).toBeTruthy();
  });
});
