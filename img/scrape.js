//Taken from https://www.npmjs.com/package/image-scraper

var Scraper = require('image-scraper');
var scraper = new Scraper('http://museemecaniquesf.com/contact.php');

scraper.scrape(function(image){
	image.save();
});