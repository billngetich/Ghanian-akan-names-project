var Search = function() {
    var Male = ["Kwasi" , "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi" , "Kwame" ];
    var Female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
    var days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];

    var gender = document.getElementById("Form").elements.namedItem("gender").value
    ;
        var date = parseInt(
            document.getElementById("Form").elements.namedItem("date").value
        );
        var month = parseInt(
            document.getElementById("Form").elements.namedItem("month").value
        );
        var year = parseInt(
            document.getElementById("Form").elements.namedItem("year").value
        );
        var DateofBirth = new Date(year + "/" + month +"/"+ date);
        var weekDay = DateofBirth.getDay();
var Search = function() {
    var Male = ["Kwasi" , "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi" , "Kwame" ];
    var Female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
    var days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];

    var gender = document.getElementById("Form").elements.namedItem("gender").value
    ;
        var date = parseInt(
            document.getElementById("Form").elements.namedItem("date").value
        );
        var month = parseInt(
            document.getElementById("Form").elements.namedItem("month").value
        );
        var year = parseInt(
            document.getElementById("Form").elements.namedItem("year").value
        );
        var DateofBirth = new Date(year + "/" + month +"/"+ date);
        var weekDay = DateofBirth.getDay();

                if ( date < 1 || date > 31 ){
                    return swal ( "INVALID DATE!");
                }
                else if ( month < 1 || month > 12 || (month == 2 && date > 29)){
                    return swal ( "INVALID MONTH!");
                }

                if (year === NaN || year < 1900 ) {
                    return swal ( "INVALID YEAR!");
                }

        if (weekDay === 0 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " + 
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        } 
        else if (weekDay === 1 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 2 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 3 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 4 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 5 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 6 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        if (weekDay === 0 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " + 
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 1 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        } 
        else if (weekDay === 2 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }  
        else if (weekDay === 3 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        } 
        else if (weekDay === 4 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }    
        else if (weekDay === 5 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }  
        else if (weekDay === 6 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }      
        if (weekDay === 0 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " + 
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        } 
        else if (weekDay === 1 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 2 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 3 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 4 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 5 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 6 && gender === "male" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Male[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        if (weekDay === 0 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " + 
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }
        else if (weekDay === 1 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        } 
        else if (weekDay === 2 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }  
        else if (weekDay === 3 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        } 
        else if (weekDay === 4 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }    
        else if (weekDay === 5 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }  
        else if (weekDay === 6 && gender === "female" ) {
            return (document.getElementById("mission1").innerHTML= "Your Akan Name is  " +
            Female[weekDay] + 
            ("  .Born on  " + days[weekDay]));
        }      