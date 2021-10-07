function validar (){
    var n1 = numero.value
    var n2 = numero2.value
     

    if (n1 > 2 && n2 < 10){
        alert ('é Maior que o Valor minimo e menor que o valor máximo')
        form.ip1.focus();
        return false
    } else if (n2 > 2 && n2 < 10 ){
        alert ('é Maior que o Valor minimo e menor que o valor máximo')
        form.ip1.focus();
        return false

    }
   
}


function somar (){

    var n1 = numero.value
    var n2 = numero2.value
    var res = parseInt (n1) + parseInt(n2)
    document.getElementById("resultado").innerHTML = res

}