export * from './linked-list-node';
export { default as ValuePair } from './value-pair';
/** 默认元素相等性比较函数 */
export declare const defaultEquals: <T>(a: T, b: T) => boolean;
/** 默认转换字符串函数 */
export declare const defaultToString: (value: unknown) => string;
