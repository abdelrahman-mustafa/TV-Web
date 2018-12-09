module.exports =  async (req, res, next) => {
    if (req.session.user) next();
    console.log("401");
    res.status(401).send('Authrization failed! Please login');
}
