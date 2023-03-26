let entrada = document.querySelector('.entrada-lista');
let addBtn = document.querySelector('.add-lista');
let tarefa = document.querySelector('.tarefa');

// add botao desabilidado
entrada.addEventListener('keyup', ()=>{
    if(entrada.value.trim() != 0){
        addBtn.classList.add('active');

    }else{
        addBtn.classList.remove('active');
    }


})

//adicionar novo item a tabela
addBtn.addEventListener('click', ()=>{
if(entrada.value.trim() != 0){
    let novoItem = document.createElement('div');
    novoItem.classList.add('item');
    novoItem.innerHTML = 
    `<p >
    ${entrada.value}
    </p>
                <div class="itemBtn">
                    <i class="fa-regular fa-pen-to-square"></i> 
                <i class="fa-solid fa-xmark"></i>
                </div>
    `
   tarefa.appendChild(novoItem);
    entrada.value ='';
}else{
    alert('Entre com o nome de uma tarefa')
}

})
//deletar item
tarefa.addEventListener('click', (e) =>{
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
});
// marcsr item completado
tarefa.addEventListener('click', (e) =>{
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completado');
    }
})