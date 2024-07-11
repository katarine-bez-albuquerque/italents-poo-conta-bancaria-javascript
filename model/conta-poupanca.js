const Conta = require('./conta');

class ContaPoupanca extends Conta {
    rendimento = 0;

    constructor(titulo, saldo, rendimento) {
        super(titulo, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento() {
        this.saldo += this.rendimento;
    }

    imprimir() {
        return `${this.titular.toUpperCase()} possui saldo de R$ ${this.saldo.toFixed(2)} com rendimento de R$ ${this.rendimento.toFixed(2)}.`;
    }
}

module.exports = ContaPoupanca;