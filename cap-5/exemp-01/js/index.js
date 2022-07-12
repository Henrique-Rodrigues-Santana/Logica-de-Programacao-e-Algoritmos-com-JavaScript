
var clientes = []



function adicionar(){

    var inppaciente = document.getElementById('inpPaciente').value
   
    if(inppaciente == ""){
        alert('Campo vazio, favor adicionar umcliente')
        return
    }

    clientes.push(inppaciente)

    outAtender.textContent =`${clientes[0]}`
    outPaciente.textContent=`${clientes.join('\n')}`
    console.log(clientes.toString())
    inppaciente.value = ""


}

function urgencia(){

    var inppaciente = document.getElementById('inpPaciente').value
   
    if(inppaciente == ""){
        alert('Campo vazio, favor adicionar umcliente')
        return
    }

    clientes.unshift(inppaciente)

    outAtender.textContent =`${clientes[0]}`
    outPaciente.textContent=`${clientes.join('\n')}`
    console.log(clientes.toString())


}

function atender(){

    
   

    outAtender.textContent =`${clientes[0]}`

    clientes.shift(clientes[0])
    outPaciente.textContent=`${clientes.join('\n')}`

    

    
    console.log(clientes.toString())




}

var btAdicionar = document.getElementById('btAdicionar')
var bturgencia = document.getElementById('bturgencia')
var btAtender = document.getElementById('btAtender')


btAdicionar.addEventListener('click', adicionar )
bturgencia.addEventListener('click', urgencia)
btAtender.addEventListener('click', atender)