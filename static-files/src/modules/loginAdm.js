const formLogin = document.querySelector('#formLogin')
const mainContent = document.querySelector('.mainContent')

export default () => {
    formLogin.addEventListener('submit', e => {
        const name = document.forms['formLogin'].name.value
        const _id = document.forms['formLogin']._id.value

        e.preventDefault()
        fetch('http://localhost:8080/api/adm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                _id
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                return mainContent.innerHTML = data
            }
            return mainContent.innerHTML = 'Error'
        })
    })
}