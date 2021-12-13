var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

var countDown = new Date('Jun 24, 2020 18:00:00').getTime(),
    x = setInterval(function() {    

      var now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      // if (distance < 0) {
      //  document.getElementById("married").innerHTML="WE'RE MARRIED!!!";
      // }

    }, second)

    var mp = 150
    var particleColors = {
      colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
      colorIndex: 0,
      colorIncrementer: 0,
      colorThreshold: 10
  }

