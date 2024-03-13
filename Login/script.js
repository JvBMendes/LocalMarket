function login(){
    var name = $('#user').val();
    var password = $('#password').val();

    if(name && password && name === "admin" && password === "admin"){
        const user = {
            name,
            entryDate : format(new Date()), 
            id: Math.floor(Math.random()  * 100000),
        }
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "../Store";
       
    }
    else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementsByClassName("user").style.border = "2px solid lightpink"
        document.getElementById("password").style.border = "2px solid lightpink"
    }
}

function closeError(){
    document.getElementById("error-modal").style.display = "none"
}

function showPassword(){
    var inputPassword = document.querySelector('#password');

    if (inputPassword.getAttribute("type") === 'password'){
        inputPassword.setAttribute("type","text")
    }
    else{
        inputPassword.setAttribute("text","type")
    }
}

function format(item){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    return item.toLocaleString("pt-BR", options)
}