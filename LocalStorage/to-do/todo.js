function loadTasks(){
    const list = document.querySelector("#task_list")
    list.innerHTML = "";
    const tasks = window.localStorage.getItem("tasks")
    if(tasks){
        const arr = tasks.split("|")
        for (item of arr){
            let [name, status] = item.split('=')
            if (status === undefined && name != true){
                name = 'Nothing to do'
                status = " = 0"
            } 
            const li = document.createElement("li");
            li.textContent = name + status
            list.append(li)
            
        }
    }
}

function addTask(){
    let input = document.querySelector('#task_inp')
    let tasks = window.localStorage.getItem('tasks')

    if (tasks){
        tasks += '|' + input.value;
    } else{
        tasks = input.value
    }
    window.localStorage.setItem("tasks", tasks);
    loadTasks()
}

window.onload = () => loadTasks();
let add_btn = document.querySelector('#add_task');
add_btn.onclick = () => addTask()



let clean_btn = document.querySelector('#clean_btn')
clean_btn.onclick = () => window.localStorage.tasks = ''