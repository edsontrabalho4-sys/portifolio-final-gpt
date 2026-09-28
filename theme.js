/* Tema independente do idioma e da pausa das animações. Sem serviços externos. */
(() => {
  'use strict';
  const root=document.documentElement,button=document.querySelector('[data-theme-toggle]');
  if(!button)return;
  function syncLabel(){
    const light=root.dataset.theme==='light',english=root.lang==='en';
    const label=english?(light?'Switch to dark mode':'Switch to light mode'):(light?'Ativar modo escuro':'Ativar modo claro');
    button.setAttribute('aria-pressed',String(light));
    button.setAttribute('aria-label',label);button.title=label;
  }
  function applyTheme(value,save=false){
    const theme=value==='light'?'light':'dark';
    root.dataset.theme=theme;root.style.colorScheme=theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='light'?'#eceef4':'#080808');
    if(save){try{localStorage.setItem('ea-theme',theme);}catch{/* Mantém a troca mesmo com armazenamento bloqueado. */}}
    syncLabel();
    window.dispatchEvent(new CustomEvent('ea:theme',{detail:{theme}}));
  }
  button.addEventListener('click',()=>applyTheme(root.dataset.theme==='light'?'dark':'light',true));
  window.addEventListener('ea:language',syncLabel);
  window.addEventListener('storage',event=>{
    if(event.key==='ea-theme'||event.key===null)applyTheme(event.newValue);
  });
  applyTheme(root.dataset.theme);button.hidden=false;
})();
