export function isValidHex(hex) {
  return /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

export function isValidRgb(r, g, b) {
  return [r, g, b].every(val => 
    typeof val === 'number' && val >= 0 && val <= 255
  );
}
