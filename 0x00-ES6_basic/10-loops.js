export default function appendToEachArrayValue(array, appendString) {
  const appended = [];
  for (const item of array) {
    appended.push(appendString + item);
  }
  return appended;
}
