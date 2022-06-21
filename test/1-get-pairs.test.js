import { indent } from './test-utils.js';
import { getPairs } from '../src/1-get-pairs.js';

const numArray = [7, 5, 2, 8, 1, 3];
const numArrayDesc = indent(`numArray = ${JSON.stringify(numArray)};`, 4);
describe(`getPairs(numArray, target);\n${numArrayDesc}\n `, () => {

  test('getPairs(numArray, 1) debe ser igual a []', () => {
    const pairs1 = getPairs(numArray, 1);
    expect(pairs1).toEqual([]);
  });

  test('getPairs(numArray, 3) debe ser igual a [[2,1]]', () => {
    const pairs3 = getPairs(numArray, 3);
    expect(pairs3).toEqual([[2, 1]]);
  });

  test('getPairs(numArray, 4) debe ser igual a [[1,3]]', () => {
    const pairs4 = getPairs(numArray, 4);
    expect(pairs4).toEqual([[1, 3]]);
  });

  test('getPairs(numArray, 8) debe ser igual a [[7,1], [5,3]]', () => {
    const pairs8 = getPairs(numArray, 8);
    expect(Array.isArray(pairs8)).toBe(true);
    expect(pairs8).toHaveLength(2);
    expect(pairs8).toContainEqual([7, 1]);
    expect(pairs8).toContainEqual([5 ,3]);
  });
});
