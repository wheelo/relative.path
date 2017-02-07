// author: wheelo(github.com/wheelo)
// date: 2017.2.6

'use strict'

const path = require('path');


function ObjProxy() {
    return new Proxy({}, handler);
}


const handler = {
    get: function getter(target, key) {
        let relativePath = '';
        let pathContent = readCWDFile('path.json');

        if (key === '__esModule' /*|| !(key in target) */) {
            return false;
        }
        
        if (key === 'paths') {
            return ObjProxy();
        } 
        else if (!isNaN(parseInt(key))) {
            if (pathContent !== '') {
                relativePath = '/' + pathContent.paths[key];
            } else {
                relativePath = '';
            }
        }
        else {     
            if (pathContent !== '') {
                relativePath = '/' + pathContent[key];
            } else {
                relativePath = '';
            }

        }

        let rootPath = path.resolve(process.cwd()) + relativePath;

        const relative = path.relative(module.parent.filename, rootPath);
        delete require.cache[__filename];
        // const lastIndex = relative.lastIndexOf('./');
        // relative.slice(3, lastIndex + 2);
        return relative.slice(3);
    }

};


let cachedPath = {};
function readCWDFile(file = '') {
    try {
        if(!cachedPath[file]) {
            cachedPath[file] = require(path.resolve(process.cwd(), file));
        }
    } catch (error) {
        cachedPath[file] = '';
    }
  
    return cachedPath[file];
}



module.exports = ObjProxy();