function toMeters(inputNumber, InputUnits) {
		if (InputUnits == "Inches") {
		outputMeters = inputNumber * 0.0254;
        return outputMeters;
	}
	else if (InputUnits == "Feet") {
        outputMeters = inputNumber * 0.3048;
        return outputMeters;
	}
	else if (InputUnits == "Miles") {
        outputMeters = inputNumber * 1609.34;
        return outputMeters;
	}
	else if (InputUnits == "Millimeters") {
        outputMeters = inputNumber / 1000;
        return outputMeters;
	}
	else if (InputUnits == "Centimeters") {
        outputMeters = inputNumber / 100;
        return outputMeters;
	}
	else if (InputUnits == "Meters") {
        outputMeters = inputNumber;
        return outputMeters;
	}
	else if (InputUnits == "Kilometers") {
        outputMeters = inputNumber * 1000;
        return outputMeters;
	}
		else if (InputUnits == "Yards") {
        outputMeters = inputNumber * 0.9144;
        return outputMeters;
	}
}
function fromMeters(inputMeters, outputUnits) {
	if (outputUnits == "Inches") {
		OutputNumber = inputMeters / 0.0254;
        return OutputNumber;
	}
	else if (outputUnits == "Feet") {
        OutputNumber = inputMeters / 0.3048;
        return OutputNumber;
	}
	else if (outputUnits == "Miles") {
        OutputNumber = inputMeters / 1609.34;
        return OutputNumber;
	}
	else if (outputUnits == "Millimeters") {
        OutputNumber = inputMeters * 1000;
        return OutputNumber;
	}
	else if (outputUnits == "Centimeters") {
        OutputNumber = inputMeters * 100;
        return OutputNumber;
	}
	else if (outputUnits == "Meters") {
        OutputNumber = inputMeters;
        return OutputNumber;
	}
	else if (outputUnits == "Kilometers") {
        OutputNumber = inputMeters / 1000;
        return OutputNumber;
	}
		else if (outputUnits == "Yards") {
        OutputNumber = inputMeters / 1000;
        return OutputNumber;
	}
}
  function unitconverter() {
	var inputUnitsBox = document.getElementById("Input Units");
	var InputUnits = inputUnitsBox.options[inputUnitsBox.selectedIndex].text;
	var outputUnitsBox = document.getElementById("Output Units");
	var OutputUnits = outputUnitsBox.options[outputUnitsBox.selectedIndex].text;
	var InputValue = document.getElementById("inputNumber").value;

    outputMeters = toMeters(InputValue, InputUnits);
    OutputNumber = fromMeters(outputMeters, OutputUnits);

	document.getElementById("output").innerHTML = OutputNumber;
}
