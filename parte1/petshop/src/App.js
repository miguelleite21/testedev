import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="divPesquisa">
          <input className="inputPesquisa" placeholder="Pesquisa" />
          <button className="buttonPesquisa">🔍</button>
        </div>
        <h1>Pet Store</h1>
        <div>
          <button className="buttonHeader">👨‍💼</button>
          <button className="buttonHeader">🛒</button>
        </div>
      </header>
      <body>
        <div className="divCategoria">
          <div className="divCategorias">
            <h5 className="h5Categoria">Categoria</h5>
            <h5 className="h5Categoria">Categoria</h5>
            <h5 className="h5Categoria">Categoria</h5>
            <h5 className="h5Categoria">Categoria</h5>
            <h5 className="h5Categoria">Categoria</h5>
            <h5 className="h5Categoria">Categoria</h5>
            <h5 className="h5Categoria">Categoria</h5>
            <button className="buttonCategoria">☰</button>
          </div>
        </div>
        <div className="divImg">
          <img
            className="Img"
            src="https://chacarapet.com.br/blog/wp-content/uploads/2020/06/gato-e-cachorro-juntos-750x410.png"
            alt="imagem com cachorros e gatos juntos"
          />
        </div>
        <div className="divOpcoes">
          <button className="buttonRacao">Rações</button>
          <button className="buttonBrinquedo">Brinquedos</button>
          <button className="buttonAcessorio">Acessórios</button>
        </div>
        <div className="divNovidades">
          <p>NOVIDADES</p>
        </div>
        <div className="divProdutos">
          <div className="divItens">
            <div className="Produto">
              <img
                className="imgProduto"
                src="https://www.furacaopet.com.br/imagens/informacoes/fornecedores-produtos-pet-shop-01.jpg"
                alt="Casinha de cachorro"
              />
              <p className="nome">Casinha de cachorro</p>
              <p className="preco"> R$100</p>
            </div>

            <div className="Produto">
              <img
                className="imgProduto"
                src="https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc"
                alt="Shampoo de cachorro"
              />
              <p className="nome"> Shampoo de cachorro</p>
              <p className="preco"> R$20</p>
            </div>
            <div className="Produto">
              <img
                className="imgProduto"
                src="http://www.acasadoanimal.com.br/wp-content/uploads/2019/09/Produtos-pet-shop.png"
                alt="Brinquedos"
              />
              <p className="nome">Brinquedos</p>
              <p className="preco">R$20</p>
            </div>
            <div className="Produto">
              <img
                className="imgProduto"
                src="http://io.convertiez.com.br/m/superpaguemenos/shop/products/images/23701/large/racao-para-caes-pedigree-racas-pequenas-1kg_71265.png"
                alt="Raçao"
              />
              <p className="nome">Raçao</p>
              <p className="preco">R$100</p>
            </div>
            <div className="categorias">
              <img
                src="https://i0.statig.com.br/bancodeimagens/dx/1i/uu/dx1iuuaqbabw2a4n5jd5znql6.jpg"
                alt="gato"
              />
              <p>Gato</p>
            </div>
            <div className="categorias">
              <img
                src="https://i0.statig.com.br/bancodeimagens/bx/ry/fv/bxryfvt3vi76x0obfhixvrj8x.jpg"
                alt="cachorro"
              />
              <p>Cachorro</p>
            </div>
          </div>
        </div>
        <div className="divNovidades">
          <p>DESTAQUES</p>
        </div>
        <div className="divProdutos">
          <div className="divItens">
            <div className="Produto">
              <img
                className="imgProduto"
                src="https://www.furacaopet.com.br/imagens/informacoes/fornecedores-produtos-pet-shop-01.jpg"
                alt="Casinha de cachorro"
              />
              <p className="nome">Casinha de cachorro</p>
              <p className="preco"> R$100</p>
            </div>

            <div className="Produto">
              <img
                className="imgProduto"
                src="https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc"
                alt="Shampoo de cachorro"
              />
              <p className="nome"> Shampoo de cachorro</p>
              <p className="preco"> R$20</p>
            </div>
            <div className="Produto">
              <img
                className="imgProduto"
                src="http://www.acasadoanimal.com.br/wp-content/uploads/2019/09/Produtos-pet-shop.png"
                alt="Brinquedos"
              />
              <p className="nome">Brinquedos</p>
              <p className="preco">R$20</p>
            </div>
            <div className="Produto">
              <img
                className="imgProduto"
                src="http://io.convertiez.com.br/m/superpaguemenos/shop/products/images/23701/large/racao-para-caes-pedigree-racas-pequenas-1kg_71265.png"
                alt="Raçao"
              />
              <p className="nome">Raçao</p>
              <p className="preco">R$100</p>
            </div>
            <div className="Produto">
              <img
                className="imgProduto"
                src="https://www.furacaopet.com.br/imagens/informacoes/fornecedores-produtos-pet-shop-01.jpg"
                alt="Casinha de cachorro"
              />
              <p className="nome">Casinha de cachorro</p>
              <p className="preco"> R$100</p>
            </div>

            <div className="Produto">
              <img
                className="imgProduto"
                src="https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc"
                alt="Shampoo de cachorro"
              />
              <p className="nome"> Shampoo de cachorro</p>
              <p className="preco"> R$20</p>
            </div>
            <div className="Produto">
              <img
                className="imgProduto"
                src="http://www.acasadoanimal.com.br/wp-content/uploads/2019/09/Produtos-pet-shop.png"
                alt="Brinquedos"
              />
              <p className="nome">Brinquedos</p>
              <p className="preco">R$20</p>
            </div>
            <div className="Produto">
              <img
                className="imgProduto"
                src="http://io.convertiez.com.br/m/superpaguemenos/shop/products/images/23701/large/racao-para-caes-pedigree-racas-pequenas-1kg_71265.png"
                alt="Raçao"
              />
              <p className="nome">Raçao</p>
              <p className="preco">R$100</p>
            </div>
          </div>
        </div>
        <div className="divFooter">
          <div className="divInfo">
            <p>ENTREGA GRATUITA A PARTIR DE R$ 99</p>
            <p>PARCELAMENTO SEM JUROS</p>
            <p>CADASTRE-SE E GANHE DESCONTO</p>
          </div>
          <div className="divNewsletter">
            <h4>ASSINE NOSSA NEWSLETTER</h4>
            <p>
              cadastre-se para receber nossas novidades e descontos exclusivos!
            </p>
            <div>
              <input placeholder="Nome" />
              <input placeholder="E-mail" />
              <button>ENVIAR</button>
            </div>
          </div>
        </div>
        <footer>
          <div>
            <h6>CONTATO</h6>
            <p>(99)99999-9999</p>
            <p>(99)99999-9999</p>
            <p>petstore@petstore.com</p>
          </div>
          <div>
            <h6>PET STORE</h6>
            <p>Quem Somos</p>
            <p>Como Comprar</p>
            <p>Trocas e Devoluções</p>
            <p>Frete e entregas</p>
          </div>
          <div>
            <h6>CONTATO</h6>
            <p>(99)99999-9999</p>
            <p>(99)99999-9999</p>
            <p>petstore@petstore.com</p>
          </div>
          <div>
            <h6>PAGAMENTO</h6>
            <div className="pagamento">
              <p>💳</p>
              <p>💳</p>
              <p>💳</p>
              <p>💳</p>
              <p>💳</p>
              <p>💳</p>
              <p>💳</p>
              <p>💳</p>
            </div>
          </div>
          <p>TECNOLOGIA E DESENVOLVIMENTO SERI.E</p>
        </footer>
      </body>
    </div>
  );
}

export default App;
