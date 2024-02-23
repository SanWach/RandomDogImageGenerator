document.getElementById('dogButton').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dogImageContainer');
            dogImageContainer.innerHTML = `<img src="${data.message}" alt="A random dog image">`;
            
           
            const downloadButton = document.getElementById('downloadButton');
            downloadButton.style.display = 'inline-block'; 
            downloadButton.innerText = "Download"; 
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const dogImage = document.querySelector('#dogImageContainer img');
    if (dogImage) {
        
        const imageSource = dogImage.src.replace(/^http:/, 'https:'); 
        fetch(imageSource, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'image/jpeg',
            },
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'dog-image.jpg'; 
            a.click();
            window.URL.revokeObjectURL(url); 
        });

        
        this.innerText = "Wooff!";
    }
});

//Sorry, i was too lazy for comments //