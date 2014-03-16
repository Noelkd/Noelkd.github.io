"use strict";

// http://stackoverflow.com/a/1431113/1663352
function replaceAt(string, index, character) {
    return string.substr(0, index) + character + string.substr(index+character.length);
}

function compare(target, ratee){
	var score = 0
	for (var i=0; i<target.length; i++)
		if (target[i] == ratee[i]){score+=1}
	return score
}

function generateRandom(length){
	var newString = ""
	var possible = "abcdefghijklmnopqrstuvwxyz "
	for (var i=0; i < length; i++){
		newString += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return newString
}

function generateString(generateFrom){
	var newString = generateFrom
	var possible = "abcdefghijklmnopqrstuvwxyz "
	for (var i=0; i < generateFrom.length; i++)
		if (0.05 > Math.random())
		{	
			var newChar = possible.charAt(Math.floor(Math.random() * possible.length))
			newString = replaceAt(newString,i,newChar);
		}
	return newString
}

function doGeneration(target, previousBest){
	var previousBestScore = compare(target, previousBest)
	var currentBestScore = 0
	for (var i=0; i < 100; i++){
		var current = generateString(previousBest)
		var currentScore = compare(target, current) 
		if (currentScore > previousBestScore){
			if (currentScore > currentBestScore){
			var generationBest = current
			var currentBestScore = currentScore	
		}
	}
}
	if (generationBest){return generationBest}
	return previousBest
}

function getResults(target1, target2, target3, elementName){
	var myTable = document.getElementById(elementName);
	var result1 = generateRandom(target1.length)
	var result2 = generateRandom(target2.length)
	var result3 = generateRandom(target3.length)
	this.next = function(){
		myTable.rows[0].cells[0].innerHTML = "<h1>Noelkd</h1>"
		result1 = doGeneration(target1, result1)
		result2 = doGeneration(target2, result2)
		result3 = doGeneration(target3, result3)
		myTable.rows[0].cells[1].innerHTML = result1+"<br>"+result2+"<br>"+result3

	}
}	

window.onload = function() {
	var footer = document.getElementById("footer");
	footer.innerHTML = ""
	var target0 = "developer"
	var target1 = "programmer"
	var target2 = "problem solver"
	var tableName = "letable"
  	var pump = new getResults(target0, target1, target2, tableName)
	pump.next()
  	var interval = setInterval(pump.next, 300);
};




