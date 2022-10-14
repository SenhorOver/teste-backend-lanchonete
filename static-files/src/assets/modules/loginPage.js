export const Main = {
    $btnRegister: document.querySelector('#btnRegister'),
    $btnLogin: document.querySelector('#btnLogin'),
    URL_API: 'http://localhost:8080/api/client',

    init(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors(){
        this.$btnRegister.onclick = this.Events.click_Register.bind(this)
        this.$btnLogin.onclick = this.Events.click_Login.bind(this)
    },

    bindEvents(){
       
    },

    Events: {
        click_Register(e){
            e.preventDefault()

            const objClient = {
                name: document.forms['formCadastro'].name.value,
                email: document.forms['formCadastro'].email.value,
                phone: document.forms['formCadastro'].phone.value,
                address: document.forms['formCadastro'].address.value,
            }

            fetch(this.URL_API, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(objClient)
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === 'success'){
                    document.forms['formCadastro'].reset()
                    alert('Sucesso')
                    return
                } 
                alert('Deu erro ai irmão')
            })
            .catch(e => console.log('error'))
        },

        click_Login(e){
            e.preventDefault()
            const objLogin = {
                email: document.forms['formLogin'].email.value,
                _id: document.forms['formLogin']._id.value
            }

            fetch(this.URL_API, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(objLogin)
            })
        }
    }

}