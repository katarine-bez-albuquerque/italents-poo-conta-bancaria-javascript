const Conta = require('./conta');

class ContaCorrente extends Conta {

    juros = 0;

    constructor(titulo, saldo, juros) {
        super(titulo, saldo);
        this.juros = juros;
    }

    aplicarJuros() {
        this.saldo += this.juros * 0.1;
    }

    imprimir() {
        return `${this.titular.toUpperCase()} possui saldo de R$ ${this.saldo.toFixed(2)} com juros de ${this.juros.toFixed(1)}%.`;
    }
}

module.exports = ContaCorrente;