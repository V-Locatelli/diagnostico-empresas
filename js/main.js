document.addEventListener('DOMContentLoaded', function() {
    // Capturar o formulário
    const form = document.getElementById('diagnosticoForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter informações da empresa
            const nomeEmpresa = form.nomeEmpresa.value;
            const segmento = form.segmento.value;
            const faturamento = form.faturamento.value;
            const colaboradores = form.colaboradores.value;
            const cargoLead = form.cargoLead.value;
            const nomeRespondente = form.nomeRespondente.value;
            const email = form.email.value;
            const telefone = form.telefone.value;
            
            // Obter perguntas estratégicas
            const desafio = form.desafio.value;
            const iniciativas = form.iniciativas.value;
            
            // Obter respostas das áreas de diagnóstico
            // 1. Estratégia
            const estrategia1 = parseInt(form.estrategia1.value);
            const estrategia2 = parseInt(form.estrategia2.value);
            const estrategia3 = parseInt(form.estrategia3.value);
            
            // 2. Vendas
            const vendas1 = parseInt(form.vendas1.value);
            const vendas2 = parseInt(form.vendas2.value);
            const vendas3 = parseInt(form.vendas3.value);
            
            // 3. Operações
            const operacoes1 = parseInt(form.operacoes1.value);
            const operacoes2 = parseInt(form.operacoes2.value);
            const operacoes3 = parseInt(form.operacoes3.value);
            
            // 4. Liderança
            const lideranca1 = parseInt(form.lideranca1.value);
            const lideranca2 = parseInt(form.lideranca2.value);
            const lideranca3 = parseInt(form.lideranca3.value);
            
            // 5. Marketing
            const marketing1 = parseInt(form.marketing1.value);
            const marketing2 = parseInt(form.marketing2.value);
            const marketing3 = parseInt(form.marketing3.value);
            
            // 6. Clientes
            const clientes1 = parseInt(form.clientes1.value);
            const clientes2 = parseInt(form.clientes2.value);
            const clientes3 = parseInt(form.clientes3.value);
            
            // 7. Tecnologia
            const tecnologia1 = parseInt(form.tecnologia1.value);
            const tecnologia2 = parseInt(form.tecnologia2.value);
            const tecnologia3 = parseInt(form.tecnologia3.value);
            
            // Verificar se todos os campos numéricos foram preenchidos
            const camposNumericos = [
                estrategia1, estrategia2, estrategia3,
                vendas1, vendas2, vendas3,
                operacoes1, operacoes2, operacoes3,
                lideranca1, lideranca2, lideranca3,
                marketing1, marketing2, marketing3,
                clientes1, clientes2, clientes3,
                tecnologia1, tecnologia2, tecnologia3
            ];
            
            if (camposNumericos.some(isNaN)) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            
            // Calcular médias por área
            const mediaEstrategia = ((estrategia1 + estrategia2 + estrategia3) / 3).toFixed(1);
            const mediaVendas = ((vendas1 + vendas2 + vendas3) / 3).toFixed(1);
            const mediaOperacoes = ((operacoes1 + operacoes2 + operacoes3) / 3).toFixed(1);
            const mediaLideranca = ((lideranca1 + lideranca2 + lideranca3) / 3).toFixed(1);
            const mediaMarketing = ((marketing1 + marketing2 + marketing3) / 3).toFixed(1);
            const mediaClientes = ((clientes1 + clientes2 + clientes3) / 3).toFixed(1);
            const mediaTecnologia = ((tecnologia1 + tecnologia2 + tecnologia3) / 3).toFixed(1);
            
            // Calcular média geral
            const mediaGeral = (
                (parseFloat(mediaEstrategia) + 
                parseFloat(mediaVendas) + 
                parseFloat(mediaOperacoes) + 
                parseFloat(mediaLideranca) + 
                parseFloat(mediaMarketing) +
                parseFloat(mediaClientes) +
                parseFloat(mediaTecnologia)) / 7
            ).toFixed(1);
            
            // Mostrar a área de resultados
            document.getElementById('resultados').classList.remove('d-none');
            
            // Exibir informações da empresa
            exibirInfoEmpresa(nomeEmpresa, segmento, faturamento, colaboradores, cargoLead, nomeRespondente, email, telefone);
            
            // Gerar gráfico
            gerarGrafico(mediaEstrategia, mediaVendas, mediaOperacoes, mediaLideranca, mediaMarketing, mediaClientes, mediaTecnologia);
            
            // Gerar recomendações
            gerarRecomendacoes({
                estrategia: { media: mediaEstrategia, valores: [estrategia1, estrategia2, estrategia3] },
                vendas: { media: mediaVendas, valores: [vendas1, vendas2, vendas3] },
                operacoes: { media: mediaOperacoes, valores: [operacoes1, operacoes2, operacoes3] },
                lideranca: { media: mediaLideranca, valores: [lideranca1, lideranca2, lideranca3] },
                marketing: { media: mediaMarketing, valores: [marketing1, marketing2, marketing3] },
                clientes: { media: mediaClientes, valores: [clientes1, clientes2, clientes3] },
                tecnologia: { media: mediaTecnologia, valores: [tecnologia1, tecnologia2, tecnologia3] },
                mediaGeral: mediaGeral,
                desafio: desafio
            });
            
            // Configurar botões de exportação
            configurarBotoesExportacao({
                empresa: {
                    nome: nomeEmpresa,
                    segmento: segmento,
                    faturamento: faturamento,
                    colaboradores: colaboradores,
                    cargo: cargoLead,
                    respondente: nomeRespondente,
                    email: email,
                    telefone: telefone
                },
                estrategicas: {
                    desafio: desafio,
                    iniciativas: iniciativas
                },
                respostas: {
                    estrategia1: estrategia1,
                    estrategia2: estrategia2,
                    estrategia3: estrategia3,
                    vendas1: vendas1,
                    vendas2: vendas2,
                    vendas3: vendas3,
                    operacoes1: operacoes1,
                    operacoes2: operacoes2,
                    operacoes3: operacoes3,
                    lideranca1: lideranca1,
                    lideranca2: lideranca2,
                    lideranca3: lideranca3,
                    marketing1: marketing1,
                    marketing2: marketing2,
                    marketing3: marketing3,
                    clientes1: clientes1,
                    clientes2: clientes2,
                    clientes3: clientes3,
                    tecnologia1: tecnologia1,
                    tecnologia2: tecnologia2,
                    tecnologia3: tecnologia3
                },
                medias: {
                    estrategia: mediaEstrategia,
                    vendas: mediaVendas,
                    operacoes: mediaOperacoes,
                    lideranca: mediaLideranca,
                    marketing: mediaMarketing,
                    clientes: mediaClientes,
                    tecnologia: mediaTecnologia,
                    geral: mediaGeral
                }
            });
            
            // Rolar para os resultados
            document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

function exibirInfoEmpresa(nome, segmento, faturamento, colaboradores, cargo, nomeRespondente, email, telefone) {
    const infoDiv = document.getElementById('infoEmpresa');
    
    let html = `
    <div class="mb-3">
        <p><strong>Nome da Empresa:</strong> ${nome}</p>
        <p><strong>Segmento:</strong> ${segmento}</p>
        <p><strong>Faturamento Anual Médio:</strong> ${faturamento}</p>
        <p><strong>Número de Colaboradores:</strong> ${colaboradores}</p>
        <p><strong>Cargo/Função:</strong> ${cargo}</p>
        <p><strong>Nome do Respondente:</strong> ${nomeRespondente}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
    </div>`;
    
    infoDiv.innerHTML = html;
}

function gerarGrafico(estrategia, vendas, operacoes, lideranca, marketing, clientes, tecnologia) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    // Destruir gráfico existente se houver
    if (window.myRadarChart) {
        window.myRadarChart.destroy();
    }
    
    window.myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Estratégia do Negócio',
                'Máquina de Vendas',
                'Excelência Operacional',
                'Líderes e Equipes',
                'Marketing',
                'Relacionamento com Clientes',
                'Tecnologia e Automação'
            ],
            datasets: [{
                label: 'Avaliação (1-5)',
                data: [estrategia, vendas, operacoes, lideranca, marketing, clientes, tecnologia],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            scales: {
                r: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
}

function gerarRecomendacoes(dados) {
    const recomendacoesDiv = document.getElementById('recomendacoes');
    recomendacoesDiv.innerHTML = '';
    
    let html = '<div class="mb-4">';
    
    // Identificar as 3 áreas mais críticas (menores médias)
    const areas = [
        { nome: "Estratégia do Negócio", media: dados.estrategia.media, tipo: "estrategia" },
        { nome: "Máquina de Vendas", media: dados.vendas.media, tipo: "vendas" },
        { nome: "Excelência Operacional", media: dados.operacoes.media, tipo: "operacoes" },
        { nome: "Líderes e Equipes", media: dados.lideranca.media, tipo: "lideranca" },
        { nome: "Marketing", media: dados.marketing.media, tipo: "marketing" },
        { nome: "Relacionamento com Clientes", media: dados.clientes.media, tipo: "clientes" },
        { nome: "Tecnologia e Automação", media: dados.tecnologia.media, tipo: "tecnologia" }
    ];
    
    // Ordenar áreas da menor para a maior média
    areas.sort((a, b) => parseFloat(a.media) - parseFloat(b.media));
    
    html += `<h4>Áreas Prioritárias</h4>
    <p>Com base no diagnóstico, essas são as 3 áreas que precisam de maior atenção:</p>
    <ol>
        <li><strong>${areas[0].nome}</strong> (${areas[0].media}/5)</li>
        <li><strong>${areas[1].nome}</strong> (${areas[1].media}/5)</li>
        <li><strong>${areas[2].nome}</strong> (${areas[2].media}/5)</li>
    </ol>`;
    
    html += '</div>';
    
    // Gerar recomendações específicas para cada área prioritária
    html += '<div class="mb-4">';
    html += '<h4>Recomendações Específicas</h4>';
    html += '<ul>';
    
    // Recomendações para a primeira área prioritária
    gerarRecomendacaoArea(areas[0].tipo, dados[areas[0].tipo].valores, areas[0].nome).forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    
    // Recomendações para a segunda área prioritária
    gerarRecomendacaoArea(areas[1].tipo, dados[areas[1].tipo].valores, areas[1].nome).forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    
    // Recomendações para a terceira área prioritária
    gerarRecomendacaoArea(areas[2].tipo, dados[areas[2].tipo].valores, areas[2].nome).forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    
    html += '</ul>';
    html += '</div>';
    
    // Adicionar conclusão geral
    html += `
    <div class="mb-4">
        <h4>Avaliação Geral</h4>
        <p>Pontuação média geral: <strong>${dados.mediaGeral}/5</strong></p>
        <p>Considerando o desafio relatado pela empresa: "${dados.desafio}", recomendamos focar inicialmente nas áreas prioritárias identificadas acima para obter melhorias rápidas e significativas.</p>
    </div>`;
    
    // Adicionar tabela com todas as médias
    html += `
    <div class="table-responsive">
        <table class="table table-sm table-bordered">
            <thead class="table-light">
                <tr>
                    <th>Área</th>
                    <th>Pontuação Média</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1. Estratégia do Negócio</td><td>${dados.estrategia.media}</td></tr>
                <tr><td>2. Máquina de Vendas</td><td>${dados.vendas.media}</td></tr>
                <tr><td>3. Excelência Operacional</td><td>${dados.operacoes.media}</td></tr>
                <tr><td>4. Líderes e Equipes</td><td>${dados.lideranca.media}</td></tr>
                <tr><td>5. Marketing</td><td>${dados.marketing.media}</td></tr>
                <tr><td>6. Relacionamento com Clientes</td><td>${dados.clientes.media}</td></tr>
                <tr><td>7. Tecnologia e Automação</td><td>${dados.tecnologia.media}</td></tr>
                <tr class="table-primary"><td><strong>Média Geral</strong></td><td><strong>${dados.mediaGeral}</strong></td></tr>
            </tbody>
        </table>
    </div>`;
    
    recomendacoesDiv.innerHTML = html;
}

function gerarRecomendacaoArea(tipo, valores, nomeArea) {
    const recomendacoes = [];
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    
    switch (tipo) {
        case 'estrategia':
            if (valores[0] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Desenvolva um processo estruturado para definir visão, missão e valores da empresa, bem como metas claras para curto e médio prazo.`);
            }
            if (valores[1] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Elabore um plano estratégico documentado para os próximos 3-5 anos, engajando lideranças e definindo objetivos tangíveis.`);
            }
            if (valores[2] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Implemente reuniões periódicas de acompanhamento estratégico e ferramentas de monitoramento de KPIs.`);
            }
            break;
            
        case 'vendas':
            if (valores[0] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Defina e documente um funil de vendas claro, com etapas bem estruturadas e indicadores específicos para cada fase.`);
            }
            if (valores[1] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Implemente um sistema de forecast de vendas e metas baseadas em dados históricos e projeções realistas.`);
            }
            if (valores[2] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Mapeie e diversifique canais de aquisição de leads, melhorando os processos de qualificação e controle.`);
            }
            break;
            
        case 'operacoes':
            if (valores[0] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Documente seus processos principais e crie fluxogramas visuais de fácil entendimento para a equipe.`);
            }
            if (valores[1] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Implemente auditorias internas e processos de controle de qualidade para reduzir erros e retrabalho.`);
            }
            if (valores[2] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Desenvolva uma metodologia de gestão de capacidade e planejamento de recursos para suportar o crescimento.`);
            }
            break;
            
        case 'lideranca':
            if (valores[0] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Invista em capacitação e mentoria para líderes, com foco em gestão estratégica e liderança de equipes.`);
            }
            if (valores[1] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Implemente pesquisas de clima organizacional e programas de engajamento e reconhecimento.`);
            }
            if (valores[2] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Revise e atualize descrições de cargos, matriz de responsabilidades e estrutura organizacional.`);
            }
            break;
            
        case 'marketing':
            if (valores[0] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Reformule sua proposta de valor, tornando-a mais clara e relevante para seu público-alvo.`);
            }
            if (valores[1] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Realize uma pesquisa de mercado para entender melhor a concorrência e definir um posicionamento distintivo.`);
            }
            if (valores[2] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Desenvolva um plano de marketing anual com campanhas e métricas claramente definidas.`);
            }
            break;
            
        case 'clientes':
            if (valores[0] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Implemente programas estruturados de retenção, fidelização e customer success.`);
            }
            if (valores[1] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Realize pesquisas e entrevistas com clientes para mapear personas e jornadas de compra detalhadas.`);
            }
            if (valores[2] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Estabeleça métricas de satisfação (NPS, CSAT) e processos de feedback contínuos.`);
            }
            break;
            
        case 'tecnologia':
            if (valores[0] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Realize um diagnóstico tecnológico e identifique processos prioritários para otimização e digitalização.`);
            }
            if (valores[1] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Implemente ferramentas básicas de automação para tarefas repetitivas nas áreas administrativa, financeira e comercial.`);
            }
            if (valores[2] <= 3) {
                recomendacoes.push(`<strong>${nomeArea}:</strong> Desenvolva dashboards e sistemas de BI para análise de dados e suporte à tomada de decisão.`);
            }
            break;
    }
    
    // Se não houver recomendações específicas ou a média for boa, adicionar uma recomendação geral
    if (recomendacoes.length === 0 || media > 3) {
        recomendacoes.push(`<strong>${nomeArea}:</strong> Continue fortalecendo esta área, implementando melhorias incrementais e benchmarks com referências do mercado.`);
    }
    
    return recomendacoes;
}

