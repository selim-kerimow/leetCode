// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
function mergeAlternately(word1: string, word2: string): string {
  let result = ''

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    result = result + (word1[i] || '') + (word2[i] || '')
  }

  return result;
};




// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies)
  return candies.map(i => i + extraCandies >= max)
};




// https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const zeroLength = flowerbed.filter(i => i == 0).length;
  const oneLength = flowerbed.filter(i => i == 1).length;

  if (n == 1 && zeroLength - oneLength > 1) return true;
  else return zeroLength > n + 2;
};





// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
function moveZeroes(nums: number[]): void {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[index] == 0) {
      nums.splice(index, 1);
      nums.push(0)
    }
    else index++;
  }
};





// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
function isSubsequence(s: string, t: string): boolean {
  let indexS = 0;
  let indexT = 0;

  while (indexS < s.length && indexT < t.length) {
    if (s[indexS] === t[indexT]) indexS++;
    indexT++;
  }

  return indexS === s.length;
};

console.log(isSubsequence('ace', "abcde"))