import React, { useState } from 'react';
import { 
  enhanceClarity, 
  enhanceToPremium, 
  checkAccessibility, 
  generatePalette 
} from 'premium-color-enhancer';

// Example 1: Enhanced Button Component
function EnhancedButton({ color, children }) {
  const enhancedColor = enhanceToPremium(color);
  
  return (
    <button
      style={{
        backgroundColor: enhancedColor,
        color: '#ffffff',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </button>
  );
}

// Example 2: Color Picker with Accessibility Check
function AccessibleColorPicker() {
  const [foreground, setForeground] = useState('#3498db');
  const [background, setBackground] = useState('#ffffff');
  
  const enhancedFg = enhanceClarity(foreground);
  const accessibilityResult = checkAccessibility(enhancedFg, background, 'AA', 'normal');
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Accessible Color Picker</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Foreground Color:
          <input 
            type="color" 
            value={foreground} 
            onChange={(e) => setForeground(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Background Color:
          <input 
            type="color" 
            value={background} 
            onChange={(e) => setBackground(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      
      <div 
        style={{ 
          backgroundColor: background, 
          color: enhancedFg, 
          padding: '40px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}
      >
        <h3>Sample Text</h3>
        <p>This is how your text will look with the selected colors.</p>
      </div>
      
      <div style={{ 
        padding: '15px', 
        backgroundColor: accessibilityResult.passes ? '#d4edda' : '#f8d7da',
        border: `1px solid ${accessibilityResult.passes ? '#c3e6cb' : '#f5c6cb'}`,
        borderRadius: '8px'
      }}>
        <strong>Accessibility Check:</strong>
        <p>Contrast Ratio: {accessibilityResult.ratio}:1</p>
        <p>WCAG {accessibilityResult.level} {accessibilityResult.size}: {accessibilityResult.passes ? 'PASS ✓' : 'FAIL ✗'}</p>
      </div>
    </div>
  );
}

// Example 3: Color Palette Generator
function PaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#3498db');
  const [paletteType, setPaletteType] = useState('shades');
  
  const palette = generatePalette(baseColor, { steps: 9, type: paletteType });
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Color Palette Generator</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Base Color:
          <input 
            type="color" 
            value={baseColor} 
            onChange={(e) => setBaseColor(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Palette Type:
          <select 
            value={paletteType} 
            onChange={(e) => setPaletteType(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="shades">Shades</option>
            <option value="tints">Tints</option>
            <option value="tones">Tones</option>
            <option value="complementary">Complementary</option>
          </select>
        </label>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {palette.map((color, index) => (
          <div 
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <span style={{ 
              fontSize: '12px', 
              fontWeight: 'bold',
              color: index < 4 ? '#ffffff' : '#000000',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
              {color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Example 4: Design System Showcase
function DesignSystemShowcase() {
  const colors = {
    primary: enhanceToPremium('#3498db', 'blue'),
    success: enhanceToPremium('#2ecc71', 'green'),
    danger: enhanceToPremium('#e74c3c', 'red'),
    warning: enhanceToPremium('#f39c12', 'orange'),
    info: enhanceToPremium('#9b59b6', 'purple')
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Premium Design System</h2>
      
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
        {Object.entries(colors).map(([name, color]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: color,
                borderRadius: '12px',
                marginBottom: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
            <div style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{name}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{color}</div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Button Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {Object.entries(colors).map(([name, color]) => (
            <EnhancedButton key={name} color={color}>
              {name.charAt(0).toUpperCase() + name.slice(1)} Button
            </EnhancedButton>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <header style={{ 
        backgroundColor: '#2c3e50', 
        color: '#ffffff', 
        padding: '30px',
        textAlign: 'center'
      }}>
        <h1>Premium Color Enhancer Examples</h1>
        <p>Enhance colors to make them clearer, more premium, and accessible</p>
      </header>
      
      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <DesignSystemShowcase />
        <hr style={{ margin: '40px 0' }} />
        <AccessibleColorPicker />
        <hr style={{ margin: '40px 0' }} />
        <PaletteGenerator />
      </main>
    </div>
  );
}
