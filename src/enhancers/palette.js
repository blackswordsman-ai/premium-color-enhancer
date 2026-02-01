import { hexToRgb, rgbToHsl, hslToRgb, rgbToHex } from '../utils/colorConvert.js';

export function generatePalette(baseColor, options = {}) {
  const { steps = 5, type = 'shades' } = options;
  const rgb = hexToRgb(baseColor);
  if (!rgb) throw new Error('Invalid color format');

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const palette = [];

  for (let i = 0; i < steps; i++) {
    let newHsl = { ...hsl };
    
    switch(type) {
      case 'shades':
        newHsl.l = hsl.l * (1 - (i / steps) * 0.8);
        break;
      case 'tints':
        newHsl.l = hsl.l + (100 - hsl.l) * (i / steps);
        break;
      case 'tones':
        newHsl.s = hsl.s * (1 - (i / steps) * 0.8);
        break;
      case 'complementary':
        newHsl.h = (hsl.h + (i * 360 / steps)) % 360;
        break;
    }

    const rgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    palette.push(rgbToHex(rgb.r, rgb.g, rgb.b));
  }

  return palette;
}
