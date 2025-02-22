// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
function mergeAlternately(word1: string, word2: string): string {
  let result = ''

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    result = result + (word1[i] || '') + (word2[i] || '')
  }

  return result;
};

console.log(mergeAlternately('ac', 'pqr'))