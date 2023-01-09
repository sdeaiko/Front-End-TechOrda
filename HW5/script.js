const result = document.getElementById('result')
const nums = document.querySelectorAll('.btn')

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let output = ''

function checkLength(len) {
    if (len > 15) {
        result.classList.add('small-text')
    } else {
        result.classList.remove('small-text')
    }
}

nums.forEach(e => {
    e.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        a = parseInt(e.target.innerHTML)
        if (numbers.includes(a)) {
            output += e.target.innerHTML;
            result.innerHTML = output
                        
        } else if (e.target.innerHTML == 'CE') {
            output = String(output).slice(0, -1);
            result.innerHTML = output
            console.log(result.innerHTML)
        } else if (e.target.innerHTML == '=') {
            output = eval(output)
            result.innerHTML = output
            
        } else if (e.target.innerHTML == '×') {
            output += '*'
            result.innerHTML += e.target.innerHTML
        } else if (e.target.innerHTML == '÷') {
            output += '/'
            result.innerHTML += e.target.innerHTML
        } else {
            output += e.target.innerHTML
            result.innerHTML = output  
        }
        checkLength(output.length)
    });
    
});