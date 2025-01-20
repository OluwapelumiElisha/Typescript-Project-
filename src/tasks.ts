const taskForm = document.querySelector<HTMLFormElement>('.form')
const fromInput = document.querySelector<HTMLInputElement>('.form-input')
const taskListElement = document.querySelector<HTMLUListElement>('.lists')

type Task = {
    description : string;
    isComplete: boolean
}

const tasks : Task[] = loadTask()

tasks.forEach(renderTask)

function loadTask(): Task[] {
    const storedTask = localStorage.getItem('Tasks')
    // console.log(storedTask);
    return storedTask? JSON.parse(storedTask) : []
    
}

taskForm?.addEventListener('submit', (e)=>{
    e.preventDefault()
    // alert()
    const description = fromInput?.value

    if (description) {
        // console.log(description);
        const task:Task = {
            description : description,
            isComplete : false

        }
        addTask(task)
        renderTask(task)
        updateStorage()
       fromInput.value = ''
        return
    }
    alert('Please Enter Description')
})


function addTask(task : Task) {
    tasks.push(task)
    console.log(tasks);
    
}

function renderTask(task:Task):void {
    const taskElement = document.createElement('li')
    taskElement.textContent = task.description

    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'
    taskCheckbox.checked = task.isComplete

    taskCheckbox.addEventListener(('change'), ()=>{
        task.isComplete = !task.isComplete
        updateStorage()
    })

    taskElement?.appendChild(taskCheckbox)
    taskListElement?.appendChild(taskElement)
}

function updateStorage() {
    localStorage.setItem('Tasks', JSON.stringify(tasks))
}