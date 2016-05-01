function getRandom() {
			return Math.floor(Math.random() * 255);
		}

		function buildBackgroundString(matteo) {
			return "linear-gradient(rgba(" + getRandom() + ", " + getRandom() + ", " + getRandom() + ", 0.45), rgba(" + getRandom() + ", " + getRandom() + ", " + getRandom() + ", 0.45)), url(img/" + (matteo ? "matteo.jpeg" : "eliseo.jpg") + ") no-repeat;";
		}

		document.getElementById("matteo").style = "background: " + buildBackgroundString(true) + "background-size: cover; background-clip: border-box; background-position: center;";
		document.getElementById("eliseo").style = "background: " + buildBackgroundString(false) + "background-size: cover; background-clip: border-box; background-position: center;";