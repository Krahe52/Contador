const dataInicio = new Date(2023, 6, 22); // Data de início do relacionamento

function calcularTempoJuntos() {
    const hoje = new Date();
    const diffTime = hoje - dataInicio; // Diferença em milissegundos

    // Calculando a diferença em anos, meses, dias, horas, minutos e segundos
    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();
    let horas = hoje.getHours() - dataInicio.getHours();
    let minutos = hoje.getMinutes() - dataInicio.getMinutes();
    let segundos = hoje.getSeconds() - dataInicio.getSeconds();

    // Ajustar os meses e anos se necessário
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    // Ajustar os dias se necessário
    if (dias < 0) {
        const ultimoDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += ultimoDiaDoMes;
        meses--; // Subtrair um mês adicional se necessário
    }

    // Ajustar as horas, minutos e segundos se necessário
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    // Ajustar a exibição dos anos, meses, dias, horas, minutos e segundos no singular/plural
    const anosTexto = anos === 1 ? 'ano' : 'anos';
    const mesesTexto = meses === 1 ? 'mês' : 'meses';
    const diasTexto = dias === 1 ? 'dia' : 'dias';
    const horasTexto = horas === 1 ? 'hora' : 'horas';
    const minutosTexto = minutos === 1 ? 'minuto' : 'minutos';
    const segundosTexto = segundos === 1 ? 'segundo' : 'segundos';

    // Exibir o formato de anos, meses, dias, horas, minutos e segundos
    document.getElementById("tempo-juntos").textContent = `${anos} ${anosTexto}, ${meses} ${mesesTexto}, ${dias} ${diasTexto}, ${horas} ${horasTexto}, ${minutos} ${minutosTexto} e ${segundos} ${segundosTexto}`;
}

// Calcular assim que a página for carregada e depois atualizar a cada 1 segundo
setInterval(calcularTempoJuntos, 1000);
