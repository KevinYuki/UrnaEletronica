const token = localStorage.getItem('token')
const username = localStorage.getItem('username')

document.querySelector("span.user").innerHTML = username


document.querySelector("input.voting").addEventListener("click", e => {
    const target = e.target
    window.location.href = "voting.html"
})

document.querySelector("input.insertUser").addEventListener("click", e => {
    const target = e.target
    window.location.href = "insertUser.html"
})

document.querySelector("input.insertCandidato").addEventListener("click", e => {
    const target = e.target
    window.location.href = "insertCandidato.html"
})

document.querySelector("input.audit").addEventListener("click", e => {
    e.preventDefault()
    const target = e.target
    axios.get('http://localhost:4000/auditoria', { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(resp => {
            const element = document.createElement('a')
            const text = JSON.stringify(resp.data, null, '\t')
            console.log(text)
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + text)
            element.setAttribute('download', "audit.txt")

            element.style.display = 'none'

            document.body.appendChild(element)

            element.click()

            document.body.removeChild(element)
        })
        .catch(err => console.log(err))
})