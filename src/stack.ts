/** 栈
 * @description 栈是一种遵从后进先出（LIFO）原则的有序集合。
 * 新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。
 * 在栈里，新元素都靠近栈顶，旧元素都接近栈底。
 */
class Stack<T> {
  private list: T[] = [];

  /** 添加一个（或多个）新元素到栈顶 */
  public push(...items: T[]) {
    items.forEach(item => {
      this.list.push(item);
    });
  }

  /** 移除栈顶的元素，同时返回被移除的元素 */
  public pop() {
    return this.list.pop();
  }

  /** 返回栈顶的元素，不做任何修改 */
  public peek() {
    return this.list[this.size() - 1];
  }

  /** 返回栈里的元素个数 */
  public size() {
    return this.list.length;
  }

  /** 判断栈里是否没有任何元素 */
  public isEmpty() {
    return this.size() === 0;
  }

  /** 移除栈里的所有元素 */
  public clear() {
    this.list = [];
  }

  /** 返回栈的字符串表示形式 */
  public toString() {
    return this.list.toString();
  }
}

export default Stack;
