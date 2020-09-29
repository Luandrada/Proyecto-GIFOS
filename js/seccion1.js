
const api ="https://api.giphy.com/v1/gifs/search?api_key=a1IwaOJi4ABEbZhnosP6IToPhrRvAKnP";
fetch(api)
  .then(response => response.json())
  .then(data => {search(data);
    console.log(data)   } )
  .catch(error => console.log("error:", error));


function search() {
  const input = document.getElementById("buscador");
  const boton = document.getElementById("lupa");
  const resultados = documen.getElementById("resultados");

}

