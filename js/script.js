// script.js - carrossel (index) + envio simples do form (inscricao)
document.addEventListener('DOMContentLoaded', () => {
  // CARROSSEL (index.html)
  const viewport = document.querySelector('.viewport');
  const items = document.querySelectorAll('.viewport .item');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;

  function atualizar() {
    if (!viewport) return;
    const largura = items[0].getBoundingClientRect().width + 24; // gap
    viewport.style.transform = `translateX(${-(largura * index)}px)`;
  }

  if (prev && next && items.length > 0) {
    // layout responsivo: mostrar 1 por vez, deixe overflow hidden no CSS
    prev.addEventListener('click', () => {
      index = Math.max(0, index - 1);
      atualizar();
    });
    next.addEventListener('click', () => {
      index = Math.min(items.length - 1, index + 1);
      atualizar();
    });
    window.addEventListener('resize', atualizar);
    atualizar();
  }

  // FORMULÁRIO (inscricao.html) - front-end leve
  const form = document.getElementById('formInscricao');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // evita envio real
      // validação simples HTML5 já aplicada; só exibimos confirmação
      const msg = document.getElementById('msgSucesso');
      // simula envio e mostra mensagem
      msg.hidden = false;
      form.scrollIntoView({behavior: 'smooth', block: 'center'});
      // opcional: limpa o form depois de 2s
      setTimeout(() => {
        form.reset();
      }, 1500);
    });
  }

  // Smooth scroll para anchors (quando clicar link do carrossel para classes)
  document.querySelectorAll('a[href^="classes-guerreiros.html#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      // deixa o link seguir normalmente — a página classes cuidará do hash
    });
  });
});
