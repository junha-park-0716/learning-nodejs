const assert = require("assert");

/*
assert.strictEqual(1 + 2, 3, ' [1 + 2 = 3]である');
assert.strictEqual(1 + 1, 3, ' [1 + 2 = 3]である');
*/

const obj1 = {
  a: {
    b: 1,
  },
};

const obj2 = {
  a: {
    c: 1,
  },
};

assert.deepStrictEqual(obj1, obj2, "Equal two objects");
