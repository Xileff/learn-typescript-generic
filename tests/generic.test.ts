describe('generic', () => {
  class GenericData<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    getValue(): T {
      return this.value;
    }

    setValue(value: T) {
      this.value = value;
    }
  }

  it('should support multiple data type', () => {
    const dataNumber = new GenericData<number>(123);
    dataNumber.value = 100; //works
    // dataNumber.value = 'felix'; // prevented
    expect(dataNumber.value).toBe(100);

    const dataString = new GenericData<string>('Felix');
    dataString.value = 'Xilef'; // works
    // dataString.value = 123; // prevented
    expect(dataString.value.toUpperCase()).toBe('XILEF');
  });

  it('should support generic data type', () => {
    function create<T>(data: T): T {
      return data;
    }

    expect(create('Felix')).toBe('Felix');
    expect(create(123)).toBe(123);
  });

  it('should be able to get and set', () => {
    const dataGeneric = new GenericData<string>('Felix');
    expect(dataGeneric.getValue()).toBe('Felix');
    dataGeneric.setValue('Xilef');
    expect(dataGeneric.getValue()).toBe('Xilef');
  });

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
