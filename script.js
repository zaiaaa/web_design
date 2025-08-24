let contador = 0;

document.getElementById("Botao").onclick = () => {
    contador++
    let toast = document.getElementById("toast")
    if(!toast){
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `Você clicou <span class="span">${contador}</span> vezes`
    toast.classList.add("show")
}