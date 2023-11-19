document.addEventListener('DOMContentLoaded', function () {
  // Função para realizar o remanejamento ao enviar o formulário
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const ppaApis = parseInt(document.querySelector('[name="ppa_apis"]').value);
    const ppaChildren = parseInt(
      document.querySelector('[name="ppa_children"]').value
    );

    const ppbApis = parseInt(document.querySelector('[name="ppb_apis"]').value);
    const ppbChildren = parseInt(
      document.querySelector('[name="ppb_children"]').value
    );

    const m1aApis = parseInt(document.querySelector('[name="M1A_apis"]').value);
    const m1aChildren = parseInt(
      document.querySelector('[name="M1A_children"]').value
    );

    // Adicione campos semelhantes para as outras salas

    // Realiza o remanejamento
    const remanejamentoPPA = realizarRemanejamento(
      ppaApis,
      ppaChildren,
      4,
      'PPA'
    );
    const remanejamentoPPB = realizarRemanejamento(
      ppbApis,
      ppbChildren,
      4,
      'PPB'
    );
    const remanejamentoM1A = realizarRemanejamento(
      m1aApis,
      m1aChildren,
      3,
      'M1A'
    );

    // Exibe o resultado (pode ser ajustado conforme necessário)
    alert(
      `Remanejamento: ${remanejamentoPPA.remanejamento} APIs - De ${remanejamentoPPA.origem} para ${remanejamentoPPA.destino}`
    );
    alert(
      `Remanejamento PPB: ${remanejamentoPPB.remanejamento} APIs - De ${remanejamentoPPB.origem} para ${remanejamentoPPB.destino}`
    );
    alert(
      `Remanejamento M1A: ${remanejamentoM1A.remanejamento} APIs - De ${remanejamentoM1A.origem} para ${remanejamentoM1A.destino}`
    );
  });

  // Função para calcular o remanejamento com base no número de crianças
  function realizarRemanejamento(apisAtuais, crianças, limite, salaOrigem) {
    // Lógica de remanejamento (pode ser ajustada conforme necessário)
    const apisNecessários = Math.ceil(crianças / 10); // Exemplo: 1 API para cada 10 crianças
    const remanejamento = Math.min(apisNecessários, limite) - apisAtuais;

    return {
      remanejamento: remanejamento > 0 ? remanejamento : 0,
      origem: salaOrigem,
      destino: remanejamento > 0 ? encontrarSalaDestino(salaOrigem) : '',
    };
  }

  // Função para encontrar a sala de destino (pode ser ajustada conforme necessário)
  function encontrarSalaDestino(salaOrigem) {
    // Lógica para determinar a sala de destino com base nas regras específicas
    // Pode ser mais elaborado dependendo dos requisitos
    switch (salaOrigem) {
      case 'PPA':
        return 'PPA'; // Substitua 'Outra Sala' pela lógica específica
      case 'PPB':
        return 'PPB'; // Substitua 'Outra Sala' pela lógica específica
      // Adicione casos para outras salas, se necessário
      default:
        return '';
    }
  }
});
