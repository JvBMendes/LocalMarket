let produtos;

window.onload = function (){
    var storedUser = localStorage.getItem("user");
    var user = JSON.parse(storedUser);
    
    document.getElementById("user").textContent = user.name;
    document.getElementById("perfil").textContent = user.entryDate;
    document.getElementById("idPerfil").textContent = user.id;
}

document.addEventListener("DOMContentLoaded", function(){
    fetch("../Dados/store.json")
    .then((response) => response.json())
    .then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container")
        produtos.forEach((produto, index) =>{
            const card = document.createElement("div");
            card.className = "card";
            card.style.width = "18rem";
            card.style.marginRight = "10px";
            
            const imagem = document.createElement("img")
            imagem.src = produto.imagem;
            imagem.className = "card-img-top";

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = produto.descricao;
 
            const cardText = document.createElement("p")
            cardText.className = "card-text";
            cardText.textContent = "Preço: R$" + produto.preco.toFixed(2);

            const btnAdcionarAoCarrinho = document.createElement("a");
            btnAdcionarAoCarrinho.href = "#"
            btnAdcionarAoCarrinho.className = "btn btn-primary btnAdcionarAoCarrinho";
            btnAdcionarAoCarrinho.textContent = "Adicionar ao Carrinho"
            btnAdcionarAoCarrinho.setAttribute("data-indice" , index)

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(btnAdcionarAoCarrinho)

            card.appendChild(imagem)
            card.appendChild(cardBody)

            produtosContainer.appendChild(card)
        })
    })
    .catch((error) => console.error("error ao carregar arquivo JSON", error))

    $("#produtos-container").on("click", ".btnAdcionarAoCarrinho", function(){
        const indexDoProduto = $(this).data("indice");
        const produtoSelecionado = produtos[indexDoProduto]
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
        carrinho.push(produtoSelecionado);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert("PRODUTO ADCIONADO AO CARRINHO")
    })
})