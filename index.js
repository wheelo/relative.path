'use strict'

var path = require('path')

const relative = new Proxy({}, {
    get: function getter(target, key) {
        if (key === '__esModule') {
            return false;
        }
        // cwd  toBase
        if (key === 'path') {
            let relativePath = '';
        	try {
    	        relativePath = '/' + require(path.resolve(process.cwd(), 'path.json')).rootPath;
    	    } catch(error) {
    	        relativePath = '';
    	    }
        	const rootPath = path.resolve(process.cwd()) + relativePath;
        	delete require.cache[__filename];
        	
            return path.relative(module.parent.filename, rootPath) + '/';
        }
       
    }
});


module.exports = relative;
//export default relative; 
