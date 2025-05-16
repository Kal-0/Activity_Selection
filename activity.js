// Função que realiza a seleção de atividades usando o algoritmo guloso
function activitySelection(start, end) {
    // Cria uma lista de objetos {start, end} associando os tempos de início e fim
    const activities = start.map((s, i) => ({ start: s, end: end[i] }));

    // Ordena as atividades com base no tempo de término (end) em ordem crescente
    activities.sort((a, b) => a.end - b.end);

    // Array para armazenar as atividades selecionadas
    const selected = [];

    // Variável para rastrear o tempo de término da última atividade selecionada
    let lastEnd = 0;

    // Percorre todas as atividades ordenadas
    for (const activity of activities) {
        // Se a atividade atual começar após ou exatamente quando a última terminou
        if (activity.start >= lastEnd) {
            // Seleciona a atividade
            selected.push(activity);

            // Atualiza o último tempo de término
            lastEnd = activity.end;
        }
    }

    // Retorna a lista de atividades selecionadas
    return selected;
}

// --- Exemplo de uso ---

// Vetores de tempos de início e fim das atividades
const start = [1, 3, 0, 5, 8, 5];
const end   = [4, 5, 6, 7, 9, 9];

// Chama a função de seleção de atividades
const result = activitySelection(start, end);

// Exibe no console as atividades selecionadas
console.log("Atividades selecionadas:");
result.forEach(a => console.log(`Início: ${a.start}, Fim: ${a.end}`));
