function toMeters(inputNumber, inputUnits) {
	if (inputUnits == "Inches") {
		var outputMeters = inputNumber * 0.0254;
        return outputMeters;
	}
	else if (inputUnits == "Feet") {
        outputMeters = inputNumber * 0.3048;
        return outputMeters;
	}
	else if (inputUnits == "Miles") {
        outputMeters = inputNumber * 1609.34;
        return outputMeters;
	}
	else if (inputUnits == "Millimeters") {
        outputMeters = inputNumber / 1000;
        return outputMeters;
	}
	else if (inputUnits == "Centimeters") {
        outputMeters = inputNumber / 100;
        return outputMeters;
	}
	else if (inputUnits == "Meters") {
        outputMeters = inputNumber;
        return outputMeters;
	}
	else if (inputUnits == "Kilometers") {
        outputMeters = inputNumber * 1000;
        return outputMeters;
	}
}

function fromMeters(inputMeters, outputUnits) {
	if (outputUnits == "Inches") {
		var outputNumber = inputMeters / 0.0254;
        return outputNumber;
	}
	else if (outputUnits == "Feet") {
        outputNumber = inputMeters / 0.3048;
        return outputNumber;
	}
	else if (outputUnits == "Miles") {
        outputNumber = inputMeters / 1609.34;
        return outputNumber;
	}
	else if (outputUnits == "Millimeters") {
        outputNumber = inputMeters * 1000;
        return outputNumber;
	}
	else if (outputUnits == "Centimeters") {
        outputNumber = inputMeters * 100;
        return outputNumber;
	}
	else if (outputUnits == "Meters") {
        outputNumber = inputMeters;
        return outputNumber;
	}
	else if (outputUnits == "Kilometers") {
        outputNumber = inputMeters / 1000;
        return outputNumber;
	}
}

function unitconverter() {
	var inputUnitsBox = document.getElementById("Input Units");
	var inputUnits = inputUnitsBox.options[inputUnitsBox.selectedIndex].text;
	var outputUnitsBox = document.getElementById("Output Units");
	var outputUnits = outputUnitsBox.options[outputUnitsBox.selectedIndex].text;
	var inputValue = document.getElementById("inputNumber").value;

    var outputMeters = toMeters(inputValue, inputUnits);
    var outputNumber = fromMeters(outputMeters, outputUnits);

	document.getElementById("convnumber").innerHTML = outputUnits;
}function toMeters(inputNumber, inputUnits) {
	if (inputUnits == "Inches") {
		var outputMeters = inputNumber * 0.0254;
        return outputMeters;
	}
	else if (inputUnits == "Feet") {
        outputMeters = inputNumber * 0.3048;
        return outputMeters;
	}
	else if (inputUnits == "Miles") {
        outputMeters = inputNumber * 1609.34;
        return outputMeters;
	}
	else if (inputUnits == "Millimeters") {
        outputMeters = inputNumber / 1000;
        return outputMeters;
	}
	else if (inputUnits == "Centimeters") {
        outputMeters = inputNumber / 100;
        return outputMeters;
	}
	else if (inputUnits == "Meters") {
        outputMeters = inputNumber;
        return outputMeters;
	}
	else if (inputUnits == "Kilometers") {
        outputMeters = inputNumber * 1000;
        return outputMeters;
	}
}

function fromMeters(inputMeters, outputUnits) {
	if (outputUnits == "Inches") {
		var outputNumber = inputMeters / 0.0254;
        return outputNumber;
	}
	else if (outputUnits == "Feet") {
        outputNumber = inputMeters / 0.3048;
        return outputNumber;
	}
	else if (outputUnits == "Miles") {
        outputNumber = inputMeters / 1609.34;
        return outputNumber;
	}
	else if (outputUnits == "Millimeters") {
        outputNumber = inputMeters * 1000;
        return outputNumber;
	}
	else if (outputUnits == "Centimeters") {
        outputNumber = inputMeters * 100;
        return outputNumber;
	}
	else if (outputUnits == "Meters") {
        outputNumber = inputMeters;
        return outputNumber;
	}
	else if (outputUnits == "Kilometers") {
        outputNumber = inputMeters / 1000;
        return outputNumber;
	}
}

function unitconverter() {
	var inputUnitsBox = document.getElementById("Input Units");
	var inputUnits = inputUnitsBox.options[inputUnitsBox.selectedIndex].text;
	var outputUnitsBox = document.getElementById("Output Units");
	var outputUnits = outputUnitsBox.options[outputUnitsBox.selectedIndex].text;
	var inputValue = document.getElementById("inputNumber").value;

    var outputMeters = toMeters(inputValue, inputUnits);
    var outputNumber = fromMeters(outputMeters, outputUnits);

	document.getElementById("convnumber").innerHTML = outputUnits;
}