## Descrição do PR 

<!---
Faça uma breve descrição do que foi feito
-->

- [ ] Criado componente de botão dançarino
- [ ] Implementada a funcionalidade XYZ
- [ ] ...

## Card Kanbanize

[NOME_DO_CARD](https://inovador-solar.atlassian.net/jira/software/projects/ISF/boards/2?selectedIssue=ISF-9)

## Link do figma

[Figma](https://www.figma.com/)

## Checklist de revisão

<!---
Faça uma auto revisão do seu Merge Request e verifique se lembrou de atender a todos os requisitos de negócio, design, qualidade e desenvolvimento.
-->

- [ ] Requisitos de negócio
- [ ] Tagueamento
- [ ] Acessibilidade VoiceOver
- [ ] Acessibilidade TalkBack
- [ ] Acessibilidade fontes maiores
- [ ] Pixel perfect
- [ ] Testes unitários
- [ ] Internacionalização

## Como testar

<!---
Passo a passo para testar a funcionalidade ou para reproduzir o bug.
-->

<details>
<summary>Cenário ABC</summary>

- [ ] Fazer login com usuário sem endereço cadastrado
- [ ] Clicar no botão XPTO
- [ ] Deve aparecer a tela de cadastrar endereço
- [ ] ...
</details>

<details>
<summary>Cenário XYZ</summary>

- [ ] Fazer login com usuário com endereço de SP
- [ ] Clicar no botão XPTO
- [ ] Deve aparecer a tela para confirmar o pagamento
- [ ] ...
</details>

## Evidências

<details>
<summary>Capturas de tela</summary>
<!---
Se houver, capturas de tela
-->
</details>

<details>
<summary>Vídeos</summary>
<!---
Se houver, vídeos
-->
</details>

<details>
<summary>Testes unitários</summary>
<!---
Se houver, captura do resultado dos testes unitários no terminal
-->
</details>

<details>
<summary>Tagueamento</summary>
<!---
Se houver, tagueamento
-->
</details>

<details>
<summary>Acessibilidade para leitores de tela</summary>
<!---
Se houver, acessibilidade para leitores de tela
-->
</details>

<details>
<summary>Acessibilidade para fontes maiores</summary>
<!---
Se houver, acessibilidade para fontes maiores
-->
</details>

## Checklist para Code Review

<!---
Esse checklist é para ser preenchido pelas pessoas que vão revisar o código, não podendo ser editado e nem removido.
-->

Quando iniciar a revisão, use esse checklist como referência para a analise do código:

---

📱 A funcionalidade funciona

- [ ] O MR possui as evidências necessárias para avaliar a implementação.
- [ ] Todas as solicitações do card foram atendidas.

---

🧹 O código está limpo [Introdução ao Clean Code](https://youtube.com/playlist?list=PLMdYygf53DP5Sc6yFYs6ZmjsuuA2fu0TK)

- [ ] Nomes de funções, arquivos e variáveis são claros e consistentes.
- [ ] As funções são pequenas, fáceis de ler e possuem uma única responsabilidade.
- [ ] Os elementos de interface são pequenos e fáceis de ler.

---

🧪 O código está bem testado

- [ ] Arquivo `index.test.{ts,tsx}` criado ou melhorado para todas as páginas, componentes ou funções alterados nesse MR.
- [ ] Existe teste unitário ou de renderização para todos os cenários possíveis, incluindo cenários de erro e entradas inválidas ou nulas.

---

📖 Os componentes estão bem documentados

- [ ] Arquivo `index.stories.js` criado ou melhorado para todos os componentes alterados nesse MR.
- [ ] Os stories possuem Addons que permitem os testes com diferentes entradas.

---

⚠ A revisão do código foi considerada

- [ ] Todos os comentários do time foram respondidos.
- [ ] As melhorias sugeridas pelo time foram realizadas.
