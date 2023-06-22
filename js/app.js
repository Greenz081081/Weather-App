// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');


const url = `https://api.openweathermap.org/data/2.5/weather?q=Eket,NG&units=Imperial&
appid=cb411365f163ce2a1a5d327896469c7f`;


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();