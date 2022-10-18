# MongoDB Commerce :seedling:

![MONGODB](https://user-images.githubusercontent.com/98343640/196434474-ef7c8002-7018-4d03-93ff-2f971b331718.png)


## :page_with_curl: Sobre

O projeto Commerce tem como objetivo trabalhar com banco de dados, que contém dados do cardápio do McDonald's. A partir disso, foi desenvolvido vários desafios para manipular e acessar esses dados.
Foram feitos 32 desafios que se encontram na pasta `./challenges`.


## :man_technologist: Habilidades Desenvolvidas

* Uso do MySQL para criar um banco de dados no MongoDB
* Manipular e acessar os dados no banco de dados


## :hammer_and_wrench: Ferramentas Utilizadas

* MongoDB


## :female_detective: Instruções de Instalação e Execução
Para rodar a aplicação é necessário ter o Git e o MongoDb instalados na sua máquina. 

### 1 - Clone o repositório e entre na pasta do projeto:

```sh
git clone git@github.com:famalaquias/mongodb-commerce.git && cd mongodb-commerce
```

### 2 - Para executar o MongoDB localmente:

```sh
./database.mongodb
```

### 3 - Para executar o MongoDB via Docker:

1 - Acesse a pasta raiz do Projeto.

2 - Utilize o comando abaixo: 

```sh
docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0
```

3 - Acesse o terminal do container com o comando abaixo:

```sh
docker exec -it nomeDoContainer mongosh
```

4 - Copie o conteúdo do arquivo `./database.mongodb`, cole no terminal e aperte a tecla ENTER.





