import sortHeroesByHealth from "../heroesLive";
describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth(heroes);
    
    
    expect(result).toEqual(expected);
    
    
    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });

  test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('should handle single hero', () => {
    const singleHero = [{ name: 'маг', health: 100 }];
    expect(sortHeroesByHealth(singleHero)).toEqual(singleHero);
  });

  test('should handle equal health values', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
    ];
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual(heroes); 
  });
});