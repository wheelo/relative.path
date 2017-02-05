# relative.path
always return the relative path from the current working file😊

## What does that mean?
It means you will no longer waste your time figuring out how many levels of relative path, like this one: '../../../../../../../'. When you import the library and use the getter `.path`, the underearth library will figure out the exact relative path of the current file, whose path is relative to the configure file **path.json**.

## Requirement
Since `Proxy` is one advanced feature in ES2016. No flag is required for Node.js `v6.*`; use `node --harmony_proxies` flag for `v5.*` and `v4.*`.

## Usage
- added the file **path.json** in your project root path, this file works as the configure file. The **path.json** file looks like this:
```sh
{
	"rootPath": "src/lib",
	"paths": ["a", "b"]
}
```
- when you use it, you use the library in your file in this way:
```sh
import relative from 'relative.path';

// You must use the 'require' to import related library, though the print out value is correct
// console.log(relative.path); 	// # print: '../../../../' relative to the configure file
const lib = require(relative.path + 'src/lib/xxx');

```
**Note**: 
- You may need the configure of multiple paths in some projects, in these cases you should add another param `paths` in **path.json** to switch to `group` Mode
- When you omit the file **path.json**，the default path is your **CWD**, i.e. the root path of your project 
- You must use the `require` instead of `import` to import your usage library, though the print out value is correct


## Dependencies
- [path.relative(from, to)](https://nodejs.org/api/path.html#path_path_relative_from_to)
- [ES2015 Proxy](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect)

