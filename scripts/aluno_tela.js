`use strict`

import { criar } from "../utils/gerador.js"; 

async function criarTelaPrincipalAluno() {
    const conteiner_principal_main = criar.ELEMENTO("div",["container_geral"])
    const card_conteiner = criar.ELEMENTO("div",["conteiner_imagem"])
    const img_aluno = criar.ELEMENTO("img")
    img_aluno.src = "./imagens-projeto/logo-lionschool.png"
    img_aluno.alt = "kwef"

    card_conteiner.append(img_aluno)
    conteiner_principal_main.append(card_conteiner)
}
criarTelaPrincipalAluno()