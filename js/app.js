// console.log('holi')

let ul = document.getElementById('lista-spesa-box')


let listaSpesa = [
'pane',
'latte',
'miele',
'pasta',
'acqua X6',
'biscotti X2',
'detersivo'
];

// console.log(listaSpesa)

for (i = 0; i < listaSpesa.length; i++){
let lista = listaSpesa[i]
console.log(lista)

let li = `
<li>
${lista}
</li>
`

ul.innerHTML += li
}

