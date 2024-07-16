function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano1 = window.document.getElementById('ano')
    var resultado = window.document.getElementById('res')

    if ( ano1.value.length == 0 || ano1.value > anoatual){
        window.alert('algo errado')
    } else{
        var sexo = document.getElementsByName('sex')
        var idade = anoatual - Number(ano1.value)
        var genero = ''

        var img = document.getElementById('foto')


        if (sexo[0].checked){
            genero= 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'dragon.png')
            } else if( idade < 21){
                img.setAttribute('src', 'burro.png.png')
            }else if( idade < 60){
                img.setAttribute('src', 'estrela.png.png')
            }else{
                img.setAttribute('src', 'elefante.png.png')
            }
        } else{
            genero= 'Mulher'
        }
        resultado.innerText= `Você é ${genero} e tem ${idade} anos`
        resultado.appendChild(img)
    }
}
