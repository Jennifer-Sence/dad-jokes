const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke"); 

const apiKey = "XOfZxx4UFBY1CYhV+0FGJQ==TZlER4OOpchbzJ7z";
const options = {
    method:"GET",
    headers:{
        "X-API-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "Updatig...";
        btnEl.disable = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }

};

btnEl.addEventListener("click", getJoke);

