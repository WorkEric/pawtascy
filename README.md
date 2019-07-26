# pawtascy 

## docs reference

## running reference

```shell
$ npm install
$ npm run build
$ npm start
```


## Run Server

two server

```
    "start": "react-scripts start",
    "build": "react-scripts build",
```

one server

```
"start": "nodemon --exec babel-node server/app.js --ignore client",
"build": "babel server/app.js --out-file server.compiled.js",
```