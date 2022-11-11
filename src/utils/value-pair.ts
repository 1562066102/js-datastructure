class ValuePair<K, V> {
  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  public key: K;

  public value: V;

  public toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export default ValuePair;
