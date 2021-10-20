import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

const router = express.Router();
router.get('/', homeController.getHomepage);
router.get('/crud', homeController.getCRUD);

router.post('/post-crud', homeController.postCRUD);
router.get('/get-crud', homeController.displayGetCRUD);
router.get('/edit-crud', homeController.editCRUD);

router.post('/login', userController.handleLogin);

module.exports = router;
