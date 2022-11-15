/** 链表节点 */
export declare class Node<T> {
    constructor(element: T, next?: Node<T>);
    element: T;
    next?: Node<T>;
}
/** 链表双向节点 */
export declare class DoublyNode<T> extends Node<T> {
    constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>);
    next?: DoublyNode<T>;
    prev?: DoublyNode<T>;
}
