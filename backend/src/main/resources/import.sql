INSERT INTO about_us (description, img_url) VALUES ('Lorem ipsum dolor sit amet...', 'https://www.petz.com.br/blog/wp-content/uploads/2020/07/tipos-de-lirios.jpg');

INSERT INTO Category (name) VALUES ('Bíblias');
INSERT INTO Category (name) VALUES ('Feminino');
INSERT INTO Category (name) VALUES ('Masculino');
INSERT INTO Category (name) VALUES ('Livros');
INSERT INTO Category (name) VALUES ('Presentes');
INSERT INTO Category (name) VALUES ('Produtos em destaque');
INSERT INTO Category (name) VALUES ('Promoções');

INSERT INTO Product (name, price, is_promotion, promotional_price, payment_terms, sizes, description) VALUES ('Bíblia de Estudo da Mulher Sábia (Rosa)', 85.0, true, 75.0, 'em 2x R$ 37,50 sem juros no cartão', null, 'Biblia de Estudo da Mulher Sabia Com Harpa Avivada e Corinhos foi feita especialmente para o público feminino,contém aplicações e estudos de acordo com cada versículo ou livro da Bíblia,tornando uma leitura mais fácil.Contém textos para você meditar com várias palavras edificantes e aborda questões interessantes de acordo com cada mulher,um exemplo:a mulher como mãe,a mulher como sogra,a mulher como nora,a mulher como amiga e entre outros.Uma bíblia completa,contendo o antigo e novo testamento sendo a tradução Almeida Revista e Corrigida.<br />Editora: Casa Publicadora Paulista - CPP<br />Versão: Almeida Revista e Corrigida (ARC)<br />Tamanho da Letra: Grande<br />Número de Páginas: 1920<br />Data de Lançamento: 2019');
INSERT INTO Product (name, price, is_promotion, promotional_price, payment_terms, sizes, description) VALUES ('Bíblia de Estudo da Mulher Sábia (Rosa Escuro)', 85.0, false, null, 'em 2x R$ 42,50 sem juros no cartão', null, 'A Bíblia de estudo da Mulher Sábia foi feita especialmente para o público feminino, contém aplicações e estudos de acordo com cada versículo ou livro da Bíblia, tornando uma leitura mais fácil.<br />Contém textos para você meditar com várias palavras edificantes e aborda questões interessantes de acordo com cada mulher, um exemplo: a mulher como mãe, a mulher como sogra, a mulher como nora, a mulher como amiga e entre outros... Uma bíblia completa, contendo o antigo e novo testamento sendo a tradução João Ferreira de Almeida Revista e Corrigida.<br />Editora CPP<br />Ilustrativa<br />Concordância<br />Referências<br />Letras grandes' );
INSERT INTO Product (name, price, is_promotion, promotional_price, payment_terms, sizes, description) VALUES ('Bíblia de Estudo da Mulher Sábia (Preta)', 85.0, false, null, 'em 2x R$ 42,50 sem juros no cartão', null, 'A Bíblia de estudo da Mulher Sábia foi feita especialmente para o público feminino, contém aplicações e estudos de acordo com cada versículo ou livro da Bíblia, tornando uma leitura mais fácil. Contém textos para você meditar com várias palavras edificantes e aborda questões interessantes de acordo com cada mulher, um exemplo: a mulher como mãe, a mulher como sogra, a mulher como nora, a mulher como amiga e entre outros.<br />Tradução: João de Almeida Revista e Corrigida<br />Letras grandes' );

INSERT INTO product_image (url, is_main_image, product_id) VALUES ('https://i.imgur.com/9p93rOH.png', true, 1);
INSERT INTO product_image (url, is_main_image, product_id) VALUES ('https://i.imgur.com/YAXr4Xx.png', true, 2);
INSERT INTO product_image (url, is_main_image, product_id) VALUES ('https://i.imgur.com/rfv539N.png', true, 3);

INSERT INTO product_category (product_id, category_id) VALUES (1, 1);
INSERT INTO product_category (product_id, category_id) VALUES (2, 1);
INSERT INTO product_category (product_id, category_id) VALUES (3, 1);