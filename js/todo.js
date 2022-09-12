const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");
const TODOS_KEY = "todos"
   // todoform vs document. 차이 같은건가??
// id가 todo-form안에서 input을 찾는 것 
// input을 document가 아닌 toDoForm에서 찾을 수 있음 

// 이전에 입력한 todo와 새롭게 입력한 todo모두 유지 

// 빈 상태의 배열로 초기화되어 저장 
// CONST 를 변경 가능한 let 으로 변수 변경 
// localStorage에 toDo 들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하면된다.
// 데이터베이스에 todo를 저장하는 곳 
let toDos =[];

// todolist를 저장하는 기능을 수행하는 함수 설정
function saveToDo() {
    localStorage.setItem( TODOS_KEY,JASON.stringify(toDos));
    // localStorage : 저장기능
    //stringify : string 으로 저장되어 있는 것을 배열로 변경
}
function deleteToDo(event) {
//    console.log(event.target.parentElement.innerText);
    //target(button)은 클릭된 html element
    // 모든 html element에는 하나 이상의 프로퍼티가 존재함
    // 클릭된 element의 부모 =  parentElement(li)
    const li = event.target.parentElement;
    console.log(typeof li.id); //string
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // 클릭했던 li의 id와 다른 toDo는 남겨둘 것
    // but, todo는 number 타입으로 타입이 다름 
    // parseInt로 변형
    savedToDos();
    // savedTodos 한번 더 불러주기 
    li.remove();
    // 어떤 todoText를 지워야 하는지 모름 
}

function paintToDo(newTodo){
    // js에서 추가해서 html에 적용하는 것
    // element 를 생성해 span도 생성 
    // 자식을 추가하고 text로 바꿈 
    const li =document.createElement("li");
    li.id = newTodo.id;
    // li를 입력했을 때 html태그에서 li태그를 생성하게 명령 
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // span이라는 태그 안의 텍스트가 앞에서 설정한 newTodo라는 객체가 되도록 
    // newTodo는 텍스트에 입력한 value값
     // .text는 객체의 내용이 나올 수 있도록 
    const button = document.createElement("button");
    button.innerText="✔️";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    //li 태그 안에 span 이라는 자식을 가짐 
    li.appendChild(button); 
    toDoList.appendChild(li);
    //html의ul태그 안에 li가 속하도록 
    // append() vs appendChild() 
    // 앞은 문자열도 추가 간으 child는 객체만 추가 가능
    //console.log(li);
    //console.log("i will paint", newTodo);
}

// form은 submit이벤트를 가짐 
// 데이터베이스로 매번 사용자가 적어둔 text를 push
// 새롭게 객체를 push할 수 있도록 설정 
function handleToDoSubmit(event) {
    event.preventDefalut();
    console.log(toDoInput.value);
    // 요소 검사를 통해서 내용이 출력되는지 확인
    const newTodo =toDoInput.value;
    // input의 value를 비우기 전의 값을 나타내는 string
    // input에서 value를 얻어서 paintodo  라는 새로운 함수에 보냄
    console.log(toDoInput.value);
    // 입력한 값 저장
    // input의 value를 새로운 변수에 복사 = 저장
    toDoInput.value ="";

    const newTodoObj = {
        text:newTodo, id : Date.now(),
        //obj를 저장 
    }
    console.log(newTodo, toDoInput.value);
    // enter를 누를 때마다 내가 입력한 것이 없어지도록 
    // paintToDO에 STRING으로 newtodo를 주는 것 대신 
    // newtodoobj를 제공 
    toDos.push(newTodoObj);
    // toDos는 array
    paintToDo(newTodoObj); 
    saveToDo();
    //우리가 텍스트를 기입하고 submit 할 때마다 
    //원하던 기능들을 실행시키기 위해 위에서 만든 함수 paintTodo(nweTodo)를 함수 handleTodoSubmit()에 추가한다.
    //기존 함수 handleToDoSubmit()가 텍스트 상자 안의 텍스트를 초기화하는
    // 기능까지만 했다면, paintToDo(newTodo)추가 후에는 제출한 
    // 텍스트를 매번 html의 ul안에서 li태그와 그 안에 속하는 span 태그를 만들고 span에 텍스트로 남겨 웹 화면에서 보일 수 있는 것 까지 되게 한다.

}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item){
    // parsedToDos가 가지고 있는 각각의 아이템에 대해
    // sayhello라는 함수를 향 
    console.log("this is the turn of", item)
}

//local storage에 array로 저장이 안되기 때문에 
//JSON.stringify로 array처럼 생긴 string으로 저장한 후 
//다시 JSON.parse 이용해 array로 꺼내는 방법이네요
// array.foreach는 받아온 array를 for 반복문 없이 item 하나씩 function에 넣을 수 있는 신기한 녀석이네요
const savedToDos = localStorage.getItem( TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    parsedToDos.array.forEach((item) => console.log("this is the turn of",item));
    // 단순히 array 에 들어있는 모든 값을 iterate (순찰(?)) 할수 있는 function 입니다.
        // foreach는 배열의 각 아이템에 대한 함수를 실행할 수 있도록 함
        // 각각의 아이템에 대해 sayhello를 실행

        // function을 더 간략히 쓰는 방법
    // parsedToDos.forEach((item) => console.log("this is the turn of", item))
    // 위의 sayHello 함수와 같음 
    parsedToDos.forEach(paintToDo(any)); 
    // 기본적으로 forEach함수는 paintToDo를 실행
    // foreach함수는 paintToDo를 parsedToDos 배열의 요소마다 실행 
    // foreach는 각각의 item를 줌, item은 object가 됨 
}
// paintToDo({text:"a", id:1212121})

// 지우고 싶은 아이템을 제외하고 새로운 배열을 만듦  >filter 
function sexyFilter(){
    return true
}
// return false 를 할 경우 비어있는 array가 만들어짐 
[1,2,3,4].filter
//filter function은 새 array를 줌
//filter는 sexyfilter에 1,2,3,4를 넣어서 호출

sexyFilter(1) =1
sexyFilter(2) =2
sexyFilter(3) =3 
sexyFilter(4) =4

function sexyFilter(item){
    return item !== 3
    // 3이 아닌 아이템만 출력 
}

const arr = [1,2,3,4]
arr.filter(item => item >2) 
// 결과 (arr.filter 가 전달해준 값)
const newArr = arr.filter(item => item >2 )