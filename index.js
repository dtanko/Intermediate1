//In the ‘js-basics’ folder you created above, create a file and name it ‘index.js’. Inside the file, Write a function that multiples two numbers. Call that function to multiply any two numbers of your choice and log the answer in your console
function Multiply (x, y) {
    return (x * y);
}

    // call Multiply
var mul = Multiply (2, 3);
console.log(mul)

 //In the same index.js file, create variables for your first name, last name, Stutern track, skills, favourite color, year of your country’s independence. Use these variables to form a sentence and log the sentence in the console.
let f_name= "David", l_name = "Tanko", stutern_track = "Front-end Developer", skills = "HTML, CSS and JavaScript", year = 1990, colour_1="white";
var f_snt="Hi!, my names is " + f_name +" " +l_name + " and I am currently enrolled at " + stutern_track + " and have acquired these skills: " + skills+". My country Nigeria had her independence in " + year + " and hey my favourite colour is "+ colour_1+". Thank you.";
console.log(f_snt)
