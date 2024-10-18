"use client";

document.getElementById('fetchDataBtn').addEventListener('click',()=>{
  const apiUrl =  'https://jsonplaceholder.typicode.com/todos/1'; 
  
  fetch(apiUrl)
  .then(response => {
    if(!response.ok){
        throw new Error('error está mal: ', + response.status);
    }
    return response.json();
  })
  .then(data => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<pre>&{JSON.stringify(data, null, 2)}</pre>';
  })
  .catch(error => {
    console.error('Sigue estando mal', error);
  });
  return (
    <div>
            <button id="fetchDataBtn">Fetch Data</button>
        </div>
   )
  }); 
    