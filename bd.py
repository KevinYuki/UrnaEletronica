import sqlite3 as sqlite

conn = sqlite.connect("urna.db")
cursor = conn.cursor()

cursor.execute("""
	CREATE TABLE IF NOT EXISTS candidato (
		num_candidato integer not null primary key,
		nome varchar(50) not null,
		nome_sup varchar(50) not null,
		cargo varchar(30) not null,
		partido varchar(10) not null
		
	);
""")

cursor.execute ("""
	CREATE TABLE IF NOT EXISTS eleitor (
		cpf varchar(11) not null primary key,
		nome varchar(50) not null,
		cidade varchar(40) not null,
		estado varchar(2) not null,
		votou integer not null default 0,
	);
);
""")

cursor.execute("""
	CREATE TABLE IF NOT EXISTS voto (
		num_candidato not null,
		hash varchar(255) not null,
		rehash varchar(255) not null,
		constraint pk_voto primary key(num_candidato, hash),
		constraint fk_voto foreign key num_candidato references candidato(num_candidato)
	);
""");

conn.close()
