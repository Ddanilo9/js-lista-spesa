console.log('hola')

let ul = document.querySelector('.lista-spesa-box');
let i = 0

let listaSpesa = [
'pane',
'latte',
'miele',
'pasta',
'acqua X6',
'biscotti X2',
'detersivo'
];

while (i < listaSpesa.length - 1) {

i++
let lista = listaSpesa[i];

let li = `
<li>
${lista}
</li>
`
// console.log(li)

ul.innerHTML += li;

}