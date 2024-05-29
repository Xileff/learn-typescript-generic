describe('optional generic', () => {
  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }

  it('should support optional generic type', () => {
    const entry = new Entry(1, 'Felix'); // can autodetect if defined in constructor
    expect(typeof entry.key).toBe('number');
    expect(typeof entry.value).toBe('string');
  });
});
