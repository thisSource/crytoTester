const express = require("express");
const request = require("request");
require('dotenv').config()


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


const api_key_env = process.env.API_KEY
const defiURL = "https://cloud-sse.iexapis.com/stable/crypto/ethusd/quote?token="+api_key_env



app.get("/initial", (req, res) => {
    request(
      
      `${defiURL}`,
      (error, response, body) => {
        if (error) {
          console.log("Error");
        } else {
          let data = JSON.parse(body);
          res.send(data);
        }
      }
    );

  });


app.get("/current", (req, res) => {
    request(
      
      `${defiURL}`,
      (error, response, body) => {
        if (error) {
          console.log("Error");
        } else {
          let data = JSON.parse(body);
          res.send(data);
        }
      }
    );

  });

app.listen(process.env.PORT || 3000, ()=>{console.log('server is running on port 3000...')})