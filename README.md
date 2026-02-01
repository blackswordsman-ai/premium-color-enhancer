# Premium Color Enhancer 🎨

A lightweight npm package that enhances colors to make them clearer, more premium, and accessible. Perfect for buttons, UI elements, and design systems.

## Features

✨ **Clarity Enhancement** - Boost color vibrancy and visibility  
🎯 **Premium Transformations** - Apply premium color presets  
♿ **Accessibility Checks** - WCAG contrast ratio validation  
🎨 **Palette Generation** - Create harmonious color palettes  
📦 **Zero Dependencies** - Lightweight and fast  
🔧 **Framework Agnostic** - Works with React, Vue, Angular, vanilla JS

## Installation

```bash
npm install premium-color-enhancer
```

## Quick Start

```javascript
import { enhanceClarity, enhanceToPremium, checkAccessibility } from 'premium-color-enhancer';

// Enhance color clarity
const clearColor = enhanceClarity('#3498db');
console.log(clearColor); // #3d9fe8

// Apply premium transformation
const premiumColor = enhanceToPremium('#e74c3c');
console.log(premiumColor); // #ed5a4f

// Check accessibility
const accessible = checkAccessibility('#000000', '#ffffff', 'AA', 'normal');
console.log(accessible.passes); // true
```

## API Reference

### `enhanceClarity(color, options)`

Enhances color clarity by boosting saturation and adjusting luminance.

**Parameters:**
- `color` (string): Hex color code
- `options` (object): Optional configuration
  - `saturationBoost` (number): Default 15
  - `contrastAdjustment` (number): Default 1.1
  - `minLuminance` (number): Default 0.2
  - `maxLuminance` (number): Default 0.8

**Example:**
```javascript
const enhanced = enhanceClarity('#3498db', {
  saturationBoost: 20,
  contrastAdjustment: 1.2
});
```

### `enhanceToPremium(color, preset)`

Applies premium color transformations.

**Parameters:**
- `color` (string): Hex color code
- `preset` (string): Optional - 'blue', 'green', 'red', 'purple', 'orange'

**Example:**
```javascript
const premiumBlue = enhanceToPremium('#3498db', 'blue');
const premiumGreen = enhanceToPremium('#2ecc71', 'green');
```

### `checkAccessibility(foreground, background, level, size)`

Checks WCAG contrast compliance.

**Parameters:**
- `foreground` (string): Foreground hex color
- `background` (string): Background hex color
- `level` (string): 'AA' or 'AAA'
- `size` (string): 'normal' or 'large'

**Returns:**
```javascript
{
  ratio: "21.00",
  required: 4.5,
  passes: true,
  level: "AA",
  size: "normal"
}
```

**Example:**
```javascript
const result = checkAccessibility('#000000', '#ffffff', 'AA', 'normal');
if (result.passes) {
  console.log('Color combination is accessible!');
}
```

### `getContrastRatio(color1, color2)`

Calculates the contrast ratio between two colors.

**Parameters:**
- `color1` (string): First hex color
- `color2` (string): Second hex color

**Returns:** Number (contrast ratio)

**Example:**
```javascript
const ratio = getContrastRatio('#000000', '#ffffff');
console.log(ratio); // 21
```

### `generatePalette(baseColor, options)`

Generates color palette from base color.

**Parameters:**
- `baseColor` (string): Base hex color
- `options` (object):
  - `steps` (number): Number of colors (default: 5)
  - `type` (string): 'shades', 'tints', 'tones', 'complementary' (default: 'shades')

**Example:**
```javascript
const shades = generatePalette('#3498db', { steps: 5, type: 'shades' });
const tints = generatePalette('#3498db', { steps: 5, type: 'tints' });
const complementary = generatePalette('#3498db', { steps: 5, type: 'complementary' });
```

### `isValidHex(hex)`

Validates hex color format.

**Parameters:**
- `hex` (string): Hex color code

**Returns:** Boolean

**Example:**
```javascript
isValidHex('#3498db'); // true
isValidHex('3498db');  // true
isValidHex('#xyz');    // false
```

## Usage Examples

### React Example

```jsx
import { enhanceToPremium } from 'premium-color-enhancer';

function Button() {
  const buttonColor = enhanceToPremium('#3498db', 'blue');
  
  return (
    <button style={{ backgroundColor: buttonColor }}>
      Click Me
    </button>
  );
}
```

### Vue Example

```vue
<script setup>
import { enhanceClarity } from 'premium-color-enhancer';
const buttonColor = enhanceClarity('#e74c3c');
</script>

<template>
  <button :style="{ backgroundColor: buttonColor }">
    Click Me
  </button>
</template>
```

### Vanilla JavaScript Example

```html
<script type="module">
  import { enhanceToPremium } from 'premium-color-enhancer';
  
  const button = document.querySelector('#myButton');
  button.style.backgroundColor = enhanceToPremium('#2ecc71');
</script>
```

### Design System Integration

```javascript
import { enhanceToPremium, checkAccessibility, generatePalette } from 'premium-color-enhancer';

// Create premium brand colors
const brandColors = {
  primary: enhanceToPremium('#3498db', 'blue'),
  success: enhanceToPremium('#2ecc71', 'green'),
  danger: enhanceToPremium('#e74c3c', 'red'),
  warning: enhanceToPremium('#f39c12', 'orange')
};

// Generate color scales
const primaryScale = generatePalette(brandColors.primary, { steps: 9, type: 'shades' });

// Validate accessibility
const isAccessible = checkAccessibility(brandColors.primary, '#ffffff', 'AA', 'normal');
console.log(`Primary color is ${isAccessible.passes ? 'accessible' : 'not accessible'}`);
```

## Browser Support

Works in all modern browsers that support ES6+:
- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 15+
- Node.js 12+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Your Name

## Links

- [GitHub Repository](https://github.com/yourusername/premium-color-enhancer)
- [npm Package](https://www.npmjs.com/package/premium-color-enhancer)
- [Report Issues](https://github.com/yourusername/premium-color-enhancer/issues)
