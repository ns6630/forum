import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faComment,
  faCompass,
  faHouseChimney,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Container from "./components/Container";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import RightColumn from "./components/RightColumn";
import Content from "./components/Content";
import MenuLink from "./components/MenuLink";
import Topics from "./pages/Topics";
import MyTopics from "./pages/MyTopics";
import MyAnswers from "./pages/MyAnswers";
import RightColumnButtonLink from "./components/RightColumnButtonLink";
import TopUsers from "./components/TopUsers";
import Footer from "./components/Footer";
import FooterLink from "./components/FooterLink";
import StickyRightColumn from "./components/StickyRightColumn";
import TopicApi from "./api/fake/TopicApi";
import Page from "./components/Page";
import AuthenticationApi from "./api/fake/AuthenticationApi";
import Login from "./pages/Login";

export const topicApi = new TopicApi();
export const authenticationApi = new AuthenticationApi();

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Header user={you} />
        <Container>
          <Body>
            <Menu>
              <MenuLink to={"/"} exact>
                <FontAwesomeIcon icon={faHouseChimney} fixedWidth />
                Home
              </MenuLink>
              <MenuLink to={"/topics"}>
                <FontAwesomeIcon icon={faCompass} fixedWidth />
                Explore topics
              </MenuLink>
              <MenuLink to={"/my-topics"}>
                <FontAwesomeIcon icon={faCircleQuestion} fixedWidth />
                My topics
              </MenuLink>
              <MenuLink to={"/my-answers"}>
                <FontAwesomeIcon icon={faComment} fixedWidth />
                My answers
              </MenuLink>
              <MenuLink to={"/login"}>
                <FontAwesomeIcon icon={faComment} fixedWidth />
                LogIn
              </MenuLink>
            </Menu>
            <Content>
              <Switch>
                <Route path={"/topics"}>
                  <Topics />
                </Route>
                <Route path={"/my-topics"}>
                  <MyTopics />
                </Route>
                <Route path={"/my-answers"}>
                  <MyAnswers />
                </Route>
                <Route path={"/login"}>
                  <Login/>
                </Route>
                <Route path={"/"}>
                  <Home />
                </Route>
              </Switch>
            </Content>
            <RightColumn>
              <StickyRightColumn>
                <RightColumnButtonLink to={"/"}>
                  <FontAwesomeIcon icon={faPlus} />
                  Start a New Topic
                </RightColumnButtonLink>
                <TopUsers users={topUsers} you={you} />
                <Footer>
                  <FooterLink to={"/"}>Help</FooterLink>
                  <FooterLink to={"/"}>About</FooterLink>
                  <FooterLink to={"/"}>Forum Pro</FooterLink>
                  <FooterLink to={"/"}>Careers</FooterLink>
                  <FooterLink to={"/"}>Topics</FooterLink>
                  <FooterLink to={"/"}>Press</FooterLink>
                  <FooterLink to={"/"}>Top Topics</FooterLink>
                  <FooterLink to={"/"}>Terms</FooterLink>
                  <FooterLink to={"/"}>Blog</FooterLink>
                  <FooterLink to={"/"}>Privacy policy</FooterLink>
                  <FooterLink to={"/"}>Advertise</FooterLink>
                </Footer>
              </StickyRightColumn>
              {/*<Loader />*/}
            </RightColumn>
          </Body>
        </Container>
      </Page>
    </BrowserRouter>
  );
}

export default App;

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
    photoPath: "logo192.png",
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
      "http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg",
    rating: 337,
  },
  {
    id: 5,
    nickname: "Jerry",
    photoPath: "https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg",
    rating: 73,
  },
];

const you = {
  id: 1,
  nickname: "Johny",
  photoPath: "",
  rating: 12142,
};
