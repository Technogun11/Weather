function getVal() {
    const val = document.querySelector('input').value;
    var c = document.getElementById('weather');
    var input = document.getElementById("myInput");
    input.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            c.classList.add('card');
        }
    })
    if (val != '') {
        let request = new XMLHttpRequest()
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + val + '&appid=75c2adb89a73c28cb48b1bdb22878e1e';
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                console.log("Success")
                let we = JSON.parse(request.responseText);
                console.log(we);
                document.getElementById('weather').innerHTML = 'Name : ' + we.name + "<br><br>" + 'Temperature : ' + we.main.temp + ' K' + "<br><br>" + 'Humidity : ' + we.main.humidity + "<br><br>" + 'Pressure : ' + we.main.pressure;
                // let imgsrc = 'https://openweathermap.org/img/w/' + we.weather[0].icon + '.png';
                // document.getElementById('myimg').src = imgsrc;
                input.addEventListener('keyup', function(event) {
                    if (event.key != 'Enter') {
                        document.getElementById('weather').innerHTML = '';
                        c.classList.remove('card');
                    }
                })
            } else {
                document.getElementById('weather').innerHTML = 'Last time I checked their was no such place....';
                // input.addEventListener('keyup', function(event) {
                //     document.getElementById('weather').innerHTML = '';
                //     c.classList.remove('card');
                // })
                console.log("Couldn't connect with the server");
            }
        }
        request.onerror = function() {
            console.log("Error")
        }
        request.send();
    }
}
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        input.click();
    }
});
//----------------------------------------------------------------------------------
const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;')
})
document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
