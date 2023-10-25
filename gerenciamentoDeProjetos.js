//armazenar projetos]
let projetos=[]

//cada projeto deve conter:nome; data in- data fim ; membros
function criarProjeto(){
    const nomeProjeto= prompt(`insira o nome do projeto:`)
    const dataInicioProjeto = prompt(`data de inicio do projeto`)
    const dataFimProjeto= prompt(`data final projeto`)
    
    let membrosProjeto =[]

    while (true) {
        let escolha= parseInt(prompt(`
        1-cadastrar membro equipe
        2-encerrar`))
        switch (escolha) {
            case 1:
                 let nomeMembro= prompt(`nome membro do projeto`)
                 membrosProjeto.push(nomeMembro)
                break;
            case 2 :
                console.log(`cadastro membros encerrados`)
            default:
                break;
        }
        if(escolha===2){
            break;
        }
    } 
    
  if(!nomeProjeto||!dataInicioProjeto||!dataFimProjeto){
        alert(`insira todas as  informações necessárias`)
  }else{
    let dadosProjetos={
        nomeProjeto: nomeProjeto,
        dataInicioProjeto: dataInicioProjeto,
        dataFimProjeto: dataFimProjeto,
        membros: membrosProjeto,
        tarefas: {}, //armazenar tarefas membros
        finalizado: false,
        relatorio: []
    }
    projetos.push(dadosProjetos)
    console.log("dados do projetos", dadosProjetos)
  }
}
criarProjeto()
console.log(projetos);

/*ATRIBUIR TAREFAS PARA MEMBROS:
selecionar um projeto- escolher membro desse projeto e  atribuir uma tarefa (descrição tarefa ,prazo de conclusao)
 */


function atribuirTarefas() {
    do {
        const buscarProjeto = prompt(`insira o nome do projeto para atribuir tarefa (ou 'sair' para encerrar o projeto)`);

        if (buscarProjeto.toLowerCase() === 'sair') {
            return;
        }
        const projetoEncontrado = projetos.find(projetos => projetos.nomeProjeto === buscarProjeto);

        if (projetoEncontrado) {
            //         // verifica se o membro pertence ao projeto
            const buscarMembro = prompt(`insira o nome do membro da equipe`);
            const membroEncontrado = projetoEncontrado.membros.find(membros => membros === buscarMembro);

            if (membroEncontrado) {
                while (true) {
                    const definirTarefa = prompt(`defina tarefa para ${buscarMembro} (ou 'sair' para encerrar atribuições) `);


                    if (definirTarefa.toLowerCase() === 'sair') {
                        break;
                    }

                     //inserindo tarefas para cada membro

                    if (!projetoEncontrado.tarefas[buscarMembro]) {
                        projetoEncontrado.tarefas[buscarMembro] = [];
                    }
                    projetoEncontrado.tarefas[buscarMembro].push(definirTarefa);
                }
            } else {
                console.log(`Membro não encontrado no projeto`);
            }
        } else {
            console.log(`Projeto não encontrado`);
        }

    } while (true);
}
atribuirTarefas();


/*Monitoramento de Progresso:

Criar forma de monitorar o progresso do projeto, mostrando status de conclusão  nas tarefas concluídas.
 */

function monitorarProjeto(){
    // buscarprojeto --  verificar se o status está concluido (todos que não estão  concluidos  estão  em andamento)
    const nomeProjeto= prompt(`Digite o nome do projeto que deseja marcar como finalizado:`)
    const projetoEncontrado= projetos.find(projeto=>projeto.nomeProjeto===nomeProjeto)

    if(projetoEncontrado){
        projetoEncontrado.finalizado=true
        console.log(`${nomeProjeto} foi marcado como finalizado.`);

    }else {
        console.log(`Projeto não encontrado.`);
    }

}
monitorarProjeto()
/*CRIAR RELATORIO:
 gerar relatórios sobre o andamento dos projetos, mostrando informações como atrasos, membros mais produtivos
*/
function criarRelatorioProjeto() {
    do {
        const buscarProjeto = prompt(`insira o nome do projeto para atribuir tarefa (ou 'sair' para encerrar o projeto)`);

        if (buscarProjeto.toLowerCase() === 'sair') {
            return;
        }
        const projetoRelatorio = prompt(`Insira o nome do projeto para criar um relatório sobre ele:`);
        const projetoRelatorioEncontrado = projetos.find(projeto => projeto.nomeProjeto === projetoRelatorio);

        if (projetoRelatorioEncontrado) {
            const criarRelatorio = prompt(`Escreva um relatório do projeto contendo informações como atrasos, membros mais produtivos`);
            projetoRelatorioEncontrado.relatorio.push(criarRelatorio); // Adicionando ao array de relatório
            console.log(`${projetoRelatorio} - Relatório criado com sucesso.`);
        } else {
            console.log(`Projeto não encontrado.`);
        }
    }while(true)
}
criarRelatorioProjeto()
/* VALIDAÇÃO DATA:
 IF/ELSE - validar se as datas inseridas pelos usuários por exemplo, a data de término não pode ser anterior à data de início.
*/

/*Implementação de Prazos:

Use loops (for, while, ou do-while) para verificar se as tarefas estão sendo concluídas dentro dos prazos estabelecidos. */