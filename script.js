function fooBar() {
	let counter = -1;

	while (counter < 10) {
		console.log("count is " + counter);
		counter += 2;
		console.log("in the while function")
		console.log("hello from the main branch")
	}
}

fooBar();

if (new Date().getMonth() === 20) {
	localStorage.removeItem("user");
}

document.getElementsByTagName("button")[0].addEventListener("click", () => {
	alert("hi");
});
