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
    return res.json({
        success: true,
    });
};

let displayGetCRUD = async (req, res) => {
    let response = await CRUDService.getAllUser();
    res.render('displayCRUD.ejs', { response });
};

let editCRUD = async (req, res) => {
    let uid = req.query.id;
    if (uid) {
        let udata = CRUDService.getUserInfoById();
        console.log(udata);
    }
};

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
};

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    await CRUDService.deleteuserById(id);
};
module.exports = {
    getHomepage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    editCRUD,
};
