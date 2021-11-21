async function mainthread() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const restaurants = await request.json();

  const markers=[];


  const accessToken = 'pk.eyJ1IjoidHlsZXJwZmFybWVyIiwiYSI6ImNrdXZuem41NjFuanIybm9kODFwOGdkcXkifQ.a6scWSSqAyYImncizXgGzQ';
  const mymap = L.map('mapid').setView([38.989, -76.93], 12);
  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHlsZXJwZmFybWVyIiwiYSI6ImNrdXZuem41NjFuanIybm9kODFwOGdkcXkifQ.a6scWSSqAyYImncizXgGzQ'
  }).addTo(mymap);
})

function findMatch(matchWord, restaurants){
    return restaurants.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');   
    return place.zip.match(regex);
});

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function displayMatches(){
    
}