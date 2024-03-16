let lat,
    lon;
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => submit())

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.longitude;
        lon = position.coords.latitude;
        document.querySelector('#lat').textContent = lat;
        document.querySelector('#lon').textContent = lon;
    })
} else {
    document.write('Geolocion is not available')
}
async function submit() {
    const inputValue = document.querySelector('#input').value
    console.log(inputValue)
    const data = { Text: inputValue, longitude: lon, latitude: lat }
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = fetch('\api', options)
}
// function getLocation() {
//     const data = { lat, lon };
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const response = await fetch('/api', options);
//     const json = await response.json();
//     console.log(json)
// }
`https://api.darksky.net/forecast/edbdb24949d848b4df9b1f4eeb5ab274/37.8267,-122.4233`