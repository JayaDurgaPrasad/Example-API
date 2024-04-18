

 window.addEventListener('load', () => {
    

    const root = document.querySelector('div');

    
        const heading = document.createElement('h1');
        heading.innerHTML = "I'm not listening yet !";

        root.appendChild(heading); 
    

    console.log(root);
   

    // root.appendChild(heading);


    heading.addEventListener('click', () =>{
    
       // fetch('https://example-api-xvc9.onrender.com/getNewName')
        fetch('http://localhost:3000/getNewName')
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