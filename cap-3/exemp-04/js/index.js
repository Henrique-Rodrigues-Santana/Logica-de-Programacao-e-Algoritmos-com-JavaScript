function fusoHora (){

    var inpHorario = document.getElementById('inpHorario')
    var outHoraDaFranca = document.getElementById('outHoraDaFranca')


    var horaBrasil = Number(inpHorario.value)


    if(horaBrasil == "" || isNaN(horaBrasil)){
        alert('Preencha o campo hora com os dados corretos(Apenas Numeros)')
        return
    }

    var horafranca = horaBrasil + 5 

    if(horafranca > 24){
        horafranca = horaBrasil - 24 
    }

    outHoraDaFranca.textContent = `Hora na França ${horafranca.toFixed(2)}`

}

    var enviar = document.getElementById('enviar')
    enviar.addEventListener('click', fusoHora)