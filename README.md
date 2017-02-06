# relative.path
always return the relative path from the current working file😊

## What does that mean?
It means you will no longer waste your time figuring out how many levels of relative path, like this one: '../../../../../../../'. When you import the library and use the getter `.path`, the underearth library will figure out the exact relative path prefix of the current file, whose path relative to the configure file **path.json**.🙌 

Have fun~😊

## Requirement
Since the library uses ES2015 `Proxy` as the dependency. You'd better use the library with the Node version &ge;6.

## Usage
- Install the npm package use the command:
```sh
	>> npm i -S relative.path
```

- Add the file **path.json** in your project root path, this file works as the configure file. The **path.json** file looks like this:
```sh
{
	"path": "src/lib",
	"anypath1": 'abc',
	"anypath2": 'abcdef',
	...
	"paths": ["src", "src/lib"]
}
```

- Then, you should use the library in your js file this way:
```sh
import relative from 'relative.path';


// print: '../../../../' which relative to the 'path.json'
console.log(relative.path); 	
// You must use the 'require'  instead of 'import' to import related library
// Though, the print out value is correct 😂
const lib = require(relative.path + 'src/lib/xxx');
```
- **Multiple Paths Mode**

There are two choices you can opt in to denote the `Multiple Paths` Mode. Firstly, you can denote one random key in **path.json** and use the identical getter in corresponding js file. Secondly, you can also add another param `paths` to switch to the `array` Mode in the outermost level of the **path.json**. In the latter one case, you just append the wanted paths to the array of the key `paths`.
```sh
const libRandom = require(relative.randomPath + 'xxx');
const libArray = require(relative.paths[1] + 'xxx');
```
**Note**
- When you omit the file **path.json**，the default path is your **CWD**, i.e. the root path of your project 
- You must use the `require` instead of `import` to import the file in your current file, though the print out value is correct


## Dependencies
- [path.relative(from, to)](https://nodejs.org/api/path.html#path_path_relative_from_to)
- [ES2015 Proxy](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect)



