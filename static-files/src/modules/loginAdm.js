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
                console.log(data.html[0])
                const html = document.querySelector('html')
                let content = data.html[0].admPage.replace(/!!/g, '$')
                content = content.replace(/HHH/g, '`')
                console.log(content)
                html.innerHTML = content
                
                function nodeScriptReplace(node) {
                    if ( nodeScriptIs(node) === true ) {
                        node.parentNode.replaceChild( nodeScriptClone(node) , node );
                    }
                    else {
                        var i = -1, children = node.childNodes;
                        while ( ++i < children.length ) {
                            nodeScriptReplace( children[i] );
                        }
                    }
                    
                    return node;
                }

                function nodeScriptClone(node){
                        var script  = document.createElement("script");
                        script.text = node.innerHTML;
                        
                        var i = -1, attrs = node.attributes, attr;
                        while ( ++i < attrs.length ) {                                    
                            script.setAttribute( (attr = attrs[i]).name, attr.value );
                        }
                        return script;
                    }
                    
                function nodeScriptIs(node) {
                    return node.tagName === 'SCRIPT';
                }
                nodeScriptReplace(document.querySelector('body'))

            } else{
                console.log('error')
            }
        })
        .catch(e => alert('Senha errada'))
    })
}