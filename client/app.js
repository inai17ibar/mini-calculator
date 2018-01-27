const add = require("./add.js");

class ViewManager {
	connectEventHandlers() {
		// wire up event handler for form submit
		document.getElementById('form-numbers')
		.addEventListener(
			'submit',
			this.onSubmit);
	}

	onSubmit(event) {
		event.preventDefault();

		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;
		
		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		const sum = add(num1, num2);

		alert(sum);
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();