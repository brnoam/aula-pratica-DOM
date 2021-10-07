function uppercase(){
    var nome = document.getElementById("nome");
    document.getElementById("mensagem").innerHTML = nome.value.toUpperCase();
}


function somar(){

   var n1 = idade.value
   var n2 = 10
   var res = parseInt (n1) + parseInt(n2)
   document.getElementById("resultado").innerHTML = "Daqui a 10 anos você terá " + res + " anos"
}