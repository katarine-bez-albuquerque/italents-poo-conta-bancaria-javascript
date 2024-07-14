const prompt = require('prompt-sync')();
const Conta = require('./model/conta');
const ContaPoupanca = require('./model/conta-poupanca');
const ContaCorrente = require('./model/conta-corrente');

function getTitulo() {
    const titulo = prompt("Informe o nome do titular: ");
    validarTitulo(titulo);
    return titulo;
}

function getRendimento() {
    const rendimento = +prompt("Informe o rendimento: ");
    return rendimento;
}

function getJuros() {
    const juros = +prompt("Informe o juros: ");
    return juros;
}

function validarTitulo(titulo) {
    let regex = /[a-zA-Z]/g; // Aceita somente textos.
    if (!regex.test(titulo)) { // Testa se o título é texto e não número.
        throw new Error("Informe um título por extenso!");
    }
    if (typeof (titulo) !== 'string') { // Verifica se é String.
        throw new Error("Informe um título para prosseguir!");
    }
    if (!titulo) {
        throw new Error("O campo título está vazio! informe um título.");
    }
}

function validar(valor) {
    if (typeof (valor) !== 'number') {
        throw new Error("Informe somente número positivo!");
    }
    if (!valor) {
        throw new Error("O campo recebe um número positivo!");
    }
    if (valor <= 0) {
        throw new Error("Informe número positivo maior do que zero!");
    }
    if (Number.isNaN(valor)) {
        throw new Error("Informe número positivo válido!");
    }
}

function getValoresParaSaqueEDeposito(opcao,conta) {    
    switch (opcao) {
        case 1: {
            let valor = +prompt(`Informe o valor de saque: `);
            conta.sacar(valor);
            break;
        }
        case 2: {
            let valor = +prompt(`Informe o valor de depósito: `);
            conta.depositar(valor);
            break;
        }
        default: {
            throw new Error("Opção inválida! Tente novamente!");
        }
    }
}

function cadastrarContaGenerica() {
    console.log("\nConta:");
    let conta = new Conta(getTitulo(), 0);

    menuOpcoesDeOperacoes();
    let opcao = +prompt("Informe a operação: ");
    validar(opcao);
        
    while(opcao !== 3) {
        getValoresParaSaqueEDeposito(opcao,conta);
        menuOpcoesDeOperacoes();
        opcao = +prompt("Informe a operação: ");
        validar(opcao);
    }       
    
    imprimirDados(conta);
}

function cadastarContaPoupanca() {
    console.log("\nConta Poupança:");
    let contaPoupanca = new ContaPoupanca(getTitulo(), 0, 0);

    menuOpcoesDeOperacoes();
    let opcao = +prompt("Informe a operação: ");
    validar(opcao);
    
    while(opcao !== 3) {
        getValoresParaSaqueEDeposito(opcao, contaPoupanca);
        menuOpcoesDeOperacoes();
        opcao = +prompt("Informe a operação: ");
        validar(opcao);
    }
    console.log();
    contaPoupanca.rendimento = getRendimento();
    contaPoupanca.aplicarRendimento();
    imprimirDados(contaPoupanca);
}

function cadastrarContaCorrente() {
    console.log("\nConta Corrente:");
    let contaCorrente = new ContaCorrente(getTitulo(), 0, 0);
    
    menuOpcoesDeOperacoes();
    let opcao = +prompt("Informe a operação: ");
    validar(opcao);
    
    while(opcao !== 3) {
        getValoresParaSaqueEDeposito(opcao, contaCorrente);
        menuOpcoesDeOperacoes();
        opcao = +prompt("Informe a operação: ");
        validar(opcao);
    }
    console.log();
    contaCorrente.juros = getJuros();
    contaCorrente.aplicarJuros();
    imprimirDados(contaCorrente);
}

function imprimirDados(conta) {
    if(conta.saldo <= 0) {
        console.log("\nOperação finalizada!");
    }
    else {
        console.log("\nImpressão:");
        console.log(conta.imprimir());
    }    
}

function menuOpcoesDeConta() {
    console.log("\n[1]-Conta Genérica");
    console.log("[2]-Conta Poupança");
    console.log("[3]-Conta Corrente");
    console.log("[4]-Sair\n");
}

function menuOpcoesDeOperacoes() {
    console.log("\n[1]-Saque");
    console.log("[2]-Depósito");
    console.log("[3]-Sair\n");
}

function escolherContas() {
    
    menuOpcoesDeConta();
    let opcao = +prompt("Informe a opção do menu: ");
    validar(opcao);

    while(opcao !== 4) {
        switch (opcao) {
            case 1: {
                cadastrarContaGenerica();
                console.log("");
                break;
            }
            case 2: {
                cadastarContaPoupanca();
                console.log("");
                break;
            }
            case 3: {                
                cadastrarContaCorrente();
                console.log("");
                break;
            }
            default: {
                console.log("\nOpção inválida! Tente novamente.\n");
                menuOpcoesDeConta();
                opcao = +prompt("Deseja realizar mais alguma operação? Informe a opção do menu: ");
                validar(opcao);
            }
        }
        menuOpcoesDeConta();
        opcao = +prompt("Deseja realizar mais alguma operação? Informe a opção do menu: ");
        validar(opcao);
    }
    console.log("\nAplicação Finalizada\n");
}

console.log("\nBanco Mundial");
try {
    escolherContas();
}
catch (error) {
    console.log(`\n${error.message}\n`);
}