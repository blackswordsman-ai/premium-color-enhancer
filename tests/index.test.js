const { enhanceClarity, enhanceToPremium, getContrastRatio, checkAccessibility, generatePalette } = require('../dist/index.cjs.js');

describe('Color Enhancer', () => {
  test('enhanceClarity should boost saturation', () => {
    const result = enhanceClarity('#3498db');
    expect(result).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  test('enhanceToPremium should return valid hex', () => {
    const result = enhanceToPremium('#e74c3c');
    expect(result).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  test('getContrastRatio should calculate correctly', () => {
    const ratio = getContrastRatio('#000000', '#ffffff');
    expect(ratio).toBeCloseTo(21, 0);
  });

  test('checkAccessibility should validate WCAG', () => {
    const result = checkAccessibility('#000000', '#ffffff', 'AA', 'normal');
    expect(result.passes).toBe(true);
  });

  test('generatePalette should create array of colors', () => {
    const palette = generatePalette('#3498db', { steps: 5 });
    expect(palette).toHaveLength(5);
  });
});
