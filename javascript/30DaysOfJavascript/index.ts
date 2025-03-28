// https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
function createHelloWorld() {
  return function(...args: string[]): string {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f()) // "Hello World"
