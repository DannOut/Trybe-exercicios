// A função abaixo pode receber tanto um número
// quanto uma string.
function imprimirCPF(cpf: number | string) {
  console.log('Seu CPF é: ' + cpf);
}

imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
// Saída:
// Seu CPF é: 111.111.111-11

type Materia = 'líquido' | 'sólido' | 'gasoso';
const materia: Materia = 'gasoso';

type CPF = string | number;
const cpf: CPF = '123.567.890-12';
const cpf2: CPF = 123456789012;

type SO = 'linux' | 'mac' | 'windows';
const so: SO = 'linux';

type vogais = 'a' | 'e' | 'i' | 'o' | 'u';
