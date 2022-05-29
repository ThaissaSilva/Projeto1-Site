//Cookie
document.querySelector("#btInfo").addEventListener("click" ,function() {
    document.querySelector(".cookie-shadow").classList.add('cookie-hide')
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


//LOGIN
function gerenciarSessao(data){
    let texto = document.querySelector("#texto-bemvindo");

    sessionStorage.setItem("id", data.id)
    sessionStorage.setItem("nome", data.nome)
    sessionStorage.setItem("email", data.email)

    texto.innerHTML = `Bem vindo(a), ${data.nome}!`;

    document.querySelector("#login").classList.remove("active");
    document.querySelector("#logout").classList.add("active");
}

function logarEnter(event){
    if (event.key === "Enter") {
        logar();
    }
}

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
            if(data.length <= 0){
                sectionErros.innerHTML = "Utilizador inexistente!";
                return;  
            }
            document.querySelector(".popup").classList.remove("active");
            document.querySelector(".wrapper").classList.remove("active");

            gerenciarSessao(data[0]);   
        })
}

function inicio(){
    const id = sessionStorage.getItem("id");
    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");

    console.log(id, nome, email);

    if(id && nome && email){
        let texto = document.querySelector("#texto-bemvindo");

        texto.innerHTML = `Bem vindo(a), ${nome}!`;

        document.querySelector("#login").classList.remove("active");
        document.querySelector("#logout").classList.add("active");
    }
};

function logout(){
    sessionStorage.clear();

    let texto = document.querySelector("#texto-bemvindo");

    texto.innerHTML = "";

    document.querySelector("#login").classList.add("active");
    document.querySelector("#logout").classList.remove("active");
}

inicio();