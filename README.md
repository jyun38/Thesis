# Thesis

Once you have set up a local MySQL server:

* Import all of the files in the **databaseFiles** folder except the png file showing the relationships. The png file only reflects the five main data files that were used for the interface but other additional data files are also included in the folder. `information.csv` and `relationship.csv` were original files that extracted all of the other files. `information.csv` contains a unique index for each of the distinct pieces of all kinds of information and that index is used to set up a relationship, such as *code, symptom, evidence, chapter, etc.* with another index.  

* You can import datafiles by right-clicking the schema listed on the bottom left and clicking on **Table Data Import Wizard**.  

* In order to ensure connection between the interface and the database, you will need to change the *hostname, username, password, and database name* that is listed under `server.js` in **server** folder.

How to run the interface (on Terminal): 

1. `pip install npm`

2. `webpack --watch`

3. `npm run serve`

4. Go to a browser and run `http://localhost:4000/` (you may change the port number by changing the port variable in `server.js`)