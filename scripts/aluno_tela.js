`use strict`

import { criar } from "../utils/gerador.js";
import { buscarDadosAlunoByCurso } from "./rotas/alunos.js";

/**
 *     <header class="sub_header">
        <div class="status">
            <span>Status</span>
            <div class="menu">
                <div class="menu_conteudo">
                    <span>Status</span>
                    <span>Finalizado</span>
                    <span>Cursando</span>
                </div>
            </div>
        </div>
        <div class="legenda">
            <span>LEGENDA</span>
            <div class="conteinar_legenda">
                <div class="cursando">
                    <div class="quadrado_cursando">
                    </div>
                    <span>Cursando</span>
                </div>
                <div class="finalizado">
                    <div class="quadrado_finalizado"></div>
                    <span>Finalizado</span>
                </div>
            </div>

        </div>
    </header>
 * 
 */

export function criarTelaAluno() {
    // SubHeader*************************************************************************
    const sub_header = criar.ELEMENTO("header", ["sub_header"]);

    // Status****************************************************************************
    const div_status = criar.ELEMENTO("div", ["status"]);

    const span_status = criar.ELEMENTO("span");
    span_status.textContent = "Status";

    const div_menu = criar.ELEMENTO("div", ["menu"]);

    const div_menu_conteudo = criar.ELEMENTO("div", ["menu_conteudo"]);

    const span_menu_status = criar.ELEMENTO("span");
    span_menu_status.textContent = "Status";

    const span_finalizado = criar.ELEMENTO("span");
    span_finalizado.textContent = "Finalizado";

    const span_cursando = criar.ELEMENTO("span");
    span_cursando.textContent = "Cursando";

    div_menu_conteudo.append(
        span_menu_status,
        span_finalizado,
        span_cursando
    );

    div_menu.append(div_menu_conteudo);

    div_status.append(
        span_status,
        div_menu
    );

    // Legenda**************************************************************************
    const div_legenda = criar.ELEMENTO("div", ["legenda"]);

    const span_legenda = criar.ELEMENTO("span");
    span_legenda.textContent = "LEGENDA";

    const div_container_legenda = criar.ELEMENTO("div", ["conteinar_legenda"]);

    // Cursando
    const div_cursando = criar.ELEMENTO("div", ["cursando"]);

    const div_quadrado_cursando = criar.ELEMENTO("div", ["quadrado_cursando"]);

    const span_cursando_legenda = criar.ELEMENTO("span");
    span_cursando_legenda.textContent = "Cursando";

    div_cursando.append(
        div_quadrado_cursando,
        span_cursando_legenda
    );

    // Finalizado************************************************************************
    const div_finalizado = criar.ELEMENTO("div", ["finalizado"]);

    const div_quadrado_finalizado = criar.ELEMENTO("div", ["quadrado_finalizado"]);

    const span_finalizado_legenda = criar.ELEMENTO("span");
    span_finalizado_legenda.textContent = "Finalizado";

    div_finalizado.append(
        div_quadrado_finalizado,
        span_finalizado_legenda
    );

    div_container_legenda.append(
        div_cursando,
        div_finalizado
    );

    div_legenda.append(
        span_legenda,
        div_container_legenda
    );

    // Header****************************************************************************
    sub_header.append(
        div_status,
        div_legenda
    );

    const headerPrincipal = document.querySelector(".faixa_azul_header");

    headerPrincipal.insertAdjacentElement("afterend", sub_header);

}

export function criarCardsAluno(alunos) {

    const div_main = document.getElementById("container_geral")
    const div_conteiner_cards = criar.ELEMENTO("div", ["conteiner_cards"])
    
    alunos.forEach(aluno => {

        if (aluno.status == "cursando") {
            const div_card_conteiner = criar.ELEMENTO("div", ["card_conteiner_cursando"])
            const div_conteiner_imagem = criar.ELEMENTO("div", ["conteiner_imagem"])
            const img_aluno_cursando = criar.ELEMENTO("img")
            img_aluno_cursando.src = `${aluno.foto}`
            img_aluno_cursando.alt = "Aluno que está cursando"
            const span_texto = criar.ELEMENTO("span")
            span_texto.textContent = `${aluno.nome}`

            div_conteiner_imagem.append(img_aluno_cursando, span_texto)
            div_card_conteiner.append(div_conteiner_imagem)
            div_conteiner_cards.append(div_card_conteiner)

        } else {
            const div_card_conteiner = criar.ELEMENTO("div", ["card_conteiner_finalizado"])
            const div_conteiner_imagem = criar.ELEMENTO("div", ["conteiner_imagem"])
            const img_aluno_cursando = criar.ELEMENTO("img")
            img_aluno_cursando.src = `${aluno.foto}`
            img_aluno_cursando.alt = "Aluno já finalizou o curso"
            const span_texto = criar.ELEMENTO("span")
            span_texto.textContent = `${aluno.nome}`

            div_conteiner_imagem.append(img_aluno_cursando, span_texto)
            div_card_conteiner.append(div_conteiner_imagem)
            div_conteiner_cards.append(div_card_conteiner)
        }
    })

    div_main.append(div_conteiner_cards)

}

export async function handleClickCurso(idCurso) {

    let telaPrincipal = document.getElementsByClassName("conteiner_principal")[0]
    telaPrincipal.remove()
    const alunosCurso = await buscarDadosAlunoByCurso(idCurso)
    criarTelaAluno()
    criarCardsAluno(alunosCurso)

}