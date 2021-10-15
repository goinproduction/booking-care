let getHomepage = (req, res) => {
    return res.render('homepage.ejs');
};

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
};

module.exports = {
    getHomepage,
    getCRUD,
};
