# relative.path
always return the relative path from the current working file😊

## What does that mean?
It means you will no longer waste your time figuring out how many levels of relative path, like this one: '../../../../../../../'. When you import the library and use the getter `.path`, the underearth library will figure out the exact relative path prefix of the current file, whose path relative to the configure file **path.json**.🙌 

Have fun~😊

## Requirement
Since the library use ES2015 `Proxy` as the dependency. You'd better use the library with the Node version &ge;6.

## Usage
- added the file **path.json** in your project root path, this file works as the configure file. The **path.json** file looks like this:
```sh
{
	"path": "src/lib",
	"anypath1": 'abc',
	"anypath2": 'abcdef',
	...
	"paths": ["src", "src/lib"]
}
```
- when you use it, you use the library in your file in this way:
```sh
import relative from 'relative.path';

// You must use the 'require'  instead of `import` to import related library
// Though the print out value is correct
console.log(relative.path); 	// # print: '../../../../' relative to the configure file
const lib = require(relative.path + 'src/lib/xxx');
//const lib = require(relative.paths[1] + 'xxx');

```
**Note**: 
- When you need config multiple paths in your projects, you should add another param `paths` in **path.json** to switch to `array` Mode. In this case, **you should not add any outermost key with the prefix of type Number in path.json file**, like `123abc`.
- When you omit the file **path.json**，the default path is your **CWD**, i.e. the root path of your project 
- You must use the `require` instead of `import` to import your usage library, though the print out value is correct


## Dependencies
- [path.relative(from, to)](https://nodejs.org/api/path.html#path_path_relative_from_to)
- [ES2015 Proxy](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect)

