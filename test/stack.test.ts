import {Stack} from '../src';

describe('#Stack', () => {
  const stack = new Stack<string>();

  test('init a stack without any elements', () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  test(`push an element`, () => {
    stack.push('a');
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe('a');
  });

  test(`remove an element`, () => {
    stack.pop();
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });

  test(`push three elements`, () => {
    stack.push('a', 'b', 'c');
    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe('c');
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.toString()).toBe('a,b,c');
  });

  test(`clear stack`, () => {
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.isEmpty()).toBeTruthy();
  });
});
