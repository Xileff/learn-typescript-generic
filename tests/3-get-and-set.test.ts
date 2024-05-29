describe('Generic get and set', () => {
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

  it('should be able to get and set', () => {
    const dataGeneric = new GenericData<string>('Felix');
    expect(dataGeneric.getValue()).toBe('Felix');
    dataGeneric.setValue('Xilef');
    expect(dataGeneric.getValue()).toBe('Xilef');
  });
});
