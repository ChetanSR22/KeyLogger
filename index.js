const start = document.getElementById('start')
const stop = document.getElementById('stop')
const log = document.getElementById('log')
const state = document.getElementById('state')


start.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
    start.disabled = true
    stop.disabled = false
})

stop.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    log.textContent = " "
    state.textContent = " "
    start.disabled = false
    stop.disabled = true
})

function handleDown(e){
    log.textContent = `Key ${e.key} is Pressed`
    state.textContent = "Key is Down"
}

function handleUp(e){
    log.textContent = `Key ${e.key} is Pressed`
    state.textContent = "Key is Up"
}