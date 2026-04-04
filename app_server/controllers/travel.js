const travel = async (req, res) => {
  const tripsEndpoint = 'http://localhost:3000/api/trips';
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  try {
    const response = await fetch(tripsEndpoint, options);
    const json = await response.json();

    let message = null;

    if (!Array.isArray(json)) {
      message = 'API lookup error';
    } else if (json.length === 0) {
      message = 'No trips exist in our database!';
    }

    res.render('travel', {
      title: 'Travlr Getaways',
      trips: json,
      message
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  travel
};