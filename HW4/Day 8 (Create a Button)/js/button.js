document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn')
    
    button.addEventListener('click', () => {
          let count = Number(button.innerText) + 1;
        
          button.innerText = count
     });
})