import userService from '../services/userServices';

let handleLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Missing email or password',
        });
    }

    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json({
        success: userData.success,
        message: userData.message,
        user: userData.user ? userData.user : {},
    });
};

let handleGetAllUsers = async (req, res) => {
    let { id } = req.body;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: 'User ID is required!',
            users: [],
        });
    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        success: true,
        message: '',
        users,
    });
};

module.exports = {
    handleLogin,
    handleGetAllUsers,
};
