//gets task from input//
function get_todos() {
    //creates array of inputted tasks//
    var todos = new Array;
    //pulls tasks saved in web browser memory//
    var todos_str = localStorage.getItem('todo');
    //if input is not null, then JSON.parse will tell
    //browser to make task a JS object//
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//adds inputted tasks to get_todos array//
function add() {
    //creates variable of inputted task//
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //adds new task to end of array//
    todos.push(task);
    //converts task input to JSON string//
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//keeps tasks permanently on display//
function show() {
    //sets retrieved task as variable//
    var todos = get_todos();

    //sets up tasks as unordered list//
    var html = '<ul>';
    //displays tasks in order inputted//
    for (var i = 0; i < todos.length; i++) {
        //displays tasks as list and creates "x" button//
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '<ul>';
    //displays tasks as list//
    document.getElementById('todos').innerHTML = html;

}

//displays inputted tasks when 'add item' button is clicked//
document.getElementById('add').addEventListener('click', add);
//displays tasks//
show();


//removes tasks from list//
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //this looks in show() for how to display removed item//
    show();
    return false;
}

//tells browser how to display todo after item is removed//
var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};