/**
 * Created by pc on 12/12/2016.
 */
let EventEmitter = require('events');
let emitter = new EventEmitter();

emitter.on('somEvent', () => {
  console.log('handler #one');
});
emitter.on('somEvent', () => {
  console.log('handler #two');
});

emitter.emit('somEvent');

process.exit(123);

