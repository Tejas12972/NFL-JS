const func = require('src/func.js');

class NFL {
    constructor() { 
        for (const key in func) {
            if (typeof func[key] === 'function') {
                this[key] = func[key].bind(this);
            }
        }
    }

}