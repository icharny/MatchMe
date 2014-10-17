function roundToTwoDecimals(number, numberTypeString) {
	if (isNaN(number)) {
		alert("Please enter a valid " + numberTypeString);
		return Number.NaN;
	}

	return (parseFloat(number) + parseFloat(0.001)).toFixed(2);
}

function roundToTwoDecimalsDefault(number) {
	return roundToTwoDecimals(number, "number");
}