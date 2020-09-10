import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{

	static numeroDeContas = 0;

    constructor(cliente, agencia){
		super(0, cliente, agencia)
		ContaCorrente.numeroDecontas += 1 
    }

    sacar(valor){
		let taxa = 1.1
		return this.sacar(valor, taxa)
    }

}
