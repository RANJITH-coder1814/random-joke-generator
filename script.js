async function getJoke(){

const response = await fetch("https://official-joke-api.appspot.com/random_joke");

const data = await response.json();

document.getElementById("joke").innerText =
data.setup + " 😂 " + data.punchline;

}
