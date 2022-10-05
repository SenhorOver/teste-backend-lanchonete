
const formClient = document.querySelector('#formClient')
const msg = document.querySelector('#clientOk')
const divClient = document.querySelector('.lgLogin')


export default () => {
    formClient.addEventListener('submit', e => {
        e.preventDefault()
        
        const name = document.forms['formClient'].name.value
        const email = document.forms['formClient'].email.value
        const phone = document.forms['formClient'].phone.value
        const address = document.forms['formClient'].address.value

        if(name && email && phone && address){
            fetch('http://localhost:8080/api/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === 'success') {
                    formClient.reset()
                    divClient.classList.add('none')
                    msg.classList.remove('none')
                    return
                }
                alert('Ocorreu um erro')
            })
        }

    })
}