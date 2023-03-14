$(function(){
    var endereco_ = "";
    var link_ = "";
    const divUrl = document.createElement('div');
    divUrl.id = 'url';
    
    // Criar o elemento com a classe 'campo-url copiar'
    const divCopiar = document.createElement('div');
    divCopiar.classList.add('campo-url', 'copiar');
    
    // Criar a imagem dentro do elemento 'divCopiar'
    const img = document.createElement('img');
    img.src = 'img/copy.svg';
    img.id = 'copia-img';
    img.alt = '';
    
    divCopiar.appendChild(img);
    
    // Criar o elemento com a classe 'campo-url link-gerado'
    const divLinkGerado = document.createElement('div');
    divLinkGerado.classList.add('campo-url', 'link-gerado');
    
    // Criar o elemento 'p' dentro do elemento 'divLinkGerado'
    const p = document.createElement('p');
    p.textContent = 'http://127.0.0.1:5500/A.I/index.html';
    
    divLinkGerado.appendChild(p);
    
    // Adicionar os elementos criados dentro do elemento principal
    divUrl.appendChild(divCopiar);
    divUrl.appendChild(divLinkGerado);
    
    // Adicionar o elemento principal dentro da seção com id 'campo'
    const campo = document.querySelector('#campo');
    campo.appendChild(divUrl);
    function atualizaValores() {
        console.log(`Endereço  ====> ${endereco_}`);
        console.log(`Link      ====> ${link_}`);
        
    }

    $('input[name=url], input[name=nome]').on({
        change: function(evento){
            if(evento.target.name === "url"){
                let endereco = $(this).val();
                endereco_ = endereco
                atualizaValores();
            }
        }, 
        keydown: function(evento){
            if(evento.target.name === "nome"){
                let personalizar = $(this).val();
                link_ = personalizar;
                
                atualizaValores();
            }
        } 
    });

  
});
