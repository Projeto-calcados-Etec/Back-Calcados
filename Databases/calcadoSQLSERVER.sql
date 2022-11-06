create database calcados;

use calcados;

CREATE TABLE estoque (
    idEst int identity (1,1) PRIMARY KEY NOT NULL,
    codProd int unique NOT NULL,
	quantidade int,
	preco decimal,
	statusEst int
);


CREATE TABLE usuario(	
	idUser int identity (1,1) PRIMARY KEY NOT NULL,
	email varchar(40) NOT NULL,
	senha varchar(20) NOT NULL,
	cel varchar(13),
	statusUser int,
);

CREATE TABLE venda (
    idVen int identity (1,1) primary key NOT NULL,
    numPedido varchar(20) NOT NULL,
    dataVen varchar (10),
    precoVen varchar (10),
    statusVen int,
    FK_idEstVen int,
    FK_idUserVen int,
    Foreign key (FK_idEstVen) references estoque (idEst),
    Foreign key (FK_idUserVen) references usuario (idUser)
);

CREATE TABLE endereco (
    idEnd int identity (1,1) primary key NOT NULL,
    cep varchar(15) NOT NULL,
    rua varchar (30),
    bairro varchar (10),
    numCasa int,
	numApart int,
	statusEnd int,
    FK_idUserVen int,
    Foreign key (FK_idUserVen) references usuario (idUser)
);

CREATE TABLE cartao (
    idCartao int identity (1,1) primary key NOT NULL,
    nomeCar varchar(30) NOT NULL,
    numCar int,
    validade varchar (10),
    codigo int,
	statusCar int,
    FK_idUserCar int,
    Foreign key (FK_idUserCar) references usuario (idUser)
);
