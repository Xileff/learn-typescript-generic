describe('generic with no constructor', () => {
  class SimpleGeneric<T> {
    private value?: T;
    setValue(value: T) {
      this.value = value;
    }
    getValue(): T | undefined {
      return this.value;
    }
  }

  it('should state the generic data type', () => {
    const simpleGeneric = new SimpleGeneric(); // not really recommended
    simpleGeneric.setValue('Felix');
    expect(typeof simpleGeneric.getValue()).toBe('string');
  });
});
