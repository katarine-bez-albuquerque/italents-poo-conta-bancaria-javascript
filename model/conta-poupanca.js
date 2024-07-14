const Conta = require('./conta');

class ContaPoupanca extends Conta {
    rendimento = 0;

    constructor(titulo) {
        super(titulo);
        this.rendimento = 0;
    }

    aplicarRendimento() {
        this.validar(this.rendimento);
        this.saldo += this.rendimento;
        console.log("\nRendimento informado com sucesso!");
    }

    imprimir() {
        return `${this.titular.toUpperCase()} possui saldo de R$ ${this.saldo.toFixed(2)} com rendimento de R$ ${this.rendimento.toFixed(2)}.`;
    }
}

module.exports = ContaPoupanca;