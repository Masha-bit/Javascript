// calculating weight function 
let height = document.getElementById('userHeight');
let weight = document.getElementById('userWidth');
let btn = document.querySelector('button');
let para = document.querySelectorAll('p');

btn.addEventListener('click', () => {
    let h = height.value
    let w = weight.value
    let bmi = w/h**2

    // alert(bmi)
    para[1].textContent = ""
    para[1].style.color = 'black'
    para[1].textContent = `${bmi} kg/m2`
    
    // check level of fatness 
function rating(){
    para[2].style.color = 'black'
    


if(bmi >= 40.0){
    para[2].style.backgroundColor = 'red';
    para[2].textContent = 'Obese';
    // obese 
}else if(bmi >= 25){
    para[2].style.backgroundColor = '#ffcccb';
    para[2].textContent = 'Overweighted';
    
    // overweight
}else if(bmi >= 18.5){
    // normal 
    para[2].textContent = 'normal';
    para[2].style.backgroundColor = 'green';

}else if( bmi >= 0){
    // underweight 
    para[2].textContent = 'underweight';
    para[2].style.backgroundColor = '#0e7e89';
}
else{
    para[2].textContent = 'NaN'
    para[3].textContent = 'NaN'
}
    

};
rating();



// doctor's order 
let DC = para[3]
let doctorLines = ['Eat more and more frequently',
                'Top off your meals for more calories',
                'Avoid low high calory beverages',
            
                'Keep up the healthy diet',
            
                'Eat a balanced, calorie-controlled diet',
                'Watch your fat consumption',
                'Join a local weight loss group',
                'Hit the gym',
            
                'Your weight is on the high side',
                'Avoid intake of fat',
                'Forfeit processed and sugary food',
                'Take exercise serioously'] 
para[3].style.color = 'black';
para[3].style.textAlign = 'left'
para[3].style.paddingLeft = '1rem'
let form = document.querySelectorAll('div')
form[2].style.height = 'auto'
form[2].style.paddingBottom = '3rem'

        let help1 = document.createElement('li')
        let help2 = document.createElement('li')
        let help3 = document.createElement('li')
        let help4 = document.createElement('li')

     

function assignHelp(){
    

    if(bmi >= 40.0){
    // obese
    para[3].textContent=""
    para[3].appendChild(help1)
    para[3].appendChild(help2)
    para[3].appendChild(help3)
    para[3].appendChild(help4) 

    help1.textContent = doctorLines[8]
    help2.textContent = doctorLines[9]
    help3.textContent = doctorLines[10]
    help4.textContent = doctorLines[11]

}else if(bmi >= 25){
    // overweight
    para[3].textContent=""
    para[3].appendChild(help1)
    para[3].appendChild(help2)
    para[3].appendChild(help3)
    para[3].appendChild(help4) 

    help1.textContent = doctorLines[4]
    help2.textContent = doctorLines[5]
    help3.textContent = doctorLines[6]
    help4.textContent = doctorLines[7]
}else if(bmi >= 18.5){
    // normal 
    para[3].textContent=""
    para[3].appendChild(help1)

    help1.textContent = doctorLines[3]

}else if(bmi >= 0){
    // underweight 
    para[3].textContent=""
    para[3].appendChild(help1)
    para[3].appendChild(help2)
    para[3].appendChild(help3)

    help1.textContent = doctorLines[0]
    help2.textContent = doctorLines[1]
    help3.textContent = doctorLines[2]

}
};
assignHelp();


// gsap animation 
let tl = gsap.timeline()

const animation =
tl.from(help1, { 
    
});
})
 