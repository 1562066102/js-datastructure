/** 队列
 * @description 队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。
 * 队列在尾部添加新元素，并从顶部移除元素。
 * 最新添加的元素必须排在队列的末尾。
 */
declare class Queue<T> {
    private count;
    private index;
    private list;
    /** 向队列尾部添加一个（或多个）新元素 */
    enqueue(...items: T[]): void;
    /** 移除队列的第一个元素，同时返回被移除的元素 */
    dequeue(): T | undefined;
    /** 返回队列中第一个元素，不做任何修改 */
    peek(): T | undefined;
    /** 返回队列里的元素个数 */
    size(): number;
    /** 判断队列里是否没有任何元素 */
    isEmpty(): boolean;
    /** 清空队列 */
    clear(): void;
    /** 返回队列的字符串表示形式 */
    toString(): string;
}
export default Queue;
