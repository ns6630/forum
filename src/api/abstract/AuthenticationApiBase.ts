import {User} from "../../types/User";

export default abstract class AuthenticationApiBase {
  abstract signInFromCache(): void;

  abstract signIn(email: string, password: string): void;

  abstract signOut(): boolean;

  abstract isAuthenticated(): boolean;
}