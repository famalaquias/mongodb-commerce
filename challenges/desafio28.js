// 28 - Conte quantos produtos têm 4 ingredientes.
db.produtos.countDocuments(
  { ingredientes: { $size: 4 } } // size: filtrar documentos pelo tamanho de arrays. 
);