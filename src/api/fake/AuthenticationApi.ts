import AuthenticationApiBase from "../abstract/AuthenticationApiBase";
import {fuzzSleep} from "../../utils/time";
import {action, flow, makeObservable, observable} from "mobx";

export default class AuthenticationApi extends AuthenticationApiBase {
  session: boolean;

  constructor() {
    super();
    makeObservable(this, {
      session: observable,
      signOut: action,
    });
    this.session = false;
  }

  signIn = flow(function* (this: AuthenticationApi) {
    yield fuzzSleep(2000);
    this.session = true;
    return {
      id: 1,
      nickname: "Johny",
      photoPath: "",
      rating: 12142,
    }
  });

  signOut(): boolean {
    this.session = false;
    return true;
  }

  isAuthenticated(): boolean {
    return this.session;
  }
}
