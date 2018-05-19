module.exports = name => {
    if (typeof name !== 'string'){
        return null;
    }
    return 'Hello ' + name;
};

// For the love of God, Github, please merge these changes.