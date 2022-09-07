const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// string만 포함된 변수는 대문자로 표기
const USERNAME = "username";
    // string을 작성하다가 오타가 나면 자바스크립트는 
    // 지적하지 않음 
    // 그래서 변수를 만들어 username 대신 대입 
const link = document.querySelector("a");

function onlogsubmit(event) {
    event.preventDefault(); 
    console.log(loginInput.value);
    paintGreetings(username);
    // username을 인자로 받는 함수를 만듦
    //아래 코드 줄이기 
    //loginForm.classList.add(" HIDDEN_CLASSNAME");
    // 변수를 string안에서 사용할 수 있게 하는 방법
    //greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    // localStrage브라우저에 무언가를 저장한 한 이후에 
    // 나중에 가져올 수 있음 
    localStorage.setItem(USERNAME, username);
    localStorage.getItem("username");
    localStorage.removeItem("username");


    greeting.classList.remove("HIDDEN_CLASSNAME");
}

function linkClick(event) {
    // 해당 이벤트가 가진 기본값을 발생시키게 하지 않기 위해서 사용해서 막을 수 있음 
    event.preventDefault(); // ()가 붙으면 바로 실행
    // 해당이벤트가 발생시킨 정보들에 대한 object를 볼 수 있음 
    console.log(event); 
        // alert는 모든 동작들을 막음 alert("clicked!");
     const username = loginInput.value;

     loginForm.classList.add("hidden");
     console.log(username); // form은 사라지지만, 이름값은 기록 
    }


loginForm.addEventListener("submit",onlogsubmit);
link.addEventListener("click",linkClick); 

//addEventListener 안에 있는 함수는 직접 실행하지 않음 -> 브라우저가 실행 및  event정보도 담음
// object에 대한 자리만 할당 > js 에게 함수의 이름만 주고 실행하는건 js의 몫

// js 실행과 동시에 첫번째 인자로 object를 넣어줌 
// object에는 일어난 event에 대한 여러 정보가 담겨 있음 



function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText= `Hello ${username}`
}
const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onlogsubmit)
} else {
   paintGreetings(savedUsername)
}