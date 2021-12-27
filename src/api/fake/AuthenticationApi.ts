import AuthenticationApiBase from "../abstract/AuthenticationApiBase";
import {fuzzSleep} from "../../utils/time";
import {action, flow, makeObservable, observable} from "mobx";
import {User} from "../../types/User";
import Cookies from "js-cookie";


export default class AuthenticationApi extends AuthenticationApiBase {
  session: boolean;
  user: User | null;

  constructor() {
    super();
    makeObservable(this, {
      session: observable,
      user: observable,
      signOut: action,
      signInFromCache: action,
    });
    this.session = false;
    this.user = null;
  }

  signInFromCache(): void {
    const userId = Number(Cookies.get("userId"));
    const userNickname = Cookies.get("userNickname");
    const userPhotoPath = Cookies.get("userPhotoPath");
    const userRating = Number(Cookies.get("userRating"));

    const minNicknameLength = 5;
    if (userId === undefined || isNaN(userId) || userId < 0 ||
      userNickname === undefined || userNickname.length < minNicknameLength) {
      console.error("Cookies validation error.");
      this.session = false;
      this.user = null;
    }

    const user = {
      id: userId,
      nickname: userNickname ? userNickname : "",
      photoPath: userPhotoPath ? userPhotoPath : "",
      rating: userRating ? userRating : 0
    }
    this.session = true;
    this.user = user;
  }

  signIn = flow(function* (this: AuthenticationApi, email: string, password: string) {
    yield fuzzSleep(2000);
    const user = {
      id: 1,
      nickname: "Johny",
      photoPath: "",
      rating: 12142,
    }

    Cookies.set("userId", String(user.id));
    Cookies.set("userNickname", user.nickname);
    Cookies.set("userPhotoPath", user.photoPath);
    Cookies.set("userRating", String(user.rating));

    this.session = true;
    this.user = user;
  });

  signOut(): boolean {
    Cookies.remove("userId");
    Cookies.remove("userNickname");
    Cookies.remove("userPhotoPath");
    Cookies.remove("userRating");
    this.session = false;
    this.user = null;
    return true;
  }

  isAuthenticated(): boolean {
    return this.session;
  }
}
