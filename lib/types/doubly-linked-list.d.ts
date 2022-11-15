import { DoublyNode } from './utils';
import LinkedList from './linked-list';
/** 双向链表
 * @description 双向链表和普通链表的区别在于，在双向链表中链接是双向的：分别链向前/后两个元素
 */
declare class DoublyLinkedList<T> extends LinkedList<T> {
    constructor(equalsFn?: (a: T, b: T) => boolean);
    protected head?: DoublyNode<T>;
    protected tail?: DoublyNode<T>;
    /** 向链表尾部添加一个新元素 */
    push(element: T): void;
    /** 向链表的特定位置插入一个新元素 */
    insert(element: T, index: number): boolean;
    /** 从链表的特定位置移除一个元素 */
    removeAt(index: number): T | undefined;
    /** 获取链表最后一个元素 */
    getTail(): DoublyNode<T> | undefined;
    /** 清空链表全部元素 */
    clear(): void;
}
export default DoublyLinkedList;
