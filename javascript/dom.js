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

const createBtn = (textContent ,className, value , type , event , cb) => {
    const btn = createHtmlElement("button",null,null,textContent , className)
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
const createList = () => {
    const li = createHtmlElement("li" , null , null , "Task")
    const checkBtn = createBtn("")
    const deleteBtn = createBtn("")
    const checkIcon = createHtmlElement("i" , "fa fa-check")
    checkBtn.appendChild(checkIcon)
    const trashIcon = createHtmlElement("i" , "fa fa-trash")
    deleteBtn.appendChild(trashIcon)
    appendChildrn(li , deleteBtn , checkBtn)
    return li

}


const addTask = createHtmlElement("div" , "add-task")
const title = createInput("text" ,"title" ,null,"Title" , null)
const description = createInput("text" ,"description" ,null,"description" , null)

const addBtn = createBtn("Add" , "btn-add",null,null , "click" , () => {
    appendToArry(createTask(title , description) , tasks)
    addToLocalStorage(tasks , "tasks")    
})

const notCompletedOrderedList = createHtmlElement("ol" , "not-completed")
const notCompleted =  createHtmlElement("h3",null,null,"Not Completed")
const notcompletedList = createList()

const completedOrderedList = createHtmlElement("ol" , "completed")
const completed =  createHtmlElement("h3",null,null,"Completed")
const completedList = createList()



appendChildrn(notCompletedOrderedList , notCompleted ,notcompletedList)
appendChildrn(completedOrderedList , completed ,completedList)



appendChildrn(addTask,title ,description,addBtn)
appendChildrn(container , addTask , notCompletedOrderedList , completedOrderedList)




