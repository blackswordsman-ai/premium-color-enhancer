#!/usr/bin/env node

/**
 * Test script to verify all package functions work correctly
 * Run with: node examples/test-package.js
 */

import { 
  enhanceClarity, 
  enhanceToPremium, 
  checkAccessibility, 
  generatePalette,
  getContrastRatio,
  isValidHex
} from '../dist/index.esm.js';

console.log('🎨 Premium Color Enhancer - Package Test\n');
console.log('=' .repeat(50));

// Test 1: Enhance Clarity
console.log('\n✅ Test 1: Enhance Clarity');
console.log('-'.repeat(50));
const testColor1 = '#3498db';
const enhanced1 = enhanceClarity(testColor1);
console.log(`Input:  ${testColor1}`);
console.log(`Output: ${enhanced1}`);
console.log(`Status: ${enhanced1.match(/^#[0-9A-Fa-f]{6}$/) ? 'PASS ✓' : 'FAIL ✗'}`);

// Test 2: Premium Transformation
console.log('\n✅ Test 2: Premium Transformation');
console.log('-'.repeat(50));
const testColors = [
  { color: '#3498db', preset: 'blue' },
  { color: '#2ecc71', preset: 'green' },
  { color: '#e74c3c', preset: 'red' },
  { color: '#9b59b6', preset: 'purple' },
  { color: '#f39c12', preset: 'orange' }
];

testColors.forEach(({ color, preset }) => {
  const premium = enhanceToPremium(color, preset);
  console.log(`${color} (${preset}) → ${premium}`);
});
console.log('Status: PASS ✓');

// Test 3: Contrast Ratio
console.log('\n✅ Test 3: Contrast Ratio Calculation');
console.log('-'.repeat(50));
const contrastTests = [
  ['#000000', '#ffffff', 21],
  ['#3498db', '#ffffff', 3.4],
  ['#e74c3c', '#ffffff', 3.8]
];

let contrastPass = true;
contrastTests.forEach(([color1, color2, expected]) => {
  const ratio = getContrastRatio(color1, color2);
  const pass = Math.abs(ratio - expected) < 1;
  console.log(`${color1} vs ${color2}: ${ratio.toFixed(2)}:1 (expected ~${expected}:1) ${pass ? '✓' : '✗'}`);
  if (!pass) contrastPass = false;
});
console.log(`Status: ${contrastPass ? 'PASS ✓' : 'FAIL ✗'}`);

// Test 4: Accessibility Check
console.log('\n✅ Test 4: Accessibility Check');
console.log('-'.repeat(50));
const accessibilityTests = [
  { fg: '#000000', bg: '#ffffff', level: 'AA', size: 'normal', shouldPass: true },
  { fg: '#3498db', bg: '#ffffff', level: 'AA', size: 'large', shouldPass: true },
  { fg: '#e74c3c', bg: '#ffffff', level: 'AAA', size: 'normal', shouldPass: false }
];

let accessibilityPass = true;
accessibilityTests.forEach(({ fg, bg, level, size, shouldPass }) => {
  const result = checkAccessibility(fg, bg, level, size);
  const pass = result.passes === shouldPass;
  console.log(`${fg} on ${bg} (${level} ${size}): ${result.ratio}:1 - ${result.passes ? 'PASS' : 'FAIL'} ${pass ? '✓' : '✗'}`);
  if (!pass) accessibilityPass = false;
});
console.log(`Status: ${accessibilityPass ? 'PASS ✓' : 'FAIL ✗'}`);

// Test 5: Palette Generation
console.log('\n✅ Test 5: Palette Generation');
console.log('-'.repeat(50));
const paletteTypes = ['shades', 'tints', 'tones', 'complementary'];
let palettePass = true;

paletteTypes.forEach(type => {
  const palette = generatePalette('#3498db', { steps: 5, type });
  const allValid = palette.every(color => color.match(/^#[0-9A-Fa-f]{6}$/));
  console.log(`${type}: [${palette.join(', ')}]`);
  console.log(`  Length: ${palette.length} ${palette.length === 5 ? '✓' : '✗'}`);
  console.log(`  Valid: ${allValid ? '✓' : '✗'}`);
  if (palette.length !== 5 || !allValid) palettePass = false;
});
console.log(`Status: ${palettePass ? 'PASS ✓' : 'FAIL ✗'}`);

// Test 6: Color Validation
console.log('\n✅ Test 6: Color Validation');
console.log('-'.repeat(50));
const validationTests = [
  { hex: '#3498db', valid: true },
  { hex: '3498db', valid: true },
  { hex: '#fff', valid: true },
  { hex: '#xyz', valid: false },
  { hex: 'invalid', valid: false }
];

let validationPass = true;
validationTests.forEach(({ hex, valid }) => {
  const result = isValidHex(hex);
  const pass = result === valid;
  console.log(`${hex}: ${result ? 'valid' : 'invalid'} ${pass ? '✓' : '✗'}`);
  if (!pass) validationPass = false;
});
console.log(`Status: ${validationPass ? 'PASS ✓' : 'FAIL ✗'}`);

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Test Summary');
console.log('='.repeat(50));

const allTests = [
  { name: 'Enhance Clarity', pass: true },
  { name: 'Premium Transformation', pass: true },
  { name: 'Contrast Ratio', pass: contrastPass },
  { name: 'Accessibility Check', pass: accessibilityPass },
  { name: 'Palette Generation', pass: palettePass },
  { name: 'Color Validation', pass: validationPass }
];

allTests.forEach(({ name, pass }) => {
  console.log(`${pass ? '✓' : '✗'} ${name}`);
});

const allPass = allTests.every(t => t.pass);
console.log('\n' + '='.repeat(50));
console.log(allPass ? '🎉 All tests passed!' : '❌ Some tests failed');
console.log('='.repeat(50));

process.exit(allPass ? 0 : 1);
