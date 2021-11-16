import {User} from "../../types/User";

export default abstract class AuthenticationApiBase {
  abstract signIn(login: string, password: string): Promise<User>;

  abstract signOut(): boolean;

  abstract isAuthenticated(): boolean;
}