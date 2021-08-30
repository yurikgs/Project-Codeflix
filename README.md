# modelo-clone-netflix
Modelo simples e editável de Site de streaming de vídeo inspirado na Netflix

Projeto de site de filmes/vídeos em estilo streaming netflix

Objetivo: Criar um modelo simples de site de streaming de vídeo, editável, com estilo semelhante à Netflix.
Obs.: Aceito ideias!

No momento, estou tentando resolver um problema relacionado com a linkagem da imagem de capa da seção "destaques". Está linkada na classe css ".destaques"  em "main.css" com o endereço url()  partindo da própria pasta do projeto, mas isso acaba só funcionando quando eu rodo a página a partir do Live Server / VS.  Mas a imagem não roda quando eu abro a página diretamente pelo navegador,  a menos que eu mude o endereço url para partir do meu computador, completo, estilo "C:\..." . Segue o código em questão para melhor compreensão;

--> FUNCIONA (A IMAGEM RODA) NO LIVE SERVER, NÃO FUNCIONA NO NAVEGADOR:
"
.destaques  {
    font-size: 20px;
    background: linear-gradient(to bottom, var(--pretoTransp1), rgba(0,0,0,.4) 82%, var(--preto)), url("/img/matrix-filme.jpg");
"

--> FUNCIONA NO NAVEGADOR(NO MEU COMPUTADOR, CLARO, O CAMINHO VAI DEPENDER DA SUA MÁQUINA), NÃO FUNCIONA NO LIVE SERVER:

"
.destaques  {
    font-size: 20px;
    background: linear-gradient(to bottom, var(--pretoTransp1), rgba(0,0,0,.4) 82%, var(--preto)), url("C:/Users/Mário/Documents/03 ESTUDO/9_PROJETOS/PROJETOS_INFO/Site de Streaming (estilo netflix)/img/matrix-filme.jpg");
"
