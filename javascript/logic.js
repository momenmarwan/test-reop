const tasks = JSON.parse(localStorage.getItem("tasks")) || []
const createTask = (titleFiled , descriptionFiled) => {
    const taskObj = {
        title : titleFiled.value,
        description : descriptionFiled.value,
        time : Date.now() ,
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
