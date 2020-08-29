
  ### in terminal:
   1. `npm init`
   2. `npm i babel-preset-env --save`
   3. `npm i babel-cli babel-core babel-watch babel-preset-es2015 --save-dev`
   4. in terminal:
    `npm run build`
    THEN
     `npm run start`
   5. #### copy this below to Your package.json file:
   `"scripts:": {
     "start": "babel src/scripts/main.js --watch --out-file dist/scripts/main.js",
     "build": "babel --presets es2015 src -d dist"
  }`
  
  
