function notafin(){
        var nota1 = document.getElementById("notaa1").value;
        var nota2 = document.getElementById("notaa2").value;
        var nota3 = document.getElementById("notaa3").value;

                    
    if(nota1==""){
        alert("Introduzca su Primer nota");
    }else{
        if(nota2==""){
            alert("Introduzca su Segunda nota");
        }else{
            if(nota3==""){
                alert("Introduzca su Tercer nota");
            }else{
                 var pr1 = nota1 * 0.40;
                 var pr2 = nota2 * 0.30;
                 var pr3 = nota3 * 0.30;;
                var fin = pr1 + pr2 + pr3;

                var objParrafo = document.getElementById("parrafo");
                objParrafo.style.color = "blue";
                objParrafo.innerHTML = "Su Nota Final es de: " +fin;
            }
        }
    }   
}