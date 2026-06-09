# 🚀 Node TypeScript Boilerplate

Um boilerplate moderno para desenvolvimento de APIs e aplicações backend utilizando **Node.js**, **TypeScript**, **Express**, **Vitest**, **ESLint**, **Prettier** e **TSUP**.

Este projeto foi criado para servir como base para novos projetos, evitando a necessidade de configurar ferramentas essenciais do zero a cada aplicação.

---

# ✨ Tecnologias

### Runtime

* Node.js

### Linguagem

* TypeScript

### Framework HTTP

* Express

### Requisições HTTP

* Axios

### Segurança

* Helmet

### CORS

* Cors

### Variáveis de Ambiente

* Dotenv

### Testes

* Vitest

### Lint

* ESLint (Flat Config)

### Formatação

* Prettier

### Build

* TSUP
* TypeScript Compiler (TSC)

---

# 📂 Estrutura do Projeto

```text
src/
├── config/
├── controllers/
├── middlewares/
├── repositories/
├── routes/
├── services/
├── types/
├── utils/
└── index.ts

tests/

dist/
```

### Descrição das Pastas

| Pasta        | Responsabilidade           |
| ------------ | -------------------------- |
| config       | Configurações da aplicação |
| controllers  | Recebe requisições HTTP    |
| services     | Regras de negócio          |
| repositories | Acesso a banco de dados    |
| routes       | Definição das rotas        |
| middlewares  | Middlewares da aplicação   |
| types        | Tipagens personalizadas    |
| utils        | Funções utilitárias        |
| tests        | Testes automatizados       |
| dist         | Build de produção          |

---

# 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/node-typescript-boilerplate.git
```

Entre na pasta:

```bash
cd node-typescript-boilerplate
```

Instale as dependências:

```bash
pnpm install
```

---

# ▶️ Executando em Desenvolvimento

Inicia a aplicação com reload automático:

```bash
pnpm dev
```

Script utilizado:

```json
"dev": "tsx watch src/index.ts"
```

Obs.: o script `dev` usa o binário `tsx` (instalado como `devDependency`). Antes de executar, rode `pnpm install` para garantir que as dependências e o binário `tsx` estejam disponíveis.

---

# 🏗️ Build de Produção

Executa:

* Formatação do código
* Compilação TypeScript
* Bundle utilizando TSUP

```bash
pnpm build
```

Script:

```json
"build": "pnpm format && tsc --build tsconfig.build.json && tsup --config tsup.config.ts"
```

Arquivos gerados:

```text
dist/
```

---

# 🚀 Executando o Build

Após gerar o build:

```bash
pnpm start
```

ou

```bash
node dist/index.js
```

---

# 🧪 Testes

Executar todos os testes:

```bash
pnpm test
```

Modo observação:

```bash
pnpm test:watch
```

Cobertura de testes:

```bash
pnpm test:coverage
```

Exemplo:

```typescript
import { describe, expect, it } from 'vitest';

describe('sum', () => {
  it('should add two numbers', () => {
    expect(1 + 1).toBe(2);
  });
});
```

---

# 🔍 Type Checking

Executa apenas a verificação de tipos sem gerar build:

```bash
pnpm check
```

Script:

```json
"check": "tsc --noEmit -p tsconfig.build.json"
```

---

# 📏 ESLint

Verificar problemas de código:

```bash
pnpm lint
```

Corrigir automaticamente:

```bash
pnpm lint:fix
```

Scripts:

```json
"lint": "eslint ./src",
"lint:fix": "eslint ./src --fix"
```

---

# 🎨 Prettier

Formatar todos os arquivos TypeScript:

```bash
pnpm format
```

Configuração utilizada:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "printWidth": 120
}
```

---

# ⚙️ Scripts Disponíveis

| Comando            | Descrição                         |
| ------------------ | --------------------------------- |
| pnpm dev           | Executa em modo desenvolvimento   |
| pnpm build         | Gera build de produção            |
| pnpm start         | Executa o build gerado            |
| pnpm check         | Verifica tipos TypeScript         |
| pnpm lint          | Executa ESLint                    |
| pnpm lint:fix      | Corrige problemas automaticamente |
| pnpm format        | Formata o código                  |
| pnpm test          | Executa testes                    |
| pnpm test:watch    | Executa testes em modo observação |
| pnpm test:coverage | Gera cobertura de testes          |

---

# 🔒 Variáveis de Ambiente

Crie um arquivo:

```text
.env
```

Exemplo:

```env
PORT=3000
NODE_ENV=development
```

Carregamento:

```typescript
import 'dotenv/config';
```

ou

```typescript
import dotenv from 'dotenv';

dotenv.config();
```

---

# 🛡️ Segurança

Este boilerplate já possui dependências para:

### Helmet

Proteção básica para aplicações Express.

```typescript
import helmet from 'helmet';

app.use(helmet());
```

### CORS

Controle de acesso entre origens.

```typescript
import cors from 'cors';

app.use(cors());
```

---

# 📌 Como Usar Este Boilerplate

## Começando Seu Projeto

