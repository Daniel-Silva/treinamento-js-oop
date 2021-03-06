/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
function triangleType(a, b, c) {
	if (b - c < a < b + c && a - c < b < a + c && a - b < c < a + b) {
		if (a === b && b === c) {
			return 'Triângulo Equilátero';
		} else if (a === b || b === c || a === c) {
			return 'Triângulo Isósceles';
		} else {
			return 'Triângulo Escaleno';
		}
	} else {
		return 'Condição de existência do triângulo não atendida';
	}
}

console.log(triangleType(2, 1, 5));
