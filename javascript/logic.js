const tasks = JSON.parse(localStorage.getItem("tasks")) || []




const createTask = (titleFiled , descriptionFiled) => {
    const taskObj = {
        title : titleFiled.value,
        description : descriptionFiled.value,
        id : Date.now() ,
        mark : false
    }
    cleanInputs(titleFiled ,descriptionFiled)
    return taskObj
}
const cleanInputs = (...inputs) => {
    inputs.forEach((input) => {
        input.value = ""
    })
}

const appendToArry = (obj , array ) => {
    array.push(obj)
}

const addToLocalStorage = (array , key) => {
    window.localStorage.setItem(key , JSON.stringify(array))
}

const renderTasks = (tasks) => {
    tasks.forEach((task , index) => {
        let taskList = createList(task.title , task.description , index)
        if(task.mark){
            completedOrderedList.appendChild(taskList)

        }else{
            notCompletedOrderedList.appendChild(taskList)

        }
    })

}

const deleteTask = (index) => {
    tasks.splice(index , 1)
    console.log(tasks)

}

const markDoList = (index) => {
    tasks[index].mark = true
    console.log(tasks[index])

}
renderTasks(tasks)