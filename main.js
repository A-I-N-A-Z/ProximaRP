var links = document.querySelector(".h-links");
var logo = document.querySelector(".h-logo");
var vis = false;

logo.addEventListener("click", (e)=>{
    if(window.outerWidth <= 820){
        if(vis===false){
            links.style.display = "flex";
            vis=true;
        }else if(vis===true){
            links.style.display = "none";
            vis=false;
        }
    }
})

var online = document.querySelector(".online");
var info;
var onlinePlayers;
var shob = online.textContent;

async function getPlayers(){
    var infoNo = await fetch("https://mtasa.com/api/");
    info = await infoNo.json();
    server = await info.find(serv => serv.ip == "51.77.68.54");
    online.textContent = shob + server.players + "/" + server.maxplayers;
    console.log(server);
}
setInterval(()=>{
    getPlayers();
}, 1000);

