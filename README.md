# EducaDoa - plataforma de doação de materiais escolares

## descrição do Projeto
[cite_start]O **EducaDoa** é uma aplicação web desenvolvida para a disciplina de programação web front-end[cite: 1]. [cite_start]O projeto consiste em uma plataforma de impacto social voltada para a comunidade de **Cornélio Procópio - PR**, alinhada aos objetivos de desenvolvimento sustentável (ODS) da ONU[cite: 31].

o sistema permite que doadores cadastrem itens escolares (cadernos, mochilas, livros) que não utilizam mais, enquanto estudantes que necessitam desses materiais podem visualizar as ofertas por região e entrar em contato para receber a doação.

## tecnologias utilizadas
[cite_start]para este projeto, foram utilizadas estritamente as tecnologias base, sem o uso de frameworks externos[cite: 46]:
- [cite_start]**HTML5**: estruturação semântica do conteúdo[cite: 54, 297].
- [cite_start]**CSS3**: estilização, layout e responsividade[cite: 3].
- **Google Fonts**: fontes 'Montserrat' e 'Open Sans' para melhor legibilidade.

## estrutura do projeto
[cite_start]a organização do repositório segue a divisão de tarefas da equipe:

```text
web_frontend_project/
├── pagina_principal/      		# home do site (desenvolvida por Thiago)
│   ├── img/                		# imagens e ícones da página inicial
│   ├── index.html          		# arquivo principal
│   └── style.css          	 	# estilo da página inicial
├── pagina_login/           		# interface de acesso (desenvolvida por Eduardo)
│   ├── login.html			 		# arquivo da página de login
│   └── style.css          		# estilo da página de login
├── pagina_cadastro_produto/       # formulário de cadastro de produto (desenvolvida por Nathan)
│   ├── cadastro_produto.html      # arquivo da página de cadastro de produto
│   └── cadastro_produto.css       # estilo da página de cadastro de produto
├── pagina_cadastro/        		# formulário de cadastro do doador (desenvolvida por Nathan)
│   ├── img/                		# imagens e ícones da página Formulário de doação
│   ├── cadastro.html       		# arquivo da página de cadastro de doador
│   └── cadastro.css           	# estilo da página de cadastro de doador
└── README.md               		# documentação do projeto
