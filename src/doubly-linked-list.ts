import {DoublyNode, defaultEquals} from './utils';
import LinkedList from './linked-list';

/** 双向链表
 * @description 双向链表和普通链表的区别在于，在双向链表中链接是双向的：分别链向前/后两个元素
 */
class DoublyLinkedList<T> extends LinkedList<T> {
  constructor(equalsFn = defaultEquals<T>) {
    super(equalsFn);
  }

  protected declare head?: DoublyNode<T>;

  protected tail?: DoublyNode<T>;

  /** 向链表尾部添加一个新元素 */
  public push(element: T) {
    const node = new DoublyNode(element);
    this.count += 1;

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  /** 向链表的特定位置插入一个新元素 */
  public insert(element: T, index: number) {
    if (index < 0 || index > this.count) return false;

    const node = new DoublyNode(element);

    if (index !== this.count) {
      this.count += 1;
    }

    if (index === this.count) {
      this.push(element);
    } else if (index === 0) {
      if (this.head) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
        this.tail = node;
      }
    } else {
      const prev = this.getElementAt(index - 1)!;
      const current: DoublyNode<T> = prev.next!;
      node.next = current;
      prev.next = node;
      node.prev = prev;
      current.prev = node;
    }
    return true;
  }

  /** 从链表的特定位置移除一个元素 */
  public removeAt(index: number) {
    if (index < 0 || index >= this.count) return undefined;

    let current = this.head!;
    if (index === 0) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = undefined;
      } else {
        this.tail = undefined;
      }
    } else {
      const prev = this.getElementAt(index - 1)!;
      current = prev.next!;
      if (current.next) {
        current.next.prev = prev;
      }
      prev.next = current.next;
    }
    this.count -= 1;

    return current.element;
  }

  /** 获取链表最后一个元素 */
  public getTail() {
    return this.tail;
  }

  /** 清空链表全部元素 */
  public clear() {
    super.clear();
    this.tail = undefined;
  }
}

export default DoublyLinkedList;
