import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../types";
import dotenv from "dotenv"

dotenv.config()

export class Authenticator {
    private static EXPIRES_IN = "10min"
    public generateToken = (payload: AuthenticatorData): string => {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        )
        return token
    }

    public getData = (token: string): AuthenticatorData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData;
        const result = {
            id: data.id,
        };
        return result;
    };

}