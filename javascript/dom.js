const container = document.querySelector(".container")

const createHtmlElement = (ele , className , id , textContent) => {
    const el = document.createElement(ele)
    if(className){
        el.className = className
    }
    if(id){
        el.id = id
    }
    if(textContent){
        el.textContent = textContent
    }
    return el
}

const createBtn = (textContent , value , type , event , cb) => {
    const btn = createHtmlElement("button",null,null,textContent)
    btn.value = value ;
    btn.type = type ;
    btn.addEventListener(event , cb)
    return btn
}

const createInput = (type ,className , name , placeHolder , id) => {
    const input = createHtmlElement("input" , className , id) 
    input.type = type
    input.placeholder = placeHolder ;
    if(name){
        input.name = name
    }
    return input
}

const appendChildrn = (parent , ...childrn) => {
    childrn.forEach((child) => {
        parent.appendChild(child)
    })
}

const addTask = createHtmlElement("div" , "add-task")
const title = createInput("text" ,null ,null,"Add a Task" , null)
const description = createInput("text" , null , null , "Add a description" , null)


const completedOrderedList = createHtmlElement("ol" , "completed")

const createList = (taskTitle , taskDescription , index) => {
    const li = createHtmlElement("li" , null , null)
    let title = createHtmlElement("p")
    title.textContent = taskTitle
    let description = createHtmlElement("p")
    description.textContent = taskDescription
    const checkBtn = createBtn("" ,index )
    const deleteBtn = createBtn("" , index)
    const editBtn = createBtn("" , index)
    editBtn.addEventListener("click" , ()=> {
        document.getElementsByTagName("input")[0].value = tasks[editBtn.value].title
        document.getElementsByTagName("input")[1].value = tasks[editBtn.value].description
        const udateBtn = createBtn("update")
        addTask.appendChild(udateBtn)
        udateBtn.addEventListener("click" , () => {
            tasks[editBtn.value].title = document.getElementsByTagName("input")[0].value
            tasks[editBtn.value].description = document.getElementsByTagName("input")[1].value
            addToLocalStorage(tasks , "tasks")
            renderTasks(tasks)
            document.getElementsByTagName("input")[0].value = ""
            document.getElementsByTagName("input")[1].value = ""
            udateBtn.remove()

        })
    })

    deleteBtn.addEventListener("click" , () => {
        deleteTask(parseInt(deleteBtn.value))
        addToLocalStorage(tasks , "tasks")
        deleteBtn.parentElement.remove();

    })
    checkBtn.addEventListener("click" , () => {
        markDoList(checkBtn.value)
        addToLocalStorage(tasks , "tasks")
        renderTasks(tasks)
    })
    const checkIcon = createHtmlElement("i" , "fa fa-check")
    checkBtn.appendChild(checkIcon)
    const trashIcon = createHtmlElement("i" , "fa fa-trash")
    const editIcon= createHtmlElement("i" , "fa fa-edit")
    
    editBtn.appendChild(editIcon)
    deleteBtn.appendChild(trashIcon)
    appendChildrn(li , deleteBtn , checkBtn ,editBtn, title , description)
    return li

}

const completed =  createHtmlElement("h3",null,null,"Completed")
const completedList = createList()



const notCompletedOrderedList = createHtmlElement("ol" , "not-completed")
const notCompleted =  createHtmlElement("h3",null,null,"Not Completed")

const addBtn = createBtn("Add")
addBtn.addEventListener("click", () => {
    let newTask = createTask(title, description);
    appendToArry(newTask, tasks);
    addToLocalStorage(tasks, "tasks");
    renderTasks(tasks)
});





appendChildrn(notCompletedOrderedList , notCompleted )
appendChildrn(completedOrderedList , completed ,completedList)



appendChildrn(addTask,title,description,addBtn)
appendChildrn(container , addTask , notCompletedOrderedList , completedOrderedList)






