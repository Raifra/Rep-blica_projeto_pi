// Array de perguntas sobre a Primeira República
const quizQuestions = [
    {
        question: "Em que ano foi proclamada a República no Brasil?",
        options: ["1889", "1822", "1930", "1891"],
        answer: 0,
        explanation: "A República foi proclamada em 15 de novembro de 1889 pelo Marechal Deodoro da Fonseca, marcando o fim do Império."
    },
    {
        question: "Qual foi o primeiro presidente da República brasileira?",
        options: [
            "Deodoro da Fonseca",
            "Floriano Peixoto",
            "Prudente de Morais",
            "Campos Sales"
        ],
        answer: 0,
        explanation: "Deodoro da Fonseca foi o primeiro presidente, de 1889 a 1891, inicialmente como chefe do governo provisório e depois eleito indiretamente."
    },
    {
        question: "O que foi a Política do Café com Leite?",
        options: [
            "Alternância de presidentes de São Paulo (café) e Minas Gerais (leite)",
            "Subsídios à produção de café e leite",
            "Política de exportação agrícola",
            "Nenhuma das anteriores"
        ],
        answer: 0,
        explanation: "Foi o acordo político que alternava a presidência entre políticos de São Paulo (produtor de café) e Minas Gerais (produtor de leite)."
    },
    {
        question: "Qual foi a principal consequência da Revolta da Armada (1893)?",
        options: [
            "Fortalecimento do governo de Floriano Peixoto",
            "Queda do presidente Floriano Peixoto",
            "Retorno da monarquia",
            "Independência do Rio Grande do Sul"
        ],
        answer: 0,
        explanation: "Apesar da gravidade da revolta, Floriano Peixoto conseguiu suprimi-la, o que fortaleceu seu governo e lhe rendeu o apelido de 'Marechal de Ferro'."
    },
    {
        question: "Qual presidente ficou conhecido como 'Marechal de Ferro'?",
        options: [
            "Floriano Peixoto",
            "Deodoro da Fonseca",
            "Hermes da Fonseca",
            "Epitácio Pessoa"
        ],
        answer: 0,
        explanation: "Floriano Peixoto (1891-1894) recebeu esse apelido por sua postura firme durante a Revolta da Armada e outras crises."
    },
    {
        question: "O que foi o Encilhamento?",
        options: [
            "Política econômica que causou inflação e especulação",
            "Movimento abolicionista",
            "Revolta militar",
            "Tratado comercial com a Argentina"
        ],
        answer: 0,
        explanation: "Foi uma política econômica implementada por Rui Barbosa durante o governo Deodoro que levou a uma grande especulação financeira e inflação."
    },
    {
        question: "Qual foi o principal produto de exportação do Brasil durante a Primeira República?",
        options: [
            "Café",
            "Açúcar",
            "Borracha",
            "Algodão"
        ],
        answer: 0,
        explanation: "O café foi o principal produto de exportação, representando cerca de 70% das exportações brasileiras no período."
    },
    {
        question: "Qual presidente implementou a política dos governadores?",
        options: [
            "Campos Sales",
            "Prudente de Morais",
            "Rodrigues Alves",
            "Nilo Peçanha"
        ],
        answer: 0,
        explanation: "Campos Sales (1898-1902) estabeleceu a 'Política dos Governadores', um acordo entre o governo federal e as oligarquias estaduais."
    },
    {
        question: "Qual foi o principal movimento messiânico do período?",
        options: [
            "Canudos",
            "Revolta da Vacina",
            "Revolta da Chibata",
            "Revolução Federalista"
        ],
        answer: 0,
        explanation: "O movimento de Canudos (1896-1897), liderado por Antônio Conselheiro, foi o principal movimento messiânico do período."
    },
    {
        question: "Qual presidente enfrentou a Revolta da Vacina?",
        options: [
            "Rodrigues Alves",
            "Afonso Pena",
            "Hermes da Fonseca",
            "Venceslau Brás"
        ],
        answer: 0,
        explanation: "Rodrigues Alves (1902-1906) enfrentou a Revolta da Vacina em 1904, quando a população se revoltou contra a vacinação obrigatória contra a varíola."
    },
    {
        question: "O que foi a Revolta da Chibata?",
        options: [
            "Levante de marinheiros contra castigos físicos",
            "Revolta de escravos",
            "Movimento de operários",
            "Protesto de estudantes"
        ],
        answer: 0,
        explanation: "Foi uma revolta de marinheiros em 1910, liderada por João Cândido, contra os castigos físicos na Marinha."
    },
    {
        question: "Qual presidente criou o Serviço de Proteção aos Índios (SPI)?",
        options: [
            "Marechal Rondon",
            "Nilo Peçanha",
            "Epitácio Pessoa",
            "Artur Bernardes"
        ],
        answer: 1,
        explanation: "Nilo Peçanha (1909-1910) criou o SPI em 1910, sob a direção de Marechal Rondon."
    },
    {
        question: "Qual foi o principal conflito militar entre estados durante a Primeira República?",
        options: [
            "Revolução Federalista",
            "Guerra de Canudos",
            "Revolta da Armada",
            "Revolta do Forte de Copacabana"
        ],
        answer: 0,
        explanation: "A Revolução Federalista (1893-1895) foi um conflito entre federalistas e republicanos no Rio Grande do Sul."
    },
    {
        question: "Qual presidente enfrentou a Primeira Guerra Mundial?",
        options: [
            "Venceslau Brás",
            "Epitácio Pessoa",
            "Artur Bernardes",
            "Washington Luís"
        ],
        answer: 0,
        explanation: "Venceslau Brás (1914-1918) foi o presidente durante a Primeira Guerra Mundial, quando o Brasil acabou entrando ao lado dos Aliados."
    },
    {
        question: "O que foi o Tenentismo?",
        options: [
            "Movimento de jovens oficiais do Exército",
            "Partido político",
            "Sindicato de trabalhadores",
            "Grupo de intelectuais"
        ],
        answer: 0,
        explanation: "Foi um movimento de jovens oficiais do Exército (tenentes) que criticavam as oligarquias e defendiam reformas políticas."
    },
    {
        question: "Qual presidente enfrentou a Revolta do Forte de Copacabana?",
        options: [
            "Epitácio Pessoa",
            "Artur Bernardes",
            "Washington Luís",
            "Rodrigues Alves"
        ],
        answer: 0,
        explanation: "Epitácio Pessoa (1919-1922) enfrentou a Revolta do Forte de Copacabana em 1922, primeiro levante tenentista."
    },
    {
        question: "Em que ano ocorreu a Semana de Arte Moderna?",
        options: [
            "1922",
            "1917",
            "1930",
            "1925"
        ],
        answer: 0,
        explanation: "A Semana de Arte Moderna ocorreu em fevereiro de 1922 no Teatro Municipal de São Paulo, marcando o início do Modernismo no Brasil."
    },
    {
        question: "Qual presidente enfrentou a Coluna Prestes?",
        options: [
            "Artur Bernardes",
            "Washington Luís",
            "Epitácio Pessoa",
            "Venceslau Brás"
        ],
        answer: 0,
        explanation: "Artur Bernardes (1922-1926) enfrentou a Coluna Prestes, movimento tenentista que percorreu o interior do Brasil pregando reformas."
    },
    {
        question: "O que foi o Cangaço?",
        options: [
            "Banditismo social no Nordeste",
            "Movimento operário",
            "Revolta militar",
            "Partido político"
        ],
        answer: 0,
        explanation: "Foi um fenômeno de banditismo social no Nordeste, com figuras como Lampião, que atuaram durante a Primeira República."
    },
    {
        question: "Qual presidente implementou o voto secreto?",
        options: [
            "Nenhum, só após 1930",
            "Rodrigues Alves",
            "Epitácio Pessoa",
            "Washington Luís"
        ],
        answer: 0,
        explanation: "O voto secreto só foi implementado após a Revolução de 1930, sendo uma das principais reivindicações não atendidas durante a Primeira República."
    },
    {
        question: "Qual foi o último presidente da Primeira República?",
        options: [
            "Washington Luís",
            "Júlio Prestes",
            "Getúlio Vargas",
            "Artur Bernardes"
        ],
        answer: 0,
        explanation: "Washington Luís (1926-1930) foi o último presidente da Primeira República, deposto pela Revolução de 1930."
    },
    {
        question: "Qual foi o principal partido político da Primeira República?",
        options: [
            "Não havia partidos nacionais organizados",
            "Partido Republicano Paulista",
            "Partido Republicano Mineiro",
            "Partido Democrático"
        ],
        answer: 0,
        explanation: "Não havia partidos nacionais organizados, apenas agremiações estaduais que apoiavam os presidentes."
    },
    {
        question: "O que foi a Revolução de 1930?",
        options: [
            "Movimento que encerrou a Primeira República",
            "Revolta militar",
            "Golpe comunista",
            "Independência regional"
        ],
        answer: 0,
        explanation: "Foi o movimento liderado por Getúlio Vargas que depôs Washington Luís e encerrou a Primeira República, iniciando a Era Vargas."
    },
    {
        question: "Qual foi o principal problema da economia durante a Primeira República?",
        options: [
            "Dependência do café",
            "Falta de indústrias",
            "Dívida externa",
            "Todos os anteriores"
        ],
        answer: 3,
        explanation: "Todos foram problemas: forte dependência do café como produto de exportação, falta de industrialização e elevada dívida externa."
    },
    {
        question: "Qual foi a principal rebelião operária do período?",
        options: [
            "Greve Geral de 1917",
            "Revolta da Vacina",
            "Revolta da Chibata",
            "Movimento Tenentista"
        ],
        answer: 0,
        explanation: "A Greve Geral de 1917 em São Paulo foi a principal manifestação operária, influenciada por ideias anarquistas e socialistas."
    },
    {
        question: "Qual presidente enfrentou a crise do café após 1929?",
        options: [
            "Washington Luís",
            "Júlio Prestes",
            "Getúlio Vargas",
            "Artur Bernardes"
        ],
        answer: 0,
        explanation: "Washington Luís enfrentou as consequências da quebra da Bolsa de Nova York em 1929, que afetou drasticamente as exportações de café."
    },
    {
        question: "O que foi o Convênio de Taubaté?",
        options: [
            "Acordo para valorizar o café",
            "Tratado de limites",
            "Pacto político",
            "Concordata religiosa"
        ],
        answer: 0,
        explanation: "Foi um acordo em 1906 entre os governos de São Paulo, Minas Gerais e Rio de Janeiro para comprar e estocar café a fim de manter os preços."
    },
    {
        question: "Qual foi o principal intelectual crítico da Primeira República?",
        options: [
            "Euclides da Cunha",
            "Machado de Assis",
            "Oswaldo Cruz",
            "Rui Barbosa"
        ],
        answer: 0,
        explanation: "Euclides da Cunha, com 'Os Sertões' (1902), foi um dos principais críticos, denunciando as desigualdades sociais do período."
    },
    {
        question: "Qual foi o principal avanço urbano do período?",
        options: [
            "Reforma Pereira Passos no Rio",
            "Construção de Brasília",
            "Industrialização de São Paulo",
            "Expansão da rede ferroviária"
        ],
        answer: 0,
        explanation: "A reforma urbana do prefeito Pereira Passos (1902-1906) modernizou o Rio de Janeiro, então capital federal."
    },
    {
        question: "Qual grupo foi mais excluído politicamente na Primeira República?",
        options: [
            "Operários e camponeses",
            "Fazendeiros de café",
            "Industriais",
            "Profissionais liberais"
        ],
        answer: 0,
        explanation: "Operários e camponeses foram os mais excluídos, sem representação política no sistema oligárquico da Primeira República."
    }
];

