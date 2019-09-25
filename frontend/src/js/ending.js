const pathname =  window.location.pathname.substr(5)
const name = pathname.substr(1,pathname.length-6)

if(name === 'ending')
setTimeout(() => { window.location.href = "/" }, 5000 )