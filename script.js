let title = document.querySelector(".title");

window.onload = function(){
    if(window.navigator.onLine){
        online();
    }else{
        offline();
    }
}

window.addEventListener("online" , function(){

    online();
});

window.addEventListener("offline" , function(){

    offline();
});

function online(){
    title.innerHTML = "Online";
    title.style.color = "green";
}

function offline(){
    title.innerHTML = "Offline";
    title.style.color = "#666";
}
