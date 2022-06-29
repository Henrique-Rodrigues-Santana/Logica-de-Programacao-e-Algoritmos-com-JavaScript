function calcPeso(){

    var inpNome = document.getElementById('inpNome').value
    var rbMasc = document.getElementById('rbMasc').checked
    var rbFemi = document.getElementById('rbFemi').checked
    var inpAltura = document.getElementById('inpAltura').value

    var altura = Number(inpAltura)
    
    var outResposta = document.getElementById('outResposta')

    if(inpNome == ""|| (rbFemi == false && rbMasc == false)){
        alert('Por favor, preencha os campos e informe corretamente o nome e o sexo')
        // focus() propriedade responsavel por jogar o foco nos campos selecionados
        return
    }

    if(altura == "" || isNaN(altura) ){
        alert('Por favor informe a altura corretamente')
        
        return
    }

    if(rbMasc){
        var peso = 22 * Math.pow(altura,2)
    }else{
        var peso = 21 * Math.pow(altura, 2)
    }



    outResposta.textContent=` ${inpNome} seu peso ideal é ${ peso.toFixed(3)}kg`

}


function LimparCampos () {
    location.reload()

    document.getElementById('inpNome').focus()
}   



    var calcular = document.getElementById('calcular')
    calcular.addEventListener('click', calcPeso)

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click',LimparCampos)
    
