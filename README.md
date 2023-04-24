# dogor.io-server
Small game based on Ogar, written in TypeScript using Node.js 18. 

## Prerequisites
You need Node.js 18.16+ and NPM 9.5.1+ installed.  
This guide assumes Node.js is available behind the `node` alias, and NPM behind `npm`.

## Installation
To install the client, run the following commands:
```
$ git clone https://github.com/iameox/dogor.io-server.git
$ cd dogor.io-server
$ npm install
$ mv .env.sample .env
```

The file `.env` contains environment variables. You may edit them as you like.  
The default game type is `COOP`. It can be changed to `VERSUS` by setting `GAME_TYPE` to `1`.

## Compilation
To build the code from the sources, run the following command:
```
$ npm run build
```

## Run the code
To start the server, run the following command:
```
$ npm run start
```
