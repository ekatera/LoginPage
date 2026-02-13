const users = JSON.parse(localStorage.getItem("users") || "[]");

const logout = document.querySelector(".logout");
const status_msg = document.getElementById("loginStatus");


document.addEventListener("DOMContentLoaded", () => {
    const active_user = sessionStorage.getItem("currentUser");

    if (active_user) {
        status_msg.textContent = active_user;
        console.log("Active user found");
    } else {
        console.log("No active user found");
    }
});
 

logout.onclick = () =>
{
    active_user = sessionStorage.getItem("currentUser");
    console.log("logout");
    if (active_user) {
        sessionStorage.removeItem("currentUser");
        window.location.href = "index.html";
    }
}