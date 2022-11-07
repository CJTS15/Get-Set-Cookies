// Getting the affid in the URL Params
//const queryString = new URL('https://app.amzpecty.com/login?affid=lloyd');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString.search);
const affid = urlParams.get('affid');

console.log(affid);

if (affid != "") {
		createIframe();
		appendIframe();
    appendButtons();
} else {
		console.log("Iframe has been created already!");
}

// Create iframe
function createIframe(){
    var target = document.getElementById('affid-div');
    var newFrame = document.createElement('iframe');
  
    newFrame.setAttribute('id', 'affid');
    newFrame.setAttribute('src', 'https://app.amzpecty.com/setaffiliate');
    newFrame.setAttribute('style', 'border:0px #ffffff none');
    newFrame.setAttribute('name', 'affid-iframe');
    newFrame.setAttribute('frameborder', '1');
    newFrame.setAttribute('marginheight', '0px');
    newFrame.setAttribute('marginwidth', '0px');
    newFrame.setAttribute('height', '400px');
    newFrame.setAttribute('width', '400px');
    target.insertBefore(newFrame, target.firstChild);
    console.log("Iframe created!");
}

// Append affid to src of the iframe
function appendIframe(){
    const iframeReference = document.getElementById('affid');
    const affiUrl = iframeReference ? new URL(iframeReference.src) : undefined;
    const upIframe = document.querySelector('#affid');
        
        if (affiUrl) {
            console.log("Voila: " + affiUrl);
            affiUrl.searchParams.append('affid', affid);
            affiUrl.src = "" + affiUrl;
            console.log("Voila: " + affiUrl);  
            upIframe.setAttribute('src', affiUrl);
        } else {
            console.warn("No Iframe created, no affid in the URL.");
        }
}

// Append affid to specific buttons
function appendButtons(){
  var buyBtn = document.querySelectorAll('.eael-pricing-item a');
  buyBtn.forEach(appendBuyCookies);

  var loginBtn = document.querySelectorAll('.loginBtn a');
  loginBtn.forEach(appendLogCookies);
}

// Append affid to buy button
function appendBuyCookies(buyBtn) {
  var url = new URL(buyBtn);
	if (affid == "null") {
		buyBtn.setAttribute('href', url);
	} else {
		url.searchParams.append('affid', affid);
   		buyBtn.setAttribute('href', url);
	}
}

// Append affid to login button
function appendLogCookies(loginBtn){
  var url = new URL(loginBtn);
	if (affid == "null") {
		loginBtn.setAttribute('href', url);
	} else {
		url.searchParams.append('affid', affid);
   		loginBtn.setAttribute('href', url);
	}
}
