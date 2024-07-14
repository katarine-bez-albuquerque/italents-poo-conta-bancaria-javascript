const Conta = require('./conta');

class ContaCorrente extends Conta {

    juros = 0;

    constructor(titulo) {
        super(titulo);
        this.juros = 0;
    }

    aplicarJuros() {
        this.validar(this.juros);
        this.saldo += this.juros * 0.1;
        console.log("\nJuros aplicado com sucesso!");
    }

    imprimir() {
        return `${this.titular.toUpperCase()} possui saldo de R$ ${this.saldo.toFixed(2)} com juros de ${this.juros.toFixed(1)}%.`;
    }
}

module.exports = ContaCorrente;