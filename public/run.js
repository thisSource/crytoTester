window.onresize = function () {
    location.reload();
  };

 



let value = document.getElementById("value")
let init = document.getElementById("init")
let img = document.getElementById("img")

var current_rotation = 0;
current_rotation += 90;

if(window.innerWidth < 500){
    img.style.transform = 'rotate(' + current_rotation + 'deg)'
}

let aValue;
let initValue;

// let imgDisplay = new Image()
img.width = window.innerWidth
img.height = window.innerWidth
img .src = "https://media.giphy.com/media/Pc7ygYyeiMEWk5q6Du/giphy.gif"

async function initCrypt(){
    let cryptoValueInit = await fetch("/initial")
    let cryptoValueInitJson = await cryptoValueInit.json()
    // init.textContent = cryptoValueInitJson.latestPrice
    initValue = cryptoValueInitJson.latestPrice
    setInterval(runCrypt, 1000)
   

    async function runCrypt(){

        let cryptoValue = await fetch("/current")
        let cryptJson = await cryptoValue.json()
        value.textContent = cryptJson.latestPrice
        aValue = cryptJson.latestPrice
        // initValue = cryptJson.latestPrice
        console.log(initValue)
        if (initValue>aValue){
            value.style.color = "rgb(255,0,0)"
            img.width = window.innerWidth
            img .src = "https://media.giphy.com/media/Pc7ygYyeiMEWk5q6Du/giphy.gif"
        }

        if (initValue<aValue){
            value.style.color = "rgb(0,0,255)"
            img .src = "https://media.giphy.com/media/6FaBWxZheHPjQ0tbna/giphy.gif"
        }
     }
    
    }







// setInterval(runCrypt, 1000)

initCrypt()
