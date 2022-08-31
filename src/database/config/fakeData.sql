BEGIN;

INSERT INTO 
  users(username, fname, lname, password, avatar, cover, email) 
VALUES
  ('mustafa100', 'mustafa', 'salem', 'lsafhasjflsahfkalafslhfslaf', 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHBF1S5y6ZJlJlq42dZLkpN2mNMoTzVVLMA&usqp=CAU', 'test@test.com'),
  ('fadezak100', 'fadi', 'zaqout', 'dslfhsdagasgjhdsafhlsafsafhs', 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHBF1S5y6ZJlJlq42dZLkpN2mNMoTzVVLMA&usqp=CAU', 'test@test.pers'),
  ('nada100', 'nada','ayesh', 'lsdaflasjflsafjsjfsadfiew', 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHBF1S5y6ZJlJlq42dZLkpN2mNMoTzVVLMA&usqp=CAU', 'best@best.com');

INSERT INTO 
  questions(content, reply, user_id)
VALUES
  ('Hello people, it me mustafa, and this is a fake data number one!!!', 'This is a reply for the first question!!!', 1),
  ('Hello people, it me mustafa, and this is a fake data number two!!!','This is a reply for the second question!!!', 2),
  ('Hello people, it me mustafa, and this is a fake data number three!!!','This is a reply for the third question!!!',3);


COMMIT;