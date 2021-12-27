import RightColumnButtonLink from "./RightColumnButtonLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {authenticationApi} from "../App";
import {observer} from "mobx-react-lite";

function RightColumnButtonBlock() {
  return <>
    {authenticationApi.isAuthenticated() ?
      <RightColumnButtonLink to={"/"}>
        <FontAwesomeIcon icon={faPlus}/>
        Start a New Topic
      </RightColumnButtonLink>
      :
      <RightColumnButtonLink to={"/sign-in"}>
        Sign in
      </RightColumnButtonLink>
    }
  </>;
}

export default observer(RightColumnButtonBlock);