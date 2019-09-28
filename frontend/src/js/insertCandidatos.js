// Criação dos candidatos
const token = localStorage.getItem('token')

// console.log(token)

const run = localStorage.getItem('run') ? false : true

if (run) {
    axios.post('http://localhost:4000/candidatos',
        {
            num_candidato: 10,
            nome: "Goku",
            nome_sup: "Kuririn",
            partido: "Estilo Kame",
            cargo: "Presidente",
            cidade: "FEDERAL",
            estado: "BRASIL",
            foto: "https://i.imgur.com/EsvFd5y.jpg"
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )

    axios.post('http://localhost:4000/candidatos',
        {
            num_candidato: 20,
            nome: "Vegeta",
            nome_sup: "Nappa",
            partido: "Raça Guerreira",
            cargo: "Presidente",
            cidade: "FEDERAL",
            estado: "BRASIL",
            foto: "https://pbs.twimg.com/profile_images/2880585720/3c8d9c08b5883565ae50767935ce72cb.jpeg"
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )

    axios.post('http://localhost:4000/candidatos',
        {
            num_candidato: 99,
            nome: "BRANCO",
            nome_sup: "BRANCO",
            partido: "BRANCO",
            cargo: "Presidente",
            cidade: "FEDERAL",
            estado: "BRASIL",
            foto: "../img/president_icon.jpg"
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )

    localStorage.setItem("run", "true")
}
