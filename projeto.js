//Cookie
document.querySelector("#header-btInfo").addEventListener("click" ,function() {
    document.querySelector(".header-cookie-shadow").classList.add('header-cookie-hide')
})

//Login
document.querySelector("#login").addEventListener("click", function(){
    document.querySelector(".wrapper").classList.add("active");
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".wrapper").classList.remove("active");
});

//validar o login
function logar(){
    let sectionErros = document.querySelector("#erros");
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //validar se há dados
    if (email === "" || senha === ""){
        sectionErros.innerHTML = "Os dois campos são de preenchimento obrigatório!";
        return;
    }
    if(!regexEmail.test(email)){
        sectionErros.innerHTML = "O email tem um formato incorreto!";
        return;
    }

    fetch(`http://localhost:3000/utilizadores?email=${email}&=${senha}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

