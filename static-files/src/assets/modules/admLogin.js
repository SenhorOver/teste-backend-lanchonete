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
            .then(data => {
                if(data.message === 'success'){
                    const html = document.querySelector('html')
                    let admPage = data.page.HTMLPage
                    admPage = admPage.replaceAll('|||', '`')
                    // admPage = admPage.replace('\n', ' ')
                    html.innerHTML = admPage
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

                    nodeScriptReplace(document.querySelector("body"));
                    return
                }
                alert('Erro')
            })
    })
}



module.exports = {
    initialAdm
}