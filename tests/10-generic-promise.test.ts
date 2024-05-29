describe('Generic promise', () => {
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(
        () => (value === 'Felix' ? resolve('Success') : reject('Failed')),
        1000,
      );
    });
  }

  it('should support generic promise', async () => {
    // when success, the Promise will return a 'string'
    const successResult = await fetchData('Felix');
    expect(successResult).toBe('Success');

    // need to use try catch because 'reject' will throw an error
    try {
      await fetchData('nobody else');
    } catch (error) {
      expect(error).toBe('Failed');
    }
  });
});
