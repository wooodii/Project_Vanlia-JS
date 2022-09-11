const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");
   // todoform vs document. 차이 같은건가??
// id가 todo-form안에서 input을 찾는 것 
// input을 document가 아닌 toDoForm에서 찾을 수 있음 
const toDos =[];

function deleteToDo(event) {
//    console.log(event.target.parentElement.innerText);
    //target(button)은 클릭된 html element
    // 모든 html element에는 하나 이상의 프로퍼티가 존재함
    // 클릭된 element의 부모 =  parentElement(li)
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    // js에서 추가해서 html에 적용하는 것
    // element 를 생성해 span도 생성 
    // 자식을 추가하고 text로 바꿈 
    const li =document.createElement("li");
    // li를 입력했을 때 html태그에서 li태그를 생성하게 명령 
    const span = document.createElement("span");
    span.innerText = newTodo;
    // span이라는 태그 안의 텍스트가 앞에서 설정한 newTodo라는 객체가 되도록 
    // newTodo는 텍스트에 입력한 value값
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
    console.log(newTodo, toDoInput.value);
    // enter를 누를 때마다 내가 입력한 것이 없어지도록 
    toDos.push(newTodo);
    // toDos는 array
    paintToDo(newTodo); 
    //우리가 텍스트를 기입하고 submit 할 때마다 
    //원하던 기능들을 실행시키기 위해 위에서 만든 함수 paintTodo(nweTodo)를 함수 handleTodoSubmit()에 추가한다.
    //기존 함수 handleToDoSubmit()가 텍스트 상자 안의 텍스트를 초기화하는
    // 기능까지만 했다면, paintToDo(newTodo)추가 후에는 제출한 
    // 텍스트를 매번 html의 ul안에서 li태그와 그 안에 속하는 span 태그를 만들고 span에 텍스트로 남겨 웹 화면에서 보일 수 있는 것 까지 되게 한다.

}

toDoForm.addEventListener("submit", handleToDoSubmit)


