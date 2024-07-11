const prompt = require('prompt-sync')();
const Conta = require('./model/conta');
const ContaPoupanca = require('./model/conta-poupanca');
const ContaCorrente = require('./model/conta-corrente');

function getTitulo() {
    const titulo = prompt("Informe o nome do titular: ");
    return titulo;
}

function getValor(operacao) {
    let valor = 0;
    if(operacao === "saque") {
        valor = +prompt(`Informe o valor de ${operacao}: `);
    }
    else if(operacao === "depósito") {
        valor = +prompt(`Informe o valor de ${operacao}: `);
    }    
    return valor;
}

function getRendimento() {
    const rendimento = +prompt("Informe o rendimento: ");
    return rendimento;
}

function getJuros() {
    const juros = +prompt("Informe o juros: ");
    return juros;
}

function cadastrarContaGenerica() {
    console.log("\nConta:");
    let conta = new Conta(getTitulo(), 0);
    conta.depositar(getValor('depósito'));
    conta.sacar(getValor('saque'));

    imprimirDados(conta);
}

function cadastarContaPoupanca() {
    console.log("\nConta Poupança:");
    let contaPoupanca = new ContaPoupanca(getTitulo(), 0, 0);
    contaPoupanca.depositar(getValor('depósito'));
    contaPoupanca.sacar(getValor('saque'));
    contaPoupanca.rendimento = getRendimento();
    contaPoupanca.aplicarRendimento();
    
    imprimirDados(contaPoupanca);
}

function cadastrarContaCorrente() {
    console.log("\nConta Corrente:");
    let contaCorrente = new ContaCorrente(getTitulo(), 0, 0);
    contaCorrente.depositar(getValor('depósito'));
    contaCorrente.sacar(getValor('saque'));
    contaCorrente.juros = getJuros();
    contaCorrente.aplicarJuros();
    
    imprimirDados(contaCorrente);
}

function imprimirDados(conta) {
    console.log("\nImpressão:");
    console.log(conta.imprimir());
    console.log("");
}

function validar(valor) {
    if(typeof(valor) !== 'number' || !valor || valor <= 0 || Number.isNaN(valor) || !Number.isInteger(valor)) {
        throw new Error("Informe números inteiros positivos diferente de zero!");
    }
}

console.log("");

try {
    var qtdContas = +prompt("Informe a quantidade de contas: ");
    validar(qtdContas);
    
    for(let i=0; i<qtdContas; i++) {
        let opcao = +prompt("Informe se deseja: [1]-Conta | [2]-Poupança | [3]-Corrente: ");
        validar(opcao);
        switch(opcao) {
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
                throw new Error("Opção inválida! Tente novamente.");
            }
        }
    }
}
catch(error) {
    console.log(`\n${error.message}\n`);
}