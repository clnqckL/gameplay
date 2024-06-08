
<h1 align="center">
  <img alt="GamePlay" height="80" title="Plant Manager" src=".github/logo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

![cover](.github/cover.png?style=flat)

## 💻 Projeto
O GamePlay é um aplicativo projetado para facilitar a conexão e organização de momentos de diversão e jogos entre amigos. Com ele, você pode criar grupos para jogar seus games favoritos com amigos, aproveitando a autenticação via Discord.

## :hammer_and_wrench: Funcionalidades

- [ ] Autenticação Social OAuth2 com o servidor do Discord.
- [ ] Obtém perfil do usuário cadastrado no Discord (username e avatar);
- [ ] Lista os servidores do Discord dos quais o usuário faz parte;
- [ ] Permite agendar partidas;
- [ ] Permite filtrar as partidas por categoria;
- [ ] Indica se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
- [ ] Compartilha o convite para ingressar no servidor do usuário;
- [ ] Permite redirecionar o usuário para o seu próprio servidor;
- [ ] Oferece a opção de Logout.

## ✨ Tecnologias

- [ ] React Native
- [ ] TypeScript
- [ ] Expo
- [ ] Context API
- [ ] Async Storage
- [ ] Vector Icons
- [ ] React Native Svg e Svg Transform
- [ ] Axios
- [ ] Gradient colors
- [ ] OAuth2 Discord 
- [ ] Expo Google Fonts
- [ ] React Navigation Stack
- [ ] React Native Gesture Handler
- [ ] Expo Authentication
- [ ] React Native Share
- [ ] Deep Link

## Executando o Projeto

Para começar, instale as dependências do projeto usando **yarn** ou **npm install**. Em seguida, inicie o projeto.

```bash
expo start
```

Não se esqueça de criar seu App no servidor do Discord para obter as credenciais de autenticação. Depois, defina as configurações do seu App no arquivo .env (remova o exemplo do arquivo .env.example).

```bash
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## 🛠️ Atualização do Expo

Caso encontre problemas ou erros relacionados à versão do Expo, você pode atualizá-lo para a última versão executando o seguinte comando:

```bash
expo upgrade
```

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.

<br />
