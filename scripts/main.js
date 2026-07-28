`use strict`

import { criar } from "../utils/gerador.js"; 

const ROTABASE = "https://lion-school-phbo.onrender.com"

export async function getAllCursos() {
    let url = `${ROTABASE}/cursos`;

    try {
        let response = await fetch(url);
        
        if (response.ok) {
            let respostaAPI = await response.json();
            console.log(respostaAPI)
            return respostaAPI;
            
        } else {
            console.log(response.status);
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
async function criarTelaPrincipal () {
//Container principal**********************************************************
const conteiner_principal =  criar.ELEMENTO("div",["conteiner_principal"])

    //Coluna esquerda***********************************************************
    const container_geral = document.getElementById("container_geral")

    container_geral.append(conteiner_principal)

    const div_coluna_esquerda = criar.ELEMENTO("div",["coluna_esquerda"])

    const div_container_texto = criar.ELEMENTO("div",["texto"])

    const h1_titulo = criar.ELEMENTO("h1")
    h1_titulo.textContent = "Escolha um "

    const span_titulo = criar.ELEMENTO("span")
    span_titulo.textContent = "curso"

    h1_titulo.append(span_titulo)

    const h1_subtitulo = criar.ELEMENTO("h1")
    h1_subtitulo.textContent = "Para gerenciar"

    div_container_texto.append(h1_titulo,h1_subtitulo)

    div_coluna_esquerda.append(div_container_texto)
    container_geral.append(div_coluna_esquerda)

    const div_dispositivo = criar.ELEMENTO("div",["dispositivos"])

    const imagem_dispositivos = criar.ELEMENTO("img", ["dispositivos"])
    imagem_dispositivos.src = "/imagens-projeto/devices.png"
    imagem_dispositivos.alt = "dispositivos, mobile, desktop e tablet"
    div_coluna_esquerda.append(imagem_dispositivos)

    //Coluna Central*************************************************************
    const div_coluna_central = criar.ELEMENTO("div", ["coluna_central"])
    const div_img_estudante = criar.ELEMENTO("div", ["imagem_estudante"])
    const img_estudante = criar.ELEMENTO("img")
    img_estudante.src = "/imagens-projeto/studant.png"
    img_estudante.alt = "imagem garota estudante"

    div_img_estudante.append(img_estudante)
    div_coluna_central.append(div_img_estudante)
    container_geral.append(div_coluna_central)
}




// getAllCursos()