/** 链表节点 */
export class Node<T> {
  constructor(element: T, next?: Node<T>) {
    this.element = element;
    this.next = next;
  }

  public element: T;

  public next?: Node<T>;
}

/** 链表双向节点 */
export class DoublyNode<T> extends Node<T> {
  constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
    super(element, next);
    this.prev = prev;
  }

  public declare next?: DoublyNode<T>;

  public prev?: DoublyNode<T>;
}
