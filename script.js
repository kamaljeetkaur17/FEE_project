function showProfile(event) {
	event.preventDefault();
	const profession = document.getElementById("profession").value;
	switch (profession) {
		case "":
			alert("Please select your profession.");
			break;
		case "Web-Designer":
			window.open("https://www.linkedin.com/in/jatin-jaglan-830853263/");
			break;
		case "Ui-Ux":
			window.open("kabir.html");
			break;
		case "Competitive-Programmer":
			window.open("jugal.html");
			break;
		case "Data-Scientist":
			window.open("kamal.html");
			break;
		case "App-Developer":
			window.open("kajal.html");
			break;
		case "All":
			window.open("portfoliohub.html");
			break;
		default:
			alert("Invalid profession.");
	}
}
