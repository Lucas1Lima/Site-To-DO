class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length
    }
    addTask(taskText) {
        /* console.log("funcionou"); */
        //clonagem template(task hide):
        let template = document.querySelector('.task').cloneNode(true);
        //remover o hide(task hide):
        template.classList.remove('hide');
        //Manipular texto(task title):
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        let list = document.querySelector('#tasks-container');

        list.appendChild(template);

        this.addEvents();
        this.checkTasks('add');
    }

    checkTasks(comand) {
        let msg = document.querySelector('#empty-tasks');
        if (comand === 'add') {
            this.totalTasks += 1;
        } else if (comand === 'remove'){
            this.totalTasks -= 1;
        }
    }
    removeTask(task){
            let parentEl = task.parentElement;

            parentEl.remove();

            this.checkTasks('remove');
        }

        completeTask(task){
            if(task.classList.contains('done')){
                task.classList.remove('done');
            }else{
                task.classList.add('done');
            }
        }

        addEvents() {
            let removeBtns = document.querySelectorAll('.fa-trash');
            let removeBtn = removeBtns[removeBtns.length - 1];
            let doneBtns = document.querySelectorAll('.fa-check');
            let doneBtn = doneBtns[doneBtns.length - 1];

            removeBtn.addEventListener('click', function () {
                todo.removeTask(this);
            })

            doneBtn.addEventListener('click', function () {
                todo.completeTask(this);
            })
        }
    }
let todo = new Todo();
let addBtn = document.querySelector("#add")
addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let taskText = document.querySelector('#task');
    //console.log(taskText.value);

    if (taskText.value != '') {
        todo.addTask(taskText.value)
    } else {
        window.alert("Insira algo na linha para ser adicionado");

    }
})