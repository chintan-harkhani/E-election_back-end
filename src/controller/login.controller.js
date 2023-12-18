const { UserService } = require("../service");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

// const Login = async (req, res) => {
//     try {
//         // validation;
//         const { cardNo, password,  } = req.body;

//         const findUser = await UserService.Findnumber(cardNo);
//         if (!findUser) throw Error("User not found");
//         if (password != findUser.password) {
//             throw new Error("Incorrect Password");
//         }
//         let option = {
//             cardNo, 
//         };
//         let token = await jwt.sign(option, jwtSecrectKey);
//         let filter = {
//             cardNo,
//             password,
//             name,
//             token,
//         }

//         const logindata = await LoginService.Findname(cardNo)
//         if (logindata) {
//             throw new Error("User SuccessFully Login Created... ,Try Again Later.... ")
//         }
//         const data = await LoginService.CreateLogin(filter);
//         res.status(200).json({
//             success: true,
//             message: "User Login successfully!",
//             data: data
//         });
//     } catch (error) {
//         res.status(404).json({ error: error.message });
//     }
// };

const Login = async (req, res) => {
    try {
        // validation;
        const { cardNo, password } = req.body;

        const findUser = await UserService.Findnumber( cardNo );
         console.log(findUser);

        if (!findUser) throw Error("User not found");

        if (password != findUser.password) {
                        throw new Error("Incorrect Password");
                    }
        let option = {
            cardNo,
            password,
        };

    
       let  token = await jwt.sign(option, jwtSecrectKey);

        let data;
        if (token) {
            data = await UserService.UserUpdate(findUser._id, token);
        }

        res.status(200).json({
            success: true,
            message: "User Data Login successfully!",
            data: data
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


//login List
const LoginList = async (req, res) => {
    try {
        const List = await LoginService.loginList(req, res);
        res.status(200).json({
            success: true,
            message: " Login Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

const LoginId = async (req, res) => {
    try {
        const loginId = req.params.loginId;
        const ID = await LoginService.loginId(loginId);
        if (!ID) {
            throw new Error("Login User Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuucessfullyLogin User List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete login
const DeleteLogin = async (req, res) => {
    try {
        const loginId = req.params.loginId;
        const ID = await LoginService.loginId(loginId);
        if (!ID) {
            throw new Error("Login User Not Found !...");
        };
        await LoginService.Deletelogin(loginId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Login User Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    Login,
    LoginList,
    LoginId,
    DeleteLogin
}
