# Módulo 2: Tecnologia Blockchain

## 2.1 Fundamentos da Blockchain

### O que é Blockchain?

Blockchain é uma tecnologia de registro distribuído que mantém um ledger (livro-razão) de transações de forma descentralizada, transparente e imutável. Cada bloco contém um conjunto de transações e um hash criptográfico do bloco anterior, criando uma corrente de blocos que não pode ser alterada sem ser detectado.

**Características Fundamentais:**

- **Distribuído**: Cópias completas da blockchain são mantidas por múltiplos nós
- **Transparente**: Todas as transações são visíveis para todos os participantes
- **Imutável**: Uma vez adicionado, um bloco não pode ser alterado
- **Seguro**: Utiliza criptografia avançada para proteger os dados
- **Consenso**: Requer acordo da rede antes de adicionar novos blocos

### Estrutura de um Bloco

Cada bloco em uma blockchain contém:

1. **Header do Bloco**:
   - Versão do protocolo
   - Hash do bloco anterior
   - Raiz de Merkle (hash de todas as transações)
   - Timestamp
   - Dificuldade de mineração
   - Nonce (número usado uma única vez)

2. **Transações**:
   - Lista de todas as transações incluídas no bloco
   - Cada transação contém inputs, outputs e assinatura digital

### Hash Criptográfico

O hash é uma função matemática que converte dados de qualquer tamanho em uma sequência de caracteres de tamanho fixo. Propriedades importantes:

- **Determinístico**: O mesmo input sempre produz o mesmo output
- **Rápido**: Fácil de calcular
- **Efeito Avalanche**: Pequenas mudanças no input produzem outputs completamente diferentes
- **Unidirecional**: Impossível reverter o hash para obter o input original

## 2.2 Mecanismos de Consenso

### Proof of Work (PoW)

O Proof of Work é o mecanismo original usado pelo Bitcoin. Mineradores competem para resolver um problema matemático complexo.

**Como Funciona:**

1. Transações são coletadas em um pool de memória
2. Mineradores tentam encontrar um nonce que, quando combinado com os dados do bloco, produz um hash com um número específico de zeros iniciais
3. O primeiro minerador a encontrar o nonce válido transmite o bloco para a rede
4. Outros nós verificam se o bloco é válido
5. Se válido, o bloco é adicionado à blockchain e o minerador recebe uma recompensa

**Vantagens:**
- Altamente seguro
- Totalmente descentralizado
- Prova de trabalho real

**Desvantagens:**
- Consome muita energia
- Lento (Bitcoin: ~10 min por bloco)
- Requer hardware especializado (ASICs)

### Proof of Stake (PoS)

O Proof of Stake é um mecanismo mais eficiente em energia onde validadores são escolhidos com base na quantidade de moedas que possuem e estão dispostos a "colocar em risco" (stake).

**Como Funciona:**

1. Validadores depositam suas moedas como stake
2. A rede escolhe aleatoriamente um validador para propor o próximo bloco
3. Outros validadores atestam o bloco
4. Se o bloco for válido, o propositor e os atestadores recebem recompensas
5. Se um validador agir de forma maliciosa, seu stake é reduzido (slashing)

**Vantagens:**
- Muito mais eficiente em energia
- Mais rápido que PoW
- Incentiva a participação de longo prazo

**Desvantagens:**
- Favorece os ricos (quanto mais moedas, maior a chance de ser escolhido)
- Menos testado em escala que PoW
- Risco de centralização

### Outros Mecanismos

**Delegated Proof of Stake (DPoS)**:
- Stakeholders votam em delegados que validam blocos
- Usado por Cosmos, EOS, Polkadot

**Proof of Authority (PoA)**:
- Validadores conhecidos e confiáveis validam blocos
- Usado em blockchains privadas e redes de teste

**Proof of History (PoH)**:
- Solana usa PoH para criar um histórico verificável de eventos
- Combina com PoS para consenso

## 2.3 Tipos de Blockchain

### Blockchain Pública

Qualquer pessoa pode participar como nó ou validador:

- **Bitcoin**: Rede descentralizada de pagamentos
- **Ethereum**: Plataforma de contratos inteligentes
- **Cardano**: Blockchain de terceira geração

**Características:**
- Totalmente descentralizada
- Qualquer um pode ler e escrever
- Transparência total

### Blockchain Privada

Apenas participantes autorizados podem acessar:

- **Hyperledger Fabric**: Plataforma empresarial
- **Corda**: Plataforma para instituições financeiras

**Características:**
- Acesso restrito
- Controle centralizado
- Maior privacidade

### Blockchain Permissionada vs Não Permissionada

**Não Permissionada (Permissionless)**:
- Qualquer um pode participar
- Não requer aprovação
- Exemplo: Bitcoin, Ethereum

