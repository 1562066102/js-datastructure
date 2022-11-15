declare class ValuePair<K, V> {
    constructor(key: K, value: V);
    key: K;
    value: V;
    toString(): string;
}
export default ValuePair;
