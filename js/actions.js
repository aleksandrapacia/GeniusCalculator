const calculator = document.querySelector('.calculatormain');
const keys = calculator.querySelector(
    '.calculator-grid-row1'
);

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        console.log('it is a number!');
    };

});



