describe('generic function', () => {
  it('should support generic data type', () => {
    function create<T>(data: T): T {
      return data;
    }

    expect(create('Felix')).toBe('Felix');
    expect(create(123)).toBe(123);
  });
});
