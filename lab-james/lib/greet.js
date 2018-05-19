module.exports = name => {
  if (typeof name !== 'string'){
    return null;
  }
  return 'Hello ' + name;
};