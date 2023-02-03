// Sliding Window
function lengthOfLongestSubstring(s: string): number {
  let l = 0;
  let r = 0;
  let largest = 0;
  const map = new Map<string, number>();
  while (r < s.length) {
    const rightStr = s[r];
    map.set(rightStr, map.has(rightStr) ? map.get(rightStr) + 1 : 1);
    while (map.has(rightStr) && map.get(rightStr) > 1) {
      const leftStr = s[l];
      map.set(leftStr, map.get(leftStr) - 1);
      l++;
    }
    largest = Math.max(r - l + 1, largest);
    r++;
  }
  return largest;
}
