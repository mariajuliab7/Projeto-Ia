const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
       alternativas: [
        {
            texto:"Isso é assustador!",
            afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
        },
        {
            texto:"Isso é maravilhoso!",
            afirmacao: "Quis saber como usar IA no seu dia a dia."
        }
    ]
  },
  {
    enunciado:"Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
        {
            texto:"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            afirmacao: "A IA pode ajudar na pesquisa e na compreensão do conteúdo, mas é importante verificar as informações encontradas."
        },
        {
            texto:"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
            afirmacao: "Essa atitude mostra que é possível realizar uma pesquisa utilizando diferentes fontes, combinando conhecimentos próprios, opiniões de colegas e informações encontradas na internet."
        }
    ]
  },
  {
    enunciado:"Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
        {
            texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            afirmacao:  "A IA pode transformar o mercado de trabalho, criando novas oportunidades e ajudando as pessoas a desenvolver novas habilidades."




        },
        {
            texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
            afirmacao: "Essa preocupação é importante, pois a substituição de trabalhadores pela IA pode afetar empregos, sendo necessário buscar formas de proteger e preparar as pessoas para as mudanças no mercado de trabalho."
        }
    ]
  },
  {
    enunciado:"Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
        {
            texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
            afirmacao: "Os geradores de imagem com IA podem ajudar a transformar ideias em imagens de forma criativa e rápida."
        },
        {
            texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
            afirmacao: "Inteligências artificiais populares que criam qualquer tipo de imagem a partir de uma descrição em texto."


        }
    ]
  },
  {
    enunciado:"Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
        {
            texto:"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            afirmacao: "Essa atitude considera que a IA pode ajudar na realização do trabalho, mas é importante utilizar o conteúdo gerado de forma responsável e revisar as informações antes de entregá-lo."
        },
        {
            texto:"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            afirmacao: "A IA é uma ferramenta de apoio, mas o conteúdo precisa ser revisado e complementado pelos alunos para garantir qualidade e participação no trabalho."
        }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSeLecionada){
    const afirmacoes = opcaoSeLecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
