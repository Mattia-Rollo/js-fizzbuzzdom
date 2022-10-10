
const wrapper = document.getElementsByClassName('wrapper')[0];

for (let i = 1; i <= 100; i++) {
    let myDiv = document.createElement('div');
    myDiv.className = 'square';
    
    // console.log(myDiv);
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('è divisibile per 3 e 5 ' + i + 'FizzBuzz');
        myDiv.append('BuzzFizz');
        myDiv.classList.add('bg-danger');
    }
    else if (i % 3 == 0) {  
        console.log('divisibile per 3 ' + i + 'buzz');
        myDiv.append('Buzz');
        myDiv.classList.add('bg-warning');

    }
    else if (i % 5 == 0) {
        console.log('divisibile per 5 ' + i + 'fizz');
        myDiv.append('Fizz');
        myDiv.classList.add('bg-info');

    }else {
        myDiv.append(i);
        myDiv.classList.add('bg-primary');
    }
    wrapper.append(myDiv);
}


