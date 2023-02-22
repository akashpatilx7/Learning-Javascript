/*

********* FALSY VALUES : Values that are treated as FALSE *********

********* TRUTHY VALUES : All the remaining values other than FALSY VALUES *********

1. undefined : Declared a variable but "FORGOT TO INITIALISE IT" with a Specific  Value

2. null (empty): Not set with a Specific Value due to lack of finding that Particular Value which we wished to set to that variable

3. 0 : Declared a variable initialised with a 0 value

4. '' & "": Empty String

5. NaN : Not A Number 

*/

var user = "";

if(user){
  console.log("Condition Is True");
}