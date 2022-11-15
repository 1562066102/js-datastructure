/** 队列
 * @description 队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。
 * 队列在尾部添加新元素，并从顶部移除元素。
 * 最新添加的元素必须排在队列的末尾。
 */
class Queue<T> {
  private count = 0;

  private index = 0;

  private list: Record<string, T> = {};

  /** 向队列尾部添加一个（或多个）新元素 */
  public enqueue(...items: T[]) {
    items.forEach(item => {
      this.list[this.count] = item;
      this.count += 1;
    });
  }

  /** 移除队列的第一个元素，同时返回被移除的元素 */
  public dequeue() {
    if (this.isEmpty()) return undefined;

    const item = this.list[this.index];
    delete this.list[this.index];
    this.index += 1;
    return item;
  }

  /** 返回队列中第一个元素，不做任何修改 */
  public peek() {
    if (this.isEmpty()) return undefined;

    return this.list[this.index];
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

export default Queue;
