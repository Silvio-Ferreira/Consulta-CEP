let xhr = new XMLHttpRequest();

function buscarCep(cep){
    if(cep.length == 8){
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState == 4 && xhr.status == 200){
                let retorno = JSON.parse(xhr.responseText);
                document.querySelector('#rua').value = retorno.logradouro;
                document.querySelector('#bairro').value = retorno.bairro;

            }
            
        }
        xhr.open('GET', 'http://viacep.com.br/ws/'+cep+'/json');
        xhr.send();
    }

}