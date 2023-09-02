
var grades = [10,20,30,40,50,60,70,80,90,100];
var i = 0;
while (i < grades.length) {
    
    if (grades[i] < 50) {

        grades.splice(i,1);
    }
    else{
    i++;
    }
}
console.log(grades);
