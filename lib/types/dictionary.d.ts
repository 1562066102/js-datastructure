import { ValuePair } from './utils';
/** 字典
 * @description 在字典中，存储的是[键，值]对，其中键名是用来查询特定元素的。
 * 字典和集合很相似，集合以[值，值]的形式存储元素，字典则是以[键，值]的形式来存储元素。
 * 字典也称作映射、符号表或关联数组。
 */
declare class Dictionary<K, V> {
    constructor(toStringFn?: (value: unknown) => string);
    private table;
    private toStringFn;
    /** 添加新元素。若key存在则覆盖旧值 */
    set(key: K, value: V): void;
    /** 通过键值查找对应的数值 */
    get(key: K): V;
    /** 是否存在该键值 */
    hasKey(key: K): boolean;
    /** 通过键值移除对应的数据值 */
    remove(key: K): boolean;
    /** 清空字典全部数据 */
    clear(): void;
    /** 返回字典所包含值的数量 */
    size(): number;
    /** 判断字典里是否没有数据 */
    isEmpty(): boolean;
    /** 将字典所包含的所有键名以数组形式返回 */
    keys(): K[];
    /** 将字典所包含的所有数值以数组形式返回 */
    values(): V[];
    /** 将字典中所有键值对返回 */
    keyValues(): ValuePair<K, V>[];
    /** 迭代字典中所有的键值对。callback有两个参数：key和value。该方法可以在回调函数返回 false 时被中止 */
    forEach(callback: (key?: K, value?: V) => unknown): void;
    /** 返回表示整个字典的字符串 */
    toString(): string;
}
export default Dictionary;
