# balanced-ternary
Converts 32-bit decimal signed integer as input and converts it to balanced ternary.

**[Balanced ternary][1]** is a non-standard numeral system. It is like ternary in that the digits increase in value by a factor of 3 as you go further to the left - so `100` is `9` and `1001` is 28.

However, instead of having values of 0, 1 and 2, **the digits have values of -1, 0, and 1**. (You can still use this to express any integer.)

For this challenge, the digit meaning `+1` will be written as `+`, `-1` will be written as `-`, and `0` is just `0`. Balanced ternary does not use the `-` symbol in front of numbers to negate them like other numeral systems do - see examples.

**My task for this challenge was to write a complete program which took a 32-bit decimal signed integer as input and converted it to balanced ternary.** No built-in base conversion functions of any sort was allowed. Input could only be standard input, command-line arguments, etc.

Leading zeroes may be present in input but not in output, unless the input is `0`, in which case the output should also be `0`.

Examples
-----

These are conversions from balanced ternary to decimal; in my challenge I had to convert the other way.

    +0- = 1*3^2 + 0*3^1 + -1*3^0 = 9 + 0 + -1 = 8
    +-0+ = 1*3^3 + -1*3^2 + 0*3^1 + 1*3^0 = 27 + -9 + 0 + 1 = 19
    -+++ = -1*3^3 + 1*3^2 + 1*3^1 + 1*3^0 = -27 + 9 + 3 + 1 = -14

  [1]: http://en.wikipedia.org/wiki/Balanced_ternary
