/** 双端队列
 * @description 双端队列（deque，或称 double-ended queue）是一种允许
 * 同时从前端和后端添加和移除元素的特殊队列
 */
class Deque<T> {
  private count = 0;

  private index = 0;

  private list: Record<string, T> = {};

  /** 在队列前端添加新的元素 */
  public addFront(item: T) {
    if (this.isEmpty()) {
      this.addBack(item);
      return;
    }

    if (this.index > 0) {
      this.index -= 1;
      this.list[this.index] = item;
      return;
    }

    for (let i = this.count; i > 0; i--) {
      this.list[i] = this.list[i - 1];
    }
    this.count += 1;
    this.list[0] = item;
  }

  /** 在队列后端添加新的元素 */
  public addBack(item: T) {
    this.list[this.count] = item;
    this.count += 1;
  }

  /** 从队列前端移除第一个元素，并返回该元素 */
  public removeFront() {
    if (this.isEmpty()) return undefined;

    const item = this.list[this.index];
    delete this.list[this.index];
    this.index += 1;
    return item;
  }

  /** 从队列后端移除第一个元素，并返回该元素 */
  public removeBack() {
    if (this.isEmpty()) return undefined;

    this.count -= 1;
    const item = this.list[this.count];
    delete this.list[this.count];
    return item;
  }

  /** 返回队列前端第一个元素，不做任何修改 */
  public peekFront() {
    if (this.isEmpty()) return undefined;

    return this.list[this.index];
  }

  /** 返回队列后端第一元素，不做任何修改 */
  public peekBack() {
    if (this.isEmpty()) return undefined;

    return this.list[this.count - 1];
  }

  /** 返回队列里的元素个数 */
  public size() {
    return this.count - this.index;
  }

  /** 判断队列里是否没有任何元素 */
  public isEmpty() {
    return this.size() === 0;
  }

  /** 清空队列 */
  public clear() {
    this.list = {};
    this.count = 0;
    this.index = 0;
  }

  /** 返回队列的字符串表示形式 */
  public toString() {
    if (this.isEmpty()) return '';

    let str = `${this.list[this.index]}`;
    for (let i = this.index + 1; i < this.count; i++) {
      str = `${str},${this.list[i]}`;
    }

    return str;
  }
}

export default Deque;
