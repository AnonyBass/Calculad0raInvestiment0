document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('calculatorBody');
    const summary = document.getElementById('summary');
    let totalRendimento = 0;

    for (let i = 1; i <= 36; i++) {
        const row = tableBody.insertRow();
        
        // Mês
        row.insertCell().textContent = i;
        
        // Data
        const date = new Date(2024, 7 + i, 1);
        row.insertCell().textContent = date.toLocaleDateString('pt-BR');
        
        // Rendimento Líquido
        let rendimento;
        if (i <= 5) rendimento = 9656.50;
        else if (i <= 11) rendimento = 9968;
        else if (i <= 23) rendimento = 12279.50;
        else rendimento = 10591;
        row.insertCell().textContent = rendimento.toFixed(2);
        totalRendimento += rendimento;
        
        // Alíquota IR
        let aliquota;
        if (i <= 5) aliquota = 22.5;
        else if (i <= 11) aliquota = 20;
        else if (i <= 23) aliquota = 17.5;
        else aliquota = 15;
        row.insertCell().textContent = aliquota.toFixed(1) + '%';
    }

    summary.innerHTML = `
        Rendimento Total: R$ ${totalRendimento.toFixed(2)}<br>
        Rendimento Médio Mensal: R$ ${(totalRendimento / 36).toFixed(2)}
    `;
});
