function initialAdm(){
    const button = document.querySelector('#btn-admPage')
    const inputs = document.querySelectorAll('.ipt-admLogin')
    
    button.addEventListener('click', e => {
        const name = inputs[0].value
        const id = inputs[1].value
        
        fetch(`http://localhost:8080/api/admPage`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, id})
        })
            .then(response => response.json())
            .then(data => console.log(data))
    })
}



module.exports = {
    initialAdm
}