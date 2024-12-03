const frutas = [
    {
        "id": 1,
        "nome": "Maçã Vermelha",
        "categoria": "Frutas",
        "preco": 4.99,
        "descricao": "Maçãs vermelhas frescas e suculentas, ideais para um lanche saudável.",
        "alt": "Imagem de maçãs vermelhas em uma cesta.",
        "img": "assets/img/image.png"
    },
    {
        "id": 2,
        "nome": "Banana Prata",
        "categoria": "Frutas",
        "preco": 3.50,
        "descricao": "Bananas pratas maduras, perfeitas para consumo imediato ou sobremesas.",
        "alt": "Imagem de bananas pratas em um cacho.",
        "img": "assets/img/image.png"
    },
    {
        "id": 3,
        "nome": "Laranja Pera",
        "categoria": "Frutas",
        "preco": 3.99,
        "descricao": "Laranjas peras doces e suculentas, ideais para sucos naturais.",
        "alt": "Imagem de laranjas peras em uma bancada.",
        "img": "assets/img/image.png"
    },
    {
        "id": 4,
        "nome": "Manga Palmer",
        "categoria": "Frutas",
        "preco": 6.99,
        "descricao": "Mangas Palmer com polpa doce e sem fiapos.",
        "alt": "Imagem de mangas Palmer cortadas ao meio.",
        "img": "assets/img/image.png"
    },
    {
        "id": 5,
        "nome": "Uva Itália",
        "categoria": "Frutas",
        "preco": 9.99,
        "descricao": "Cachos de uva Itália, frescos e ideais para sobremesas.",
        "alt": "Imagem de uvas Itália em um prato.",
        "img": "assets/img/image.png"
    },
    {
        "id": 6,
        "nome": "Melão Amarelo",
        "categoria": "Frutas",
        "preco": 5.49,
        "descricao": "Melões amarelos doces e refrescantes, perfeitos para o verão.",
        "alt": "Imagem de um melão amarelo inteiro e cortado.",
        "img": "assets/img/image.png"
    },
    {
        "id": 7,
        "nome": "Melancia",
        "categoria": "Frutas",
        "preco": 7.99,
        "descricao": "Melancias grandes e suculentas, ideais para um dia quente.",
        "alt": "Imagem de uma melancia cortada ao meio em uma mesa.",
        "img": "assets/img/image.png"
    },
    {
        "id": 8,
        "nome": "Kiwi",
        "categoria": "Frutas",
        "preco": 3.99,
        "descricao": "Kiwis frescos com sabor doce e levemente ácido.",
        "alt": "Imagem de kiwis inteiros e cortados em fatias.",
        "img": "assets/img/image.png"
    }
]

