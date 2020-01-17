### Problem

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given `[10, 15, 3, 7]` and k of 17, return true since `10 + 7` is `17`.

### Solution

There are two solutions that I can think of.

1. Use two for loop to iterate through every element and find sum.So find `A[i,j]` such that `A[i] + A[j] == sum`.
   This would be O(n<sup>2</sup>)

2. The basic algorithm is as follows

```
for each item in A
 if hash[item] is defined
   return true
 hash[sum-item] = true;
return false
```

This would be O(n)
