function christmasCountdown() {
    var now = new Date()
    var month = (now.getMonth+1)
    var day = now.getDate()

    var nextChristmasYear = now.getFullYear()
    if(month == 12 && day > 25){nextChristmasYear = nextChristmasYear + 1}

    
    var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);

    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    if(month != 12 || (month == 12 && day != 25)){
        days = Math.floor(diffSeconds / (3600*24))
        diffSeconds  -= days * 3600 * 24
        hours   = Math.floor(diffSeconds / 3600)
        diffSeconds  -= hours * 3600
        minutes = Math.floor(diffSeconds / 60)
        diffSeconds  -= minutes * 60
        seconds = diffSeconds
    }
    document.getElementById('days').innerHTML = days + ' Days'
    document.getElementById('hours').innerHTML = hours + ' Hours'
    document.getElementById('minutes').innerHTML = minutes + ' Minutes'
    document.getElementById('seconds').innerHTML = seconds + ' Seconds'
 
    setTimeout(christmasCountdown, 1000)
}
christmasCountdown()