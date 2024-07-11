class Conta {
    titular = "";
    saldo = 0;

    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    validarTitulo(titulo) {
        if(typeof(titulo) !== 'string' || !titulo) {
            throw new Error("Informe um um título!");
        }
    }

    validar(valor) {
        if(typeof(valor) !== 'number' || !valor || valor < 0) {
            throw new Error("Informe um valor numérico!");
        }        
    }

    validarSaque(valor) {
        if(valor < 5) {
            throw new Error("Informe um valor numérico igual ou acima de cinco!");
        }
    }

    depositar(valor) {
        this.validar(valor);
        this.saldo += valor;
    }

    sacar(valor) {
        this.validar(valor);
        this.validarSaque(valor);
        this.saldo -= valor;
    }

    imprimir() {
        return `${this.titular.toUpperCase()} possui saldo de R$ ${this.saldo.toFixed(2)}.`;
    }
}

module.exports = Conta;