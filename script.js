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

document.getElementById('dogButton').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dogImageContainer');
            const imageElement = document.createElement('img');
            imageElement.src = data.message;
            imageElement.alt = "A random dog image";
            
            
            dogImageContainer.innerHTML = '';
            dogImageContainer.appendChild(imageElement);

            
            const downloadButton = document.getElementById('downloadButton');
            downloadButton.style.display = 'inline-block'; // 
            downloadButton.innerText = "Download"; // 


            downloadButton.onclick = function() {
                const link = document.createElement('a');
                link.href = imageElement.src;
                link.download = 'dog-image.jpg'; // 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                downloadButton.innerText = "Wooff!";
            };
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            
        });
});


//Sorry, i was too lazy for comments //