import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleQuestion, faComment, faCompass, faHouseChimney,} from "@fortawesome/free-solid-svg-icons";
import Container from "./components/Container";
import Header from "./components/Header";
import Body from "./components/Body";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import RightColumn from "./components/RightColumn";
import Content from "./components/Content";
import MenuLink from "./components/MenuLink";
import Topics from "./pages/Topics";
import MyTopics from "./pages/MyTopics";
import MyAnswers from "./pages/MyAnswers";
import TopUsers from "./components/TopUsers";
import Footer from "./components/Footer";
import FooterLink from "./components/FooterLink";
import StickyRightColumn from "./components/StickyRightColumn";
import TopicApi from "./api/fake/TopicApi";
import Page from "./components/Page";
import AuthenticationApi from "./api/fake/AuthenticationApi";
import Login from "./pages/Login";
import RightColumnButtonBlock from "./components/RightColumnButtonBlock";
import {observer} from "mobx-react-lite";

export const topicApi = new TopicApi();
export const authenticationApi = new AuthenticationApi();

function App() {
  useEffect(() => {
    if (!authenticationApi.isAuthenticated()) {
      authenticationApi.signInFromCache();
    }
  }, []);

  return (
    <BrowserRouter>
      <Page>
        <Header/>
        <Container>
          <Body>
            <Menu>
              <MenuLink to={"/"} exact>
                <FontAwesomeIcon icon={faHouseChimney} fixedWidth/>
                Home
              </MenuLink>
              <MenuLink to={"/topics"}>
                <FontAwesomeIcon icon={faCompass} fixedWidth/>
                Explore topics
              </MenuLink>
              <MenuLink to={"/my-topics"}>
                <FontAwesomeIcon icon={faCircleQuestion} fixedWidth/>
                My topics
              </MenuLink>
              <MenuLink to={"/my-answers"}>
                <FontAwesomeIcon icon={faComment} fixedWidth/>
                My answers
              </MenuLink>
            </Menu>
            <Content>
              <Switch>
                <Route path={"/topics"}>
                  <Topics/>
                </Route>
                <Route path={"/my-topics"}>
                  <MyTopics/>
                </Route>
                <Route path={"/my-answers"}>
                  <MyAnswers/>
                </Route>
                <Route path={"/sign-in"}>
                  <Login/>
                </Route>
                <Route path={"/"}>
                  <Home/>
                </Route>
              </Switch>
            </Content>
            <RightColumn>
              <StickyRightColumn>
                <RightColumnButtonBlock/>
                <TopUsers users={topUsers} you={authenticationApi.user}/>
                <Footer/>
              </StickyRightColumn>
            </RightColumn>
          </Body>
        </Container>
      </Page>
    </BrowserRouter>
  );
}

export default observer(App);

const topUsers = [
  {
    id: 1,
    nickname: "Johny",
    photoPath: "",
    rating: 12142,
  },
  {
    id: 2,
    nickname: "Terry",
    photoPath: "",
    rating: 2347,
  },
  {
    id: 3,
    nickname: "Body",
    photoPath: "",
    rating: 413,
  },
  {
    id: 4,
    nickname: "Tom",
    photoPath:
      "",
    rating: 337,
  },
  {
    id: 5,
    nickname: "Jerry",
    photoPath: "",
    rating: 73,
  },
];