
# Getting to know you environment

In this section you are creating the NPM workspace. The goal is to understand and practise how you would get started. In the list that follows you will have the steps you can go through.
## Folder from scratch 

* Run `npm init` from "BreakOut1/WorkFolder" folder 
* install eslint as "dev dependency" `npm install eslint --save-dev`
* add the following property in `package.json``
```json

{
    ...
    "type":"module"
    ...
}
```

## Add some helpers
* Install Prettier and Eslint extesions in VSCode
* Check(in VSCode) that the extension pick up the config files `.eslintrc.json` and `.prettierrc`, you may have to open VSCode in the correct folder. 
* Check the settings and tweak it to your preference 
* Create a new file called `index.js` and copy the unformatted code from ``unformatted.txt`into this file
* Save the file and make sure prettier is formatting the file.
## Working with the environment
* Install the `dotenv` package from npm 
* create a file called `.env` and add this line: `foo=somevar`
* In your `index.js` add the following code:
```js
import dotenv from "dotenv"

dotenv.config()

...

console.log(process.env.foo)


....

```

Note: You have to figure out the exact location of the code yourself

