import React, { Component } from 'react';
import Deskripsi from './Components/dumb/Deskripsi';
import Loading from "./helper/Loading";
import * as Helper from "./helper";
import * as Services from "./services";
import Movies from "./Components/dumb/Movies";
import FormGuru from './Components/screen/FormGuru';
import FormSiswa from './Components/screen/FormSiswa';
import { Card, Col, Container, Row } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name : '',
      stillType : '',
      movies : []
    }
    // binding bila fungsi setName tidak menggunakan arrow function
    // this.setName = this.setName.bind(this);
  }

  // e = event
  setName = (e) => {
    // menampung input dari user
    let nama = e.target.value;
    this.setState({
      name : nama,
      stillType: true
    })
  }

  setStillType = () => {
    this.setState({
      stillType: false
    })
  }

  componentDidMount() {
    this.setState({
      stillType: false,
    })
    this.createRequest();
  }

  createRequest = async () => {
    let response = await Services.loadMovies();
    this.setState({
      movies : response.data.movies
    })
  }

  componentDidUpdate() {
    console.log("component melakukan update");
  }

  render(){
    // return(
    //   <div>
    //     <FormGuru/>
    //     <hr />
    //     <FormSiswa/>
    //   </div>

    // );
    console.log(this.state.movies);
    if (this.state.stillType === true) {
      return(
        <Container>
          <Row>
            <Col>
              <h1>{this.state.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <input className='form-control' onChange={this.setName}/>
            <Loading></Loading>
            <button className='btn btn-primary' onClick={this.setStillType}>submit</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Movies data={this.state.movies}></Movies>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container>
        <Row>
          <Col>
            <h1>{this.state.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <input className='form-control' onChange={this.setName}/>
            <Deskripsi
            name={Helper.toLower(this.state.name)}>
            </Deskripsi>
          </Col>
        </Row>
        <Row>
          <Col>
            <Movies data={this.state.movies}></Movies>
          </Col>
        </Row>
      </Container>
     );
  }

}


export default App;