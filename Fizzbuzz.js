function Fizzbuzz() {
    var Msg = "";
    for(var i=1; i<100; i++) {
        if(i % 3 == 0) {
            Msg = "Fizz";
        } else if (i % 5 == 0) {
            Msg = "Buzz";
        } else {
            Msg = i
        }
        console.log(Msg);
    }
}

Fizzbuzz();


