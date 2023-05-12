/* https://www.youtube.com/watch?v=hOcbHz4T0Eg&list=PLhcs-OoRV25WGtgf7LYPJtfIK0fg6QX1D&index=9 */
const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const  client = new DynamoDBClient({});

module.exports =client;