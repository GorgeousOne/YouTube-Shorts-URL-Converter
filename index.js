searchButton = document.getElementById("search-icon");
search = document.getElementById("search");
errorMessage = document.getElementById("error-message");

//focus the search bar as soon as keyboard is typed
window.addEventListener("keydown", function () {
	search.focus();
});

//trigger url conversion on search button press
searchButton.addEventListener("click", function (event) {
	openNormalVideo(search.value);
});

//trigger url conversion on ENTER press
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

//open tab with altered url if possible
function openNormalVideo(url) {
	if (url.includes("youtube.com/shorts/")) {
		let normalUrl = url.replace("shorts/", "watch?v=");
		window.open(normalUrl, "_blank").focus();
	} else if (url !== "") {
		errorMessage.innerText = "This URL does not contain \"youtube.com/shorts/...\"";
		return url;
	}
}