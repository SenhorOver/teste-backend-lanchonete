export const Main = {
    $btnRegister: document.querySelector('#btnRegister'),
    $btnLogin: document.querySelector('#btnLogin'),
    $btnListOrder: document.querySelector('#btnListOrders'),
    $btnCreateOrder: document.querySelector('#btnCreateOrder'),
    $btnAddProduct: document.querySelector('#btn-add-product'),
    $btnNewOrder: document.querySelector('#newOrder'),
    $newOrderDiv: document.querySelector('.newOrderDiv'),
    $btnConfirmOrder: document.querySelector('#confirmNewOrder'),
    URL_API: 'http://localhost:8080/api/client',
    
    init(){
        this.cacheSelectors()
        this.bindEvents()
        document.addEventListener('click', this.documentEvents.clickInDocument.bind(this))
    },

    cacheSelectors(){
        this.$btnRegister.onclick = this.Events.click_Register.bind(this)
        this.$btnLogin.onclick = this.Events.click_Login.bind(this)
        this.$btnListOrder.onclick = this.Events.click_listOrder.bind(this)
        this.$btnCreateOrder.onclick = this.Events.click_createOrder.bind(this)
        
        this.$btnAddProduct.onclick = this.formEvents.click_addProduct.bind(this)
        this.$btnNewOrder.onclick = this.formEvents.click_makeOrder.bind(this)
        this.$btnConfirmOrder.onclick = this.Events.click_confirmNewOrder.bind(this)

        try{
            const $btnDeleteListItem = document.querySelectorAll('.deleteListItem')
    
            $btnDeleteListItem.forEach(vl => {
                vl.onclick = this.formEvents.click_removeProduct.bind(this)
            })
        } catch(e){}
        
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
                .then(async data => {
                    if(data.message === 'success'){
                        if(!data.order[0]){
                            alert('Ainda não foi efetuado nenhum pedido')
                            return
                        }
                        this.fetchResponses.structureOrdersList()
                        await this.fetchResponses.createListItems(data)
                        this.cacheSelectors()
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
        },

        click_confirmNewOrder(e){
            const idProducts = JSON.parse(this.$btnConfirmOrder.dataset.id)
            const idUser = document.forms['formLogin'].hiddenId.value
            const status = 'Pendente'
            const date = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'short', timeStyle: 'long'}).format()

            fetch(`http://localhost:8080/api/order/${idUser}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    date,
                    status,
                    idP: idProducts,
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === 'success'){
                    this.$newOrderDiv.classList.remove('newOrder')
                    const choosedProducts = document.querySelector('.choosedProducts')
                    choosedProducts.innerHTML = ''
                    alert('Pedido feito')
                    return
                }
                alert('Ocorreu um erro')
            })
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

        structureOrdersList(){
            const list = document.querySelector('.ordersList')
            const form = document.querySelector('.createOrder')
            list.classList.remove('none')
            form.classList.add('none')
            //Falta fazer o código que irá estruturar o conteúdo, mas eu tenho primeiro que fazer a criação de um novo pedido
        },

        async createListItems(data){
            const ul = document.querySelector('.ordersList')
            const response = await fetch('http://localhost:8080/api/product')
            const productsFetch = await response.json()
            
            const ids = productsFetch.product.map(vl => {
                return vl._id
            })
            
            ul.innerHTML = ''
            data.order.forEach(vl => {
                const productsTog = vl.productCode.split('-')
                let names = []
                let prices = 0
                
                for(let num = 0; num < productsTog.length; num++){
                    console.log('alou')
                    ids.forEach((id, ix) => {
                        if(id === productsTog[num]){
                            names.push(productsFetch.product[ix].name)
                            prices = prices + Number(productsFetch.product[ix].price)
                        }
                    })
                }
                
                
                ul.innerHTML += `
                <li>
                    <h4 class="title">
                        Pedido: ${names.join(' - ')}
                    </h4>
                    <p class="price">Valor(R$): ${prices.toFixed(2)}</p>
                    <p class="status">status: ${vl.status}</p>
                    <p class="date">Data: ${vl.date}</p>
                    <span class="delete deleteListItem" data-id="${vl._id}"></span>
                </li>
                `
                console.log(productsTog)
                console.log(names, prices.toFixed(2))
            })  
        },


        fillOrdersProducts(){
            fetch('http://localhost:8080/api/product')
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        const products = data.product
                        const datalist = document.querySelector('#products')
                        datalist.innerHTML = ''

                        products.forEach(vl => {
                            datalist.innerHTML += this.formEventsFunctions.addDatalistProducts(vl)
                        })

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
        },

        click_makeOrder(e){
            const addedProducts = document.querySelectorAll('.addedProducts')

            if(!addedProducts[0]) return alert('Nenhum produto selecionado')

            this.$newOrderDiv.classList.add('newOrder')
            this.formEventsFunctions.createConfirmPage.bind(this)()
        },
    },

    formEventsFunctions: {
        addProduct(product, id, price){
            if(!product) {
                alert('Nada selecionado')
                return
            }
            if(!id || !price){
                return `
                <p class="addedProducts">${product} 
                    <span class="delete btnDeleteProduct"></span>
                </p>
                `
            }
            return `
            <p class="addedProducts" data-id="${id}" data-price="${price}">${product} 
                <span class="delete btnDeleteProduct"></span>
            </p>
            `
        },

        addDatalistProducts(product){
            return `
                <option value="${product.name}" data-id="${product._id}" data-price="${product.price}">
            `
        },

        createConfirmPage(){
            const confirmContent = document.querySelector('.confirmContent') 
            const confirmPrice = document.querySelector('.confirmPrice')
            const btnConfirmOrder = document.querySelector('#confirmNewOrder')

            const addedProducts = document.querySelectorAll('.addedProducts')

            let products = []
            let ids = []
            let price = 0

            addedProducts.forEach(vl => {
                products.push(vl.innerText)
                price = price + Number(vl.dataset.price)
                ids.push(vl.dataset.id)
            })
            confirmContent.innerHTML = `<span class="lineHead">Conteúdo: </span>`
            confirmPrice.innerHTML = `<span class="lineHead">Preço (R$): </span>`

            confirmContent.innerHTML += ` ${products.join(' | ')}`
            confirmPrice.innerHTML += ` ${price.toFixed(2)}`
            btnConfirmOrder.setAttribute('data-id', JSON.stringify(ids))
            this.cacheSelectors()
        }
    },

    documentEvents: {
        clickInDocument(e){
            const el = e.target
            if(el.classList.contains('newOrder')){
                el.classList.remove('newOrder')
                return
            }
        }
    }

}