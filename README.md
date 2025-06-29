# Voll App

&#x20; &#x20;

---

## 📖 Descrição

O **Voll App** é um aplicativo móvel desenvolvido com **React Native** e **Expo** para facilitar o agendamento, gerenciamento e busca de consultas médicas. A interface intuitiva foi projetada para profissionais da saúde e pacientes, oferecendo uma experiência fluida e responsiva em diferentes dispositivos.

---

## 🎯 Recursos Principais

- **Agendamento de Consultas:** Escolha médico, data e hora disponíveis.
- **Gerenciamento de Agenda:** Profissionais podem visualizar, editar e cancelar consultas.
- **Busca de Médicos:** Filtre por especialidade, nome e localização.
- **Notificações:** Lembretes automáticos de consultas (via push notifications).
- **Design Responsivo:** Adaptação a múltiplos tamanhos de tela.

---

## ⚙️ Tecnologias Utilizadas

| Camada           | Tecnologia                   |
| ---------------- | ---------------------------- |
| Mobile Framework | React Native · Expo          |
| Linguagem        | TypeScript                   |
| Navegação        | React Navigation             |
| Gerenciamento    | Context API / Redux          |
| UI Kit           | React Native Paper           |
| Testes           | Jest                         |
| Ferramentas      | ESlint · Prettier · Expo CLI |

---

## 🚀 Como Iniciar

1. **Clone** o repositório:
   ```bash
   git clone https://github.com/Bruno-Biscaia/voll_app.git
   ```
2. **Instale** as dependências:
   ```bash
   cd voll_app
   npm install
   ```
3. **Execute** no Expo:
   ```bash
   npx expo start
   ```
4. Escaneie o **QR code** gerado com o app Expo Go ou use emulador iOS/Android.

---

## 📂 Estrutura do Projeto

```plaintext
voll_app/
├─ assets/               # Imagens, fontes e ícones
├─ src/
│  ├─ components/        # Componentes reutilizáveis
│  ├─ screens/           # Telas (Views)
│  ├─ navigation/        # Configuração de rotas (React Navigation)
│  ├─ context/           # Context API for state management
│  ├─ services/          # Chamadas HTTP (axios) e notificações
│  ├─ hooks/             # Custom hooks
│  ├─ utils/             # Helpers e validações
│  └─ App.tsx            # Entry point do aplicativo
├─ app.json              # Configuração do Expo
├─ tsconfig.json         # Configuração TypeScript
├─ package.json
└─ README.md
```

---

## ⚙️ Scripts Disponíveis

| Script            | Descrição                                |
| ----------------- | ---------------------------------------- |
| `npm start`       | Inicia servidor Expo (QR code)           |
| `npm run ios`     | Inicia app em simulador iOS (macOS only) |
| `npm run android` | Inicia app em emulador Android           |
| `npm test`        | Executa testes com Jest                  |

---

## 🤝 Contribuição

Contribuições são bem-vindas!\
Para contribuir:

1. Faça um fork deste repositório.
2. Crie uma branch: `git checkout -b feature/nome-da-feature`.
3. Commit: `git commit -m "Adiciona feature X"`.
4. Push: `git push origin feature/nome-da-feature`.
5. Abra um Pull Request.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ✒️ Autor

**Bruno Biscaia** — [GitHub](https://github.com/Bruno-Biscaia)

