var fs = require('fs');
var path = require('path');

var aboutData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../data/about.json'),
    'utf8'
  )
);

const about = (req, res) => {
  res.render('about', {
    title: 'Travlr Getaways',
    about: aboutData
  });
};

module.exports = {
  about
};