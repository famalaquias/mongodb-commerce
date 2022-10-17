// 16 - Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac.
db.produtos.updateOne(
  {}, 
  { $set: { ultimaModificacao: NumberInt(0) } },
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: true } },
);

db.produtos
  .find(
    { ultimaModificacao: { $exists: true } },
    { _id: 0, nome: 1 },
  );