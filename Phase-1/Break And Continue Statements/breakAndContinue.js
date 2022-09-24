// ****** Break and Continue Statements ******

var i;
arr = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        break;
    }

    if (i == 5) {
        continue; // NOTE : CONTINUE mtlab is iteration ko cancel karo, aur aage ke iteration pe chale jao/ aage ke iteration se continue karo.
    }
    console.log(arr[i]);
}
