document.getElementById("contr").onclick = function() {
    var element = document.querySelector("body");

    if (element.classList.contains("contrast")) {
        console.log("adicionou");
        document.querySelector("body").classList.remove("contrast");
    } else {
        console.log("excluiu");
        document.querySelector("body").classList.add("contrast");
    }
}