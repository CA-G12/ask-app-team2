BEGIN;

INSERT INTO 
  users(username, password, email, token) 
VALUES
  ('mustafa', 'lsafhasjflsahfkalafslhfslaf', 'test@test.com', 'lfksafsagslaghslakhgls'),
  ('fadi', 'dslfhsdagasgjhdsafhlsafsafhs', 'test@test.pers', 'lksaflflahsfnsafaslhfahfsal'),
  ('nada', 'lsdaflasjflsafjsjfsadfiew', 'best@best.com', 'ljkfajsljalf:hafs;hafusda;sd');

INSERT INTO 
  questions(content, user_id)
VALUES
  ('Hello people, it me mustafa, and this is a fake data number one!!!', 1),
  ('Hello people, it me mustafa, and this is a fake data number two!!!', 2),
  ('Hello people, it me mustafa, and this is a fake data number three!!!', 3);

INSERT INTO
  replies(content, question_id)
VALUES 
  ('This is a reply for the first question!!!', 1),
  ('This is a reply for the second question!!!', 2),
  ('This is a reply for the third question!!!', 3);

COMMIT;