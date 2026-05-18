# DevCard 📱 - Seu Cartão de Visita Digital de Dev Mobile

O **DevCard** é um aplicativo mobile desenvolvido em React Native com o ecossistema Expo, projetado como parte da **Atividade Prática IA2.1** para a disciplina de Aplicações Móveis. O objetivo principal do projeto é aplicar os conceitos fundamentais de desenvolvimento mobile, incluindo componentização baseada em propriedades, gerenciamento de estado global e local, validação rigorosa de formulários, lógica de negócios condicional e navegação estruturada orientada a arquivos.

---

## 👨‍💻 Informações do Aluno
* **Nome:** José Bento Abreu da Cruz 
* **Matrícula:** 4510202624  
* **Professor:** Brendo Vale  
* **Disciplina:** Aplicações Móveis (Aula 7)  

---

## 📱 Demonstração do App

<table>
  <tr>
    <td><strong>1. Tela Inicial</strong></td>
    <td><strong>2. Tela de Cadastro</strong></td>
  </tr>
  <tr>
    <td> <img width="385" height="840" alt="img1" src="https://github.com/user-attachments/assets/fe4c0059-d957-46e8-8efc-55f38a43a283" /> </td>
    <td> <img width="388" height="834" alt="img2" src="https://github.com/user-attachments/assets/b5b6aafd-a559-4dcc-b2ec-36155ead62cc" /> </td>
  </tr>
  <tr>
    <td><strong>3. Preview do Cartão</strong></td>
    <td><strong>4. Tela de Sucesso</strong></td>
  </tr>
  <tr>
    <td> <img width="373" height="839" alt="img3" src="https://github.com/user-attachments/assets/ffb8f44e-36af-4362-8624-275e2be09b64" /> </td>
    <td> <img width="373" height="842" alt="img4" src="https://github.com/user-attachments/assets/101f547f-5b2b-454c-a50a-83a5612e95da" /> </td>
  </tr>
</table>

---

## 🛠️ Tecnologias e Recursos Utilizados
* **React Native & Expo:** Framework para renderização de componentes de interface nativos em múltiplos ecossistemas.
* **TypeScript:** Linguagem para tipagem estática que previne erros em tempo de compilação, aplicada em contratos de rotas e props.
* **Expo Router (File-based Routing):** Sistema de roteamento dinâmico baseado na estrutura do diretório `app/`.
* **React Native Safe Area Context:** Biblioteca para tratamento de limites físicos de displays modernos (como *notches*, cantos arredondados e barras de navegação nativas).
* **Ionicons (@expo/vector-icons):** Kit de vetores para inclusão de ícones nativos escaláveis.

---

## 📂 Estrutura de Pastas do Projeto
O projeto foi modularizado seguindo as boas práticas do Expo Router, separando os componentes globais e a folha de estilos globais de acordo com a arquitetura abaixo:

```text
projeto-devcard/
├── app.json
├── package.json
└── src/
    ├── app/
    │   ├── _layout.tsx      # Configuração global de rotas, StatusBar e SafeAreaProvider
    │   ├── index.tsx        # Tela 1: Boas-vindas e início do fluxo
    │   ├── cadastro.tsx     # Tela 2: Formulário com validações e seletores táteis
    │   ├── preview.tsx      # Tela 3: Tratamento de parâmetros e lógica condicional de níveis
    │   └── sucesso.tsx      # Tela 4: Confirmação e reset da árvore de navegação
    ├── components/
    │   ├── Buttons/         # Componentes atômicos de ação reutilizáveis (Primary/Outline)
    │   └── DevCard/         # Componente isolado responsável por renderizar o cartão digital
    └── styles/
        └── contants.ts      # Tokens de design do sistema (Constante THEME para cores e fontes)
