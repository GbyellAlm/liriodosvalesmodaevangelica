INSERT INTO about_us (description, img_url) VALUES ('Lorem ipsum dolor sit amet...', 'https://www.petz.com.br/blog/wp-content/uploads/2020/07/tipos-de-lirios.jpg');

INSERT INTO Category (name) VALUES ('Bíblias');
INSERT INTO Category (name) VALUES ('Feminino');
INSERT INTO Category (name) VALUES ('Masculino');
INSERT INTO Category (name) VALUES ('Livros');
INSERT INTO Category (name) VALUES ('Presentes');
INSERT INTO Category (name) VALUES ('Produtos em destaque');
INSERT INTO Category (name) VALUES ('Promoções');

INSERT INTO Product (name, price, is_promotion, promotional_price, payment_terms, sizes, description) VALUES ('Bíblia de Estudo da Mulher Sábia', 95.0, true, 85.0, '4x de R$ 21,25 sem juros no cartão', null, 'A Bíblia de estudo da Mulher Sábia foi feita especialmente para o público feminino, contém aplicações e estudos de acordo com cada versículo ou livro da Bíblia, tornando uma leitura mais fácil. Contém textos para você meditar com várias palavras edificantes e aborda questões interessantes de acordo com cada mulher, um exemplo: a mulher como mãe, a mulher como sogra, a mulher como nora, a mulher como amiga e entre outros... Uma bíblia completa, contendo o antigo e novo testamento sendo a tradução João Ferreira de Almeida Revista e Corrigida.');
INSERT INTO Product (name, price, is_promotion, promotional_price, payment_terms, sizes, description) VALUES ('Rosalie - Vestido Penas Moda Evangélica com Botões', 100.2, false, null, '4x de R$ 25,05 sem juros no cartão', 'P, M e G.', 'Moda Evangélica. Vestido em malha de algodão. Possui botões decorativos no decote frente, mangas 3/4 bufantes, recorte costas.');
INSERT INTO Product (name, price, is_promotion, promotional_price, payment_terms, sizes, description) VALUES ('Actual - Camiseta Cinza com Detalhe nas Mangas', 49.9, false, null, '2x de R$ 24,99 sem juros no cartão', 'P, M e G.', 'Camiseta Actual confeccionada em malha de algodão com poliéster. Possui detalhe de retilínea na manga e bolso.');

INSERT INTO product_category (product_id, category_id) VALUES (1, 1);
INSERT INTO product_category (product_id, category_id) VALUES (2, 2);
INSERT INTO product_category (product_id, category_id) VALUES (3, 3);