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




// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
function expect(val: any): {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => any;
} {

  const toBe = (check: any) => {
    if (val === check) return true;
    throw new Error("Not Equal");
  };

  const notToBe = (check: any) => {
    if (val !== check) return true;
    throw new Error("Equal");
  };

  return { toBe, notToBe };
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(null)); // throws "Equal"
