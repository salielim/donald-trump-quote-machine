getQuote()

document.getElementById('get-quote').addEventListener('click', function() {getQuote();});

document.getElementById('tweet').addEventListener('click', function() {
	window.open(url);
})

function getQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open ('GET', 'https://api.whatdoestrumpthink.com/api/v1/quotes/random', true);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
			showQuote(response.message);
			makeTweetLink(response.message);
		}
		else {
			showQuote('Sorry no quotes, Trump died.')
			}
	}
}

function showQuote(quote) {
	document.getElementById('quote').innerHTML = quote;
}

function makeTweetLink(quote) {
	url = 'https://twitter.com/share?text=' + quote + '   - Donald Trump';
}