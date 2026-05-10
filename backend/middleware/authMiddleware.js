const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            req.user = decoded;
            return next(); 
        }

        if (!token) {
            return res.status(401).json({ message:'no passport (token)' });
        }
        
    } catch (error) {
       
        return res.status(401).json({ message: 'invalid passport (token)' });
    }
};

module.exports = { protect };