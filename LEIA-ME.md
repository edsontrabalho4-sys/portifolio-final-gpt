# Portfólio — Edson Augusto · versão 9 (Molduras e temas)

HTML, CSS e JavaScript puros, com imagens, nave e fontes locais. Esta versão acrescenta molduras construídas em código, acabamento cinza, um novo contato/rodapé e modo claro/escuro com preferência salva.

## Abrir no computador

1. Baixe **portfolio-ea-v9-molduras-temas.zip**.
2. Use “Extrair tudo” para abrir o conteúdo do ZIP.
3. Entre na pasta **portfolio-ea-v9-molduras-temas**.
4. Abra **index.html**. Mantenha todos os arquivos CSS, JS e a pasta assets juntos.

Não é necessário instalar nada. A nave está incluída em assets/space/spacecraft-simple-v8.png; seu nome continua v8 porque o desenho foi preservado. Não abra somente o HTML de dentro do ZIP: extraia a pasta inteira primeiro.

## O que mudou nesta revisão

- **Sobre:** conserva a apresentação pessoal e os três capítulos, dentro de um painel sólido. A moldura tem contorno completo, cantos diagonais, barra superior, filetes internos e detalhes cinza.
- **Foto e projetos:** os enquadramentos agora mostram apenas o conteúdo interno das capturas. As molduras externas, barras, legendas, cantos e marcas laterais são HTML/CSS/SVG. O mesmo tratamento aparece na janela de ampliação dos projetos.
- **Acabamento:** hachuras, pequenas marcas, trilhos e detalhes cinza reaparecem nos painéis, nas pastas, nos documentos e nas divisórias. O brilho vermelho continua localizado perto do mouse, incluindo os cantos diagonais.
- **Contato e GitHub:** dois cartões para e-mail e repositórios, um formulário alinhado ao lado e uma apresentação de GitHub com mais destaque. No celular, os blocos ficam empilhados.
- **Rodapé:** moldura completa, identidade, navegação, botão de voltar ao topo e acesso ao download e à visualização do fundo.
- **Tema:** use o botão de sol/lua no topo. O modo escuro usa grafite e vermelho; o claro usa prata, painéis claros e vermelho mais profundo. Textos, controles, campos, janelas, estrelas e nebulosa acompanham a escolha.

A escolha de tema é salva no navegador com a chave ea-theme e restaurada antes dos estilos, evitando que a página abra brevemente no tema errado. Ela é independente das preferências de idioma e de animação. Com armazenamento bloqueado, o botão continua funcionando na página aberta, mas a escolha não pode ser persistida.

## Interações mantidas

- A moldura do perfil inclina suavemente e cresce 2,5% com o mouse; volta ao sair. No celular, fica estável.
- A cada 5 segundos, enquanto a Home está visível, as palavras se desfazem da esquerda para a direita. A próxima frase se recompõe na mesma ordem, com faíscas locais. A transição dura até 1,85 segundo.
- A nebulosa atravessa seis composições ao percorrer o site. O cursor ilumina seus filamentos; estrelas próximas e distantes dão profundidade ao fundo.
- Sobre tem três capítulos expansíveis, com destaque ao passar o mouse. O ponto de disponibilidade permanece luminoso.
- Habilidades mantém as pastas e os documentos. Selecione uma categoria e depois uma tecnologia; use Tab, Enter e as setas para navegar.
- A nave passa atrás de Sobre e Habilidades. Na cena da Terra, role para acompanhar a sequência espacial, a transformação vermelha e a entrada de Projetos. Subir a página reverte a sequência. “IR AOS PROJETOS” permite pular essa parte.

A cena espacial permanece escura também no tema claro, como uma apresentação de mídia dentro da página. A rolagem continua sendo a normal do navegador, por mouse, toque ou teclado.

O botão de pausa interrompe os efeitos e mantém a apresentação estática da nave e da Terra. A preferência de redução de movimento do dispositivo também é considerada.

## Onde editar

