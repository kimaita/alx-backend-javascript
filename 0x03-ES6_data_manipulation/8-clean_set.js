export default function cleanSet(set, startString) {
  const str = [];
  if (startString === '') {
    return '';
  }
  for (const it of set.values()) {
    if (it.startsWith(startString)) {
      str.push(it.substring(startString.length));
    }
  }
  return str.join('-');
}
