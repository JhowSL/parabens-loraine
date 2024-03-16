# Documentação do Projeto de Site de Aniversário

## Visão Geral

Este projeto visa criar um site interativo de aniversário que oferece uma
experiência única para os usuários, apresentando mensagens, imagens e vídeos em
um layout de scroller infinito. Utilizando Next.js, Material UI e outras
tecnologias modernas, este guia destaca as melhores práticas e ferramentas
recomendadas para a construção do site.

## Tecnologias Utilizadas

- **Next.js**: Framework de React para produção que oferece SSR (Server-Side
  Rendering), SSG (Static Site Generation), entre outras funcionalidades.

- **Material UI**: Biblioteca de componentes de React para um desenvolvimento
  rápido e eficiente de interfaces de usuário.

- **TypeScript**: Superset de JavaScript que adiciona tipagem estática,
  melhorando o desenvolvimento e a manutenção do código.

## Configuração do Projeto

### Inicialização

Inicie o projeto utilizando o comando `npx create-next-app@latest --typescript`,
que configura automaticamente o TypeScript.

### Estrutura do Projeto

- Utilize o diretório `src/` para organizar o código-fonte.

- Adote o diretório `app` para tirar vantagem do App Router no Next.js 13+,
  facilitando o roteamento e o agrupamento de layouts.

### Personalização de Alias de Importação

Configure o alias `@/` para referenciar diretamente o diretório `src/`,
simplificando os imports e melhorando a legibilidade do código.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Desenvolvimento

### Scroller Infinito

- Biblioteca Recomendada: Utilize React Query ou SWR para gerenciar o
  carregamento de dados de forma eficiente.

- Implementação: Aproveite a API Intersection Observer para detectar quando mais
  conteúdo precisa ser carregado.

### Gerenciamento de Estado

Considere usar Context API, Recoil ou Zustand, dependendo da complexidade do
estado na sua aplicação.

### Otimização de Mídia

- Use o componente Image do Next.js para otimização automática de imagens.

- Implemente lazy loading para vídeos, melhorando o tempo de carregamento da
  página.

## Melhores Práticas

- SEO e Acessibilidade: Siga as melhores práticas para garantir que o site seja
  acessível e bem indexado por motores de busca.

- Performance: Monitore e otimize a performance do site, especialmente o
  carregamento de mídias e o scroller infinito.

## Conclusão

Este documento oferece um guia inicial para o desenvolvimento do site de
aniversário, destacando as principais tecnologias e práticas recomendadas.
Mantenha-se atualizado com as últimas versões das ferramentas utilizadas e
esteja aberto a ajustar as técnicas conforme necessário.
