# databases
Databases stores your data. Different solutions are available. Mostly we can here about **noSQL** and **SQL** (Structured Query Language) solutions. **RDBMS** (RDBMS stands for Relational Database Management System) is the basis for all modern database systems based on SQL. The data in RDBMS is stored in database objects called tables. This objects can be accessed with querys.

MongoDB is a document database. It stores data in a type of JSON format called BSON (no tables). It is more flexible, scalable and faster then the RDBMS approach. 

The website (datanyze))[https://www.datanyze.com/market-share/databases--272] showed, that mainly SQL databases has a big market share. The biggest market share with 24.78% has MySQL. MongoDB is on place 6 with 6.19%. [March 2024]


## mongodb
MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. The initial release was in February 2009. [Source Wikipedia](https://en.wikipedia.org/wiki/MongoDB)

Instead of using querys (like in SQL), they are using CRUD operations.

This database is used by the [minesdatabase](https://github.com/tyo-nu/MINE-Database).


### Intallation (with Ubuntu)
[Installation of mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#std-label-install-mdb-community-ubuntu)

After the installation, the service has to be started.

```bash
# start service
sudo systemctl start mongod

# check status
sudo systemctl status mongod

# if problems accurese, try this
sudo systemctl daemon-reload

# stop service
sudo systemctl stop mongod
```

### mongo shell (CLI)
To have a look at the databases use the mongo shell `mongosh`. To use it, the mongod service needs to be running.
The MongoDB Shell uses a Node REPL environment. This means that we are able to use JavaScript variable declaration, function declaration, and loops.

```sh
# start CLI
mongosh

# show all databases
show dbs

# change to database
use <db_name>

# show the headers of the database
show collections
show tables

# find specific coloumns (like Json search)
db.<collection_name>.find()

# look at help page
db.help

# change store location (default /var/lib/mongodb)
# it can be changed also in the config file (/etc/mongod.conf)
mongod --dbpath </path/to/store>

```

### mongo compass (GUI)
If the shell is to complicated, it is recommended to use the GUI **mongo compass**. 
It has the usefull function to show all the entries in one table.

Installation: <https://www.mongodb.com/docs/compass/master/install/>

### mongo university (learning area)
More informations about mongo db can be found here: [Mongo University](https://learn.mongodb.com/learning-paths/introduction-to-mongodb)


#### mongodb commands
search: 
`db.sales.find({ <field>: { <operator> : <value> } })`
example: `db.sales.find({ "items.price": { $gt: 50}})`

field:  
$elemMatch - find this element in value


operator:  
$eq - equal  
$gt - greater than
$gte - greater than or equal to
$lt - less than
$lte - less than or equal to
$ne - not equal


db.sales.find({
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
})

