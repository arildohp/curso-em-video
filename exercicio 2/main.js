function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res =  document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO]Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero =''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked ) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagem/foto-bebe-m.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagem/foto-jovem-m.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagem/foto-adulto-m.png')
            }
            else { 
                //idoso
                img.setAttribute('src', './imagem/foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagem/foto-bebe-f.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagem/foto-jovem-f.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagem/foto-adulto-f.png')
            }
            else { 
                //idoso
                img.setAttribute('src', './imagem/foto-idoso-f.png')
            }
        
        }
        res.innerHTML = `Detectamos ${ genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'center'



    }

}