function lps(s: string) {
  const length: number = s.length;
  let i: number = 0;
  while (i < length) {
   for(let j:number = 0;j+i<length;j++)
  }
}

function isPalindrome(s: String) {
  return (
    s
      .split('')
      .reverse()
      .join('') === s
  );
}
module.exports = lps;
