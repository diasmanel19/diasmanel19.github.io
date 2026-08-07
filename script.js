const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;
const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
    let atual = "";

    secoes.forEach(function (secao) {
        const topoSecao = secao.offsetTop - 100;
        if (window.scrollY >= topoSecao) {
            atual = secao.getAttribute("id");
        }
    });

    links.forEach(function (link) {
        link.classList.remove("ativo");
        if (link.getAttribute("href") === "#" + atual) {
            link.classList.add("ativo");
        }
    });
});


const botaoTopo = document.getElementById("botao-topo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});