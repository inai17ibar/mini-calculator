const add = require('./add.js');

class TestSuite {
	runTest(testName) {
		const result = this[testName](); //子オブジェクトのプロパティ名から関数を指定する
		console.log(result, testName);
	}
	runTests() {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this)) //子オブジェクトのプロトタイプから全てのプロパティのリストをとる
		.filter(prop => this[prop] instanceof Function) //★オブジェクトが自身のプロトタイプにコンストラクタのprototypeプロパティをもつか？
		.filter(prop => prop.indexOf('test') !== -1) //そのプロパティ名にtestが含まれるならば
		.forEach(testName => this.runTest(testName)); //その名前でメソッドを実行する
	}
	assertEquals(a, b) {
		return a === b;
	}
	testAddPositiveNumbers() {
		return this.assertEquals(add(5,7), 12);
	}
	testAddNegativeNumbers() {
		return this.assertEquals(add(-5,-7), -12);
	}
	testAddPosNegaNumbers() {
		return this.assertEquals(add(5,-7), -2);
	}
}

//子オブジェクト　　　　　//親オブジェクト　　//実際は、子オブジェクトのprototypeプロパティに親オブジェクトを紐付けている
const testSuite = new TestSuite();
testSuite.runTests();
