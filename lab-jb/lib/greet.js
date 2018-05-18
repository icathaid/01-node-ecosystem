module.exports = subject => {

  if(typeof subject !== 'string') {
    return null;
  }
  return `Hello, ${subject}`;
};