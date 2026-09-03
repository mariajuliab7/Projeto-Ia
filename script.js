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
            afirmacao: "Sentir medo diante de uma tecnologia nova e capaz de criar conteúdos tão realistas é uma reação natural."
        },
        {
            texto:"Isso é maravilhoso!",
            afirmacao: "A curiosidade sobre a IA pode despertar o interesse em descobrir novas formas de utilizá-la no dia a dia."
        }
    ]
  },
  {
    enunciado:"Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
        {
            texto:"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            afirmacao: "Utilizar a IA como apoio à pesquisa pode facilitar a busca e a compreensão das informações, mas é importante conferir se os dados estão corretos."
        },
        {
            texto:"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
            afirmacao: "Pesquisar em diferentes fontes e utilizar os próprios conhecimentos permite construir um trabalho com diferentes perspectivas sobre o tema."
        }
    ]
  },
  {
    enunciado:"Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
        {
            texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            afirmacao: "A IA pode transformar o mercado de trabalho, criando novas oportunidades e auxiliando as pessoas no desenvolvimento de diferentes habilidades."
        },
        {
            texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
            afirmacao:"A possibilidade de substituição de algumas funções pela IA mostra a importância de preparar e proteger os trabalhadores diante das mudanças."
        }
    ]
  },
  {
    enunciado:"Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
        {
            texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
            afirmacao: "Criar a imagem manualmente permite expressar as próprias ideias e desenvolver a criatividade por meio de uma ferramenta de desenho."
        },
        {
            texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
            afirmacao: "Um gerador de imagens com IA pode transformar uma descrição em texto em uma imagem, facilitando a representação de ideias."


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
