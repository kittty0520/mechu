const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const router = require('express').Router;
app.use(express.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

var db;
let foodData;


    MongoClient.connect('DB_URL',function(에러, client){

        if(에러) {return console.log(에러)}

        db = client.db('test');

        db.collection('FoodDate').find({}).toArray(function(req, res){
            
            console.log(res)
            foodData = res;
        });
        
        
    })








