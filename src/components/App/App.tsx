import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./App.scss";
import ButtonAppBar from "../Navbar/Navbar";

export default class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

  }

  public render() {
    return (
        <div className="App">
          <ButtonAppBar/>
          <Container className="container" maxWidth="sm">
            <Card>
              <CardContent>
                <h3>TODO App</h3>
                <TodoForm/>
                <TodoList/>
              </CardContent>
            </Card>
          </Container>
        </div>
    );
  }
};