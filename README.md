# [EducaDoa](https://simonr556.github.io/web_frontend_project-/pagina_principal/index.html) - plataforma de doação de materiais escolares

## descrição do Projeto
O **EducaDoa** é uma aplicação web desenvolvida para a disciplina de programação web front-end. O projeto consiste em uma plataforma de impacto social voltada para a comunidade de **Cornélio Procópio - PR**, alinhada aos objetivos de desenvolvimento sustentável (ODS) da ONU.

o sistema permite que doadores cadastrem itens escolares (cadernos, mochilas, livros) que não utilizam mais, enquanto estudantes que necessitam desses materiais podem visualizar as ofertas por região e entrar em contato para receber a doação.

## tecnologias utilizadas
para este projeto, foram utilizadas estritamente as tecnologias base, sem o uso de frameworks externos:
- **HTML5**: estruturação semântica do conteúdo.
- **CSS3**: estilização, layout e responsividade.
- **JavaScript**: manipulação do DOM, simulação de banco de dados no navegador (localStorage) e controle das preferências de acessibilidade.
- **Google Fonts**: fontes 'Montserrat' e 'Open Sans' para melhor legibilidade.

### equipe:
Thiago Dutra da Silva
<br>
Nathan Victor de Oliveira Costa
<br>
Eduardo de Oliveira Aguiar

[clique aqui para acessar o video explicativo do projeto](https://drive.google.com/file/d/1OkjKlcLXor6cIpHzVBygFpuJg_wpRQzl/view?usp=sharing)
<br>
[clique aqui para acessar o video explicativo do projeto - JavaScript](https://drive.google.com/file/d/1kUKr6Lr__nMoGSTN2xi0Qox9HbtfiCZW/view?usp=sharing)
## estrutura do projeto
a organização do repositório segue a divisão de tarefas da equipe:

```text
web_frontend_project/
├── pagina_principal/              # home do site (desenvolvida por Thiago)
│   ├── img/                       # imagens e ícones da página inicial
│   ├── acessibilidade.js          # painel de adequação às normas ABNT
│   ├── index.html                 # arquivo principal
│   ├── main.js                    # lógica de abertura e fechamento do modal
│   ├── style.css                  # estilo da página inicial
│   └── vitrine.js                 # lógica para renderizar os cards dinâmicos do localStorage
├── pagina_login/                  # interface de acesso (desenvolvida por Eduardo)
│   ├── acessibilidade.js          # painel de adequação às normas ABNT 
│   ├── login.html                 # arquivo da página de login
│   ├── login.js                   # lógica de autenticação via localStorage
│   └── style.css                  # estilo da página de login
├── pagina_cadastro_produto/       # formulário de cadastro de produto (desenvolvida por Nathan)
│   ├── acessibilidade.js          # painel de adequação às normas ABNT 
│   ├── cadastro_produto.css       # estilo da página de cadastro de produto
│   ├── cadastro_produto.html      # arquivo da página de cadastro de produto
│   └── cadastro_produto.js        # registro e vinculação dos itens ao doador logado
├── pagina_cadastro/               # formulário de cadastro do doador (desenvolvida por Nathan)
│   ├── img/                       # imagens e ícones da página de cadastro
│   ├── acessibilidade.js          # painel de adequação às normas ABNT 
│   ├── cadastro.css               # estilo da página de cadastro de doador
│   ├── cadastro.html              # arquivo da página de cadastro de doador
│   └── cadastro.js                # criação e registro de novos usuários
└── README.md                      # documentação do projeto
