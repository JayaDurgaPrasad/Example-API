

window.addEventListener('load', () => {
    const heading = document.createElement('h1');
    heading.innerHTML = "I'm not listening yet !"

    const root = document.querySelector('#root');

    root.appendChild(heading);


    
    heading.addEventListener('click', () =>{
    
        fetch('https://example-api-xvc9.onrender.com/getNewName')
        .then(response => response.text())
        .then(data => {
            console.log('Text from API:', typeof data);
            heading.innerHTML = `I'm ${data}`
        })
        .catch(error => {
            console.error('Error fetching text:', error);
        });

    })

})