**Permissionada (Permissioned)**:
- Requer aprovação para participar
- Controle sobre quem pode validar
- Exemplo: Blockchains corporativas

## 2.4 Contratos Inteligentes

### O que são Contratos Inteligentes?

Contratos inteligentes são programas autoexecutáveis que rodam em uma blockchain. Quando condições pré-definidas são atendidas, o contrato executa automaticamente.

**Características:**

- **Autoexecução**: Executam automaticamente quando condições são atendidas
- **Imutabilidade**: Uma vez deployado, não pode ser alterado
- **Transparência**: Código é visível para todos
- **Determinístico**: Sempre produzem o mesmo resultado dado o mesmo input

### Linguagens de Programação

**Solidity** (Ethereum):
- Linguagem mais popular para contratos inteligentes
- Sintaxe similar a JavaScript
- Altamente documentada

**Rust** (Solana, Polkadot):
- Linguagem de sistemas com segurança de memória
- Mais segura que Solidity
- Crescente em popularidade

**Move** (Aptos, Sui):
- Linguagem focada em segurança de ativos
- Previne certos tipos de vulnerabilidades

### Casos de Uso

**Finanças Descentralizadas (DeFi)**:
- Protocolos de empréstimo
- Exchanges descentralizadas
- Derivativos

**Tokenização**:
- Tokens ERC-20 (fungíveis)
- Tokens ERC-721 (NFTs)
- Ativos do mundo real tokenizados

**Governança**:
- Votação descentralizada
- Tesouro comunitário
- Propostas de protocolo

## 2.5 Escalabilidade e Camadas

### Problema de Escalabilidade

Blockchains enfrentam o "trilemma da escalabilidade":

- **Descentralização**: Muitos nós participando
- **Segurança**: Resistência a ataques
- **Escalabilidade**: Capacidade de processar muitas transações

Melhorar um aspecto geralmente prejudica os outros.

### Soluções de Camada 1

Melhorias no protocolo base:

**Sharding**:
- Divide a blockchain em múltiplas cadeias paralelas
- Cada shard processa transações independentemente
- Aumenta a capacidade total

**Aumento de Tamanho de Bloco**:
- Mais transações por bloco
- Risco de centralização (nós maiores)

**Consenso Mais Rápido**:
- Reduz tempo entre blocos
- Exemplo: Solana (400ms por bloco)

### Soluções de Camada 2

Redes secundárias que liquidam na blockchain principal:

**Payment Channels**:
- Lightning Network (Bitcoin)
- Raiden Network (Ethereum)
- Múltiplas transações off-chain, liquidação final on-chain

**Rollups**:
- **Optimistic Rollups**: Assumem que transações são válidas, permitem desafios
- **Zero-Knowledge Rollups**: Provam criptograficamente a validade
- Exemplos: Arbitrum, Optimism, StarkNet

**Sidechains**:
- Blockchains independentes com ponte para a principal
- Exemplo: Polygon

## 2.6 Segurança em Blockchain

### Tipos de Ataques

**Ataque 51%**:
- Atacante controla 51% da potência de hash
- Pode reverter transações recentes
- Mais viável em blockchains pequenas

**Double Spending**:
- Gastar a mesma moeda duas vezes
- Prevenido por consenso e imutabilidade

**Sybil Attack**:
- Atacante cria múltiplas identidades falsas
- Mitigado por mecanismos de consenso

**Smart Contract Exploits**:
- Vulnerabilidades no código
- Exemplos: reentrância, overflow/underflow

### Práticas de Segurança

**Auditoria de Código**:
- Revisão por especialistas em segurança
- Testes automatizados
- Testes de penetração

**Multisig Wallets**:
- Requer múltiplas assinaturas para transações
- Reduz risco de perda de chaves

**Hardware Wallets**:
- Armazenam chaves privadas offline
- Exemplos: Ledger, Trezor

## 2.7 Aplicações Além de Criptomoedas

### Cadeia de Suprimentos

Rastreamento de produtos desde a origem até o consumidor:

- Transparência total
- Detecção de falsificações
- Verificação de autenticidade

### Identidade Digital

Identidades verificáveis e portáveis:

- Documentos descentralizados
- Controle do usuário
- Privacidade preservada

### Votação

Sistemas de votação seguros e transparentes:

- Voto verificável
- Impossibilidade de fraude
- Transparência total

### Propriedade Intelectual

Registro de direitos autorais e patentes:

- Timestamp verificável
- Prova de propriedade
- Rastreamento de uso

## Conclusão do Módulo 2

A blockchain é uma tecnologia revolucionária que vai muito além de criptomoedas. Compreender seus mecanismos, limitações e potencial é fundamental para entender o futuro das finanças e da tecnologia. Nos próximos módulos, exploraremos como essa tecnologia está sendo aplicada em criptomoedas específicas e em finanças descentralizadas.
