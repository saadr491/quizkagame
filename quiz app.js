function check(){
    var q1 = document.myform.q1.value;
    var q2 = document.myform.q2.value;
    var q3 = document.myform.q3.value;
    var q4 = document.myform.q4.value;
    var q5 = document.myform.q5.value;
    var marks = 0 ;
    if (q1== "a" ){
marks++
    }
    if (q2== "b"){
        marks++;
    }
    if (q3== "c"){
        marks++;
    }
    if (q4== "b"){
        marks++;
    }
    if (q5== "c"){
        marks++;
    }
    
    document.getElementById("demo").innerHTML =" You got " + marks + " Out of 5 points";
    
    // document.write("you got " + marks + " out of 5 ")
}
