// Implementando o comportamento do método forEach()
Array.prototype.forEachs = function(callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
};

const aprovados = [ 'Daneil', 'Matheus', 'Flávia', 'Fabiana' ];

aprovados.forEachs((element, index, arr) => {
	aprovados.sort();
	console.log(`${index + 1}- ${element} | ${arr}`);
});
