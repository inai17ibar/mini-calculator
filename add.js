const add = function(num1, num2) {
	return num1 + num2;
}

module.exports = add;
// module.exports = {
//    add: add
// };

//module.exports = { add: add } はプロパティaddを持つアクセス可能なオブジェクトを作り、それに対応する値 add--adder.jsに既に書いた関数を作ります。