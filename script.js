let imagem = document.querySelector('.imagem-perfil');
let escala = true
imagem.addEventListener('click', function(){
    
    if(escala===true){
        imagem.style.scale = '1.2'
        escala = false
    }else{
        imagem.style.scale = '1'
        escala = true
    }
})
