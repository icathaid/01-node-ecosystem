function Greet(name){
    if(typeof name !== 'string'){
        return null;
    }
    return 'Hello ${name}';
};

Greet.prototype.greet = function() {
    
};

module.exports = Greet.name;

