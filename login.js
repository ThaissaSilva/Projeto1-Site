document.querySelector("#login").addEventListener("click", function(){
    document.querySelector(".wrapper").classList.add("active");
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".wrapper").classList.remove("active");
});


