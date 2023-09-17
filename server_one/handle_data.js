class users{
    constructor(name , pass, email)
    {
        this.name = name;
        this.pass = pass;
        this.email = email; 
    }
     comap(users)
    {
        if (users.name === this.name || users.email === this.email)
            return false;
        else 
            return true;
    }

}

var data = [];

if (localStorage.data){
    data = JSON.parse(localStorage.data);
}
function save_data(){
    localStorage.data = JSON.stringify(data);
}

function  handle_signup()
{
    console.log("hello");
    var email = document.getElementById("email").value; 
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var verified_pass = document.getElementById("confirm-password").value;
    var test = new users(name, password, email);

    if (password != verified_pass)
    {
        alert("Error: Password does not match");
        password.value = "";
        verified_pass.value = "";
        window.location.href = "signup.html";
        return;
    }
    var chekcs = data.some(user => user.name === name || user.email === email);
    if (chekcs)
    {
        alert("Error: User already exists");
        password.value = "";
        verified_pass.value = "";
        name.value = "";
        email.value = "";
             window.location.href = "signup.html";

        return;
    }
    
    data.push(new users(name, password, email));
    save_data();
    window.location.href = "profile.html";

}


function handle_login()
{
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var check = data.some(user => user.email === email && user.pass === password);
    if (check)
    {
        window.location.href = "profile.html"
    }
    else 
    {
        alert("Error: Wrong username or password");
        password.value = "";
        email.value = "";
    }
}