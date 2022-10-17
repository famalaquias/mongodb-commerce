// 32 - Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5.
db.produtos.find(
  { vendidos: 
    { $mod: [5, 0] },
  },
  { _id: 0, nome: 1, vendidos: 1 },
);

// $mod: é usado para encontrar o resto da divisão de um número por outro. 