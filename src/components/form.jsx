import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../b3.jpg";
import im from "../334.jpg";
import "../index.css"


class Forms extends Component {
  canBeSubmitted() {
    const { fname, course, grade, course1, course2,course3,course4,lab1,lab2} = this.state;
    return (
      fname.length > 0 &&
      course.length > 0 &&
      grade.length > 0
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
  
  };

  state = {
    fname: "",
    course: "",
    grade: "",
    course1:"",
    course2:"",
    course3:"",
    course4:"",
    lab1:"",
    lab2:"",
  };
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh%",
          backgroundImage: `url(${im})`,
          background: `url(${im}) no-repeat `,
          backgroundSize: "cover"
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            // fontWeight: "",
            fontSize: "60px",
            color: "black"
          }}
          className="mb-5 pt-3"
        >
          Create GradeCard 
        </h1>
        <div
          style={{ marginBottom: "117px", background: "rgba(255,255,255,0.5)" }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat"
            }}
            className="mb-2"
          >
            Enter the Student details
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="Name"
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="Last name"
              />
            </Form.Group> */}
            <Form.Group>
              <Form.Control
                // type="(int)"
                name="grade"
                value={this.state.grade}
                onChange={this.handleChange}
                placeholder="Grade"
              />
            </Form.Group>
        
            
            {/* <ul>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Course name"
              />
            </ul> */}
            <Form.Group>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Department"
              />
            </Form.Group>

            <div class='parent'>
  <div class='child'><Form.Group>
              <Form.Control
                type="text"
                name="course1"
                value={this.state.course1}
                onChange={this.handleChange}
                placeholder="course-1"
              />
            </Form.Group></div>
  <div class='child'><Form.Group>
              <Form.Control
                type="text"
                name="course2"
                value={this.state.course2}
                onChange={this.handleChange}
                placeholder="course-2"
              />
            </Form.Group></div>
</div>
<div class='parent'>
  <div class='child'><Form.Group>
              <Form.Control
                type="text"
                name="course3"
                value={this.state.course3}
                onChange={this.handleChange}
                placeholder="course-3"
              />
            </Form.Group></div>
  <div class='child'><Form.Group>
              <Form.Control
                type="text"
                name="course4"
                value={this.state.course4}
                onChange={this.handleChange}
                placeholder="course-4"
              />
            </Form.Group></div>
</div>
<div class='parent'>
  <div class='child'><Form.Group>
              <Form.Control
                type="text"
                name="lab1"
                value={this.state.lab1}
                onChange={this.handleChange}
                placeholder="lab-1"
              />
            </Form.Group></div>
  <div class='child'><Form.Group>
              <Form.Control
                type="text"
                name="lab2"
                value={this.state.lab2}
                onChange={this.handleChange}
                placeholder="lab-2"
              />
            </Form.Group></div>
</div>

            <Button
              disabled={!isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
            >
              Add GradeCard
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Forms;
