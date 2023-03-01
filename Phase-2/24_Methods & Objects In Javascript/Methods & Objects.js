var user = {
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  // Method of an Object to access an Array
  buyCourse: function (courseName) {
    // To access the courseList inside the object & not the one outside the object !
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

var courseList = true;
console.log(user.firstName);


// A Method of an Object needs to be runned, not only Passed By Reference !
console.log(user.getCourseCount());
user.buyCourse("REACT JS Course");
console.log(user.getCourseCount());