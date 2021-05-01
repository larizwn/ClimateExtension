fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=ca5b48be3ee609d28f2f5a9e1f267136')
.then(response => response.json())
.then(data => {

let element = document.getElementById('temp')
element.innerHTML = (data.main.temp)

let element1 = document.getElementById('tempmin')
element1.innerHTML = (data.main.temp_min)

let element2 = document.getElementById('tempmax')
element2.innerHTML = (data.main.temp_max)

let element3 = document.getElementById('name')
element3.innerHTML = (data.name)

  console.log(data)

})
.catch(err=>console.log(err))