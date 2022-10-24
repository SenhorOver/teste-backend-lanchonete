const AdmPage = {
    URL_API: 'http://localhost:8080/api',

    init(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors(){
        //Menu Buttons
        this.btnShClients = document.querySelector('#adm-btnShClients')
        this.btnShAOrders = document.querySelector('#adm-btnShAllOrders')
        this.btnShProducts = document.querySelector('#adm-btnShProducts')


        //Client list order button
        try{
            this.btnShClientsOrders = document.querySelectorAll('.clientsOrders')
        } catch(e){}

        try{
            this.btnChanStatus = document.querySelectorAll('.btnChangeStatus')
        } catch(e){}


        //Product List + Edit/Remove/Add
        this.btnAddProduct = document.querySelector('#admAddProduct')
        this.btnListProduct = document.querySelector('#admListProduct')


        this.btnRegisterProduct = document.querySelector('#admBtnAddProduct')
        this.btnEditProduct = document.querySelector('#admBtnEditProduct')

        try{
            this.admBtnEditProduct = document.querySelectorAll('.admEditProduct')
        } catch(e){}
        try{
            this.admBtnRemoveProduct = document.querySelectorAll('.admRemoveProduct')
        } catch(e){}
    },

    bindEvents(){
        //Menu buttons
        this.btnShClients.onclick = this.Events.shClientsList.bind(this)
        this.btnShAOrders.onclick = this.Events.shAllOrdersList.bind(this)
        this.btnShProducts.onclick = this.Events.shProducts.bind(this)

        //One client orders list
        try{
            this.btnShClientsOrders.forEach(vl => {
                vl.onclick = this.Events.shClientsOrders.bind(this)
            })
        } catch(e){}

        try{
            this.btnChanStatus.forEach(vl => {
                vl.onclick = this.Events.changeStatus.bind(this)
            })
        } catch(e){}



        //Products Events
        this.btnAddProduct.onclick = this.Events.shAddProductDiv.bind(this)
        this.btnListProduct.onclick = this.Events.shProductsList.bind(this)


        this.btnRegisterProduct.onclick = this.Events.addProduct.bind(this)
        this.btnEditProduct.onclick = this.Events.confirmEditProduct.bind(this)
        
        try{
            this.admBtnRemoveProduct.forEach(vl => {
                vl.onclick = this.Events.removeProduct.bind(this)
            })
        } catch(e){}
        try{
            this.admBtnEditProduct.forEach(vl => {
                vl.onclick = this.Events.editProduct.bind(this)
            })
        } catch(e){}
        
    },

    Events: {
        shClientsList(){
            const admClients = document.querySelector('.admClients')
            const ulClients = document.querySelector('.admClientsList')
            const h2 = document.querySelector('.admMainTitle')
            const container = document.querySelector('.container')
            
            for(let i = 0; i < container.children.length; i++){
                if(i === 0) continue
                container.children[i].classList.add('none')
            }
            
            

            fetch(`${this.URL_API}/client`)
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        h2.innerText = 'CLIENTES REGISTRADOS'
                        ulClients.innerHTML = ''
                        data.client.forEach(vl => {
                            ulClients.innerHTML += this.helpFunctions.addClientLi(vl)
                        })
                        this.cacheSelectors()
                        this.bindEvents()
                        admClients.classList.remove('none')
                        return
                    }
                    alert('Ops, ocorreu um erro')
                })
        },

        shClientsOrders(e){
            const id = e.target.dataset.id
            const clickedOrders = document.querySelector('.clickedOrders')
            const ul = document.querySelector('.admClientOrderList')
            

            fetch(`${this.URL_API}/order/${id}`)
            .then(response => response.json())
            .then(data => {
                if(data.message === 'success'){
                    const orders = data.order
                    
                    ul.innerHTML = ''
                    orders.forEach(async (vl, ix) => {
                        const namesAndPrices = await this.helpFunctions.productIdsInNamePrice.bind(this)(vl)
                        if(typeof namesAndPrices === 'undefined') return alert('Ocorreu um erro')
                        ul.innerHTML += this.helpFunctions.addClientOrderLi(namesAndPrices, data, ix)
                        this.cacheSelectors()
                        this.bindEvents()
                    })

                    clickedOrders.classList.remove('none')
                    return
                }
                alert('Ocorreu um erro')
            })

        },

        changeStatus(e){
            const el = e.target
            const select = el.previousElementSibling
            const idSpan = el.parentElement.previousElementSibling
            const statusSpan = idSpan.previousElementSibling
            let id = idSpan.innerText.split(': ')
            id = id[1]

            if(!select.value) return alert('Selecione um valor para alterar')

            fetch(`${this.URL_API}/order/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    status: select.value
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === 'success'){
                    const status = data.order.status
                    const sectList = document.querySelector('.admClients')
                    const sectAOrder = document.querySelector('.admAllOrders')

                    if(!sectList.classList.contains('none')){
                        statusSpan.innerHTML = `<b>Status:</b> ${status}`
                    }
                    if(!sectAOrder.classList.contains('none')){
                        this.Events.shAllOrdersList.bind(this)()
                    }

                    statusSpan.innerHTML = `<b>Status:</b> ${status}`
                    return
                }
                alert('Deu erro')
            })
        },



        shAllOrdersList(){
            const admAllOrders = document.querySelector('.admAllOrders')
            const title = document.querySelector('.admMainTitle')
            const container = document.querySelector('.container')
            const ul = document.querySelectorAll('.admAOList')
            
            title.innerHTML = 'TODOS OS PEDIDOS'
            for(let i = 0; i < container.children.length; i++){
                if(i === 0) continue
                container.children[i].classList.add('none')
            }
            ul.forEach(vl => {
                vl.innerHTML = ''
            })
            fetch(`${this.URL_API}/order`)
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        const orders = data.order

                        orders.forEach(async (vl, ix) => {
                            const namesAndPrices = await this.helpFunctions.productIdsInNamePrice.bind(this)(vl)
                            const status = ['Pendente', 'Em preparo', 'Em entrega', 'Entregue', 'Cancelado']
                            if(typeof namesAndPrices === 'undefined') return alert('Ocorreu um erro1')

                            status.forEach((value, index) => {
                                if(value === data.order[ix].status){
                                    ul[index].innerHTML += this.helpFunctions.addClientOrderLi(namesAndPrices, data, ix)
                                }
                            })

                            this.cacheSelectors()
                            this.bindEvents()
                        })
                        admAllOrders.classList.remove('none')
                        return
                    }
                    alert('Ocorreu um erro')
                })

            

        },






        shProducts(){
            const title = document.querySelector('.admMainTitle')
            const container = document.querySelector('.container')
            
            title.innerHTML = 'O que deseja com os produtos?    '
            for(let i = 0; i < container.children.length; i++){
                if(i === 0) continue
                container.children[i].classList.add('none')
            } 

            container.children[3].classList.remove('none')
        },

        shAddProductDiv(){
            const formDiv = document.querySelector('.admDivProductForm')
            const listDiv = document.querySelector('.admDivProductList')

            listDiv.classList.add('none')
            formDiv.classList.remove('none')
        },

        shProductsList(){
            const formDiv = document.querySelector('.admDivProductForm')
            const listDiv = document.querySelector('.admDivProductList')
            const ul = document.querySelector('#admUlListProduct')

            formDiv.classList.add('none')
            listDiv.classList.remove('none')

            fetch(`${this.URL_API}/product`)
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        ul.innerHTML = ''
                        data.product.forEach(vl => {
                            ul.innerHTML += this.helpFunctions.addProductLi.bind(this)(vl)
                        })
                        this.cacheSelectors()
                        this.bindEvents()                        
                        return
                    }
                    alert('Deu erro')
                })
        },


        addProduct(){
            const nameIpt = document.querySelector('#admIptNameProduct')
            const priceIpt = document.querySelector('#admIptPriceProduct')

            const name = nameIpt.value
            const price = Number(priceIpt.value)

            fetch(`${this.URL_API}/product`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    price
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === 'success'){
                    nameIpt.value = ''
                    priceIpt.value = ''
                    alert('sucesso')
                    return
                }
                alert('deu erro')
            })
        },


        editProduct(e){
            const editProductDiv = document.querySelector('.admEditProductDiv')
            const id = e.target.dataset.id
            const nameIpt = document.querySelector('#admIptEditName')
            const priceIpt = document.querySelector('#admIptEditPrice')

            editProductDiv.classList.remove('none')
            editProductDiv.setAttribute('data-id', id)

            fetch(`${this.URL_API}/product/${id}`)
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        console.log(data)
                        nameIpt.value = data.product[0].name
                        priceIpt.value = data.product[0].price
                        return
                    }
                    alert('deu erro')
                })

            this.cacheSelectors()
            this.bindEvents()

        },

        removeProduct(e){
            const el = e.target
            const id = el.dataset.id

            fetch(`${this.URL_API}/product/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        this.Events.shProductsList.bind(this)()
                        alert('removido com sucesso')
                        return
                    }
                    alert('ocorreu um erro')
                })
                
        },

        confirmEditProduct(e){
            const el = e.target
            const div = el.parentElement
            const id = div.dataset.id

            const nameIpt = document.querySelector('#admIptEditName')
            const priceIpt = document.querySelector('#admIptEditPrice')

            const name = nameIpt.value
            const price = Number(priceIpt.value)

            fetch(`${this.URL_API}/product/${id}`, {
                method:'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    price
                })
            })
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        alert('Editado com sucesso')
                        div.classList.add('none')
                        this.Events.shProductsList.bind(this)()
                        return
                    }
                    alert('Ocorreu um erro')
                })
        }

    },

    helpFunctions: {
        addClientLi(vl){
            return `
            <li>
                <span class="admClientsData"><b>Name:</b> ${vl.name}</span>
                <span class="admClientsData"><b>Email:</b> ${vl.email}</span>
                <span class="admClientsData"><b>Phone:</b> ${vl.phone}</span>
                <span class="admClientsData"><b>Address:</b> ${vl.address}</span>
                <span class="admClientsData"><b>Client Code:</b> <span style="font-size: 14px">${vl._id}</span></span>
                <span class="clientsOrders" data-id="${vl._id}"></span>
            </li>
            `
        },
        async productIdsInNamePrice(vl){
            let flag = true
            const names = []
            const prices = []
            await fetch(`${this.URL_API}/product`)
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        const ids = vl.productCode.split('-')
                        ids.forEach(vlId => {
                            let price = 0
                            data.product.forEach(vlData => {
                                if(vlId === vlData._id){
                                    names.push(vlData.name)
                                    price = price + Number(vlData.price)
                                }
                            })
                            prices.push(price)
                        })
                        return
                    }
                    flah = false
                    alert('Ocorreu um erro')
                })
            
            const result = [names, prices]
            if(flag){
                return result
            }
            return undefined
        },
        addClientOrderLi(namePrice, data, ix){
            const names = namePrice[0]
            const name = names.join(' - ')

            let ids = data.order[ix].productCode.split('-')
            ids = ids.join(' | ')

            const prices = namePrice[1]
            const price = prices.reduce((acc, vl) => {
                return acc + vl
            })
        
            return `
            <li>
            <span class="admClickedOrdersList"><b>Product Names:</b> ${name}</span>
            <span class="admClickedOrdersList"><b>Products Ids:</b> ${ids} </span>
            <span class="admClickedOrdersList"><b>Price:</b> ${price.toFixed(2)}</span>
            <span class="admClickedOrdersList"><b>Date:</b> ${data.order[ix].date}</span>
            <span class="admClickedOrdersList"><b>ClientCode:</b> ${data.order[ix].clientCode} </span>
            <span class="admClickedOrdersList"><b>Status:</b> ${data.order[ix].status}</span>
            <span class="admClickedOrdersList"><b>Order ID: </b> ${data.order[ix]._id}</span>
                <div class="admChangeStatus">
                    <select name="admSelectChangeStatus" id="changeStatus">
                        <option value="" checked>-- Selecione para alterar --</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Em preparo">Em preparo</option>
                        <option value="Em entrega">Em entrega</option>
                        <option value="Entregue">Entregue</option>
                        <option value="Cancelado">Cancelado</option>
                    </select>
                    <button class="btnChangeStatus"> Enviar </button>
                </div>
            </li>
            `
        },



        addProductLi(vl){
            return `
            <li>
                <span><b>Id:</b> <p style="font-size: 14px; display: inline">${vl._id}</p></span>
                <span><b>Name:</b> ${vl.name}</span>
                <span><b>Price (R$):</b> ${vl.price}</span>
                <div class="admEditProduct" data-id="${vl._id}"></div>
                <div class="admRemoveProduct" data-id="${vl._id}"></div>
            </li>
            `
        }

    },
}



AdmPage.init()