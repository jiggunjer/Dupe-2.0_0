
var lsWindowOption = "windowOption";
chrome.browserAction.onClicked.addListener(function (b) {
	var a = parseInt(localStorage[lsWindowOption], 10);
	a || (a = 0);
	if(0 === a)
	{
		chrome.windows.create({
			url: b.url
		})
	}
	else
	{


		chrome.tabs.getSelected(null, function(tab){
		    chrome.tabs.duplicate(tab.id);
		});

		// chrome.tabs.create({
		// 	selected: !0,
		// 	url: b.url
		// })
	}
});