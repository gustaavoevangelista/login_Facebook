/*let users = [
    { 
        id: 1, 
        name: "Gustavo Evangelista", 
        mobile_no: 111222333,
        email: 'gustavo@mail.com',
        password: 1234
    }
]
module.exports = users*/


const login_user = async (req, res) =>{
    const {id} = req.params;
    try {
        const user = await mysql('users').where({id}).first();
        
        if(!user){
            return res.status(404).json({message: 'User not found.'});
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: `Internal error: ${error.message}`});
    }
};


const register_new_user = async (req, res) =>{
    const{name, mobile_no, email, password} = req.body;

    if (!name){
        return res.status(404).json({message: 'Name field mandatory.'});
    }

    if (!mobile_no){
        return res.status(404).json({message: 'Mobile number field mandatory.'});
    }
    if (!email){
        return res.status(404).json({message: 'Email field mandatory.'});
    }
    if (!password){
        return res.status(404).json({message: 'Password field mandatory.'});
    }

    try {
        const user = await mysql('users')
        .insert({id, name, mobile_no, email, password})
        .returning('*');

        if(user.lenght <= 0){
            return res.status(400).json({message: 'It was not possible to update the user.'});
        }

        return res.status(200).json(user[0]);

    } catch (error) {
        return res.status(500).json({message: `Internal error: ${error.message}`});
    }
};

const recover_pass = async (req, res) =>{
    const {email} = req.params;
    try {
        const user = await mysql('users').where({email}).first();
        
        if(!user){
            return res.status(404).json({message: 'Email not found.'});
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: `Internal error: ${error.message}`});
    }
};

module.exports = register_new_user
module.exports = login_user
module.exports = recover_pass