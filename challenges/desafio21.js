// 21 - Remova o último ingrediente do sanduíche Cheddar McMelt.
db.produtos
.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } }, // 1 remove o último item
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, ingredientes: 1 },
);