1. **Clone ou faça fork do repositório**
2. **Instale as dependências**: `pnpm install`
3. **Configure as variáveis de ambiente**: crie um `.env` com as configurações necessárias
4. **Execute em desenvolvimento**: `pnpm dev`

## Estrutura Recomendada para Sua API

Substitua o arquivo `src/index.ts` por um servidor Express adequado:

```typescript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de segurança e parsing
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (_, response) => {
  return response.json({
    message: 'API em execução! 🚀',
    version: '1.0.0',
  });
});

// Tratamento de erros (exemplo básico)
app.use((_, response) => {
  return response.status(404).json({
    error: 'Rota não encontrada',
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
```

---

# 📝 Entendendo o Arquivo `src/index.ts`

## O Que é Este Arquivo?

O arquivo `/src/index.ts` é o **ponto de entrada principal** do seu projeto. Por padrão, ele contém uma função simples chamada `sum`, que serve como **exemplo didático** de como a estrutura funciona.

### Função Padrão: `sum`

```typescript
export function sum(a: number, b: number): number {
  return a + b;
}
```

**O que ela faz:**
- Recebe dois números como parâmetros (`a` e `b`)
- Retorna a soma dos dois números
- Está **exportada** para poder ser usada em outros arquivos

**Por que esta função existe:**
- Demonstra como criar e exportar funções TypeScript
- Mostra como usar **tipagem de tipos** (parâmetros e retorno)
- Exemplifica como estruturar código reutilizável

### Quando Substituir Esta Função

Quando for criar sua própria API ou aplicação, você **deve substituir o conteúdo** deste arquivo por seu código principal (geralmente um servidor Express). Não precisa mais da função `sum` depois!

---

# 🧪 Testando a Função: `src/index.spec.ts`

## O Arquivo de Testes

O arquivo `/src/index.spec.ts` é um arquivo de testes automatizados que verifica se a função `sum` funciona corretamente:

```typescript
import { describe, expect, it } from 'vitest';
import { sum } from './index.js';

describe('sum', () => {
  it('deve somar dois números positivos', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('deve somar números negativos', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('deve somar positivo e negativo', () => {
    expect(sum(10, -3)).toBe(7);
  });
});
```

### Como Funciona Este Teste

1. **`describe('sum', () => { ... })`** - Agrupa todos os testes relacionados à função `sum`

2. **`it('deve somar...')`** - Define um teste específico (caso de teste)

3. **`expect(sum(2, 3)).toBe(5)`** - Verifica se o resultado é o esperado:
   - Chama a função `sum` com argumentos (2 e 3)
   - Espera que o resultado seja exatamente 5

### Executar os Testes

Execute os testes com:

```bash
pnpm test
```

**Resultado esperado:**
```
✓ src/index.spec.ts  (3 tests)

 Test Files  1 passed (1)
     Tests  3 passed (3)
```

### Modo Observação (Watch Mode)

Para executar os testes sempre que você salvar um arquivo:

```bash
pnpm test:watch
```

Útil durante desenvolvimento para validação contínua!

### Cobertura de Testes

Veja quantas linhas de código foram testadas:

```bash
pnpm test:coverage
```

---

# 🔄 Fluxo Completo: Do Desenvolvimento ao Produção

## 1️⃣ Desenvolvimento Local

```bash
pnpm dev
```
- Inicia o projeto com reload automático (usando `tsx watch`)
- Ideal para desenvolver e testar mudanças em tempo real

## 2️⃣ Validar Qualidade do Código

```bash
# Verificar tipos TypeScript
pnpm check

# Executar linter (ESLint)
pnpm lint

# Formatar código (Prettier)
pnpm format

# Executar testes
pnpm test
```

## 3️⃣ Build para Produção

```bash
pnpm build
```

Este script executa em sequência:
1. **Prettier** - Formata o código
2. **TypeScript Compiler (tsc)** - Verifica tipos e compila
3. **TSUP** - Agrupa o código em um bundle otimizado

**Resultado:** Gerado na pasta `dist/`

## 4️⃣ Executar em Produção

```bash
pnpm start
```

Ou manualmente:
```bash
node dist/index.js
```

---

# 📌 Exemplo Prático: Criar Sua Própria API

## Exemplo 1: Função Utilitária

Se precisar de funções reutilizáveis, crie na pasta de utils:

**`src/utils/calculadora.ts`**
```typescript
export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Divisão por zero não permitida');
  return a / b;
}
```

**`src/utils/calculadora.spec.ts`** (teste)
```typescript
import { describe, expect, it } from 'vitest';
import { multiply, divide } from './calculadora.js';

describe('Calculadora', () => {
  it('deve multiplicar dois números', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('deve dividir dois números', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('deve lançar erro ao dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow('Divisão por zero não permitida');
  });
});
```

## Exemplo 2: Estrutura de um Controlador

