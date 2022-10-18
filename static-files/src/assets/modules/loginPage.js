export const Main = {
    $btnRegister: document.querySelector('#btnRegister'),
    $btnLogin: document.querySelector('#btnLogin'),
    $btnListOrder: document.querySelector('#btnListOrders'),
    $btnCreateOrder: document.querySelector('#btnCreateOrder'),
    $btnAddProduct: document.querySelector('#btn-add-product'),
    $btnNewOrder: document.querySelector('#newOrder'),
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
        
        this.$btnAddProduct.onclick = this.formEvents.click_addProduct.bind(this)
        try{
            const $btnRmProduct = document.querySelectorAll('.btnDeleteProduct')
            $btnRmProduct.forEach(vl => {
                vl.onclick = this.formEvents.click_removeProduct.bind(this)
            })
        } catch(e){}
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
                    this.fetchResponses.structureLayoutLogin(data)
                    return
                }
                alert('Deu erro')
            })
        },

        click_listOrder(e){
            const id = document.forms['formLogin'].hiddenId.value

            fetch(`http://localhost:8080/api/order/${id}`)
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        if(!data.order[0]){
                            alert('Ainda não foi efetuado nenhum pedido')
                            return
                        }
                        this.fetchResponses.structureOrdersList(data)
                        return
                    }
                    alert('Deu erro')
                })

            //Fazer fetch para orders, mandando o ID desse usuário que está no input hidden para a API para que ela faça a pesquisa no banco de dados e me devolva os pedidos desse cliente
        },

        async click_createOrder(e){
            this.cacheSelectors()
            await this.fetchResponses.fillOrdersProducts.bind(this)()
            this.fetchResponses.showOrderForm()
        }
    },

    fetchResponses: {
        successLogin(){
            const divLogin = document.querySelector('.divLogin')
            divLogin.classList.add('none')
            divLogin.classList.remove('divLogin')
        },

        structureLayoutLogin(data){
            const lgMainTitle = document.querySelector('.lgMainTitle')
            const loginFeito = document.querySelector('.logFeito')
            const hiddenId = document.forms['formLogin'].hiddenId
            const client = data.client[0]
            
            lgMainTitle.innerText = `Olá ${client.name}`
            hiddenId.value = client._id
            loginFeito.classList.remove('none')
        },

        structureOrdersList(data){
            const list = document.querySelector('.ordersList')
            const form = document.querySelector('.createOrder')
            list.classList.remove('none')
            form.classList.add('none')
        },


        fillOrdersProducts(){
            fetch('http://localhost:8080/api/product')
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        const products = data.product
                        const datalist = document.querySelector('#products')

                        products.forEach(vl => {
                            datalist.innerHTML += this.formEventsFunctions.addDatalistProducts(vl)
                        })

                        //Fazer evento para criar novo pedido

                        return
                    }
                    alert('Ocorreu um erro')
                })
        },

        showOrderForm(){
            const list = document.querySelector('.ordersList')
            const form = document.querySelector('.createOrder')
            list.classList.add('none')
            form.classList.remove('none')
        },

        structureOrdersForm(data){

        }
    },

    formEvents: {
        click_addProduct(e){
            const iptProduct = document.querySelector('#ipt-product')
            const choosedProducts = document.querySelector('.choosedProducts')
            const options = document.querySelectorAll('option')
            let id;
            let price
            let flag = false
            
            const product = iptProduct.value
            iptProduct.value = ''

            options.forEach(vl => {
                if(product === vl.value){
                    id = vl.dataset.id
                    price = vl.dataset.price
                    flag = true
                }
            })
            if(!flag){
                alert('Digite o nome do produto, e selecione ele na lista')
                return
            }
            choosedProducts.innerHTML += this.formEventsFunctions.addProduct(product, id, price)
            this.cacheSelectors()
        },

        click_removeProduct(e){
            const product = e.target
            product.parentElement.remove()
        }
    },

    formEventsFunctions: {
        addProduct(product, id, price){
            if(!product) {
                alert('Nada selecionado')
                return
            }
            if(!id || !price){
                return `
                <p>${product} 
                    <span class="delete btnDeleteProduct"></span>
                </p>
                `
            }
            return `
            <p data-id="${id}" data-price="${price}">${product} 
                <span class="delete btnDeleteProduct"></span>
            </p>
            `
        },

        addDatalistProducts(product){
            return `
                <option value="${product.name}" data-id="${product._id}" data-price="${product.price}">
            `
        }
    }

}