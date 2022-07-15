import { userData } from "../../src/data/userData";
import { CustomError } from "../../src/errors/CustomError";
import { stringToUserRole, User, USER_ROLES } from "../../src/model/User";

export class userDataMocks {

    constructor(
        private Userdata: userData
    ) { }

    public async getUserById(id: string) {
        const user = await this.Userdata.getUserById(id);

        if (!user) {
            throw new CustomError(404, "User not found");
        }

        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole(),
        };
    }

    public async getAllUsers(role: USER_ROLES) {
        if (stringToUserRole(role) !== USER_ROLES.ADMIN) {
           throw new CustomError(401, "You must be an admin to access this endpoint"
          );
        }
        const users = await this.Userdata.getAllUsers();
    
        return users.map((user:User) => ({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          role: user.getRole(),
        }));
     }
}