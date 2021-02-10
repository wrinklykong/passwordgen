//Method 1:
//Mean Spinning

var letters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-=[];',./?><:ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(letters.length)

var createPass = function(input)  {
    var avg = 0.0;
    var pass = ""
    for ( var a in input.split("") ){
        avg+=letters.indexOf(a)
    }
    avg=avg/input.length 
    avg = Math.round(avg)
    var num = -1
    for ( var b in input.split("") ) {
        num*=-1
        if ( avg+letters.indexOf(input[b])*num < 0 ) {
            pass+=charAt(letters,Math.abs(avg+letters.indexOf(input[b])*num))
        }
        else if ( avg+letters.indexOf(input[b])*num > 85 ) {
            if ( letters,2*avg-avg-letters.indexOf(input[b])*num < 0 ) {
                pass+=charAt(letters,Math.abs(2*avg-avg-letters.indexOf(input[b])*num))
            }
            else {
                pass+=charAt(letters,2*avg-avg-letters.indexOf(input[b])*num)
            }
        }
        else {
            
            pass+=charAt(letters, avg+letters.indexOf(input[b])*num)
        }
    }
    return pass
}

var charAt= function(input, pos) {
    var split = input.split("")
//    console.log("pos:" + pos)
//    console.log("char: "+ split[pos])
    return split[pos]
}

console.log(createPass("MysteryCaseFiles:MillionHeir2819286718"))