# Sistema de Gerenciamento de Hotéis

Trabalho da Universidade Estadual de Ponta Grossa sobre um sistema de Gerenciamento de Hotéis.
## Conteúdos

- [Instalação](#instalação)
- [Backend](#backend)
  - [Models](#models)
  - [Routes](#routes)
  - [Controllers](#controllers)
- [Mantendo o repo](#mantendo-o-repo)
- [Frontend](#frontend)
  - [Pages](#pages)
  - [Components](#components)
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

## Usuários de teste

Foram instanciados dois usuários de teste principais, serve como lembrete:

-`admin` - usuário admin
-`clown` - usuário comum

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo `LICENSE` para mais informações.
