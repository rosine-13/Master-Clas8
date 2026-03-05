async function traduire(){

let texte = document.getElementById("texte").value;
let langue = document.getElementById("langue").value;

let url = "https://api.mymemory.translated.net/get?q=" 
+ texte + "&langpair=fr|" + langue;

let response = await fetch(url);

let data = await response.json();

document.getElementById("resultat").innerText =
data.responseData.translatedText;

}