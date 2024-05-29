describe('Generic collection', () => {
  it('should support array', () => {
    const array: Array<string> = new Array<string>();
    array.push('felix');
    array.push('vincent');
    array.push('renard');
  });

  it('should support set', () => {
    const set: Set<string> = new Set<string>();
    set.add('Felix');
    set.add('Vincent');
    set.add('Felix');
    expect(set.size).toStrictEqual(2);
    expect(set.has('Felix'));
    expect(set.has('Vincent'));
  });

  it('should support map', () => {
    const map: Map<string, string> = new Map<string, string>();
    map.set('Felix', 'Back-End');
    map.set('Vincent', 'Juragan Semen');
    map.set('Renard', 'Kang Es');
    console.info(map);
    expect(map.get('Felix')).toBe('Back-End');
    expect(map.get('Vincent')).toBe('Juragan Semen');
    expect(map.get('Renard')).toBe('Kang Es');
  });
});
