function generateId(length) {
  var chars = '0123456789'.split('');

  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }

  var str = '';
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return Number(str);
}

export default generateId;

export { generateId };
