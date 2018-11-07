var myImg = document.querySelector('img');

myImg.onclick = function(){
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox-icon.jpg'){
		myImg.setAttribute('src','images/firefox-icon-2.png');
	}else{
		myImg.setAttribute('src','images/firefox-icon.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
	if(!localStorage.getItem('name')){
		setUserName();
	}else{
		var storedName = localStorage.getItem('name');
		myHeading.textContent = 'Mozilla is cool, ' + storedName;
	}
	
}

myButton.onclick = function(){
	setUserName();
}