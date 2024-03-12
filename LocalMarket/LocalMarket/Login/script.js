function login(){
    var name = $('#user').val();
    var password = $('#password').val();

    if(name && password && name === "admin" && password === "admin"){
        const user = {
            name,
            entryDate : new Date(), 
            id: Math.floor(Math.random()  * 100000),
        }
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "#";
        console.log("deuboa")
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