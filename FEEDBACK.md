# **Feedback 2a Entrega - Avaliação Geral**

## Front End

### Navegação

- Navegação simples, porém funcional

### Design

- Design simples, porém funcional

### Funcionalidade

- As funcionalidades estão implementadas e operando.
- Criticas:
    - Ao criar um novo User e realizar login ocorre uma nullreference exception devido uma somatoria de dados na tela
    - As categorias não vieram carregadas para meu usuário, deveriam haver categorias do sistema disponivel para todos.
    - Não existe orçamento geral, apenas por categoria.
    - Na tela de totais são exibidos valores totais que não são do meu user, provavelmente uma somatoria de tudo da base
    - Senti falta de um Dashboard com um resumo de informações, a tela de totais não atende 100% essa necessidade.


## Back End

### Arquitetura

- Separação de responsabilidades e camadas ok
- Criticas:
    - Não vi sentido na classe RegisterCore estar na camada de Dados.
    - PanelService usando instruções HTML hardcoded, isso poderia ser feito com alguma extensibilidade do Razor

### Funcionalidade

- Considerando as críticas apontadas, as funcionalidades estão implementadas e funcionando.

### Modelagem

- Modelagem basica, porém adequada, validações, mapeamento.

## Projeto

### Organização

- O projeto da Solution poderia estar na pasta do Back-End e não na raíz

### Documentação

- Documentação clara e bem explicativa

### Instalação

- O projeto rodou fluentemente usando apenas os comandos necessários.