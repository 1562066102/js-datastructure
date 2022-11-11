import {defaultToString, ValuePair} from './utils';

/** 字典
 * @description 在字典中，存储的是[键，值]对，其中键名是用来查询特定元素的。
 * 字典和集合很相似，集合以[值，值]的形式存储元素，字典则是以[键，值]的形式来存储元素。
 * 字典也称作映射、符号表或关联数组。
 */
class Dictionary<K, V> {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn;
  }

  private table: Record<string, ValuePair<K, V>> = {};

  private toStringFn = defaultToString;

  /** 添加新元素。若key存在则覆盖旧值 */
  public set(key: K, value: V) {
    this.table[this.toStringFn(key)] = new ValuePair(key, value);
  }

  /** 通过键值查找对应的数值 */
  public get(key: K) {
    return this.table[this.toStringFn(key)]?.value;
  }

  /** 是否存在该键值 */
  public hasKey(key: K) {
    return !!this.table[this.toStringFn(key)];
  }

  /** 通过键值移除对应的数据值 */
  public remove(key: K) {
    if (this.hasKey(key)) {
      delete this.table[this.toStringFn(key)];
      return true;
    }
    return false;
  }

  /** 清空字典全部数据 */
  public clear() {
    this.table = {};
  }

  /** 返回字典所包含值的数量 */
  public size() {
    return Object.keys(this.table).length;
  }

  /** 判断字典里是否没有数据 */
  public isEmpty() {
    return this.size() === 0;
  }

  /** 将字典所包含的所有键名以数组形式返回 */
  public keys() {
    return this.keyValues().map(({key}) => key);
  }

  /** 将字典所包含的所有数值以数组形式返回 */
  public values() {
    return this.keyValues().map(({value}) => value);
  }

  /** 将字典中所有键值对返回 */
  public keyValues() {
    return Object.values(this.table);
  }

  /** 迭代字典中所有的键值对。callback有两个参数：key和value。该方法可以在回调函数返回 false 时被中止 */
  public forEach(callback: (key?: K, value?: V) => unknown) {
    for (const {key, value} of this.keyValues()) {
      if (callback(key, value) === false) {
        break;
      }
    }
  }

  /** 返回表示整个字典的字符串 */
  public toString() {
    if (this.isEmpty()) return '';

    return this.keyValues().reduce((str, item) => {
      if (!str) return item.toString();

      return `${str},${item.toString()}`;
    }, '');
  }
}

export default Dictionary;
