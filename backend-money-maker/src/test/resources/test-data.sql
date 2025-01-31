INSERT INTO account (name) VALUES ('__TEST ACCOUNT__');

INSERT INTO category (name, img_url) VALUES ('rent', 'https://img.icons8.com/?size=100&id=9aS0IadEbesZ&format=png&color=000000');
INSERT INTO category (name) VALUES ('salary');
INSERT INTO category (name) VALUES ('groceries');
INSERT INTO category (name) VALUES ('entertainment');
INSERT INTO category (name) VALUES ('clothing');
INSERT INTO category (name) VALUES ('transportation');

INSERT INTO fixed_cost (amount, description, start, account_id, category_id) VALUES
    (-450, 'monthly rent', '2024-09-01', 1, 1),
    (2240, 'salary web dev', '2024-10-03', 1, 2),
    (-9.99, 'netflix abo', '2024-10-14', 1,4),
    (10.25, 'amazon prime abo', '2024-11-28', 1, 4);

INSERT INTO transaction (amount, description, timestamp, account_id, category_id, is_fixed_cost) VALUES
    (-450, 'monthly rent', '2024-09-01', 1,1, true),
    (-450, 'monthly rent', '2024-10-01', 1, 1, true),
    (-450, 'monthly rent', '2024-11-01', 1, 1, true),
    (2240, 'salary web dev', '2024-10-03', 1, 2, true),
    (2240, 'salary web dev', '2024-11-03', 1, 2, true),
    (-9.99, 'netflix abo', '2024-10-14', 1, 4, true),
    (-9.99, 'netflix abo', '2024-11-14', 1, 4, true),
    (-50,'edeka', '2024-11-13', 1, 3, false),
    (-90, 'lidl lohnt sich', '2024-10-25', 1, 3, false);

INSERT INTO fixed_cost_transactions (fixed_cost_id, transaction_id) VALUES
    (1,1), (1,2), (1,3),
    (2,4), (2,5),
    (3,6), (3,7);