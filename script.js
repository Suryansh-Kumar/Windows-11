taskbar = document.getElementsByClassName('taskbar')[0]
startbutton = document.getElementsByClassName('startbutton')[0]
recycleIcon = document.getElementsByClassName('recycleIcon')[0]
search = document.getElementsByClassName('search')[0]
store = document.getElementsByClassName('store')[0]
mstore = document.getElementsByClassName('m-store')[0]
explorer = document.getElementsByClassName('explorer')[0]
chrome = document.getElementsByClassName('chrome')[0]
desktopChrome = document.getElementsByClassName('desktopChrome')[0]
recycleBin = document.getElementsByClassName('recycleBin')[0]
startmenu = document.getElementsByClassName("startmenu")[0]
searchbox = document.getElementsByClassName('searchbox')[0]
recycle = document.getElementsByClassName('recycle')[0]
fileExplorer = document.getElementsByClassName('fileExplorer')[0]
google = document.getElementsByClassName('google')[0]

let taskbarInnerHTML = `<img class="startbutton" src="favicon.ico" alt="start button">
<img class="search" src="search.jpg" alt="search">
<img class="explorer" src="explorer.jpg" alt="file explorer icon">
<img class="chrome" src="chromeicon.png" alt="Google Chrome">
<img class="right" src="taskbarright.PNG" alt="">`

startbutton.addEventListener('click', () => {
    if(startmenu.style.bottom == '50px'){
        startmenu.style.bottom = '-655px'
    }
    else{
        startmenu.style.bottom = '50px'
    }
})

search.addEventListener('click', () => {
    // console.log("clicked");
    if(searchbox.style.bottom == '50px'){
        searchbox.style.bottom = '-655px'
    }
    else{
        searchbox.style.bottom = '50px'
    }
})

store.addEventListener('click', () => {
    // console.log("clicked");
    if(mstore.style.bottom == '61px'){
        mstore.style.bottom = '-655px'
    }
    else{
        mstore.style.bottom = '61px'
    }
})

explorer.addEventListener('click', () => {
    // console.log("clicked");
    if(fileExplorer.style.bottom == '161px'){
        fileExplorer.style.bottom = '-655px'
    }
    else{
        fileExplorer.style.bottom = '161px'
    }
})


recycleIcon.addEventListener('click', ()=>{
    if(recycle.style.bottom == '51px'){
        recycle.style.bottom = '-764px'
    }
    else{
        recycle.style.bottom = '51px'
    }
})


recycleBin.addEventListener('click', () => {
    // console.log("clicked");
    if(recycle.style.bottom == '51px'){
        recycle.style.bottom = '-764px'
    }
    else{
        recycle.style.bottom = '51px'
    }
})
recycleBin.addEventListener('click', () => {
    // console.log("clicked");
    if(recycleIcon.style.display == 'block'){
        recycleIcon.style.display = 'none'
    }
    else{
        recycleIcon.style.display = 'block'
    }
})

desktopChrome.addEventListener('click', () => {
    // console.log("clicked");
    if(google.style.bottom == '-764px'){
        google.style.bottom = '51px'
    }
    else{
        google.style.bottom = '-764px'
    }
})
desktopChrome.addEventListener('click', () => {
    // console.log("clicked");
    if(chrome.style.display == 'none'){
        chrome.style.display = 'block'
    }
    else{
        chrome.style.display = 'none'
    }
})
// desktopChrome.addEventListener('click', () => {
//     console.log('clicked');
//     if(chrome.style.display = 'none'){
//         chrome.style.display = 'block'
//     }
//     else{
//         chrome.style.display = 'none'
//     }
// })

chrome.addEventListener('click', () => {
    if(google.style.bottom == '-764px'){
        google.style.bottom = '51px'
    }
    else{
        google.style.bottom = '-764px'
    }
})