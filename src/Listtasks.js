import React from "react";
import Table from "react-bootstrap/Table";
import Trtr from "./Trtr";

const Listtasks = (props) => {
  return (
    <>
      <h1>TASKS LIST</h1>
      {/* put the tasks in table  */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "1vw" }}>#</th>
            <th style={{ width: "25vw" }}>NAME</th>
            <th style={{ width: "50vw" }}>DESCRIPTION</th>
            <th style={{ width: "25vw" }}>validation</th>
          </tr>{" "}
        </thead>
        <tbody>
          {/* maping the state and display it */}
          {props.user.map((el, index) => (
            <Trtr el={el} index={index} setTask={props.setTask} task={props.user}/>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listtasks;
