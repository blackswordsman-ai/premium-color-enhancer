// Basic usage examples for Premium Color Enhancer

import { 
  enhanceClarity, 
  enhanceToPremium, 
  checkAccessibility, 
  generatePalette,
  getContrastRatio 
} from 'premium-color-enhancer';

// Example 1: Enhance color clarity
console.log('=== Enhance Clarity ===');
const originalColor = '#3498db';
const clearColor = enhanceClarity(originalColor);
console.log(`Original: ${originalColor}`);
console.log(`Enhanced: ${clearColor}`);

// Example 2: Apply premium transformation
console.log('\n=== Premium Transformation ===');
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12'];
colors.forEach(color => {
  const premium = enhanceToPremium(color);
  console.log(`${color} → ${premium}`);
});

// Example 3: Check accessibility
console.log('\n=== Accessibility Check ===');
const foreground = '#000000';
const background = '#ffffff';
const accessibilityResult = checkAccessibility(foreground, background, 'AA', 'normal');
console.log(`Foreground: ${foreground}`);
console.log(`Background: ${background}`);
console.log(`Contrast Ratio: ${accessibilityResult.ratio}`);
console.log(`WCAG ${accessibilityResult.level} ${accessibilityResult.size}: ${accessibilityResult.passes ? 'PASS' : 'FAIL'}`);

// Example 4: Generate color palette
console.log('\n=== Color Palette Generation ===');
const baseColor = '#3498db';
const shades = generatePalette(baseColor, { steps: 5, type: 'shades' });
const tints = generatePalette(baseColor, { steps: 5, type: 'tints' });
console.log('Shades:', shades);
console.log('Tints:', tints);

// Example 5: Compare contrast ratios
console.log('\n=== Contrast Ratio Comparison ===');
const testColors = [
  ['#000000', '#ffffff'],
  ['#3498db', '#ffffff'],
  ['#e74c3c', '#ffffff'],
  ['#2ecc71', '#000000']
];

testColors.forEach(([color1, color2]) => {
  const ratio = getContrastRatio(color1, color2);
  console.log(`${color1} vs ${color2}: ${ratio.toFixed(2)}:1`);
});

// Example 6: Design system colors
console.log('\n=== Design System Colors ===');
const designSystem = {
  primary: enhanceToPremium('#3498db', 'blue'),
  success: enhanceToPremium('#2ecc71', 'green'),
  danger: enhanceToPremium('#e74c3c', 'red'),
  warning: enhanceToPremium('#f39c12', 'orange'),
  info: enhanceToPremium('#9b59b6', 'purple')
};

console.log('Design System:', designSystem);

// Check if all colors are accessible on white background
Object.entries(designSystem).forEach(([name, color]) => {
  const result = checkAccessibility(color, '#ffffff', 'AA', 'normal');
  console.log(`${name}: ${result.passes ? '✓' : '✗'} (${result.ratio}:1)`);
});
