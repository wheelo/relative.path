var relative = require('../../../../../../../../../index.js');

// print out: '../../../../../../../target.js'
console.log(relative.target); 

// print target is here
require(relative.target)

