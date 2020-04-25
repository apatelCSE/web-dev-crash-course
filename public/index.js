document.addEventListener("DOMContentLoaded", (event) => {
    var location = document.getElementById("location")
    var button = document.getElementById("button")
    var main = document.getElementById("main")
    
    button.addEventListener("click", (event) => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + location.value + "&appid=904ecabe1bcaa06404f1c6fdc16861dc")
        .then(data => {
            return data.json()
        })
        .then(json => {
            console.log(json)
            main.innerHTML = json.name
        })

        .catch(error => {
            console.log(error)
        })

    })
});

// Why we need promises: servers have delay, "callback function", doesn't freeze site