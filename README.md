# Voala Records – Landing Page

Landing page da gravadora **Voala Records**, desenvolvida com foco em visual forte, animações e responsividade.

## Tecnologias utilizadas

- **Vite + React 18**
  - `src/main.tsx` monta o componente `App` em `#root`.
  - `src/app/App.tsx` organiza a página em seções:
    - `Header`, `Hero`, `History`, `Moments`, `Artists`, `Releases`, `Contact`, `Footer`.

- **TypeScript**
  - Tipagem nas estruturas principais de dados (por exemplo, lançamentos musicais).
  - Arquivo `src/types/images.d.ts` permite importar imagens e vídeos diretamente nos componentes.

- **Tailwind CSS 4**
  - Estilos globais em `src/styles/index.css`.
  - Arquivos de suporte:
    - `fonts.css`: registro de fontes (incluindo a fonte customizada usada no hero).
    - `tailwind.css`: configuração do Tailwind.
    - `theme.css`: tokens de tema (cores, radius, etc.) usados via classes utilitárias.

- **Animações (motion)**
  - Animações de entrada, scroll e hover em seções como:
    - `Hero` (título, subtítulo, botão principal).
    - `History`, `Moments`, `Artists`, `Releases`, `Contact`.

- **Ícones (lucide-react)**
  - Ícones de interface em várias seções:
    - Contato (`Mail`, `Phone`, `MapPin`).
    - Redes sociais (`Instagram`, ícone de música, `Youtube`).
    - Navegação e feedback (`ChevronDown`, `Play`).

- **Carousel (Embla)**
  - Implementado em `src/shared/components/ui/carousel.tsx`.
  - Utilizado em `src/app/components/Artists.tsx` para o carrossel de artistas.

- **Camada compartilhada (`shared`)**
  - `src/shared/utils/cn.ts`: utilitário para composição de classes CSS.
  - `src/shared/utils/scroll.ts`: função de scroll suave para seções.
  - `src/shared/hooks/useInView.ts`: hook para detectar quando um elemento entra em viewport.
  - `src/shared/components/ui/button.tsx` e `carousel.tsx`: componentes de UI reutilizáveis.

## Principais seções

- **Header** (`src/app/components/Header.tsx`)
  - Cabeçalho fixo com logotipo e navegação por âncoras para as seções da página.

- **Hero** (`src/app/components/Hero.tsx`)
  - Seção inicial com vídeo de fundo, título principal, subtítulo e botão de chamada para ação.

- **History** (`src/app/components/History.tsx`)
  - Texto institucional contando a história da gravadora, acompanhado de imagem ilustrativa.

- **Moments** (`src/app/components/Moments.tsx`)
  - Grade de momentos/eventos com imagens e overlay ao passar o mouse.

- **Artists** (`src/app/components/Artists.tsx`)
  - Carrossel apresentando os artistas e membros do coletivo, com imagem e descrição.

- **Releases** (`src/app/components/Releases.tsx`)
  - Lista de lançamentos com capa, tipo, artista e botão “Ouça Agora” que abre o link da música.

- **Contact** (`src/app/components/Contact.tsx`)
  - Formulário de contato que abre o cliente de e-mail do usuário usando `mailto`.
  - Bloco com informações de contato (e-mail, telefone, localização) e links para redes sociais.

- **Footer** (`src/app/components/Footer.tsx`)
  - Rodapé com nome da gravadora, direitos autorais e tagline.

## Scripts

- **Instalar dependências**

```bash
npm install
