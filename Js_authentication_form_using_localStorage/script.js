var modal = document.querySelector('.signup_section');
        var Iname = document.getElementById('name');
        var pw = document.getElementById('pw');
        let personData = [];
        var storedData = localStorage.getItem('Data');
        personData = [...(JSON.parse(storedData))];

        console.log(personData);

        var confirm_password = document.getElementById("confirm_password");

        function validatePassword() {
            if (pw.value != confirm_password.value) {
                confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }
        
        function hide(){
            var hides = document.querySelector('.signup_section').style.display="none";
            
        }

        function store() {

            var storedData = localStorage.getItem('Data');
            if(validatePassword()===false){
                alert("Passwords Don't Match");
            }
            else{
                
                let obj = {
                uname: Iname.value,
                password: pw.value,
            }
            personData.push(obj);

            let jsonObj = JSON.stringify(personData)

            localStorage.setItem('Data', jsonObj);
            }
        
        }

        function check() {

            var storedData = localStorage.getItem('Data');

            var userName = document.getElementById('username');
            var userPw = document.getElementById('userpw');

            console.log(storedData);
            var logIn = false;
            for (i = 0; i < personData.length; i++) {
                console.log(personData[i].password);
                if (userName.value === personData[i].uname && userPw.value === personData[i].password) {
                    logIn = true;
                } else {
                    logIn = false;
                }
            }
            if (logIn == true) {
                alert("Login sucessfull")
            } else {
                alert("Incorrrect Password or Username")
            }
           



        } 

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }