// »»»»»»»»»»»»»»»»»»»║  DATABASE REQUESTS
// ....................  get a test
exports.testEndpoint = (req, res) => res.status(200).send(`this is the thing you are looking for`)

// ....................  post a test
exports.testPost = (req, res) => res.status(200).send(`got to the post request ${JSON.stringify(req.body)}`)