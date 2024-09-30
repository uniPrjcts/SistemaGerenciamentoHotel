# Sistema de Gerenciamento de Hotéis

Trabalho da Universidade Estadual de Ponta Grossa sobre um sistema de Gerenciamento de Hotéis.
## Conteúdos

- [Instalação](#instalação)
- [Backend](#backend)
  - [Models](#models)
  - [Routes](#routes)
  - [Controllers](#controllers)
  - [Bibliotecas e dependências](#bibliotecas-e-dependências)
- [Mantendo o repo](#mantendo-o-repo)
- [Frontend](#frontend)
  - [Pages](#pages)
  - [Components](#components)
  - [Bibliotecas e dependências](#bibliotecas-e-dependências)
- [Módulos do Sistema](#módulos-do-sistema)
  - [Módulo de Reservas](#módulo-de-reservas)
  - [Módulo de Cadastro de Clientes](#módulo-de-cadastro-de-clientes)
  - [Módulo de Pagamento](#módulo-de-pagamento)
  - [Módulo de Check-in](#módulo-de-check-in)
- [Usuários de teste](#usuários-de-teste)

## Instalação

### Clonando o Repositório

Para obter uma cópia do repositório na sua máquina local, use o comando no diretório em que deseja instalar:

```bash
git clone https://github.com/uniPrjcts/SistemaGerenciamentoHotel.git
```

Em seguida navegue até ele:

```bash
cd SistemaGerenciamentoHotel
```

Para instalar as dependências do projeto, siga os passos abaixo:

1. **Backend**
   - Navegue até a pasta `api`:
     ```bash
     cd api
     ```
   - Instale as dependências:
     ```bash
     npm i
     ```
   - Inicie o servidor:
     ```bash
     npm start
     ```

2. **Frontend**
   - Abra um novo terminal e volte para a pasta principal:
     ```bash
     cd ..
     ```
   - Navegue até a pasta `front`:
     ```bash
     cd front
     ```
   - Instale as dependências:
     ```bash
     npm i
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```
3. **Kill**
   - Para finalizar o servidor ou o front, vá no terminal respectivo e aperte `Ctrl` + c.

## Mantendo o repo

### Sincronizando com o Repositório

Para atualizar seu repositório local com as alterações mais recentes, utilize:

```bash
git pull origin main
```

### Criando a branch da feature

Antes de começar o desenvolvimento de determinada feature, deve-se criar uma branch para ela:

```bash
git checkout -b nomeDaFeature
```

Para checar em qual branch você está, utilize:

```bash
git branch
```

### Sincronizando com a main e fazendo o push para a branch

Quando terminar sua feature e **tiver testado para checar se está funcionando** siga o seguinte fluxo para o upload:

1. Cheque a branch que você está. Ela deve ser a branch da sua feature. Caso não esteja nela, utilize o seguinte comando para mudar de branch:

```bash
git checkout nomeDaFeature
```

2. Sincronize com a main e faça o `rebase` com a main:

```bash
git pull origin main
git rebase main
```

3. Resolva os conflitos, se tiverem. Sua IDE vai te ajudar nisso.

4. Suba as mudanças para a branch da sua feature:

```bash
git push origin minha-feature --force
```

**Nota:** Sempre tome cuidado ao usar o --force. Nesse caso ele é necessário pois altera o histórico dos commits.

**JAMAIS, SOB HIPÓTESE NENHUMA UTILIZE `--force` QUANDO ESTIVER NA BRANCH MAIN. NUNCA.**

5. Vá no repo no GitHub e crie um pull request da branch da sua feature para a branch main.

6. O PR vai ser revisado por alguém da equipe e posteriormente mergeado na main.

**Se necessário mais detalhes, colocarei aqui depois**

## Backend

### Models

Na pasta `models`, você encontrará os schemas do Mongoose, que definem a estrutura dos documentos no banco de dados. Os principais arquivos incluem:
- `Hotel.js` – Schema para os hotéis.
- `Quarto.js` – Schema para os quartos.
- `User.js` – Schema para os usuários.

### Routes

A pasta `routes` contém os arquivos que controlam as rotas da API. Cada arquivo corresponde a uma entidade específica:
- `auth.js` – Roteamento para autenticação.
- `hotels.js` – Roteamento para operações relacionadas a hotéis.
- `quartos.js` – Roteamento para operações relacionadas a quartos.
- `users.js` – Roteamento para operações relacionadas a usuários.

### Controllers

Na pasta `controllers`, você encontrará a lógica que controla as operações da API. Cada arquivo contém funções específicas para manipular dados e responder a solicitações:
- `auth.js` – Funções para autenticação.
- `hotel.js` – Funções para manipulação de dados de hotéis.
- `quartos.js` – Funções para manipulação de dados de quartos.
- `user.js` – Funções para manipulação de dados de usuários.

### Bibliotecas e dependências

No Backend, utilizamos diversas bibliotecas que facilitam o desenvolvimento e a manutenção do sistema:

- **Express**: Framework minimalista para Node.js que simplifica a criação de APIs e o gerenciamento de rotas. Ele permite uma estrutura mais organizada e legível, essencial para um sistema de gerenciamento como o de hotéis.

- **Mongoose**: Uma biblioteca para modelar dados MongoDB em Node.js. Ela fornece uma solução para interagir com o banco de dados, definindo esquemas e validando dados, o que é crucial para garantir a integridade das informações dos clientes e reservas.

- **jsonwebtoken**: Utilizada para implementar autenticação e autorização. Essa biblioteca permite a criação de tokens seguros, facilitando o controle de acesso dos usuários ao sistema.

- **bcryptjs**: Para criptografia de senhas, garantindo que as informações sensíveis dos usuários sejam armazenadas de forma segura.

- **cors**: Middleware que permite o compartilhamento de recursos entre diferentes domínios, essencial para permitir que o frontend acesse a API.

- **dotenv**: Facilita o gerenciamento de variáveis de ambiente, mantendo informações sensíveis como credenciais de banco de dados fora do código-fonte.

- **nodemon**: Ferramenta que reinicia automaticamente o servidor durante o desenvolvimento, economizando tempo e melhorando a produtividade.

## Frontend

### Pages

A pasta `pages` contém os componentes de página principais do aplicativo. Cada pasta representa uma página específica do sistema:
- `adminHome` – Página inicial do administrador.
- `home` – Página principal do usuário.
- `hotel` – Página de detalhes do hotel.
- `list` – Página de listagem de quartos ou hotéis.
- `login` – Página de login.

### Components

Na pasta `components`, você encontrará componentes reutilizáveis do React que são usados em diferentes páginas. Os principais componentes incluem:
- `featured` – Exibe hotéis em destaque.
- `footer` – Rodapé do site.
- `header` – Cabeçalho do site.
- `navbar` – Barra de navegação.
- `mailList` – Lista de emails para newsletters.
- `propertyList` – Lista de propriedades disponíveis.
- `reserva` – Componente para reservas de quartos.
- `searchItem` – Item de pesquisa para filtros.

### Bibliotecas e dependências

No Frontend, as seguintes bibliotecas foram escolhidas para otimizar a experiência do usuário e a produtividade do desenvolvimento:

- **React**: Framework JavaScript para construir interfaces de usuário. Sua abordagem baseada em componentes permite a criação de uma UI reativa e dinâmica, essencial para um sistema interativo como o de gerenciamento de hotéis.

- **React Router Dom**: Usado para gerenciar rotas no aplicativo React, permitindo uma navegação fluida entre diferentes páginas sem recarregar a aplicação.

- **Axios**: Biblioteca para fazer requisições HTTP, facilitando a comunicação com a API do backend. Ela é usada para buscar dados de hotéis, realizar reservas e gerenciar a autenticação.

- **date-fns**: Uma biblioteca leve para manipulação de datas, que simplifica operações como formatação e cálculo de intervalos de datas, essenciais para o módulo de reservas.

- **react-date-range**: Utilizada para criar seletores de data interativos, permitindo que os usuários escolham facilmente as datas de suas reservas.

- **Font Awesome**: Para ícones, que melhoram a estética e a usabilidade da interface do usuário.

- **Vite**: Ferramenta de construção que proporciona um ambiente de desenvolvimento rápido e eficiente, otimizando o tempo de inicialização e hot-reload.

## Módulos do Sistema

### Módulo de Reservas

O módulo de reserva é composto por dois principais arquivos `Hotel.jsx` e `Reserva.jsx`. As datas de reserva inseridas pelo usuário são passadas para a página por meio de um hook de contexto e é usado uma função para calcular o tempo transcorrido entre o primeiro dia e o último para então ser exibido ao usuário. No `Reserva.jsx`, esse intervalo é usado para comparar com as datas ocupadas. Assim, é exibido os quartos disponíveis de acordo com as datas de hospedagem, para que o usuário selecione.

**Nota:** Sujeito a mudanças!

### Módulo de Cadastro de Clientes

O módulo de cadastro de clientes é gerenciado através do endpoint `/register`, utilizando das informações inseridas pelo cliente na página `Register.jsx`.

### Módulo de Pagamento

O módulo de pagamento utiliza da integração da API do PagSeguro. O processo específico para a integração está a ser decidido.

### Módulo de Check-in

O módulo de check-in é validado pelo recepcionista. Ou seja, ele utiliza uma página específica para esse processo (provavelmente `adminCheckIn`), podendo confirmar o check-in dos hóspedes. Essa página é acessada através da `adminHome`, página que o admin é redirecionado após fazer login.

## Usuários de teste

Foram instanciados dois usuários de teste principais, serve como lembrete:

- `admin` - usuário admin
- `clown` - usuário comum

A senha foi passada pessoalmente.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo `LICENSE` para mais informações.
