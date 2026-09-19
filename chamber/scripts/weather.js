const currentTemp = document.querySelector('#current-temp');
const currentTemp2 = document.querySelector('#current-temp2');
const currentTemp3 = document.querySelector('#current-temp3');
const TempDate = document.querySelector('#temp-date');
const TempDate2 = document.querySelector('#temp-date2');
const TempDate3 = document.querySelector('#temp-date3');
const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon2 = document.querySelector('#weather-icon2');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc = document.querySelector('#fig');
const captionDesc2 = document.querySelector('#fig2');
const captionDesc3 = document.querySelector('#fig3');

const myKey = '3ab2600edb1a40130349aab08a5d823c'
const myLat = '41.51166034549377'
const myLong = '-112.01605844762162'

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    TempDate.innerHTML = new Date(data.list[0].dt * 1000).toLocaleDateString();
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.list[0].weather[0].description);
    weatherIcon.setAttribute('crossorigin', 'anonymous')
    weatherIcon.setAttribute('width', '100px')
    weatherIcon.setAttribute('height', 'auto')
    captionDesc.textContent = `${data.list[0].weather[0].description}`;
    currentTemp2.innerHTML = `${data.list[8].main.temp}&deg;F`;
    TempDate2.innerHTML = new Date(data.list[8].dt * 1000).toLocaleDateString();
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    weatherIcon2.setAttribute('src', iconsrc2)
    weatherIcon2.setAttribute('alt', data.list[8].weather[0].description)
    weatherIcon2.setAttribute('crossorigin', 'anonymous')
    weatherIcon2.setAttribute('width', '100px')
    weatherIcon2.setAttribute('height', 'auto')
    captionDesc2.textContent = `${data.list[8].weather[0].description}`;
    currentTemp3.innerHTML = `${data.list[16].main.temp}&deg;F`;
    TempDate3.innerHTML = new Date(data.list[16].dt * 1000).toLocaleDateString();
    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    weatherIcon3.setAttribute('src', iconsrc3)
    weatherIcon3.setAttribute('alt', data.list[16].weather[0].description)
    weatherIcon3.setAttribute('crossorigin', 'anonymous')
    weatherIcon3.setAttribute('width', '100px')
    weatherIcon3.setAttribute('height', 'auto')
    captionDesc3.textContent = `${data.list[16].weather[0].description}`;
}

apiFetch();