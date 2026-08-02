`use strict`

import { criar } from "../utils/gerador.js"; 
import { buscarDadosCurso } from "./rotas/alunos.js";
import { buscarDadosAluno } from "./rotas/alunos.js";

export async function criarTelaPrincipal () {
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

    const div_curso_ds = criar.ELEMENTO("div",["curso_DS"])
    div_curso_ds.textContent = "DS"
    div_curso_ds.addEventListener('click',buscarDadosCurso("DS"))

    const img_fechamento_tag = criar.ELEMENTO("img")
    img_fechamento_tag.src = "/imagens-projeto/icon-fechamento-tag.png"
    img_fechamento_tag.alt = "ícone fechamento de tag"

    const div_curso_redes = criar.ELEMENTO("div",["curso_REDES"])
    div_curso_redes.textContent = "REDES"
    div_curso_redes.addEventListener('click',buscarDadosCurso("REDES"))
    const img_icone_redes = criar.ELEMENTO("img")
    img_icone_redes.src = "/imagens-projeto/icon-redes.png"
    img_icone_redes.alt = "ícone de redes"

    div_curso_ds.append(img_fechamento_tag)
    div_curso_redes.append(img_icone_redes)

    div_coluna_direita.append(div_curso_ds,div_curso_redes)
    conteiner_principal.append(div_coluna_direita)
    container_geral.append(conteiner_principal)


}

// export async function criarBotoesCursos(){
//     const cursos = await buscarDadosCurso()

//     if(cursos.id == 1){
        
//     } else {

//     }
// }

criarTelaPrincipal(buscarDadosCurso())
// criarBotoesCursos()