// Variáveis do quiz
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let quizCompleted = false;

// Elementos do DOM
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const progressElement = document.getElementById('progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const quizContainer = document.querySelector('.quiz-container');

// Carregar a pergunta atual
function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsElement.appendChild(optionElement);
    });
    
    progressElement.textContent = `${currentQuestion + 1}/${quizQuestions.length}`;
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? 'Finalizar' : 'Próxima';
    
    // Resetar seleção e feedback
    selectedOption = null;
    feedbackElement.className = 'feedback';
    feedbackElement.textContent = '';
}

// Selecionar uma opção
function selectOption(e) {
    if (quizCompleted) return;
    
    // Remover seleção anterior
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Marcar opção selecionada
    const selectedElement = e.target;
    selectedElement.classList.add('selected');
    selectedOption = parseInt(selectedElement.dataset.index);
    
    // Verificar resposta
    checkAnswer();
}

// Verificar resposta
function checkAnswer() {
    const question = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    // Mostrar feedback
    if (selectedOption === question.answer) {
        feedbackElement.textContent = `Correto! ${question.explanation}`;
        feedbackElement.className = 'feedback correct';
        score++;
    } else {
        feedbackElement.textContent = `Incorreto. ${question.explanation}`;
        feedbackElement.className = 'feedback incorrect';
        
        // Mostrar a resposta correta
        options[question.answer].classList.add('correct');
        if (selectedOption !== null) {
            options[selectedOption].classList.add('incorrect');
        }
    }
    
    // Desabilitar outras opções
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

// Navegação
nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizQuestions.length - 1) {
        if (selectedOption === null && !quizCompleted) {
            feedbackElement.textContent = 'Por favor, selecione uma resposta antes de continuar.';
            feedbackElement.className = 'feedback incorrect';
            return;
        }
        
        currentQuestion++;
        loadQuestion();
    } else {
        if (selectedOption === null && !quizCompleted) {
            feedbackElement.textContent = 'Por favor, selecione uma resposta antes de finalizar.';
            feedbackElement.className = 'feedback incorrect';
            return;
        }
        showResults();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

// Mostrar resultados finais
function showResults() {
    quizCompleted = true;
    quizContainer.innerHTML = `
        <h1>Primeira República</h1>
        <h2>Resultado do Quiz</h2>
        <p>Você acertou ${score} de ${quizQuestions.length} perguntas!</p>
        <p>${getPerformanceMessage(score)}</p>
        <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">Refazer Quiz</button>
    `;
}

function getPerformanceMessage(score) {
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 80) return 'Excelente! Você conhece muito bem a Primeira República!';
    if (percentage >= 60) return 'Bom trabalho! Você tem um bom conhecimento sobre o período.';
    if (percentage >= 40) return 'Não foi mal! Recomendamos estudar mais sobre o tema.';
    return 'Você pode melhorar! Que tal estudar mais sobre a Primeira República?';
}

// Iniciar quiz
loadQuestion();