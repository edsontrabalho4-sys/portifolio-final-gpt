/* Restaura a escolha antes de carregar os estilos, evitando um flash do outro tema. */
(() => {
  'use strict';
  let theme='dark';
  try { if(localStorage.getItem('ea-theme')==='light')theme='light'; } catch { /* O tema continua funcionando sem armazenamento. */ }
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='light'?'#eceef4':'#080808');
})();
