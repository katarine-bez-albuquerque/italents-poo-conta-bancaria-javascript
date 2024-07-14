class Conta {
    titular = "";
    saldo = 0;

    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    validarTitulo(titulo) {
        if(typeof(titulo) !== 'string' || !titulo) {
            throw new Error("Informe um título!");
        }
    }

    validar(valor) {
        if (typeof (valor) !== 'number') {
            throw new Error("Informe somente número positivo!");
        }
        if (!valor) {
            throw new Error("O campo recebe um número positivo!");
        }
        if (valor < 0) {
            throw new Error("Informe número positivo maior do que zero!");
        }
        if (valor <= -1) {
            throw new Error("Informe um número positivo!");
        }
        if (Number.isNaN(valor)) {
            throw new Error("Informe número positivo válido!");
        }
    }

    depositar(valor) {
        this.validar(valor);
        this.saldo += valor;
        console.log("\nDepósito realizado com sucesso!");
    }

    sacar(valor) {
        this.validar(valor);
        this.saldo -= valor;
        console.log("\nSaque realizado com sucesso!");
    }

    imprimir() {
        return `${this.titular.toUpperCase()} possui saldo de R$ ${this.saldo.toFixed(2)}.`;
    }
}

module.exports = Conta;