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
    },

    bindEvents(){
        //Menu buttons
        this.btnShClients.onclick = this.Events.shClientsList.bind(this)
        this.btnShAOrders.onclick = this.Events.shAllOrdersList.bind(this)


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
                            console.log(namesAndPrices)
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





    },
}



AdmPage.init()