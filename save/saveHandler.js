function saveHandler() {
    debugger;
    let userInput = document.getElementById('userInput').value;
    if (Number(userInput)) {
        let numUl = document.getElementById('numbers');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput));
        numUl.appendChild(li);
    } else {
        let nanUl = document.getElementById('nanys');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput));
        nanUl.appendChild(li);
    }
    document.getElementById('userInput').value = '';
}

