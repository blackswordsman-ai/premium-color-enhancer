import { enhanceClarity } from './enhancers/clarity.js';
import { enhanceToPremium } from './enhancers/premium.js';
import { getContrastRatio, checkAccessibility } from './enhancers/accessibility.js';
import { generatePalette } from './enhancers/palette.js';
import { isValidHex } from './utils/validators.js';

export {
  enhanceClarity,
  enhanceToPremium,
  getContrastRatio,
  checkAccessibility,
  generatePalette,
  isValidHex
};

// Default export with all methods
export default {
  enhanceClarity,
  enhanceToPremium,
  getContrastRatio,
  checkAccessibility,
  generatePalette,
  isValidHex
};
