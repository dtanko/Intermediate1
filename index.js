// Question 3
let Science = "Physics, Chemistry, Biology, Technical Drawing"
let SocialScience = "Accounting, Commerce, Marketing, Geography"
let Arts = "Government, Economics, Literature, History"
let GeneralSubjects = "English, Mathematics"

let Dept = prompt ("What Dept?")

if (Dept = Science){
    console.log("Congratulations, Science subjects include: "+ Science + " "+ GeneralSubjects)
}
else if (Dept = SocialScience){
    console.log("Congratulations, Social Science subjects include: "+ SocialScience + " "+ GeneralSubjects)
}
else if (Dept = Arts){
    console.log("Congratulations, Arts subjects include: "+ Arts + " "+ GeneralSubjects)
}
else {
    console.log(GeneralSubjects)
}




//Question 5
function ObtainNearestPowerOf2(num){
    let pwr = Math.pow(2, Math.round(Math.log2(num)));
    if (Math.abs(num - pwr) > Math.abs(num - 2 * pwr)){
        pwr *= 2;
    }
    return pwr;
}

let num = 50;
let pwr = ObtainNearestPowerOf2(num);
console.log("The number"+ ${pwr} + "if the power of 2 nearest to " + ${num})