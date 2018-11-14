chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// it's time fellas
			var searchBox = document.getElementById("lst-ib");
			var searchText = searchBox.getAttribute("value");
			console.log(searchText);
			if (searchText.indexOf("lyrics") !== -1 || searchText.indexOf("Lyrics") !== -1) {
				var openTab = document.getElementsByClassName("xpdns")[0];
				var c = openTab.childNodes;
				for (i = 0; i < c.length; i++) {
					if (c[i].getAttribute("class")) {
						var closeButton = c[i];
						openTab.classList.remove("xpdclose");
						openTab.classList.add("xpdopen");
						closeButton.setAttribute("aria-expanded",true);
						closeButton.setAttribute("aria-label","your shit has been expanded by the legendary beast");
						closeButton.firstChild.classList.remove("vk_ard");
						closeButton.firstChild.classList.add("vk_aru");
					}
				}
			}
		}
	}, 10);
});