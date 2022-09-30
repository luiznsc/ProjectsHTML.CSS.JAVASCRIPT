function validar(){
    nome=document.frm.txtNome;
    cpf=document.frm.txtCpf;
    telefone=document.frm.txtTelefone;
    cep=document.frm.txtCEP;
    placa=document.frm.txtPlaca;

    if(nome.value == ""){
        alert("Preencha o campo NOME!");
        nome.focus();
        return false
    }
    if(cpf.value == ""){
        alert("Preencha o campo CPF!");
        cpf.focus();
        return false
    }
    if(telefone.value == ""){
        alert("Preencha o campo TELEFONE!");
        telefone.focus();
        return false
    }
    if(cep.value == ""){
        alert("Preencha o campo CEP!");
        cep.focus();
        return false
    }
    if(placa.value == ""){
        alert("Preencha o campo PLACA!");
        placa.focus();
        return false
    }
}

function somenteNumero(e){
    var tecla = (window.event) ?event.keyCode:e.wich;
    if((tecla > 47 && tecla < 58) || (tecla > 95 && tecla < 106)) return true;
    else{
        if(tecla !=8) return false;
        else return true;
    }
}

