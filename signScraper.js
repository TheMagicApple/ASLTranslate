const rp = require('request-promise');
const cheerio = require('cheerio');
const searchTerm = "test";
const url = 'https://www.signasl.org/sign/' + searchTerm;


rp(url)
  .then(function(html){
    //success!
    let $ = cheerio.load(html);
    console.log($("iframe").attr('src'));
  })
  .catch(function(err){
    //handle error
  });