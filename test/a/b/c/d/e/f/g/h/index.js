var relative = require('../../../../../../../../../index.js');

// print out: '../../../../../../../target.js'
console.log(relative.target); 
console.log(relative.targetPath + '/target.js');
// print target is here
require(relative.target)

