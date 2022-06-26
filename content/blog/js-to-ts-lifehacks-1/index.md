---
title: Moving from Javascript to Typescript — Lifehacks #1
date: '2022-06-27'
description: 'Curated list of lifehacks when moving js to js'
---


I want to share with you some potentially useful hacks and solutions I curated on the way of migrating our Javascript services to Typescript

Mixed .js and .ts files
-----------------------

After you probably added `tsconfig.json`to your project root your project will start with having mixed .ts and .js files, so support this combination makes sure you have these fields added:

```
"allowJs": true,    
"esModuleInterop": true
```

Supporting globals
------------------

In your javascript codebase, not very rare that you’d find some usage of variables that were never defined in a file, and you’ll most likely get TSERROR of this variable is not defined. So to let the typescript transpiler know that these variables exists and it must “trust” us we can add a file somewhere in our source files called for example `globals.d.ts` containing:

```
export declare global {    
 var logger: any;    
 var models: any    
}    
    
export declare namespace NodeJS {    
  interface Global {    
  logger: any;    
  models: any    
  }    
}
```

Importing .js file from .ts file
--------------------------------

When trying to import Javascript file say, `example.js,` from a Typescript file, it's not trivial that this combination will work out of the box.  
One option to do that is to use regular old node imports:  
`const example = require('./example')  
`And that will absolutely work!  
But let's say we want our code to be clean and abide by Typescript standards and use export/import style like this:  
`import example from “[e](http://twitter.com/giftwizard/db-models)xample”`  
Unfortunately, this surprisingly wouldn’t work would you believe ?  
What happens, and I’ll save you the annoying research, is that this code is transpiled to this:  
`const example = require('example').default`  
and since `example.js` is obviously written in pure Javascript, it was transpiled, and therefore no`{default: MODULE}` wrapper is generated in the output file `example.js` .

What we can do to solve this?  
`import * as Example from “[e](http://twitter.com/giftwizard/db-models)xample”;`  
This syntax bypasses the expected `require('example').default` and just wraps everything the module exports with the `Example` object.

ts-node
-------

While you’re writing node typescript code you might want to run your project directly in typescript and not run `tsc` and then run the resulting `.js` file.  
`ts-node` is doing just that! you can run your say, `index.ts` , directly with  
`ts-node index.ts` . You can also just run the ts-node command and use its Typescript REPL which is very useful to test stuff.  
One little caveat, If you want ts-node to use the closest `tsconfig.json` which is crucial since some config will fit perfectly for your project but ts-node default config might throw some errors which could and will get you confused. So make sure you add this to your `tsconfig.json` file:

```
"ts-node": {  
  "files": true  
}
```
                        