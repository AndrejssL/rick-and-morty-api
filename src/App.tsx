import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from 'react-bootstrap';
import { Slides } from './assets/helpers/Carousel';
import { AllCharacters } from './components/AllCharacters';
import { Character } from './components/Character';
import { Planets } from './components/Planets';
import { Episodes } from './components/Episodes';
import { client } from './apollo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import "bootstrap/dist/css/bootstrap.css";

const App: React.FC = () => {
  return (
    <Router >
    <ApolloProvider client={client}>
      <Header />
      <Route path='/' exact component={Slides}/>
      <Container fluid style={{width: '70%'}}>
        <Route path="/" exact component={AllCharacters} />
        <Route path="/characters/:id" exact component={Character} />
        <Route path="/planets/" exact component={Planets} />
        <Route path="/episodes/" exact component={Episodes} />
      </Container>
        <Footer />
    </ApolloProvider>
    </Router>
  );
}

export default App;
