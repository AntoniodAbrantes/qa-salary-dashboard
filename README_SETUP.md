# Dashboard de Análise Salarial - QA Júnior

Um dashboard interativo para análise comparativa de salários de QA Júnior no Rio de Janeiro e João Pessoa, com comparação entre regimes CLT e PJ.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior): [Download aqui](https://nodejs.org/)
- **npm** ou **pnpm** (gerenciador de pacotes)

## 🚀 Como Executar Localmente

### 1. Descompacte o arquivo

```bash
unzip qa_salary_dashboard_source.zip
cd qa_salary_dashboard
```

### 2. Instale as dependências

```bash
# Usando npm
npm install

# Ou usando pnpm (mais rápido)
pnpm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
# Usando npm
npm run dev

# Ou usando pnpm
pnpm dev
```

O servidor iniciará em `http://localhost:5173` (ou outra porta se esta estiver em uso).

### 4. Abra no navegador

Acesse `http://localhost:5173` no seu navegador para visualizar o dashboard.

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
# Usando npm
npm run build

# Ou usando pnpm
pnpm build
```

Os arquivos compilados estarão na pasta `client/dist/`.

## 🌐 Deploy no GitHub Pages

### 1. Crie um repositório no GitHub

```bash
git init
git add .
git commit -m "Initial commit: QA Salary Dashboard"
git branch -M main
git remote add origin https://github.com/seu-usuario/qa-salary-dashboard.git
git push -u origin main
```

### 2. Configure o GitHub Pages

- Vá para **Settings** → **Pages**
- Selecione **Deploy from a branch**
- Escolha a branch `main` e a pasta `client/dist`
- Clique em **Save**

### 3. Faça o build e push

```bash
npm run build
git add client/dist
git commit -m "Build: production build"
git push
```

Seu dashboard estará disponível em `https://seu-usuario.github.io/qa-salary-dashboard/`

## 📊 Estrutura do Projeto

```
qa_salary_dashboard/
├── client/
│   ├── public/
│   │   └── qa_salaries_dashboard.json    # Dados do dashboard
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx                  # Página principal com dashboard
│   │   ├── components/                   # Componentes reutilizáveis
│   │   ├── App.tsx                       # Componente raiz
│   │   └── main.tsx                      # Ponto de entrada
│   └── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Tecnologias Utilizadas

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Recharts** - Gráficos interativos
- **shadcn/ui** - Componentes UI prontos
- **Vite** - Build tool

## 📈 Dados do Dashboard

Os dados salariais são carregados do arquivo `client/public/qa_salaries_dashboard.json`:

- **Rio de Janeiro (CLT):** R$ 4.829,61/mês
- **Rio de Janeiro (PJ Estimado):** R$ 7.727,38/mês
- **João Pessoa (CLT):** R$ 3.067,56/mês
- **João Pessoa (PJ Estimado):** R$ 4.908,10/mês

*Nota: Os valores de PJ são estimativas baseadas em um fator de multiplicação 1.6x do salário CLT.*

## 📝 Fontes de Dados

- **Salário.com.br** - Dados de salários CLT (Outubro 2025)
- **Glassdoor.com.br** - Dados complementares de QA
- **Indeed.com.br** - Faixas salariais de mercado

## 🔧 Customização

### Alterar dados salariais

Edite o arquivo `client/public/qa_salaries_dashboard.json`:

```json
[
  {
    "cidade": "Rio de Janeiro",
    "regime": "CLT",
    "salario_medio": 4829.61
  },
  // ... mais dados
]
```

### Alterar cores e tema

Edite o arquivo `client/src/index.css` para customizar as cores e o tema do dashboard.

## 🐛 Troubleshooting

### Erro: "Port 5173 is already in use"

Use uma porta diferente:

```bash
npm run dev -- --port 3000
```

### Erro: "Cannot find module"

Reinstale as dependências:

```bash
rm -rf node_modules
npm install
```

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 📧 Suporte

Para dúvidas ou sugestões, entre em contato ou abra uma issue no repositório.

---

**Desenvolvido com ❤️ para análise de salários de QA no Brasil**
