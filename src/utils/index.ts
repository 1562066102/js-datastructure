export * from './linked-list-node';

export {default as ValuePair} from './value-pair';

/** 默认元素相等性比较函数 */
export const defaultEquals = <T>(a: T, b: T) => a === b;

/** 默认转换字符串函数 */
export const defaultToString = (value: unknown) => {
  if (value === null) return 'NULL';

  if (value === undefined) return 'UNDEFINED';

  if (typeof value === 'string' || value instanceof String) return `${value}`;

  return value.toString();
};
