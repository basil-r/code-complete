export function calculateShapeArea(width, height, isTriangle) {
  if (isTriangle) return (width * height) / 2;

  return width * height;
}
