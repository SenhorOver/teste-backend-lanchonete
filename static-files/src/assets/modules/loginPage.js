export const Main = {
    $btnRegister: document.querySelector('#btnRegister'),
    $btnLogin: document.querySelector('#btnLogin'),
    $btnListOrder: document.querySelector('#btnListOrders'),
    $btnCreateOrder: document.querySelector('#btnCreateOrder'),
    URL_API: 'http://localhost:8080/api/client',

    init(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors(){
        this.$btnRegister.onclick = this.Events.click_Register.bind(this)
        this.$btnLogin.onclick = this.Events.click_Login.bind(this)
        this.$btnListOrder.onclick = this.Events.click_listOrder.bind(this)
        this.$btnCreateOrder.onclick = this.Events.click_createOrder.bind(this)
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

            fetch(`${this.URL_API}Login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(objLogin)
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === 'success'){
                    this.fetchResponses.successLogin()
                    this.fetchResponses.structureLayout(data)
                    return
                }
                alert('Deu erro')
            })
        },

        click_listOrder(e){
            const ordersList = document.querySelector('.ordersList')

            //Fazer fetch para orders, mandando o ID desse usuário que está no input hidden para a API para que ela faça a pesquisa no banco de dados e me devolva os pedidos desse cliente
        },

        click_createOrder(e){

        }
    },

    fetchResponses: {
        successLogin(){
            const divLogin = document.querySelector('.divLogin')
            divLogin.classList.add('none')
            divLogin.classList.remove('divLogin')
        },

        structureLayout(data){
            const lgMainTitle = document.querySelector('.lgMainTitle')
            const loginFeito = document.querySelector('.logFeito')
            const client = data.client[0]
            
            lgMainTitle.innerText = `Olá ${client.name}`
            loginFeito.classList.remove('none')
        }
    }

}