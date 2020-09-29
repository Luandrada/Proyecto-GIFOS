


const url ="https://api.giphy.com/v1/gifs/trending?api_key=a1IwaOJi4ABEbZhnosP6IToPhrRvAKnP&limit=8";
fetch(url)
  .then(response => response.json())
  .then(data => {createElement(data);
    console.log(data)   } )
  .catch(error => console.log("error:", error));

function createElement(data) {
 
    data.data.forEach(gif => {
        const el = document.createElement("img");
        el.src = gif.images.original.url;
        el.classList.add("gif_trendings");
        document.getElementById("trending").appendChild(el)
    });
}