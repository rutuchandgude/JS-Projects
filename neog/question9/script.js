let apiBtn = document.getElementById("apiBtn")
let erroMsg = document.getElementById("showError")

apiBtn.addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/dummyUsers')
    .then((res) => {
        res.json()
        console.log(res,'res')
        if (res.status === 404) {
            erroMsg.innerHTML = 'Page not found'
        } else if (res.status === 401) {
            erroMsg.innerHTML = "You are not logged in"
        }
    })
})

