bem-environ
===========

## Usage

// TODO: describe all of the project's features

Install it with `npm`

```
› npm install bem-environ
```

Update your project's `make.js` to extend common build process provided
by [bem-tools](http://github.com/bem/bem-tools)

```javascript

// make.js

// extend common build process with `bem-environ`'s nodes
require('bem-environ/lib/nodes');

MAKE.decl('Arch', {

  // ...

});
```
