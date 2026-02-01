import { hexToRgb, rgbToHsl, hslToRgb, rgbToHex } from '../utils/colorConvert.js';
import { PREMIUM_PRESETS } from '../constants.js';

export function enhanceToPremium(color, preset = null) {
  const rgb = hexToRgb(color);
  if (!rgb) throw new Error('Invalid color format');

  let hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Determine preset based on color if not provided
  if (!preset) {
    if (hsl.h >= 200 && hsl.h <= 260) preset = 'blue';
    else if (hsl.h >= 80 && hsl.h <= 160) preset = 'green';
    else if ((hsl.h >= 0 && hsl.h <= 20) || hsl.h >= 340) preset = 'red';
    else if (hsl.h >= 260 && hsl.h <= 320) preset = 'purple';
    else preset = 'orange';
  }

  const config = PREMIUM_PRESETS[preset] || PREMIUM_PRESETS.blue;

  // Apply premium transformations
  hsl.h = (hsl.h + config.hueShift + 360) % 360;
  hsl.s = Math.min(100, hsl.s + config.saturationBoost);
  hsl.l = config.luminanceTarget * 100;

  const premium = hslToRgb(hsl.h, hsl.s, hsl.l);
  return rgbToHex(premium.r, premium.g, premium.b);
}
