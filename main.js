const selectFoto = document.getElementById('selecionar-foto');
const fotoPerfil = document.getElementById('foto-perfil');

selectFoto.addEventListener('change', () => {
  const fotoSelecionada = selectFoto.value;
  fotoPerfil.src = fotoSelecionada;
});


const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');

incrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    const td = button.parentNode.previousElementSibling;
    const currentValue = parseInt(td.textContent);
    td.textContent = currentValue + 1;
  });
});

decrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    const td = button.parentNode.previousElementSibling;
    const currentValue = parseInt(td.textContent);
    td.textContent = Math.max(0, currentValue - 1);
  });
});
