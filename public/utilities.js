function roundToTwoDecimals(number, numberTypeString) {
	number = number.replace('$', '');
	if (isNaN(number)) {
		alert('Please enter a valid ' + numberTypeString + '.');
		return Number.NaN;
	}

	return (parseFloat(number) + parseFloat(0.001)).toFixed(2);
}

function roundToTwoDecimalsDefault(number) {
	return roundToTwoDecimals(number, "number");
}

function makeTimeString(time) {
	var millisPerSecond = 1000;
	var millisPerMinute = millisPerSecond * 60;
	var millisPerHour = millisPerMinute * 60;

	var hours = parseInt(time / millisPerHour);
	time = time - hours * millisPerHour;
	var minutes = parseInt(time / millisPerMinute);
	time = time - minutes * millisPerMinute;
	var seconds = parseInt(time / millisPerSecond);

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	return hours + ':' + minutes + ':' + seconds;
}

function pay() {
  document.getElementById('payForm').style.display = "block";
}

function hidePay() {
	document.getElementById('payForm').style.display = "none";
	document.getElementById('name').value = "";
	document.getElementById('ccNumber').value = "";
	document.getElementById('ccExpiration').value = "";
	document.getElementById('ccCVV').value = "";
	document.getElementById('ccZip').value = "";
}

function check_empty(confirmPay) {
	if(document.getElementById('name').value == "" ||
		 document.getElementById('ccNumber').value == "" ||
		 document.getElementById('ccExpiration').value == "" ||
		 document.getElementById('ccCVV').value == "" ||
		 document.getElementById('ccZip').value == "") {
		alert ("Fill All Fields!");
	} else { 
		confirmPay();
	}
}