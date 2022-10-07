const items = [
    {
        id: 0,
        nome: 'camisetas',
        img: 'camisa1.jpg',
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'shorts',
        img: 'shorts1.jpg',
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'sapato',
        img: "air.jpg",
        quantidade: 0,
    },
]

inicialiarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        console.log(val.nome);
        containerProdutos.innerHTML+= `

        <div class="produto-single">
            <img src="`+val.img+`" />
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
            <div class="info-single-checkout">
            <p style="float:left;">Produto: `+val.nome+`</p>
            <p style="float:right;">Quantidade: `+val.quantidade+`</p>
            <div style="clear:both"></div>
            
            </div>
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
