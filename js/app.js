function comprar() {
    // Obtém o tipo de ingresso selecionado pelo usuário (pista, cadeira superior ou inferior)
    const tipoIngresso = document.getElementById('tipo-ingresso').value;

    // Obtém a quantidade de ingressos digitada pelo usuário e converte para número inteiro
    const quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    // Obtém o elemento HTML que exibe a quantidade disponível para o tipo de ingresso selecionado
    const quantidadeDisponivelElement = document.getElementById(`qtd-${tipoIngresso}`);

    // Converte o texto dentro do elemento para um número inteiro (quantidade disponível)
    let quantidadeDisponivel = parseInt(quantidadeDisponivelElement.textContent);

    // Verifica se a quantidade inserida é inválida (menor ou igual a 0 ou não é um número)
    if (quantidadeIngresso <= 0 || isNaN(quantidadeIngresso)) {
        alert('Por favor, insira uma quantidade válida.'); // Alerta de erro
        return; // Encerra a função sem continuar
    }

    // Verifica se a quantidade desejada pelo usuário é maior que a disponível
    if (quantidadeIngresso > quantidadeDisponivel) {
        alert('A quantidade de ingressos que você deseja é maior que a disponível.'); // Alerta de erro
        return; // Encerra a função sem continuar
    }

    // Atualiza a quantidade disponível subtraindo a quantidade comprada
    quantidadeDisponivel -= quantidadeIngresso;

    // Atualiza o valor na interface, refletindo a nova quantidade disponível
    quantidadeDisponivelElement.textContent = quantidadeDisponivel;

    alert('Compra realizada com sucesso!'); // Alerta de sucesso de compra!
}
