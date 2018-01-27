const add = require('./add.js');

class TestSuite {
	runTests() {
		this.testAddPositiveNumvers();
		this.testAddNegativeNumvers();
		this.testAddPosNegaNumvers();
	}
	assertEquals(a, b) {
		return a === b;
	}
	testAddPositiveNumvers() {
		const result = this.assertEquals(add(5,7), 12);
		console.log(result, "testAddPositiveNumvers");
	}
	testAddNegativeNumvers() {
		const result = this.assertEquals(add(-5,-7), -12);
		console.log(result, "testAddNegaitiveNumvers");
	}
	testAddPosNegaNumvers() {
		const result = this.assertEquals(add(5,-7), -2);
		console.log(result, "testAddPosNagaNumvers");
	}
}

const testSuite = new TestSuite();
testSuite.runTests();