const token = localStorage.getItem('token')
const username = localStorage.getItem('username')

const audit = {}

axios.get('http://localhost:4000/auditoria', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}).then(res => {
    const canvas = document.getElementById('audit_chart')
    const audit = res.data
    const chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ['Goku', 'Vegeta', 'Branco', 'Nulo', 'Inválido'],
            datasets: [{
                data: [audit.candidato1, audit.candidato2, audit.branco, audit.nulo, audit.invalido],
                backgroundColor: [
                    'rgba(255,0,20,1)',
                    'rgba(20,0,255,1)',
                    'rgba(255,255,255,1)',
                    'rgba(120,120,120,1)',
                    'rgba(230,230,230,1)'
                ],
                borderColor: [
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Votos',
                        fontSize: 14,
                        padding: 1
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Candidatos',
                        fontSize: 14,
                        padding: 1
                    },
                    barThickness: 'flex'
                }]
            },
            title: {
                display: true,
                text: 'Total de votos registrados.',
                padding: 20,
                fontStyle: 'bold',
                fontSize: 16
            },
            legend: {
                display: false
            }
        }
    })
})

document.querySelector("input[type=button]").addEventListener("click", e => {
    const target = e.target
    window.location.href = "operational.html"
})