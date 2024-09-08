# Planify

## Descrição

**Planify** é uma plataforma digital desenvolvida para otimizar a organização e a gestão de tarefas e projetos pessoais. Com uma interface intuitiva e funcionalidades adaptáveis, o Planify visa resolver problemas comuns na gestão de atividades, oferecendo uma solução ergonômica e flexível. O projeto inclui um frontend desenvolvido com **React** e **TypeScript** e um backend utilizando **Node.js** e **Express**.

## Objetivos

- Facilitar a gestão de tarefas e projetos com uma interface intuitiva.
- Reduzir retrabalho e melhorar a colaboração e o acompanhamento de projetos.
- Adaptar-se às necessidades dos usuários e evoluir conforme o feedback recebido.

## Funcionalidades

- **Gerenciamento de Tarefas**: Criação, edição, e organização de tarefas e notas.
- **Colaboração**: Compartilhamento de notas e colaboração em tempo real.
- **Notificações e Lembretes**: Configuração de lembretes e prazos para tarefas.
- **Acessibilidade**: Interface adaptativa para dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express
- **Banco de Dados**: SQLite3

## Estrutura do Projeto

- **Frontend**:
  - `src/` - Código fonte do frontend, incluindo componentes React.
  - `public/` - Arquivos estáticos e configuração da aplicação.
  - `package.json` - Gerenciamento de dependências e scripts.
- **Backend**:
  - `server.js` - Configuração do servidor e definição das rotas da API.
  - `database.js` - Configuração e gerenciamento do banco de dados SQLite.
  - `package.json` - Gerenciamento de dependências e scripts do backend.
- **Configurações**:
  - `tsconfig.json` - Configuração do TypeScript.
  - `package.json` - Dependências e scripts de desenvolvimento.

## Instalação

Para instalar e executar o projeto localmente, siga estas etapas:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/planify.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd planify
   ```

3. Instale as dependências do frontend e do backend:
   - Para o frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Para o backend:
     ```bash
     cd backend
     npm install
     ```

4. Inicie o servidor backend:
   ```bash
   npm start
   ```

5. Inicie o frontend:
   ```bash
   cd ../frontend
   npm start
   ```

6. Acesse a aplicação:
   - O frontend estará disponível em: [http://localhost:3000](http://localhost:3000)
   - O backend estará disponível em: [http://localhost:3001](http://localhost:3001)

## Testes

Para executar os testes do projeto, utilize os seguintes comandos:

- **Frontend**:
  ```bash
  cd frontend
  npm test
  ```

- **Backend**:
  ```bash
  cd backend
  npm test
  ```

## Contribuições

Contribuições são bem-vindas! Para contribuir, siga estes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. Faça suas alterações e faça o commit:
   ```bash
   git add .
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-nova-funcionalidade
   ```
5. Crie um Pull Request no GitHub.

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.
