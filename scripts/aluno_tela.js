`use strict`

import { criar } from "../utils/gerador.js"; 
import { buscarDadosAluno } from "./rotas/alunos.js";

async function criarCardsAluno(alunos) {

    console.log(alunos);
    

    alunos.forEach(aluno => {
        // eu tenho 1 aluno por vez aqui e somente aqui
        // eu preciso exibir o card do aluno 
        
    
        const div_main = document.getElementById("container_geral")

        if(aluno.status == "cursando"){
            const div_card_conteiner = criar.ELEMENTO("div", ["card_conteiner"])
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
            const div_card_conteiner = criar.ELEMENTO("div", ["card_conteiner"])
            const div_conteiner_imagem = criar.ELEMENTO("div",["conteiner_imagem"])
            const img_aluno_cursando = criar.ELEMENTO("img")
            img_aluno_cursando.src = `${aluno.foto}`
            img_aluno_cursando.alt = "Aluno que está cursando"
            const span_texto = criar.ELEMENTO("span")
            span_texto.textContent = `${aluno.nome}`
            
            div_conteiner_imagem.append(img_aluno_cursando,span_texto)
            div_card_conteiner.append(div_conteiner_imagem)
            div_main.append(div_card_conteiner)
        }
    })
}

await criarCardsAluno(await buscarDadosAluno())
// criarCardsAluno()