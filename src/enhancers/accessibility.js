import { hexToRgb } from '../utils/colorConvert.js';
import { WCAG_RATIOS } from '../constants.js';

export function getContrastRatio(color1, color2) {
  const getLuminance = (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(val => {
      val /= 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

export function checkAccessibility(foreground, background, level = 'AA', size = 'normal') {
  const ratio = getContrastRatio(foreground, background);
  const key = `${level}_${size.toUpperCase()}`;
  const required = WCAG_RATIOS[key];

  return {
    ratio: ratio.toFixed(2),
    required: required,
    passes: ratio >= required,
    level,
    size
  };
}
