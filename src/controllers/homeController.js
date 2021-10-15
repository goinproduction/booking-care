import db from '../models/index';
import CRUDService from '../services/CRUDServices';

let getHomepage = (req, res) => {
    return res.render('homepage.ejs');
};

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
    let msg = await CRUDService.createNewUser(req.body);
    console.log(msg);
    return res.send('POST CRUD');
};

module.exports = {
    getHomepage,
    getCRUD,
    postCRUD,
};