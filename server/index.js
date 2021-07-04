// server/index.js
var express = require("express");
var axios =  require("axios");
var cors = require("cors");
var stringify = require('json-stringify-safe');
var app = express();
var  data = require('./reels.json'); 

var allowedOrigins = ['http://localhost:3000',
                      'https://kanon-gaming.herokuapp.com/'];
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());;

const PORT = process.env.PORT || 3001;

const baseUrl = "https://restcountries.eu/rest/v2/";
const countryUrl = `${baseUrl}name/`;
const countriesUrl = `${baseUrl}all`;

app.get("/getCountries", (_req, res) => {
  axios.get(countriesUrl).then( response => {
    res.send({results: JSON.parse(stringify(response.data, null, 2))});
  }).catch(e=> {
    throw e;
  })
});

app.post("/searchCountries", (req, res) => {
    var obj = JSON.parse(req.body.data)
    axios.get(`${countryUrl}${obj.name}`).then( response => {
      res.send({results: JSON.parse(stringify(response.data, null, 2))});
    }).catch(e=> {
      throw e;
    })
});

app.get("/play", (req, res) => {
    try {
      var response = play();
      res.send({results: response});
    } catch (e) {
      throw e;
    }
});

function play() {
  var reel1Results, reel2Results, reel3Results, coinsWon;
  var results = [];
  var wins= {
    
  };

    reel1Results = randomInteger(0,7)
    reel2Results = randomInteger(0,7)
    reel3Results = randomInteger(0,7)

    if(reel1Results!=null && reel2Results!=null && reel3Results!=null){
      results.push(data.Reel1[reel1Results]);
      results.push(data.Reel2[reel2Results]);
      results.push(data.Reel3[reel3Results]);

      if(results){
        coinsWon = checkWinCombo(results);
      }
    }


  wins = {
    SpinResult: results,
    CoinsWon: coinsWon
  }
  return wins;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWinCombo(results) {      
  var index = 0;
  var winValue =0;
  if(results!=null){
      data.winningCombos.forEach(element => {
          index ++;
          if(element.toString() === results.toString()){
              winValue = parseInt(data.winAmount[index-1].toString());
          } 
      });
  }

  return winValue;
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});