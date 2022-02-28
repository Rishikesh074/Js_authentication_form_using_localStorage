var modal = document.getElementsByClassName('signup_section');
        var Iname = document.getElementById('name');
        var pw = document.getElementById('pw');
        let personData = [];
        var storedData = localStorage.getItem('Data'); 
     
        personData = [...(JSON.parse(storedData))];

console.log(personData);

function store() {
    var storedData = localStorage.getItem('Data'); 
    let obj = {
        uname: Iname.value,
        password: pw.value,
    }
    personData.push(obj);

   
    let jsonObj = JSON.stringify(personData)

    localStorage.setItem('Data', jsonObj);
}
        function check() {

            var storedData = localStorage.getItem('Data'); 

            var userName = document.getElementById('username');
            var userPw = document.getElementById('userpw');

            console.log(storedData);
         
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
