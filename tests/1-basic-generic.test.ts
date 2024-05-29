describe('generic', () => {
  class GenericData<T> {
    value: T;
    constructor(value: T) {
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
});
