import React from 'react';
import Loader from "./components/Loader";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouseChimney, faCompass, faCircleQuestion, faComment} from '@fortawesome/free-solid-svg-icons';
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


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Container>
          <h1>Hello, is it me you looking for...</h1>
        </Container>
      </Header>
      <Container>
        <Body>
          <Menu>
            <MenuLink to={"/"} exact><FontAwesomeIcon icon={faHouseChimney}/>Home</MenuLink>
            <MenuLink to={"/topics"}><FontAwesomeIcon icon={faCompass}/>Explore topics</MenuLink>
            <MenuLink to={"/my-topics"}><FontAwesomeIcon icon={faCircleQuestion}/>My topics</MenuLink>
            <MenuLink to={"/my-answers"}><FontAwesomeIcon icon={faComment}/>My answers</MenuLink>
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
              <Route path={"/"}>
                <Home/>
              </Route>
            </Switch>
          </Content>
          <RightColumn>
            <Loader/>
          </RightColumn>
        </Body>
      </Container>
    </BrowserRouter>
  );
}

export default App;
