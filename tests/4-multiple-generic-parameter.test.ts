describe('multiple generic parameter', () => {
  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }

  class Triple<K, V, T> {
    constructor(public first: K, public second: V, public third: T) {}
  }

  it('should support multiple generic parameter', () => {
    const entry = new Entry<string, string>('React.js', 'Front-End');
    expect(entry.key).toBe('React.js');
    expect(entry.value).toBe('Front-End');

    const triple = new Triple<string, string, boolean>(
      'NestJS',
      'Back-End',
      true,
    );
    expect(triple.first).toBe('NestJS');
    expect(triple.second).toBe('Back-End');
    expect(triple.third).toBe(true);
  });
});
