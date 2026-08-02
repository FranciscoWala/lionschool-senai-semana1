`use strict`

import { criar } from "../utils/gerador.js"; 
import { buscarDadosAluno } from "./rotas/alunos.js";

export async function criarCardsAluno(curso, alunos) {
    alunos.forEach(aluno => {

        const div_main = document.getElementById("container_geral")
        
        if(aluno.status == "cursando" && curso.id == 1){
            const div_card_conteiner = criar.ELEMENTO("div", ["card_conteiner_cursando"])
            const div_conteiner_imagem = criar.ELEMENTO("div",["conteiner_imagem"])
            const img_aluno_cursando = criar.ELEMENTO("img")
            img_aluno_cursando.src = `${aluno.foto}`
            img_aluno_cursando.alt = "Aluno que está cursando"
            const span_texto = criar.ELEMENTO("span")
            span_texto.textContent = `${aluno.nome}`
            
            div_conteiner_imagem.append(img_aluno_cursando,span_texto)
            div_card_conteiner.append(div_conteiner_imagem)
            div_main.append(div_card_conteiner)
        } else {
            const div_card_conteiner = criar.ELEMENTO("div", ["card_conteiner_finalizado"])
            const div_conteiner_imagem = criar.ELEMENTO("div",["conteiner_imagem"])
            const img_aluno_cursando = criar.ELEMENTO("img")
            img_aluno_cursando.src = `${aluno.foto}`
            img_aluno_cursando.alt = "Aluno já finalizou o curso"
            const span_texto = criar.ELEMENTO("span")
            span_texto.textContent = `${aluno.nome}`
            
            div_conteiner_imagem.append(img_aluno_cursando,span_texto)
            div_card_conteiner.append(div_conteiner_imagem)
            div_main.append(div_card_conteiner)
        }
    })
}

// await criarCardsAluno()
// criarCardsAluno()