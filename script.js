const list = document.getElementById('list')
const search = document.getElementById('search')
const btnSearch = document.getElementById('search-btn')
const menu = document.getElementById('menu')
let activeTag = 1
const tags = [
    {
        id:1,
        title:'Все'    
    },
    {
        id:2,
        title:'Идея'    
    },
    {
        id:3,
        title:'Личное'    
    },
    {
        id:4,
        title:'Работа'    
    }]
const notes = [
    {
    id:1,
    title:'Сдать отчет',
    tag: 'Работа',
    updateAt: new Date().toDateString()//сделать сюда формат date string типа
    },
    {
    id:2,
    title:'Note 2',
    tag: 'Работа',
    updateAt: new Date().toDateString()
    },
    {
    id:3,
    title:'Note 2',
    tag: 'Работа',
    updateAt: new Date().toDateString()
    }

]

function createTag(tag){
    const element = document.createElement('li')
    element.classList.add('list-container')
    element.innerText = tag.title
    return element
}



function createNote(note){
    const element = document.createElement('div')
    element.classList.add("list_otch")

    const title = document.createElement('span')
    title.innerText = note.title
    title.classList.add("list_otch-title")

    const date = document.createElement('span')
    date.classList.add("list_otch-date")
    date.innerText = new Date()

    const tag = document.createElement('span')
    tag.classList.add("list_otch-tag")
    tag.innerText = note.tag
    
    element.appendChild(title)
    element.appendChild(date)
    element.appendChild(tag)
    return element
}
function getNotes(searchValue){
    const filteredNotes =  notes.filter((i) => {
        return i.title.startsWith(searchValue)
    })
    return filteredNotes
}
function renderMenu(){
    for(let i of tags){
        const element = createTag(tag)
        element.addEventListener("click",() =>{
            activeTag =tag.id
            render()
        })
        menu.appendChild(element)
    }
}



function render(){
    list.innerHTML=''
    let filtered=getNotes(search.value)

    // let filtered = notes
    if(activeTag!==1){
        filtered=filtered.filter(i => i.tag===activeTag)

    }
    if(filtered.length === 0){
        list.innerText = 'Ничего не найдено('
        return
    }
    for (let i of filtered){
        const element = createNote(i)
        list.appendChild(element)
    }

}
function init(){
    // const list = document.getElementById('list')
    // for (let i of notes){
    //     const element = createNote(i)
    //     list.appendChild(element)
    // }
    renderMenu()
    render()
    btnSearch.addEventListener('click',render)
}
init()