// https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
function createHelloWorld() {
  return function(...args: string[]): string {
    return "Hello World";
  };
};




// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascrip
function createCounter(n: number): () => number {
  return function() { return n++ }
}



const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
