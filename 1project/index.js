const apikey="63038d1cd3634b2cd0756023cdfe44a0"
 
 document.getElementById('button').addEventListener("click",()=>{
     const city=document.getElementById('input').value.trim();
     if(city==="") return showError('plz enter a city name');
     else{
        fetchData(city);
     }
 })
 async function  fetchData(city) {
     let url=(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric)
    //   console.log(url,"hello");
      

        try {
            let response = await fetch(url)
           let data= await response.json()  
           console.log(data);
            

           if(data.cod==='404'){
            showError('city not found')

           }
           else{
            displayData(data)
           }

         
        } catch (error) {
             showError('cannot fetch data')
        }
    
}

function displayData(data) {
     document.getElementById('weather-info').innerHTML=`
      <h2>  city-name:${data.name}</h2>
        <p>  country:${data.sys.country}</p>
        <p>  Temperature:${data.main.temp}</p>
        <p>wind speed:${data.wind.deg}</p>
        <p> wind speed:${data.wind.speed}</p>
      
     `
}

function showError(msg) {
     document.getElementById('showError').textContent=msg;
     document.getElementById('weather-info').textContent='';

}