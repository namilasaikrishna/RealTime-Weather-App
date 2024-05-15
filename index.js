const inputEl = document.querySelector('input')
const btnEl = document.querySelector('button')
const tempEl = document.getElementById("temperature")
const nameEl = document.getElementById('cityName')
const weather = document.getElementById('weatherCondition')
const date = document.getElementById('currDate')
const iconEl = document.getElementById('imageIcon')
const formEl = document.getElementById('form')

formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    const newCity = inputEl.value
    fetchedData(newCity)
})

const fetchedData = async(name)=>{
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=2fead42e747845679b5163454241405&q=${name}&aqi=yes`)
        const jsonData = await response.json()
        const {location,current} = jsonData
        console.log(location,current)
        nameEl.innerText = location.name
        date.innerText = location.localtime
        tempEl.innerText=current.temp_c
        iconEl.src=current.condition.icon
        weather.innerText=current.condition.text
    }
    catch(e){
        console.log('error occured', e)
        fetchedData('Hyderabad')
    }
}

fetchedData("Hyderabad")