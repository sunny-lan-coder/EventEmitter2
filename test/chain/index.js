const E = require('../../').EventEmitterChain2;

let e = new E({wildcard: true}, (evt) => console.log("terminator called upon event ", evt));

e.on('a', (next, x, y, z, a) => {
    console.log("handler 1 was triggered (a)", x, y, z, a);
    next();
});

const rec=(next) => {
    console.log("handler 2 was triggered (*)");
    next();
};

e.on('*',rec );

e.on('b', (next) => {
    console.log("handler 3 was triggered (b)");
    next();
});

e.on('c', () => console.log("handler 4 was triggered (c). not calling next"));

console.log("emitting a");
e.emit('a', 1, 2, 3, 4);
console.log("emitting b");
e.emit('b');
console.log("emitting *", 5, 6, 7, 8);
e.emit('*');
console.log("emitting c");
e.emit('c');
console.log("remove wildcard");
e.removeListener('*',rec );
console.log("emitting x");
e.emit('x');