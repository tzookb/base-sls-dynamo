// https://www.serverless.com/blog/serverless-express-rest-api

const serverless = require('serverless-http')
const app = require('./app');
const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

console.log(app);

module.exports.handler = serverless(app);