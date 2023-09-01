const cel_input = document.querySelector('#celsius');
const fah_input = document.querySelector('#fahrenheit');
const kel_input = document.querySelector('#kelvin');



cel_input.addEventListener('input', function(){
     let cel = this.value;
     let fah = Math.ceil((cel * 9/5) + 32);
     let kel = Math.round(((fah - 32) * 5 / 9) + 273);
     fah_input.value = fah;
     kel_input.value = kel;
});


fah_input.addEventListener('input', function(){
    let fah = this.value;
    let cel = Math.ceil((fah - 32)* 5/9);
    let kel = Math.round(cel + 273);
    cel_input.value = cel;
    kel_input.value = kel;
});

kel_input.addEventListener('input', function() {
    let kel = this.value;
    let cel = Math.round(kel - 273);
    let fah = Math.round((cel * 9/5) + 32)
    cel_input.value = cel;
    fah_input.value = fah;
});