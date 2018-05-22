'use strict';
module.exports = {
  summerator: (a, b) => {
    if(isNaN(a)){
      return null;
    }
    if(isNaN(b)){
      return null;
    }
    if(a === null || b === null){
      return null;
    }
    return a + b;
  },
  subtractifier: (a, b) => {
    if(isNaN(a)){
      return null;
    }
    if(isNaN(b)){
      return null;
    }
    if(a === undefined || b === undefined){
      return null;
    }
    if(a === null || b === null){
      return null;
    }
    return a - b;
  },
};