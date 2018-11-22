
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7c0d5e9f33a84067ba237f14ea60a275';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
        document.getElementById('container').write(0);
    })
    .then(function(news){
        console.log(JSON.stringify(news));
    })
