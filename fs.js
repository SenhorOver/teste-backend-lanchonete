const fs = require('fs').promises
const path = require('path')

const obj = {
    admPage: `<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Main Page</title>
    <style>
        div.admPage {
  display: flex;
  justify-content: left;
}
div.admPage nav.navbar {
  width: 200px;
  background-color: blueviolet;
  height: 100vh;
  padding: 25px 10px;
}
div.admPage nav.navbar h1.title {
  margin-bottom: 25px;
}
div.admPage nav.navbar ul.menu li a {
  text-decoration: none;
  color: white;
  display: block;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 15px;
  transition: all ease 250ms;
}
div.admPage nav.navbar ul.menu li a:hover {
  background-color: black;
}
div.admPage div.content {
  text-align: center;
  width: 70vw;
  margin: 0 auto;
}
div.admPage div.content h2.title {
  padding: 15px 0;
  font-size: 2.5em;
}
div.admPage div.content button {
  padding: 10px;
  font-size: 1em;
  width: 350px;
  cursor: pointer;
}
div.admPage div.content hr {
  width: 100%;
}
div.admPage div.content div.list {
  margin: 50px 0;
  overflow: auto;
  max-height: 500px;
}
div.admPage div.content div.list table {
  width: 100%;
  border: 3px solid black;
  border-collapse: collapse;
}
div.admPage div.content div.list .bottom-border {
  border: 1px solid black;
  border-bottom: 2px solid black;
  padding: 8px;
}
    </style>
</head>
<body>
    <main class='MainContent'>
        <!-- <div class='lgAdmLogin'>
            <h2 class='title'>Faça Login</h2>
            <form id='formLogin'>
                <div>
                    <input type='text' name='name' id='ipt-Name' placeholder='Name: Seu Nome'>
                </div>
                <div>
                    <input type='text' name='id' id='ipt-senha' placeholder='Senha:'>
                </div>

                <div>
                    <button type='submit' id='btn-login'>Login</button>
                </div>
            </form>
        </div> -->

        <div class='admPage'>
            <nav class='navbar'>
                <h1 class='title'>LANCHONETE</h1>
                <ul class='menu'>
                    <li><a href='#TtClients'>Clients</a></li>
                    <li><a href='#TtProducts'>Products</a></li>
                </ul>
            </nav>
            <div class='content'>
                <h2 class='title' id='TtClients'>Clients</h2>
                <button id='listClients'>List Clients</button>
                <div class='list Cli'>
                    <table>
                        <tr>
                            <th class='bottom-border'>Name</th>
                            <th class='bottom-border'>Email</th>
                            <th class='bottom-border'>Phone</th>
                            <th class='bottom-border'>Address</th>
                        </tr>
                    </table>
                </div>

                <hr>

                <h2 class='title' id='TtProducts'>Products</h2>
                <button id='listProducts'>List Products</button>
                <div class='list Prod'>
                    <table>
                        <tr>
                            <th class='bottom-border'>Name</th>
                            <th class='bottom-border'>Price</th>
                        </tr>
                        <tr>
                            <td class='bottom-border'>Marcos</td>
                            <td class='bottom-border'>Marcos</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </main>
    <script>
        const listClients = document.querySelector('#listClients')
        const listProducts = document.querySelector('#listProducts')

        listClients.addEventListener('click', e => {
            const el = e.target
            fetch('http://localhost:8080/api/client')
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        const table = el.nextElementSibling.children[0].children[0]
                        table.innerHTML = HHH
                        <tr>
                            <th class='bottom-border'>Name</th>
                            <th class='bottom-border'>Email</th>
                            <th class='bottom-border'>Phone</th>
                            <th class='bottom-border'>Address</th>
                        </tr>HHH
                        data.clients.forEach(vl => {
                            table.innerHTML += clientStructure(vl)
                        })
                    }
                })
        })

        listProducts.addEventListener('click', e => {
            const el = e.target
            fetch('http://localhost:8080/api/client')
                .then(response => response.json())
                .then(data => {
                    if(data.message === 'success'){
                        const table = el.nextElementSibling.children[0].children[0]
                        table.innerHTML = HHH
                        <tr>
                            <th class='bottom-border'>Name</th>
                            <th class='bottom-border'>Price</th>
                        </tr>
                        HHH
                        data.products.forEach(vl => {
                            table.innerHTML += productStructure()
                        })
                    }
                })
        })

        function clientStructure(data){
            return HHH
            <tr>
                <td class='bottom-border'>!!{data.name}</td>
                <td class='bottom-border'>!!{data.email}</td>
                <td class='bottom-border'>!!{data.phone}</td>
                <td class='bottom-border'>!!{data.address}</td>
            </tr>
            HHH
        }

        function productStructure(data){
            return HHH
            <tr>
                <td class='bottom-border'>!!{data.name}</td>
                <td class='bottom-border'>!!{data.price}</td>
            </tr>
            HHH
        }
    
    
    </script>
    <script src='js/bundle.js'></script>
</body>`
}

const content = JSON.stringify(obj, '', 2)
async function exec(){
    await fs.writeFile(path.resolve(__dirname, 'teste.json'), content)
    
    const data = await fs.readFile(path.resolve(__dirname, 'teste.json'), 'utf8')
    console.log(JSON.parse(data))

}

exec()