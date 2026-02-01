import { hexToRgb, rgbToHsl, hslToRgb, rgbToHex } from '../utils/colorConvert.js';

export function enhanceClarity(color, options = {}) {
  const { 
    saturationBoost = 15, 
    contrastAdjustment = 1.1,
    minLuminance = 0.2,
    maxLuminance = 0.8
  } = options;

  const rgb = hexToRgb(color);
  if (!rgb) throw new Error('Invalid color format');

  let hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Boost saturation for clarity
  hsl.s = Math.min(100, hsl.s + saturationBoost);

  // Adjust luminance for better visibility
  hsl.l = Math.max(minLuminance * 100, Math.min(maxLuminance * 100, hsl.l * contrastAdjustment));

  const enhanced = hslToRgb(hsl.h, hsl.s, hsl.l);
  return rgbToHex(enhanced.r, enhanced.g, enhanced.b);
}
