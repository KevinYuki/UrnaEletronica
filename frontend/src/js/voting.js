const token = localStorage.getItem('token')

const vote = (id, num_candidato) => {

    axios.post('http://localhost:4000/votos',
        {
            id : id,
            num_candidato: num_candidato
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(resp => window.location.href = "ending.html")
    .catch(err => {
        document.querySelectorAll('input[type=number]').forEach(field => field.value = "")
        console.log(err)
    })
}

document.querySelector('input[name=number_1]').oninput = e => {
    const target = e.target.value.toString()
    if(target.length > 1) {
        e.target.value = parseInt(target.slice(0,1))
    }
    document.querySelector('input[name=number_2]').focus()
}

document.querySelector('input[name=number_2]').oninput = e => {
    const target = e.target.value.toString()
    if(target.length > 1) {
        e.target.value = parseInt(target.slice(0,1))
    }
    document.querySelector('input[name=number_1]').disabled = true
    document.querySelector('input[name=number_2]').disabled = true
}

const cycle = setInterval(() => {
    const field = document.querySelector('input[name=id_eleitor]')
    const id = field.value
    
    if(id !== "") {
        if(document.activeElement !== field) field.disabled = true
        document.querySelector('input[name=number_1]').disabled = false
        document.querySelector('input[name=number_2]').disabled = false

        const num1 = document.querySelector('input[name=number_1]').value
        const num2 = document.querySelector('input[name=number_2]').value

        if(num1 !== "" && num2 !== "") {
            const num_candidato = parseInt(num1.toString() + num2.toString())

            document.querySelector('input[name=number_1]').disabled = true
            document.querySelector('input[name=number_2]').disabled = true

            axios.get(`http://localhost:4000/candidatos/${num_candidato}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then(resp => {
                document.getElementById("nome").innerHTML = resp.data.nome || "NULO"
                document.getElementById("partido").innerHTML = resp.data.partido || "NULO"
                document.getElementById("sup").innerHTML = resp.data.nome_sup || "NULO"
                document.getElementById("foto").setAttribute('src', resp.data.foto || '../img/president_icon.jpg')
                // clearInterval(cycle)           
            })
        }


    } else {
        document.querySelector('input[name=number_1]').disabled = true
        document.querySelector('input[name=number_2]').disabled = true
        document.querySelectorAll('.inputs span').forEach(span => span.innerHTML = "")
    }
}, 500)

document.querySelector('input.btn-success').addEventListener("click", e => {
    const id = document.querySelector('input[name=id_eleitor]').value
    const num1 = document.querySelector('input[name=number_1]').value
    const num2 = document.querySelector('input[name=number_2]').value
    
    const num_candidato = parseInt(num1.toString() + num2.toString())

    axios.post('http://localhost:4000/votos',
        {
            id: id,
            num_candidato: num_candidato
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(res => window.location.href = "ending.html")
    .catch(err => console.log(err))
})

document.querySelector('input.btn-redo').addEventListener('click', e => {
    document.querySelector('input[name=number_1]').value = ""
    document.querySelector('input[name=number_2]').value = ""
    document.getElementById("foto").setAttribute('src', '../img/president_icon.jpg')
    document.querySelectorAll('.inputs span').forEach(span => span.innerHTML = "")
})

document.querySelector('input.btn-white').addEventListener('click', e => {
    const id = document.querySelector('input[name=id_eleitor]').value
    axios.post('http://localhost:4000/votos',
        {
            id: id,
            num_candidato: 99
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(res => window.location.href = "ending.html")
    .catch(err => console.log(err))
})
