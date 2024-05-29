describe('Generic with default parameter', () => {
  class GenericDefault<T = string> {
    private value?: T;
    setValue(value: T) {
      this.value = value;
    }
    getValue(): T | undefined {
      return this.value;
    }
  }

  it('should have default parameter', () => {
    const genericDefault = new GenericDefault();
    genericDefault.setValue('Felix');
    expect(genericDefault.getValue()?.toUpperCase()).toBe('FELIX');
  });
});
