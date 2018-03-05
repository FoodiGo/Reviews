# Reviews
Reviews Component Repo

************* DEPENDENCIES *************
This component requires NPM and Node.

To install other dependencies, run npm install.


************* DATABASE *************
This component uses MLABs to create a MONGO database (not local Mongo), so you will 
need to set up a .env file with your MLABs account in order to seed the database.

sample .env file: 
MONGO = mongodb://<userName>:<password>@ds249418.mlab.com:49418/foodi-go-reviews


************* NPM Scripts *************
test : Will run all Jest tests
babel : Will run --watch with babel compiler
start-server : Will start the server
seed-db : Will seed the MLAB database with mockdata (Between 300-400 reviews)
