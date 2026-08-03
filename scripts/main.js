`use strict`

import { criar } from "../utils/gerador.js";
import { buscarDadosCurso } from "./rotas/alunos.js";
import { handleClickCurso } from "./aluno_tela.js";

export async function criarTelaPrincipal (cursos) {

//Container principal**********************************************************
    const conteiner_principal =  criar.ELEMENTO("div",["conteiner_principal"])//Primeira div

        //Coluna esquerda***********************************************************
        const container_geral = document.getElementById("container_geral") //Main

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
        conteiner_principal.append(div_coluna_esquerda)

        const div_dispositivo = criar.ELEMENTO("div",["dispositivos"])

        const imagem_dispositivos = criar.ELEMENTO("img")
        imagem_dispositivos.src = "/imagens-projeto/devices.png"
        imagem_dispositivos.alt = "dispositivos, mobile, desktop e tablet"

        div_dispositivo.append(imagem_dispositivos)
        div_coluna_esquerda.append(div_dispositivo)

        conteiner_principal.append(div_coluna_esquerda)
        container_geral.append(conteiner_principal)

    //Coluna Central*************************************************************

        const div_coluna_central = criar.ELEMENTO("div", ["coluna_central"])
        const div_imagem_estudante = criar.ELEMENTO("div", ["imagem_estudante"])
        const img_estudante = criar.ELEMENTO("img", ["imagem_estudante"])

        img_estudante.src = "/imagens-projeto/studant.png"
        img_estudante.alt = "imagem garota estudante"

        div_imagem_estudante.append(img_estudante)
        div_coluna_central.append(div_imagem_estudante)
        conteiner_principal.append(div_coluna_central)
        container_geral.append(conteiner_principal)

    //Coluna Direita*************************************************************
    const div_coluna_direita = criar.ELEMENTO("div",["coluna_direita"])

    cursos.forEach( itemCurso => {
        const icon_Api = criar.ELEMENTO("img")
        icon_Api.src = itemCurso.icon
        icon_Api.alt = `ícone do ${itemCurso.nome}`
        const div_curso = criar.ELEMENTO("div",["cursos"])
        div_curso.addEventListener('click', async() => {
            await handleClickCurso(itemCurso.id)
        })
        div_curso.append(icon_Api)
        div_curso.append(itemCurso.sigla)
        div_coluna_direita.append(div_curso)
    })
    conteiner_principal.append(div_coluna_direita)
    container_geral.append(conteiner_principal)

}
// await criarTelaPrincipal(await buscarDadosCurso())