
// function lightOn(){
//     document.getElementsByClassName('light').src ='bulb on.jpg';
// }
// function lightOff(){
//     document.getElementsByClassName('light').src ='bulb off.jpeg';
// }

var state = 0;
		function changeBulbImage() {
			if (state == 1) {
				document.getElementById("bulbImg").src="bulb off.jpeg";
				state = 0;
			} else {
				document.getElementById("bulbImg").src="bulb on.jpg";
				state = 1;
			}
		} `````