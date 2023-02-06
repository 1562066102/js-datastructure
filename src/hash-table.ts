import {defaultToString, ValuePair} from './utils';

/** HashTable（HashMap）
 * @description 它是 Dictionary 类的一种散列表实现方式
 * 其中散列算法的作用是尽可能快地在数据结构中找到一个值
 */
class HashTable<K, V> {
  constructor(toStringFn = defaultToString, max = 1000) {
    this.toStringFn = toStringFn;
    this.max = max;
  }

  private table: Record<string, ValuePair<K, V>> = {};

  /** max指表容器最大值，也就是整个散列表的存储范围是0~max */
  private max = 1000;

  private toStringFn = defaultToString;

  // private loseloseHashCode(key: K) {
  //   if (typeof key === 'number') return key;

  //   const tableKey = this.toStringFn(key);

  //   const hash = tableKey.split('').reduce((str, _, i) => {
  //     return str + tableKey.charCodeAt(i);
  //   }, 0);

  //   return hash % this.max;
  // }

  // 社区相对推崇的散列函数之一
  private djb2HashCode(key: K) {
    if (typeof key === 'number') return key;

    const tableKey = this.toStringFn(key);

    const hash = tableKey.split('').reduce((str, _, i) => {
      return str * 33 + tableKey.charCodeAt(i);
    }, 5381);

    return hash % this.max;
  }

  /** 根据键值获取散列码 */
  public hashCode(key: K) {
    return this.djb2HashCode(key);
  }

  /** 向散列表增加一个新的项（也能更新散列表） */
  public put(key: K, value: V) {
    const position = this.hashCode(key);
    this.table[position] = new ValuePair(key, value);
    return true;
  }

  /** 返回根据键值检索到的特定的值 */
  public get(key: K) {
    const position = this.hashCode(key);
    return this.table[position]?.value;
  }

  /** 根据键值从散列表中移除值 */
  public remove(key: K) {
    const position = this.hashCode(key);

    if (!this.table[position]) return false;

    delete this.table[position];
    return true;
  }

  /** 返回整个散列表 */
  public getTable() {
    return this.table;
  }

  /** 清空散列表全部数据 */
  public clear() {
    this.table = {};
  }

  /** 返回散列表所包含值的数量 */
  public size() {
    return Object.keys(this.table).length;
  }

  /** 判断字典里是否没有数据 */
  public isEmpty() {
    return this.size() === 0;
  }

  /** 返回表示整个字典的字符串 */
  public toString() {
    if (this.isEmpty()) return '';

    return Object.values(this.table).reduce((str, item) => {
      if (!str) return item.toString();

      return `${str},${item.toString()}`;
    }, '');
  }
}

export default HashTable;
