const logForm = document.querySelector("log-Form");
const logInput =  document.querySelector("log-Form input");


function onlogsubmit(info) {
    // 함수에 argument 제공 
    info.preventDefalut(); 
    // 브라우저가 기본 동작(submit)을 실행하지 x
    //preventdefault 함수는 eventlistener 함수의 첫번째 argument 안에 있는 함수 
    // 첫 event는 지금 막 벌어진 event 들에 대한 정보를 가지고 있음
    const username = logInput.value;
    console.log(username);
}

//logForm.addEventListener("submit", onlogsubmit);
//onlogsubmit(info)
// ()를 추가하면  funciton을 즉시 실행