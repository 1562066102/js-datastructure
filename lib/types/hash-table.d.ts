import { ValuePair } from './utils';
/** HashTable（HashMap）
 * @description 它是 Dictionary 类的一种散列表实现方式
 * 其中散列算法的作用是尽可能快地在数据结构中找到一个值
 */
declare class HashTable<K, V> {
    constructor(toStringFn?: (value: unknown) => string, max?: number);
    private table;
    /** max指表容器最大值，也就是整个散列表的存储范围是0~max */
    private max;
    private toStringFn;
    private loseloseHashCode;
    /** 根据键值获取散列码 */
    hashCode(key: K): number;
    /** 向散列表增加一个新的项（也能更新散列表） */
    put(key: K, value: V): boolean;
    /** 返回根据键值检索到的特定的值 */
    get(key: K): V;
    /** 根据键值从散列表中移除值 */
    remove(key: K): boolean;
    /** 返回整个散列表 */
    getTable(): Record<string, ValuePair<K, V>>;
    /** 清空散列表全部数据 */
    clear(): void;
    /** 返回散列表所包含值的数量 */
    size(): number;
    /** 判断字典里是否没有数据 */
    isEmpty(): boolean;
    /** 返回表示整个字典的字符串 */
    toString(): string;
}
export default HashTable;
