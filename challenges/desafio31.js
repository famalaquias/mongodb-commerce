// 31 - Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos.
db.produtos.find(
  { $expr: 
    { $gt: [ "$curtidas", "$vendidos" ] } 
  },
  { _id: 0, nome: 1 },
);

// $expr: É usado para criar expressões de agregação. 
// Por exemplo, produtos que em que o valor de entrada seja maior que o valor de saída.