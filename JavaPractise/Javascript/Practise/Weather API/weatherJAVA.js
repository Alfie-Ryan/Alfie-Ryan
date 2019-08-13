
    let myButton = document.getElementById("button2");

    myButton.addEventListener("click", getWeather);

    function getWeather() {

    let Getcity = document.getElementById("city").value;

        console.log(Getcity);

        const apiURL = "http://api.openweathermap.org/data/2.5/find?q=" + Getcity + "&APPID=af80b91102662c21ebd319381caa5966&units=metric";
/*
        const request = new XMLHttpRequest();

        request.open("GET", apiURL, true);

        request.send();

    console.log(request);

        http.onreadystatechange=getWeather(){
            if(this.readyState==4 && this.status==200){
                console.log(http.responseText)

            }
    }
    */
    fetch(apiURL)
    .then(data=>{return data.json()})
    .then(res=>{
        document.getElementById("result").innerHTML = res.list[0].main.temp_max + "&#176;C";}) 
    .catch(error=>{console.log(error)})
    
    document.getElementById("result").innerHTML = res.list[0].main.temp_max + "&#176;C";

    }
