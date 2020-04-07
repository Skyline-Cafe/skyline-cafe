var users = [
    {
        email: "mbabazisuzanne@gmail.com",
        password: "1234567890",
        userName: "Sue"
    },
    {
        email: "lugjosh@gmail.com",
        password: "123456789",
        userName: "Josh L"
    },
    {
        email: "ojecode@gmail.com",
        password: "12345",
        userName: "John"
    }

]

function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const existingUser = users.find(user => (user.email === email && user.password === password));
    if(existingUser){
        window.location.href="/index.html";

    }
    else {
        window.alert("Incorrect email or password");
    }
    


}