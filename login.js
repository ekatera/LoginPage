const users = JSON.parse(localStorage.getItem("users") || "[]");

const signin = document.querySelector(".signin");
const login = document.querySelector(".login");
const uname_element = document.querySelector("#uname");
const upass_element = document.querySelector("#upass");
const error_msg = document.getElementById("errorMsg");


document.addEventListener("DOMContentLoaded", () => {
    const active_user = sessionStorage.getItem("currentUser");

    if (active_user) {
        console.log(`User ${active_user} is already logged in`);
    }
});
 

function find_user(user_name) 
{
    if (users.some(u => u.name === user_name)) {
        console.warn("User with this name exists");
        return true;
    }
    return false;
}

function login_user(user_name, user_password) {
    if (users.some(u => u.name === user_name && u.password === user_password)) {
        console.warn("User found");
        sessionStorage.setItem("currentUser", user_name);
        window.location.href = "welcome.html";
    } else {
         error_msg.textContent = "User with this name and login not found!";
    }
}

function add_user (user_name, user_password) {
    var user_exit = find_user(user_name);
    if (!user_exit) {
        users.push({name : user_name, password : user_password});
        localStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem("currentUser", user_name);
        console.log("User added");
        window.location.href = "welcome.html";

    } else {
        error_msg.textContent = "User with this name already exists";
    }
}

signin.onclick = () =>
{
    error_msg.textContent = "";

    var user_name = uname_element.value;
    var user_password = upass_element.value;
    
    if ( (user_name.length > 0) && (user_password.length > 0) )
    {
        add_user(user_name, user_password);
    }
    else {
         error_msg.textContent = "Username or password is empty.";
         return;
    }
    console.log(users);

}

login.onclick = () =>
{
    error_msg.textContent = "";
    active_user = sessionStorage.getItem("currentUser");
    if (active_user) {
        error_msg.textContent = `User with name ${active_user} is already logged in. Log out.`;
        return;
    }

    var user_name = uname_element.value;
    var user_password = upass_element.value;
    
    if ( (user_name.length > 0) && (user_password.length > 0) )
    {
       login_user(user_name, user_password);
      
    } else {
        error_msg.textContent = "Username or password is empty.";
    }
}
