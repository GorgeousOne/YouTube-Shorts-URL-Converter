searchButton = document.getElementById("search-icon");
search = document.getElementById("search");
errorMessage = document.getElementById("error-message");

searchButton.addEventListener("click", function (event) {
	openNormalVideo(search.value);
});

search.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		searchButton.click();
	}
});

search.addEventListener("input", function (event) {
	if (search.value === "" || search.value.includes("youtube.com/shorts/")) {
		errorMessage.innerText = "\xa0";
	}
});

function openNormalVideo(url) {
	if (url.includes("youtube.com/shorts/")) {
		let normalUrl = url.replace("shorts/", "watch?v=");
		console.log(normalUrl);
		window.open(normalUrl, "_blank").focus();
	} else if (url !== "") {
		errorMessage.innerText = "This URL does not contain \"youtube.com/shorts/...\"";
		return url;
	}
}