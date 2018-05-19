function Greet(name){
    
};

Greet.prototype.greet = function() {
    if(typeof name !== 'string'){
        return null;
    }
    return 'Hello ${name}';
};

module.exports = Greet.name;

