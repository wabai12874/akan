
function getAkanName () {
    let varYear = document.getElementById("varYear").value;
    let varMonth = Number(document.getElementById("varMonth").value);
    let varDate = Number(document.getElementById("varDate").value);
    let genders = document.getElementsByName("gender");

    // function to get gender
    function getGender () {
        for (let gender of genders){
            if (gender.checked){
                return gender.value;
            }
        }
    }

    let varGender = getGender();
    console.log(varGender);

    // validation function for the month to make sure user enters a month between 1 and 12. Input type nummber in html ignores min and max length properties
    function valMonth () {
        if (varMonth < 1 || varMonth > 12) {
            return false;
        } else {
            return true;
        }
    }


    //validation function for days of the month.
    function valDay(){
        //leap year
        if (varMonth===2 && Number(varYear%4===0)){
            if(varDate>=1 && varDate<=29){
                return true;
            }
            else {
                return false
            }
        }
        //non leap year
        else if (varMonth===2 && Number(varYear%4!=0)){
            if (varDate>=1 && varDate<=28){
                return true;
            }
            else {
                return false;
            }
        }
        //30 days
        else if (varMonth===4){
            if (varDate>=1 && varDate<=30){
                return true
            }
            else {
                return false;
            }
        }
        else if (varMonth===6){
            if (varDate>=1 && varDate<=30){
                return true
            }
            else {
                return false;
            }
        }
        else if (varMonth===9){
            if (varDate>=1 && varDate<=30){
                return true
            }
            else {
                return false;
            }
        }
        else if (varMonth===11){
            if (varDate>=1 && varDate<=30){
                return true
            }
            else {
                return false;
            }
        }

    }




    //validation variables
    let monthValid = valMonth();
    let dayValid = valDay();

    //Formula to determine day of birth given all input variables
    let dayNumber = Math.floor((((Number(varYear.slice(0,2))/4)-2*Number(varYear.slice(0,2))-1)+
        ((5*Number(varYear.slice(2,4))/4))+((26*(varMonth+1)/10))+varDate)%7);

//arrays for days of the week
    let weekDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
//arrays for akan names for the males
    let akanMale = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
//arrays for akan names for the females
    let akanFemale = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    //selecting items on the arrays
    let index;
    // code to minus one from the day of the week since the array index for the weekDays will be 6 and not 7(weekDays[0] to weekDays[6])
    if (dayNumber == 0){
        index = 6;
    } else {
        index = dayNumber - 1;
    }

    console.log(index);

    if (varGender == "male" && monthValid && dayValid) {
        document.getElementById('result').textContent = "Born on a " + weekDays[index] + " , Your Akan name is " + akanMale[index];
        document.getElementById('result').style.fontSize = "25px";
        document.getElementById('result').style.fontFamily= "Segoe UI";

        return false;

    } else if (varGender == "female" && monthValid && dayValid) {
        document.getElementById('result').textContent = "Born on a " + weekDays[index] + " , Your Akan name is " + akanFemale[index];
        document.getElementById('result').style.fontSize = "25px";
        document.getElementById('result').style.fontFamily= "Segoe UI";

        return false;

    } else {
        alert("Invalid entry. Try Again.");
    }
}
