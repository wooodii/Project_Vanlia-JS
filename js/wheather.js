const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position) {
    // console.log(position); 
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);

  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // longitude도 geolocation에서 얻은 lon/lan으로 변경 (apikey)
  fetch(url)
  //fetch는 promise는 당장 무언가 일어나지 않고 시간이
  //걸린 뒤에 일어나는 것 
  //fetch: url 얻기
  // 자바스크립트에서 url 을 부름 
 // url을 추가한다는 것은 &units=metric을 붙임

    .then((response) => response.json())
    // 서버의 응답을 사용
    .then((data) => {
      city.innerText = data.name;
      // weather 은 array 
      // array의 첫번째 요소인 main을 얻어야 함 

      const weather = document.querySelector("#weather span : first-child");
      const city = document.querySelector("#weather span :last-child");
      
     // weather.innerText = data.name;
      // city.innerText = data.weather[0].main;

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        // html에 추가``한 후 innerText로 span 에 들어갈 내용 추가 
    });

  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  // getCurrentPosition 은 argument가 2개 필요함 
  // 잘 동작했을 때, 에러가 났을 때 실행할 함수 
  
  // onGeoOk({sexyObj})