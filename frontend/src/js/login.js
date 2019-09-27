document.querySelector(".button-login input[type=button]")
    .addEventListener("click", e => {
        const target = e.target

        const username = document.querySelector(".inputs input[type=text]").value

        const password = document.querySelector(".inputs input[type=password]").value

        axios.post('http://localhost:4000/signin', {username: username, password: password})
            .then(() => window.location.href = 'html/operational.html')
            .catch(err => console.log(err))
})