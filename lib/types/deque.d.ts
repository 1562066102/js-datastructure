/** 双端队列
 * @description 双端队列（deque，或称 double-ended queue）是一种允许
 * 同时从前端和后端添加和移除元素的特殊队列
 */
declare class Deque<T> {
    private count;
    private index;
    private list;
    /** 在队列前端添加新的元素 */
    addFront(item: T): void;
    /** 在队列后端添加新的元素 */
    addBack(item: T): void;
    /** 从队列前端移除第一个元素，并返回该元素 */
    removeFront(): T | undefined;
    /** 从队列后端移除第一个元素，并返回该元素 */
    removeBack(): T | undefined;
    /** 返回队列前端第一个元素，不做任何修改 */
    peekFront(): T | undefined;
    /** 返回队列后端第一元素，不做任何修改 */
    peekBack(): T | undefined;
    /** 返回队列里的元素个数 */
    size(): number;
    /** 判断队列里是否没有任何元素 */
    isEmpty(): boolean;
    /** 清空队列 */
    clear(): void;
    /** 返回队列的字符串表示形式 */
    toString(): string;
}
export default Deque;