const produtos_nao_pereciveis = [
    {
        "id": 1,
        "nome": "Arroz Branco - 5kg",
        "categoria": "Não Perecíveis",
        "preco": 19.99,
        "descricao": "Arroz branco tipo 1, perfeito para acompanhar suas refeições.",
        "alt": "Imagem de um pacote de arroz branco de 5kg.",
        "img": "assets/img/image.png"
    },
    {
        "id": 2,
        "nome": "Feijão Carioca - 1kg",
        "categoria": "Não Perecíveis",
        "preco": 8.99,
        "descricao": "Feijão carioca selecionado para um sabor único.",
        "alt": "Imagem de um pacote de feijão carioca de 1kg.",
        "img": "assets/img/image.png"
    },
    {
        "id": 3,
        "nome": "Macarrão Espaguete - 500g",
        "categoria": "Não Perecíveis",
        "preco": 4.49,
        "descricao": "Macarrão espaguete de alta qualidade para suas receitas.",
        "alt": "Imagem de um pacote de macarrão espaguete de 500g.",
        "img": "assets/img/image.png"
    },
    {
        "id": 4,
        "nome": "Azeite de Oliva Extra Virgem - 500ml",
        "categoria": "Não Perecíveis",
        "preco": 24.99,
        "descricao": "Azeite de oliva extra virgem, ideal para temperar saladas e pratos.",
        "alt": "Imagem de uma garrafa de azeite de oliva de 500ml.",
        "img": "assets/img/image.png"
    },
    {
        "id": 5,
        "nome": "Farinha de Trigo - 1kg",
        "categoria": "Não Perecíveis",
        "preco": 5.99,
        "descricao": "Farinha de trigo tipo 1, ideal para pães e bolos.",
        "alt": "Imagem de um pacote de farinha de trigo de 1kg.",
        "img": "assets/img/image.png"
    },
    {
        "id": 6,
        "nome": "Leite em Pó Integral - 400g",
        "categoria": "Não Perecíveis",
        "preco": 12.99,
        "descricao": "Leite em pó integral, rico em nutrientes.",
        "alt": "Imagem de uma lata de leite em pó integral de 400g.",
        "img": "assets/img/image.png"
    },
    {
        "id": 7,
        "nome": "Café Torrado e Moído - 500g",
        "categoria": "Não Perecíveis",
        "preco": 15.99,
        "descricao": "Café torrado e moído, sabor encorpado e aroma irresistível.",
        "alt": "Imagem de um pacote de café torrado e moído de 500g.",
        "img": "assets/img/image.png"
    },
    {
        "id": 8,
        "nome": "Açúcar Refinado - 1kg",
        "categoria": "Não Perecíveis",
        "preco": 4.79,
        "descricao": "Açúcar refinado, ideal para adoçar suas receitas e bebidas.",
        "alt": "Imagem de um pacote de açúcar refinado de 1kg.",
        "img": "assets/img/image.png"
    }
]

const higiene_limpeza = [
    {
        "id": 1,
        "nome": "Detergente Líquido Neutro - 500ml",
        "categoria": "Higiene e Limpeza",
        "preco": 2.99,
        "descricao": "Detergente líquido neutro, ideal para lavar louças e utensílios.",
        "alt": "Imagem de um frasco de detergente líquido neutro de 500ml.",
        "img": "assets/img/image.png"
    },
    {
        "id": 2,
        "nome": "Sabão em Pó - 1kg",
        "categoria": "Higiene e Limpeza",
        "preco": 7.99,
        "descricao": "Sabão em pó concentrado, eficiente na remoção de manchas.",
        "alt": "Imagem de um pacote de sabão em pó de 1kg.",
        "img": "assets/img/image.png"
    },
    {
        "id": 3,
        "nome": "Desinfetante Floral - 2L",
        "categoria": "Higiene e Limpeza",
        "preco": 5.49,
        "descricao": "Desinfetante com fragrância floral para limpeza geral.",
        "alt": "Imagem de uma garrafa de desinfetante floral de 2L.",
        "img": "assets/img/image.png"
    },
    {
        "id": 4,
        "nome": "Esponja de Limpeza - Pacote com 3",
        "categoria": "Higiene e Limpeza",
        "preco": 3.99,
        "descricao": "Esponjas multiuso para limpeza de superfícies e utensílios.",
        "alt": "Imagem de um pacote com 3 esponjas de limpeza.",
        "img": "assets/img/image.png"
    },
    {
        "id": 5,
        "nome": "Shampoo Anticaspa - 400ml",
        "categoria": "Higiene e Limpeza",
        "preco": 14.99,
        "descricao": "Shampoo anticaspa com fórmula suave para todos os tipos de cabelo.",
        "alt": "Imagem de um frasco de shampoo anticaspa de 400ml.",
        "img": "assets/img/image.png"
    },
    {
        "id": 6,
        "nome": "Creme Dental - 90g",
        "categoria": "Higiene e Limpeza",
        "preco": 3.49,
        "descricao": "Creme dental com flúor para proteção dos dentes e gengivas.",
        "alt": "Imagem de uma embalagem de creme dental de 90g.",
        "img": "assets/img/image.png"
    },
    {
        "id": 7,
        "nome": "Papel Higiênico - Pacote com 12 rolos",
        "categoria": "Higiene e Limpeza",
        "preco": 10.99,
        "descricao": "Papel higiênico macio e de alta qualidade.",
        "alt": "Imagem de um pacote com 12 rolos de papel higiênico.",
        "img": "assets/img/image.png"
    },
    {
        "id": 8,
        "nome": "Álcool em Gel 70% - 500ml",
        "categoria": "Higiene e Limpeza",
        "preco": 9.99,
        "descricao": "Álcool em gel 70%, ideal para higienização das mãos.",
        "alt": "Imagem de um frasco de álcool em gel 70% de 500ml.",
        "img": "assets/img/image.png"
    }
]

