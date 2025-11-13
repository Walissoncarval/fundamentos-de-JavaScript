// Função para exibir o conteúdo dos flashcards
function mostrarFlashcard(topico) {
  const modalTitulo = document.getElementById('modalTitulo');
  const modalConteudo = document.getElementById('modalConteudo');

  let conteudo = "";

  switch (topico) {
    case 'HTML':
      conteudo = "<strong>HTML</strong> é a linguagem de marcação usada para estruturar o conteúdo da web.";
      break;
    case 'CSS':
      conteudo = "<strong>CSS</strong> é usado para definir o estilo e o layout das páginas web.";
      break;
    case 'JavaScript':
      conteudo = "<strong>JavaScript</strong> adiciona interatividade e comportamento dinâmico às páginas.";
      break;
  }

  modalTitulo.innerText = topico;
  modalConteudo.innerHTML = conteudo;

  const modal = new bootstrap.Modal(document.getElementById('flashcardModal'));
  modal.show();
}
