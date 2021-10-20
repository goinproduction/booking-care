import db from '../models/index';
import bcrypt from 'bcrypt';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isExist = await checkUserEmail(email);
            let userData = {};

            if (isExist) {
                let user = await db.User.findOne({
                    where: {
                        email,
                    },
                    attributes: ['email', 'roleId', 'password'],
                    raw: true,
                });

                if (user) {
                    // compare password
                    let isCorrect = await bcrypt.compareSync(
                        password,
                        user.password
                    );
                    if (isCorrect) {
                        userData.success = true;
                        userData.message = '';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.success = false;
                        userData.message = 'Incorrect email or password';
                    }
                } else {
                    userData.success = false;
                    userData.message = `Incorrect email or password`;
                }
            } else {
                userData.success = false;
                userData.message = `Incorrect email or password`;
            }

            resolve(userData);
        } catch (error) {
            reject(error);
        }
    });
};

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { email } });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    handleUserLogin,
};