const ProdutoUnico = []

const ProductView = (data = {id , nome, categoria, preco, descricao, alt, img}) => `
            <div class="container" id="${data.id}">
                <div class="row g-5">
                    <div class="col-md-6">
                        <div class="product-image">
                            <img src="${data.img}" class="img-fluid rounded" alt="${data.alt}">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <h2 class="mb-3">${data.nome}</h2>
                        <p class="text-muted">${data.descricao}</p>
                        <ul class="list-unstyled mb-4">
                            <li><strong>Categoria:</strong>${data.categoria}</li>
                            <li><strong>Disponibilidade:</strong> Em estoque</li>
                            <li><strong>Unidade:</strong> Vendido por kg</li>
                        </ul>
                        <p class="h4 fw-bold mb-3">R$ ${data.preco.toString().replace(".",",")}/kg</p>

                        <!-- Seletor de Quantidade -->
                        <div class="mb-4">
                            <label for="quantidade" class="form-label">Quantidade:</label>
                            <div class="input-group" style="max-width: 200px;">
                                <button class="btn btn-outline-secondary" type="button">-</button>
                                <input type="number" id="quantidade" class="form-control text-center" value="1" min="1">
                                <button class="btn btn-outline-secondary" type="button">+</button>
                            </div>
                        </div>

                        <!-- Botões -->
                        <div class="d-flex flex-column flex-sm-row gap-3">
                            <button class="btn btn-primary w-100">Adicionar ao Carrinho</button>
                            <a href="#produtos" class="btn btn-outline-secondary w-100">Voltar à Lista de Produtos</a>
                        </div>
                    </div>
                </div>

                <!-- Descrição Adicional -->
                <div class="mt-5">
                    <h3>Descrição Completa</h3>
                    <p>
                        ${data.descricao}
                    </p>
                </div>
            </div>
`

const CardComponet = (data = {id , nome, categoria, preco, descricao, alt, img}) => `
<div class="col" id="${data.id}" categoria="${data.categoria}">
    <article class="card h-100 shadow-sm">
        <img src="${data.img}" class="card-img-top" alt="${data.alt}">
        <div class="card-body">
            <h5 class="card-title">${data.nome}</h5>
            <p class="card-text text-muted">${data.descricao}</p>
            <p class="card-text fw-bold">R$ ${data.preco.toString().replace(".",",")}/kg</p>
            <a href="#produto-unico" class="btn btn-primary w-100" onclick="${mountComponentByObject("#produto-unico", data, ProductView)}">Adicionar ao Carrinho</a>
        </div>
    </article>
</div>
`

function mountComponent(id, datas, component) {
    const viewFrutas = document.querySelector(id)
    const mountView = datas.map(el => component(el)).join("")
    viewFrutas.innerHTML = mountView
}

function mountComponentByObject(id, data, component) {
    const viewFrutas = document.querySelector(id)
    viewFrutas.innerHTML = component(data)
}

mountComponent("#produtos-frutas", frutas, CardComponet)
mountComponent("#produtos-nao-pereciveis", produtos_nao_pereciveis, CardComponet)
mountComponent("#produtos-higiene-limpeza", higiene_limpeza, CardComponet)
