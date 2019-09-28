localStorage.clear()

axios.get('http://localhost:4000/infoadmin')
    .then(resp => {
        if(!resp.data.username) {
            axios.post('http://localhost:4000/insertadmin', {username: "admin", password: "admin"})
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))

document.querySelector(".button-login input[type=button]")
    .addEventListener("click", e => {

        const target = e.target

        const username = document.querySelector(".inputs input[type=text]").value

        const password = document.querySelector(".inputs input[type=password]").value

        axios.post('http://localhost:4000/signin', 
            { username: username, password: password }    
        )
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('username', resp.data.username)
                window.location.href = 'html/operational.html'
            })
            .catch(err => console.log(err))
})