// Função para configurar os botões de exportação
function configurarBotoesExportacao(dados) {
    document.getElementById('exportarCSV').addEventListener('click', function() {
        exportarCSV(dados);
    });
    
    document.getElementById('exportarPDF').addEventListener('click', function() {
        exportarPDF();
    });
}

// Função para exportar dados em formato CSV
function exportarCSV(dados) {
    // Criar cabeçalhos
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Informações da empresa
    csvContent += "INFORMAÇÕES DA EMPRESA\r\n";
    csvContent += "Nome da Empresa," + dados.empresa.nome + "\r\n";
    csvContent += "Segmento," + dados.empresa.segmento + "\r\n";
    csvContent += "Faturamento," + dados.empresa.faturamento + "\r\n";
    csvContent += "Colaboradores," + dados.empresa.colaboradores + "\r\n";
    csvContent += "Cargo/Função," + dados.empresa.cargo + "\r\n";
    csvContent += "Nome do Respondente," + dados.empresa.respondente + "\r\n";
    csvContent += "Email," + dados.empresa.email + "\r\n";
    csvContent += "Telefone," + dados.empresa.telefone + "\r\n\r\n";
    
    // Perguntas estratégicas
    csvContent += "PERGUNTAS ESTRATÉGICAS\r\n";
    csvContent += "Desafio,\"" + dados.estrategicas.desafio.replace(/"/g, '""') + "\"\r\n";
    csvContent += "Iniciativas,\"" + dados.estrategicas.iniciativas.replace(/"/g, '""') + "\"\r\n\r\n";
    
    // Respostas por área
    csvContent += "RESPOSTAS DO DIAGNÓSTICO\r\n";
    csvContent += "Área,Questão,Nota\r\n";
    
    // Estratégia
    csvContent += "Estratégia,Visão de futuro clara e metas bem definidas," + dados.respostas.estrategia1 + "\r\n";
    csvContent += "Estratégia,Plano estratégico estruturado para 3-5 anos," + dados.respostas.estrategia2 + "\r\n";
    csvContent += "Estratégia,Acompanhamento regular do progresso," + dados.respostas.estrategia3 + "\r\n";
    
    // Vendas
    csvContent += "Vendas,Funil de vendas definido e monitorado," + dados.respostas.vendas1 + "\r\n";
    csvContent += "Vendas,Previsibilidade nas receitas," + dados.respostas.vendas2 + "\r\n";
    csvContent += "Vendas,Canais de aquisição estruturados," + dados.respostas.vendas3 + "\r\n";
    
    // Operações
    csvContent += "Operações,Processos bem documentados," + dados.respostas.operacoes1 + "\r\n";
    csvContent += "Operações,Baixa incidência de erros," + dados.respostas.operacoes2 + "\r\n";
    csvContent += "Operações,Capacidade de escalar produção," + dados.respostas.operacoes3 + "\r\n";
    
    // Liderança
    csvContent += "Liderança,Maturidade para decisões estratégicas," + dados.respostas.lideranca1 + "\r\n";
    csvContent += "Liderança,Equipe comprometida com objetivos," + dados.respostas.lideranca2 + "\r\n";
    csvContent += "Liderança,Clareza de papéis e responsabilidades," + dados.respostas.lideranca3 + "\r\n";
    
    // Marketing
    csvContent += "Marketing,Proposta de valor bem comunicada," + dados.respostas.marketing1 + "\r\n";
    csvContent += "Marketing,Marca bem posicionada," + dados.respostas.marketing2 + "\r\n";
    csvContent += "Marketing,Resultados consistentes," + dados.respostas.marketing3 + "\r\n";
    
    // Clientes
    csvContent += "Clientes,Processos de retenção estruturados," + dados.respostas.clientes1 + "\r\n";
    csvContent += "Clientes,Clareza sobre comportamentos dos clientes," + dados.respostas.clientes2 + "\r\n";
    csvContent += "Clientes,Acompanhamento de satisfação," + dados.respostas.clientes3 + "\r\n";
    
    // Tecnologia
    csvContent += "Tecnologia,Uso para otimizar processos," + dados.respostas.tecnologia1 + "\r\n";
    csvContent += "Tecnologia,Automação de atividades repetitivas," + dados.respostas.tecnologia2 + "\r\n";
    csvContent += "Tecnologia,Uso de dados para decisões," + dados.respostas.tecnologia3 + "\r\n\r\n";
    
    // Médias
    csvContent += "MÉDIAS POR ÁREA\r\n";
    csvContent += "Estratégia," + dados.medias.estrategia + "\r\n";
    csvContent += "Vendas," + dados.medias.vendas + "\r\n";
    csvContent += "Operações," + dados.medias.operacoes + "\r\n";
    csvContent += "Liderança," + dados.medias.lideranca + "\r\n";
    csvContent += "Marketing," + dados.medias.marketing + "\r\n";
    csvContent += "Clientes," + dados.medias.clientes + "\r\n";
    csvContent += "Tecnologia," + dados.medias.tecnologia + "\r\n";
    csvContent += "MÉDIA GERAL," + dados.medias.geral + "\r\n";
    
    // Criar link para download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "diagnostico_" + dados.empresa.nome.replace(/\s+/g, '_') + "_" + formatarData() + ".csv");
    document.body.appendChild(link);
    
    // Iniciar download
    link.click();
    document.body.removeChild(link);
}

// Função para exportar resultados em PDF
function exportarPDF() {
    // Referência ao objeto jsPDF
    const { jsPDF } = window.jspdf;
    
    // Obter elemento que contém os resultados
    const conteudo = document.getElementById('resultados');
    
    // Definir estilo temporário para melhorar a renderização
    const estiloOriginal = conteudo.style.width;
    conteudo.style.width = '1000px';
    
    // Mostrar mensagem de processamento
    const mensagemCarregando = document.createElement('div');
    mensagemCarregando.className = 'alert alert-info mt-3';
    mensagemCarregando.textContent = 'Gerando PDF, por favor aguarde...';
    conteudo.appendChild(mensagemCarregando);
    
    // Pequeno atraso para garantir que a mensagem seja renderizada
    setTimeout(() => {
        // Usar html2canvas para transformar o conteúdo em uma imagem
        html2canvas(conteudo, { 
            scale: 1,
            useCORS: true,
            logging: false,
            allowTaint: true
        }).then(canvas => {
            // Remover mensagem de carregamento
            conteudo.removeChild(mensagemCarregando);
            conteudo.style.width = estiloOriginal;
            
            // Calcular as dimensões
            const imgData = canvas.toDataURL('image/png');
            const imgProps = canvas.width / canvas.height;
            const pdfWidth = 210; // A4 em mm (largura)
            const pdfHeight = pdfWidth / imgProps;
            
            // Criar documento PDF
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            // Adicionar título
            pdf.setFontSize(18);
            pdf.text('Diagnóstico Empresarial', 105, 15, { align: 'center' });
            
            // Adicionar imagem
            pdf.addImage(imgData, 'PNG', 0, 25, pdfWidth, pdfHeight);
            
            // Adicionar rodapé
            pdf.setFontSize(10);
            pdf.text('Diagnóstico gerado em: ' + obterDataHoraAtual(), 105, 290, { align: 'center' });
            
            // Fazer download do PDF
            const nomeEmpresa = document.querySelector('input[name="nomeEmpresa"]').value.replace(/\s+/g, '_');
            pdf.save('diagnostico_' + nomeEmpresa + '_' + formatarData() + '.pdf');
        });
    }, 500);
}

// Função para formatar a data atual para uso nos nomes de arquivo
function formatarData() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return ano + mes + dia;
}

// Função para obter data e hora atual formatada
function obterDataHoraAtual() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    
    return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;
}