- **index.html:** conteúdo, estrutura das molduras, seções, navegação, botão de tema e janelas.
- **frames.css:** painéis sólidos, molduras da foto/projetos, recortes, detalhes cinza, contato e rodapé.
- **theme.css:** paleta clara, botão de tema e ajustes dos controles no celular.
- **theme-init.js:** restauração inicial da escolha salva.
- **theme.js:** alternância do tema, armazenamento e rótulos em português/inglês.
- **style.css:** estilos de base, navegação, layout geral e impressão do currículo.
- **exploration.css / exploration.js:** capítulos de Sobre, pastas, documentos e inclinação do perfil.
- **immersive.css / immersive.js:** contornos SVG, brilho vermelho, hover e explosão das palavras. framePoints define os cantos; frameDetails define os filetes; FX.edgeRadius controla o alcance do brilho.
- **script.js:** traduções, habilidades, projetos, currículo, menu, formulário e estrelas.
- **nebula.js:** texturas reutilizadas e seis composições do fundo. A mesma textura recebe uma composição de cores diferente no modo claro.
- **space-renderer.js:** nave, percurso, disparo, Terra e fragmentação.
- **space-voyage.js / space-voyage.css:** animação espacial controlada pela rolagem, legenda e pausa.
- **assets:** imagens, ícones, fontes, licenças e prévias.

## Imagens

Os arquivos de referência originais foram preservados. A foto e as telas são exibidas por janelas de recorte CSS que ocultam as molduras antigas. Não foi alterado o rosto nem reconstruído o conteúdo dos projetos. As novas molduras são independentes das imagens e respondem ao tema e ao mouse.

A nitidez das imagens continua limitada às capturas fornecidas. Para maior resolução, substitua futuramente esses recortes pelos arquivos originais da foto e dos projetos.

Os ícones de Sobre são do Lucide; a licença está em assets/icons/LICENSE-Lucide.txt. Fontes locais e licenças estão em assets/fonts. Créditos da Terra e das naves: assets/space/CREDITOS.md.

assets/space/previa-nave-v8.mp4 é uma exportação do renderizador da nave preservado nesta revisão. Ela não é carregada pelo site; a animação da página responde à rolagem. Prévias antigas permanecem como histórico dentro de assets/space.

## Projetos, currículo e formulário

Kruger aponta para https://22501924-eng.github.io/Lading-Page/ e para o repositório Lading-Page. Os outros projetos abrem suas prévias; seus botões GitHub levam ao perfil, pois não foram fornecidos repositórios individuais confirmados.

Para o currículo, use CURRÍCULO e depois IMPRIMIR / SALVAR PDF. Ele foi organizado a partir das informações fornecidas.

O formulário valida os campos e prepara um e-mail para edsonaugusto238@gmail.com. Seu aplicativo de e-mail abre para você revisar e enviar a mensagem. Não há servidor de envio. Os links externos dependem dos respectivos serviços.

## Desempenho

A nebulosa reutiliza três texturas de 384 × 256; seu Canvas é limitado a 960 × 600. A mudança de tema não gera novas texturas. As estrelas mantêm os limites de até 360 interativas e 900 distantes no computador, 130 e 240 no celular, variando com a área da tela.

A cena espacial desenha quando a rolagem ou o estado muda. A animação do fundo pausa com a aba oculta. O desempenho depende do navegador e do dispositivo.

## Verificação desta revisão

Foram conferidos sintaxe JavaScript, estrutura HTML, referências locais, IDs/ARIA e conteúdo do novo ZIP. Eventos simulados verificaram restauração e alternância do tema, persistência ao recarregar, rótulos PT/EN, armazenamento bloqueado, categorias/documentos, teclado, capítulos, inclinação da foto, pausa e ordem da explosão das palavras.

Também foram testados o registro das novas molduras, o cálculo do brilho com coordenadas escaladas e a preservação do contorno ao trocar a prévia de projeto. Os recortes, a geometria das molduras e as duas paletas da nebulosa foram renderizados em Canvas e inspecionados. Esses quadros não são capturas de navegador. A página completa não passou por revisão visual em navegador nesta sessão.
