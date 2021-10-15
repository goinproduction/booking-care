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

let displayGetCRUD = async (req, res) => {
    let response = await CRUDService.getAllUser();
    res.render('displayCRUD.ejs', { response });
};

module.exports = {
    getHomepage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
};
