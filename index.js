import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"


const diretor = new Diretor("Julio", 1000, 123456789)
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Jessica", 500, 123455445)
gerente.cadastrarSenha("123456")

const cliente = new Cliente("Lais", 25445454, "123")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456");

console.log(diretorEstaLogado)

console.log(gerenteEstaLogado)

console.log(clienteEstaLogado)