**`src/controllers/usuarioController.ts`**
```typescript
import { Request, Response } from 'express';

export class UsuarioController {
  obterUsuarios(req: Request, res: Response) {
    const usuarios = [
      { id: 1, nome: 'João' },
      { id: 2, nome: 'Maria' },
    ];

    return res.json(usuarios);
  }

  obterUsuarioPorId(req: Request, res: Response) {
    const { id } = req.params;

    const usuario = {
      id: parseInt(id),
      nome: 'João Silva',
      email: 'joao@example.com',
    };

    return res.json(usuario);
  }

  criarUsuario(req: Request, res: Response) {
    const { nome, email } = req.body;

    return res.status(201).json({
      id: Math.floor(Math.random() * 1000),
      nome,
      email,
    });
  }
}
```

## Exemplo 3: Configurar Rotas

**`src/routes/usuarioRoutes.ts`**
```typescript
import { Router } from 'express';
import { UsuarioController } from '../controllers/usuarioController.js';

const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', (req, res) => usuarioController.obterUsuarios(req, res));
router.get('/usuarios/:id', (req, res) => usuarioController.obterUsuarioPorId(req, res));
router.post('/usuarios', (req, res) => usuarioController.criarUsuario(req, res));

export { router as usuarioRouter };
```

## Exemplo 4: Servidor Principal Completo

Substitua o `src/index.ts` por:

```typescript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import { usuarioRouter } from './routes/usuarioRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rotas
app.use(usuarioRouter);

// Health check
app.get('/health', (_, res) => {
  return res.json({ status: 'OK' });
});

// Erro 404
app.use((_, res) => {
  return res.status(404).json({ error: 'Rota não encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
```

---

# 📌 Exemplo de Servidor Básico

```typescript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_, response) => {
  return response.json({
    message: 'API running',
  });
});

app.listen(3000, () => {
  console.log('Server running');
});
```

---

# 📋 Requisitos

* Node.js 22+
* PNPM 11+

Verificar versões:

```bash
node -v
pnpm -v
```

---

# 💡 Dicas Úteis

## Checklist ao Começar um Novo Projeto

- [ ] Clone/faça fork do boilerplate
- [ ] Execute `pnpm install`
- [ ] Delete ou modifique `src/index.ts` e `src/index.spec.ts`
- [ ] Crie a estrutura de pastas conforme necessário (`controllers`, `services`, `routes`, etc.)
- [ ] Configure o `.env` com suas variáveis
- [ ] Execute `pnpm dev` para testar
- [ ] Execute `pnpm test` para validar testes

## Boas Práticas

### 1. **Organize por Responsabilidade**
- `controllers/` - Lidam com requisições HTTP
- `services/` - Contêm regras de negócio
- `repositories/` - Acessam banco de dados
- Separação de responsabilidades torna o código mais mantível

### 2. **Sempre Tipifique Seu Código**
```typescript
// ❌ Evite
export function processar(dados) {
  return dados.map(x => x.value);
}

// ✅ Prefira
interface Item {
  id: number;
  value: string;
}

export function processar(dados: Item[]): string[] {
  return dados.map((item) => item.value);
}
```

### 3. **Teste Suas Funções**
- Cada função importante deve ter um teste
- Teste casos normais E casos extremos (zero, negativo, vazio, etc.)
- Execute `pnpm test:watch` durante desenvolvimento

### 4. **Use Variáveis de Ambiente**
```typescript
// ❌ Evite hardcodar valores
const PORT = 3000;
const DATABASE_URL = 'mysql://localhost:3306/db';

// ✅ Prefira variáveis de ambiente
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mysql://localhost:3306/db';
```

### 5. **Trate Erros Adequadamente**
```typescript
app.use((err: Error, _req: Request, res: Response) => {
  console.error('Erro:', err.message);
  return res.status(500).json({
    error: 'Erro interno do servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});
```

---

# 🚨 Troubleshooting

## "Module not found" ou erro de import

**Causa:** Falta de `/src/index.ts` ou imports incorretos

**Solução:**
```bash
pnpm check  # Verifica tipagem e imports
pnpm lint   # Encontra problemas de código
```

## Testes falhando depois de mudanças

**Solução:**
```bash
pnpm test:watch  # Vê erros em tempo real
```

## Build falha

**Solução:**
```bash
pnpm check    # Valida tipos
pnpm lint     # Valida código
pnpm format   # Formata automaticamente
pnpm build    # Tenta build novamente
```

---

# 📚 Recursos Recomendados

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [ESLint Configuration](https://eslint.org/docs/rules/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

# ✨ Próximos Passos

Após clonar este boilerplate:

1. **Configure seu projeto:**
   ```bash
   git clone <seu-repositório>
   cd node-typescript-boilerplate
   pnpm install
   ```

2. **Substitua `src/index.ts`** com seu servidor Express

3. **Desenvolva suas features** em pastas organizadas

4. **Escreva testes** para cada funcionalidade

5. **Execute os testes:**
   ```bash
   pnpm test:watch
   ```

6. **Build e deploy:**
   ```bash
   pnpm build
   pnpm start
   ```

---

# 📄 Licença

ISC

---

# 👨‍💻 Autor

Guilherme Teixeira

Software Developer

Especialista em Node.js, TypeScript, React, AWS e Arquitetura de Sistemas.

---

**Desenvolvido com ❤️ para a comunidade Node.js**

