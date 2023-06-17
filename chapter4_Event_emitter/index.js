const logEvents =require('./logEvent.js');


const EventEmitter=require('events');
class MyEmitter extends EventEmitter {};


//initialize object

const myEmitter= new MyEmitter();

// add listener for the log event

myEmitter.on('log',(msg)=>logEvents(msg));
//my 
setTimeout(()=>{
myEmitter.emit('log','Log event emitted');
},2000)





