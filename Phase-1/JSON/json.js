// ****** JSON : Javascript Object Notation ****** 


/*
An open standard used to exchange data by converting it to string & can be converted into a Javascript Object. 

typeof is used to find the type of a variable.
*/ 


// JSON.stringify 

obj={name: "harry", length: 1, a: {this: "that"}};
jso=JSON.stringify(obj);
console.log(typeof jso);
console.log(typeof obj);

// NOTE : JSON standards use DOUBLE QUOTES only. They do not support Single Quotes.


// JSON.parsed

parsed=JSON.parse(`{"name": "harry", "length": 1, "a": {"this": "that"}}`);
console.log(parsed);
