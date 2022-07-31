const { EventEmitter } = require('events');
const fs = require('fs/promises');
const express = require('express');
const http = require('http');

console.log(process.platform);

global.returnMessage = 'Hello world';

console.log(global.returnMessage);

process.on('exit',function(){

  //do something on callback
  console.log('buh bye')
})


const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', function(){

  console.log('yum 🍣')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
//
//const fs = require('fs');

//fs.readFile('./test.txt', 'utf8', (err,txt) => {
//  console.log(txt);     //callback always run after rest of file
//})

/*
const { readFile } = require('fs').promises;

async function boneSummoner(){
  const file = await readFile('./test.txt', 'utf8');
}

console.log('this first!')

boneSummoner();
*/


async function boneSummonerIITheBonening() {
  try {
    const data = await fs.readFile('./test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
boneSummonerIITheBonening();



const app = express();

app.get('/foo/bar', (request, response) => { //request from user, response from server

  readfile('./main.html', 'utf8', (err, html) => {

      if (err) {
        console.log('fuckign die i guess');
        response.status(500).send('shits fucked mate')
      }

      response.send(html);

  })
});

app.listen(process.env.PORT || 3000, () = > console.log('App available on http://localhost:3000'))



const server = http.createServer((request, response) => {
  // magic happens here!
});
