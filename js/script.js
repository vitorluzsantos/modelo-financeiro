function calcular(){
	let kilos = Number(idLote.value);
	let preco = Number(idPreco.value);
	let graus = Number(idGraus.value);

	let perda = preco * kilos;
	if(graus <= 4){
		idResultado.innerHTML = `
🌡️ Temperatura atual: ${graus} C° <br>
✅ Ideal para o refrigeramento <br>
Possível perda caso saia do padrão: R$ <p> ${perda.toFixed(2)} </p>`;
	} else {
		idResultado.innerHTML = `
🌡️ Temperatura atual: ${graus} C° <br>
⚠️ <p>Não está apropriada para o refrigeramento</p> <br>
Possível perda caso saia do padrão: R$<p>${perda.toFixed(2)} </p>`;
	} //comentário gamer!!!
}
