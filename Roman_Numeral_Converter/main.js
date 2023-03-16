let bttn = document.querySelector('.button')

bttn.addEventListener('click', convertToRoman)

let displayBox = document.querySelector('.display')
let para = document.createElement('p') 
displayBox.appendChild(para)


function convertToRoman(num){
   
    let input = document.querySelector('input')
    num = input.value



    let units = ['','i','ii','iii','iv','v','vi','vii', 'viii','ix']
    let tens = ['','x','xx','xxx','xl','l','lx','lxx', 'lxxx','xc']
    let hundreds = ['','c','cc','ccc','cd','d','dc','dcc', 'dccc','cm']
    let thousands = ['','m','mm','mmm']

    // convert inputed number to string to determine its lenght 
    // num = num.toString();

    num.length === 4 ? num = thousands[num[0]] + hundreds[num[1]] + tens[num[2]] + units[num[3]]:num.length === 3? num = hundreds[num[0]] + tens[num[1]] + units[num[2]] :num.length === 2?num = tens[num[0]] + units[num[1]]: num = units[num[0]]
    



   
  

    // styling para 
    para.textContent = num.toUpperCase()
    
    // return num.toUpperCase();

    
}

// console.log(convertToRoman(36))