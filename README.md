# Purpose of the App

This project is intended for school related activities and is also used to train us how to use React and possibly proceed to MERN Stack in the future. 

# About the app

For the mean time, we are using a local json-server that you need to run to load the data, if you want to test this out.

You need to install json server in your computer and run it in your terminal.\
See [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server) for the instructions on how to get started.

## `npx json-server --watch ./data/dbProducts.json --port 8000`
## `npx json-server --watch ./data/dbUsers.json --port 9000`

Type each commands in a separate terminal (1 command per terminal) and it will create the exact port used to fetch data.
Setting the specific port prevents conflict with 'npm start'.
Make sure that your current working directory is in /c-commerce/src before executing the said commands.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


