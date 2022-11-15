import { Node } from './utils';
/** 链表
 * @description 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。
 * 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
 *
 * 优点：
 * 1. 易于插入、移除元素。相较于数组，（大多数语言中）数组会有移动元素的成本
 * 2. 动态数据结构。没必要给链表初始大小
 * 3. 内存利用率高。例如（大多数语言中）数组来说分配了大小为10却只储存了5个元素，浪费了5个空间
 *
 * 缺点：
 * 1. 额外的内存。相较于数组，链表存储需要更多内存。因为每个节点都包含一个指针，它需要额外的内存
 * 2. 遍历困难，不易于查询。查询某个位置的节点都必须从头开始遍历
 * 3. 反向遍历困难。在双链表的情况下，后指针更容易但需要额外的内存因此浪费内存
 * 4. 复杂度为O(n)
 */
declare class LinkedList<T> {
    constructor(equalsFn?: (a: T, b: T) => boolean);
    protected equalsFn: (a: T, b: T) => boolean;
    protected count: number;
    protected head?: Node<T>;
    /** 向链表尾部添加一个新元素 */
    push(element: T): void;
    /** 向链表的特定位置插入一个新元素 */
    insert(element: T, index: number): boolean;
    /** 从链表中移除一个元素 */
    remove(element: T): T | undefined;
    /** 从链表的特定位置移除一个元素 */
    removeAt(index: number): T | undefined;
    /** 返回元素在链表中的索引。若不存在则返回-1 */
    indexOf(element: T): number;
    /** 获取链表第一个元素 */
    getHead(): Node<T> | undefined;
    /** 返回链表中特定位置的元素。若不存在则返回undefined */
    getElementAt(index: number): Node<T> | undefined;
    /** 返回链表包含的元素个数 */
    size(): number;
    /** 判断链表里是否没有任何元素 */
    isEmpty(): boolean;
    /** 清空链表全部元素 */
    clear(): void;
    /** 返回表示整个链表的字符串 */
    toString(): string;
}
export default LinkedList;
