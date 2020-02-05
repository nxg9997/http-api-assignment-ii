//console.log('hi');
(function(){
    let urlField = document.querySelector('#urlField');
    let methodSelect = document.querySelector('#methodSelect');
    let resCode = document.querySelector('#resCode');
    let resMessage = document.querySelector('#resMessage');
    let form = document.querySelector('#nameForm');
    let formSend = document.querySelector('#adduser');
    let age = document.querySelector('#ageField');
    let name = document.querySelector('#nameField');
    document.querySelector('#getUser').onclick = () => {
        let path = urlField.value;
        let method = methodSelect.value;
        fetch(path,{method: method}).then(res=>{
            //console.log(res);
            resCode.innerHTML = res.statusText;
            if(method.toUpperCase() === 'GET'){
                res.json().then(data=>{
                    //console.log(data);
                    resMessage.innerHTML = JSON.stringify(data);
                });
            }
            else{
                resMessage.innerHTML = '';
            }
        });
    }
    addUser.onclick = () => {
        fetch('/addUser',{method: 'POST',body: `name=${name.value}&age=${age.value}`}).then(res=>{
            resCode.innerHTML = res.statusText;
            resMessage.innerHTML = '';
            res.json().then(data=>{
                resMessage.innerHTML = JSON.stringify(data);
            });
        });
    }

})();