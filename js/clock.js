const clock =document.querySelector("h2#clock");

function getClock() {
    // date object는 호출하는 당시의 현 날짜와 시간을 알려줌 
    const date = new date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSecondes()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
    // new를 붙이는 이유 : 그냥 date를 사용하면 얻는 결과값음 
    // newdate 쓴 것을그대로 string으로 만들어서 .gethours와 같은 
    // 프로퍼티를 사용할 수 없음 
// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSecondes()}`);
   // clock.innerText= `${date.getHours()}:${date.getMinutes()}:${date.getSecondes()}`;
}

// 함수를 특정 시간마다 실행 
// setInterval(sayHello, 5000);
// setTimeout : 5초를 기다렸다가 1번만 실행 

// 실시간으로 보이게 하는 부분 
getClock(); // 시작할 때 1초 기다리지 않고 시작 
setInterval(getClock, 1000);

//padStart(문자길이, "시작부분에 문자수 만큼 붙을 문자")
//padEnd(문자길이, "끝부분에 문자수 만큼 붙을 문자") 