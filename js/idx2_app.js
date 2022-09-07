// const logform = document.getElementById("loginForm");
// queryselector인 경우 사용하는 대상이 클래스인지, #아이디인지
// 명확하게 알려줘야 함 <-> getElementById x

const logInput = document.querySelector("loginForm input");
const logButton = document.querySelector("loginForm button");


function onLogBtnClick() {
    console.log("click!!");
    console.dir(logInput); // 목록 찾가
    
    console.log("HELLO", logInPut.value); 
    // 값을 출력 (문제는 입력 안했을 때도 출력)
    //  USERNAME 의 유효성 검사 필요

    const username = logInput.value;
    if(username === "") {
        alert("Please write your name"); 
    }else if(username.length > 15) {
        alert("your name is too long")
    }
}
logButton.addEventListener("click", onLogBtnClick);