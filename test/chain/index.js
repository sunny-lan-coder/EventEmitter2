const E = require('../../').EventEmitter2;

let e = new E({wildcard: true}, () => console.log("terminator called"));

e.on('a', (next) => {
    console.log("handler 1 was triggered (a)");
    next();
});

e.on('*', (next) => {
    console.log("handler 2 was triggered (*)");
    next();
});

e.on('b', (next) => {
    console.log("handler 3 was triggered (b)");
    next();
});

e.on('c', () => console.log("handler 4 was triggered (c). not calling next"));

console.log("emitting a");
e.emit('a');
console.log("emitting b");
e.emit('b');
console.log("emitting *");
e.emit('*');
console.log("emitting c");
e.emit('c');