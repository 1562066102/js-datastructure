/** 栈
 * @description 栈是一种遵从后进先出（LIFO）原则的有序集合。
 * 新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。
 * 在栈里，新元素都靠近栈顶，旧元素都接近栈底。
 */
declare class Stack<T> {
    private list;
    /** 添加一个（或多个）新元素到栈顶 */
    push(...items: T[]): void;
    /** 移除栈顶的元素，同时返回被移除的元素 */
    pop(): T | undefined;
    /** 返回栈顶的元素，不做任何修改 */
    peek(): T;
    /** 返回栈里的元素个数 */
    size(): number;
    /** 判断栈里是否没有任何元素 */
    isEmpty(): boolean;
    /** 移除栈里的所有元素 */
    clear(): void;
    /** 返回栈的字符串表示形式 */
    toString(): string;
}
export default Stack;
