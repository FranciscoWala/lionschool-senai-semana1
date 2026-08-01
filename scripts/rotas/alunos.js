'use strict'

/**
 * Projeto: LionSchool
 * Função do arquivo:Arquivo de busca de dados na API
 * Autor: Francisco Wala Noronha Macedo
 * Data: 01/08/2026
 */

const URLBASE = "https://lion-school-phbo.onrender.com"

export async function buscarDadosAluno(){

    try {
        let result = await fetch(`${URLBASE}/alunos`)

        if (!result.ok) {
            throw new Error(`Erro no result do buscarDados ${result}`)
        }

        const DADOS = await result.json()

        return DADOS

    } catch (error) {
        console.log(`Erro no catch de buscar dados${error}`)
    }

    

}