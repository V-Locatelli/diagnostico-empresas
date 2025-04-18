document.addEventListener('DOMContentLoaded', function() {
    // Capturar o formulário
    const form = document.getElementById('diagnosticoForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter as respostas
            const financas = parseInt(form.financas.value);
            const marketing = parseInt(form.marketing.value);
            const operacoes = parseInt(form.operacoes.value);
            
            // Verificar se todos os campos foram preenchidos
            if (isNaN(financas) || isNaN(marketing) || isNaN(operacoes)) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            
            // Calcular a média
            const media = ((financas + marketing + operacoes) / 3).toFixed(1);
            
            // Mostrar a área de resultados
            document.getElementById('resultados').classList.remove('d-none');
            
            // Gerar gráfico
            gerarGrafico(financas, marketing, operacoes);
            
            // Gerar recomendações
            gerarRecomendacoes(financas, marketing, operacoes);
            
            // Rolar para os resultados
            document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

function gerarGrafico(financas, marketing, operacoes) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    // Destruir gráfico existente se houver
    if (window.myRadarChart) {
        window.myRadarChart.destroy();
    }
    
    window.myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Gestão Financeira', 'Marketing e Vendas', 'Operações'],
            datasets: [{
                label: 'Avaliação',
                data: [financas, marketing, operacoes],
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
            }
        }
    });
}

function gerarRecomendacoes(financas, marketing, operacoes) {
    const recomendacoesDiv = document.getElementById('recomendacoes');
    recomendacoesDiv.innerHTML = '';
    
    let html = '<ul>';
    
    // Recomendações financeiras
    if (financas <= 2) {
        html += '<li><strong>Gestão Financeira:</strong> Implemente controles financeiros básicos, como fluxo de caixa e controle de despesas.</li>';
    } else if (financas <= 3) {
        html += '<li><strong>Gestão Financeira:</strong> Analise regularmente indicadores financeiros e estabeleça metas claras para melhorar a lucratividade.</li>';
    } else if (financas <= 4) {
        html += '<li><strong>Gestão Financeira:</strong> Considere estratégias de investimento para expansão e diversificação de receitas.</li>';
    }
    
    // Recomendações de marketing
    if (marketing <= 2) {
        html += '<li><strong>Marketing e Vendas:</strong> Desenvolva uma presença online básica e defina seu público-alvo.</li>';
    } else if (marketing <= 3) {
        html += '<li><strong>Marketing e Vendas:</strong> Invista em campanhas direcionadas e melhore sua estratégia de conteúdo.</li>';
    } else if (marketing <= 4) {
        html += '<li><strong>Marketing e Vendas:</strong> Explore novos canais de marketing e analise dados para otimizar conversões.</li>';
    }
    
    // Recomendações operacionais
    if (operacoes <= 2) {
        html += '<li><strong>Operações:</strong> Documente processos básicos e identifique gargalos operacionais.</li>';
    } else if (operacoes <= 3) {
        html += '<li><strong>Operações:</strong> Implemente melhorias de eficiência e considere automação de processos repetitivos.</li>';
    } else if (operacoes <= 4) {
        html += '<li><strong>Operações:</strong> Otimize sua cadeia de fornecimento e explore inovações tecnológicas no seu setor.</li>';
    }
    
    html += '</ul>';
    
    // Adicionar conclusão geral
    const media = ((financas + marketing + operacoes) / 3).toFixed(1);
    html += `<p class="mt-3"><strong>Avaliação geral:</strong> ${media}/5</p>`;
    
    recomendacoesDiv.innerHTML = html;
}
