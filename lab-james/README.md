### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.

The arithmetic module exports an object containing two methods, summerator and subtractifier.  summerator() has an airty of 2, contains some logic to check the valitidy of its input, and if applicable, adds its two inputs together and returns the sum.  subtractifier() does the same thing, but subtracts the second input from the first.  Both functions expect numbers, but will reject NaN, null, and undefined values.





### Sources:
https://www.sitepoint.com/understanding-module-exports-exports-node-js/
https://stackoverflow.com/questions/504803/how-do-you-create-a-method-for-a-custom-object-in-javascript