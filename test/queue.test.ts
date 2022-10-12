import {Queue} from '../src';

describe('#Queue', () => {
  const queue = new Queue<string>();

  test('init a queue without any elements', () => {
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.toString()).toBe('');
  });

  test(`push an element`, () => {
    queue.enqueue('a');
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe('a');
  });

  test(`dequeue`, () => {
    queue.dequeue();
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
  });

  test(`dequeue without any elements`, () => {
    queue.dequeue();
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
  });

  test(`push three elements`, () => {
    queue.enqueue('b', 'c', 'd');
    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe('b');
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.toString()).toBe('b,c,d');
  });

  test(`clear queue`, () => {
    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.isEmpty()).toBeTruthy();
  });
});
