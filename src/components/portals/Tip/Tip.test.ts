import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Tip', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Tip')).toBe(true);
  });
});