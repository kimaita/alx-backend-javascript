export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const bufInt8View = new DataView(buffer);
  try {
    bufInt8View.setInt8(position, value);
  } catch (error) {
    if (error instanceof RangeError) {
      throw new Error('Position outside range');
    }
  }
  return bufInt8View;
}
