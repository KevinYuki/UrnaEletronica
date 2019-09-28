const token = localStorage.getItem('token')

const clearFields = () => document.querySelectorAll('input[type=text]').forEach(field => field.value = "")

document.querySelector("input.insert").addEventListener("click", e => {
    e.preventDefault()

    const cpf = document.querySelector('input[name=cpf]').value
    const nome = document.querySelector('input[name=nome]').value
    const cidade = document.querySelector('input[name=cidade]').value
    const estado = document.querySelector('input[name=estado]').value
    const votou = 0

    axios.post('http://localhost:4000/eleitores',
        {
            cpf : cpf,
            nome_completo: nome,
            cidade: cidade,
            estado: estado,
            votou: votou
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )

    clearFields()

})


document.querySelector("input.return").addEventListener("click", e => {
    e.preventDefault()
    window.location.href = "operational.html"
})