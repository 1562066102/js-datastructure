import {Node, defaultEquals} from './utils';

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
class LinkedList<T> {
  constructor(equalsFn = defaultEquals<T>) {
    this.equalsFn = equalsFn;
  }

  protected equalsFn = defaultEquals<T>;

  protected count = 0;

  protected head?: Node<T>;

  /** 向链表尾部添加一个新元素 */
  public push(element: T) {
    const node = new Node(element);
    this.count += 1;

    if (!this.head) {
      this.head = node;
      return;
    }

    // 通过循环引用直至找到next为空的元素
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  /** 向链表的特定位置插入一个新元素 */
  public insert(element: T, index: number) {
    if (index < 0 || index > this.count) return false;

    const node = new Node(element);

    if (index !== this.count) {
      this.count += 1;
    }

    if (index === this.count) {
      this.push(element);
    } else if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const prev = this.getElementAt(index - 1)!;
      node.next = prev.next;
      prev.next = node;
    }
    return true;
  }

  /** 从链表中移除一个元素 */
  public remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /** 从链表的特定位置移除一个元素 */
  public removeAt(index: number) {
    if (index < 0 || index >= this.count) return undefined;

    let current = this.head;
    if (index === 0) {
      this.head = current?.next;
    } else {
      const prev = this.getElementAt(index - 1)!;
      current = prev.next!;
      prev.next = current.next;
    }
    this.count -= 1;

    return current?.element;
  }

  /** 返回元素在链表中的索引。若不存在则返回-1 */
  public indexOf(element: T) {
    let current = this.head;
    let i = 0;

    while (current) {
      if (this.equalsFn(current.element, element)) {
        return i;
      }
      i++;
      current = current.next;
    }

    return -1;
  }

  /** 获取链表第一个元素 */
  public getHead() {
    return this.head;
  }

  /** 返回链表中特定位置的元素。若不存在则返回undefined */
  public getElementAt(index: number) {
    if (index < 0 || index >= this.count) return undefined;

    let current = this.head!;
    let i = 0;
    while (i < index) {
      i += 1;
      current = current.next!;
    }

    return current;
  }

  /** 返回链表包含的元素个数 */
  public size() {
    return this.count;
  }

  /** 判断链表里是否没有任何元素 */
  public isEmpty() {
    return this.count === 0;
  }

  /** 清空链表全部元素 */
  public clear() {
    this.head = undefined;
    this.count = 0;
  }

  /** 返回表示整个链表的字符串 */
  public toString() {
    if (!this.head) return '';

    let current = this.head;
    let str = `${this.head.element}`;
    while (current.next) {
      str += `,${current.next.element}`;
      current = current.next;
    }

    return str;
  }
}

export default LinkedList;
