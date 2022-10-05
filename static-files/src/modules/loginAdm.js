const formLogin = document.querySelector('#formLogin')
const mainContent = document.querySelector('.mainContent')

export default () => {
    formLogin.addEventListener('submit', e => {
        e.preventDefault()
        const name = document.forms['formLogin'].name.value
        const id = document.forms['formLogin'].id.value

        fetch(`http://localhost:8080/api/adm/${id}`, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            if(data.name !== 'CastError'){
                console.log(data)
            } else{
                console.log('error')
            }
        })
        .catch(e => alert('Senha errada'))
    })
}