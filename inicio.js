function abrirNav(){
  document.getElementById("menuOculto").style.width="250px"
  document.getElementById("principal").style.marginLeft="250px"
}

/* 
function abrirNav() - define que é uma função chamada abrirNav.
document.getElementById("menuOculto") - Seleciona (faz uma pesquisa) o elemento HTML com o id "menuOculto".
.style.width="250px" - Define que a largura do elemento "menuOculto" vai para 250 pixels. Isso faz com que o menu de navegação se expanda para a largura de 250 pixels.
document.getElementById("principal") - Seleciona o elemento HTML com o id "principal".
.style.marginLeft="250px"; Define a margem esquerda do elemento "principal" para 250 pixels. Isso desloca o conteúdo principal da página para a direita, criando espaço para o menu de navegação expandido.
*/

function fecharNav(){
  document.getElementById("menuOculto").style.width="0"
  document.getElementById("principal").style.marginLeft="0"
}

/*
function fecharNav() -  Define que é uma função chamada fecharNav.
document.getElementById("menuOculto") - Seleciona o elemento HTML com o id "menuOculto".
.style.width="0" - Define a largura do elemento "menuOculto" para 0 pixels. Isso faz com que o menu de navegação seja ocultado.
document.getElementById("principal") - Seleciona o elemento HTML com o id "principal".
.style.marginLeft="0" - Define a margem esquerda do elemento "principal" para 0 pixels. Isso retorna o conteúdo principal da página à sua posição original, uma vez que o menu de navegação foi ocultado.
*/

