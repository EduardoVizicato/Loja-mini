const items = [
    {
        id: 0,
        nome: 'camisetas',
        img: 'shirt.jpg',
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'shorts',
        img: 'shirt.jpg',
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'sapato',
        img: "shirt.jpg",
        quantidade: 0,
    },
]

inicialiarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        console.log(val.nome);
        containerProdutos.innerHTML+= `

        <div class="produto-single">
            <img src="`+val.camisa1+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">adicionar ao carrinho!<a/>
        </div>
        
        `;
    })

}

inicialiarLoja();


atualizarcarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = ""
    items.map((val)=>{
        if(val.quantidade > 0 ){
        containerCarrinho.innerHTML+= `

            <p>`+val.nome+`  |  quantidade: `+val.quantidade+`</p>
            <hr>
        
        `;
        }
    })
}


var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        var key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarcarrinho();
        return false;

    })
}
