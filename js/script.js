
const wrapper = document.getElementsByClassName('wrapper')[0];

for (let i = 0; i < 100; i++) {
    let myDiv = document.createElement('div');
    myDiv.className = 'square';
    
    // console.log(myDiv);
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('è divisibile per 3 e 5 ' + i + 'FizzBuzz');
        myDiv.append('BuzzFizz');
    }
    else if (i % 3 == 0) {  
        console.log('divisibile per 3 ' + i + 'buzz');
        myDiv.append('Buzz');

    }
    else if (i % 5 == 0) {
        console.log('divisibile per 5 ' + i + 'fizz');
        myDiv.append('Fizz');

    }else {
        myDiv.append(`&{i}`);
    }
    wrapper.append(myDiv);
}


