import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv';

dotenv.config()
const SECRET = process.env.SECRET;

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const isCustomAuth = token.length < 500   //checks whether token is custom token r google auth token

        let decodeData;

       
       


         //If token is custom token do this
        if(token && isCustomAuth) {
            decodeData = jwt.verify(token, SECRET)

            req.userId = decodeData?.id

        } else {


            //Else of token is google token then do this
            decodeData = jwt.decode(token)

            req.userId = decodeData?.sub
        }

        next()

    } catch (error) {
        console.log(error)
    }
}

export default auth