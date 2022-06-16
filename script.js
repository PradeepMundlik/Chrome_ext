fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(data => data.json())
    .then(jokedata => {
        var jokeText = jokedata.time.updated;
        var element1 = document.getElementById('element1');

        element1.innerHTML = jokeText;

        var jokeText = '1 Bitcoin = ' + jokedata.bpi.USD.rate + ' USD';
        var element2 = document.getElementById('element2');

        element2.innerHTML = jokeText;

        var jokeText = '1 Bitcoin = ' + jokedata.bpi.GBP.rate + ' Pound';
        var element3 = document.getElementById('element3');

        element3.innerHTML = jokeText;

        var jokeText = '1 Bitcoin = ' + jokedata.bpi.EUR.rate + ' Euro';
        var element4 = document.getElementById('element4');

        element4.innerHTML = jokeText;
    })