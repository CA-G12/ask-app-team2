BEGIN;

INSERT INTO 
  users(username, fname, lname, password, email, token) 
VALUES
  ('mustafa100', 'mustafa', 'salem', 'lsafhasjflsahfkalafslhfslaf', 'test@test.com', 'lfksafsagslaghslakhgls'),
  ('fadezak100', 'fadi', 'zaqout', 'dslfhsdagasgjhdsafhlsafsafhs', 'test@test.pers', 'lksaflflahsfnsafaslhfahfsal'),
  ('nada100', 'nada','ayesh', 'lsdaflasjflsafjsjfsadfiew', 'best@best.com', 'ljkfajsljalf:hafs;hafusda;sd');

INSERT INTO 
  questions(content, reply, user_id)
VALUES
  ('Hello people, it me mustafa, and this is a fake data number one!!!', 'This is a reply for the first question!!!', 1),
  ('Hello people, it me mustafa, and this is a fake data number two!!!','This is a reply for the second question!!!', 2),
  ('Hello people, it me mustafa, and this is a fake data number three!!!','This is a reply for the third question!!!',3);


COMMIT;