document.addEventListener("DOMContentLoaded", (event) => {
    var location = document.getElementById("location")
    var button = document.getElementById("button")
    var main = document.getElementById("main")
    
    button.addEventListener("click", (event) => {
        fetch("http://localhost:5000/weather/" + location.value)
        .then(data => {
            return data.json()
        })
        .then(json => {
            console.log(json)
            main.innerHTML = ((json.data.main.temp) - 273.15) * 9/5 + 32
        })

        .catch(error => {
            console.log(error)
        })

    })
});

// Why we need promises: servers have delay, "callback function", doesn't freeze site