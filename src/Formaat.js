import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Listtasks from "./Listtasks";
import "./Format.css";
const Formaat = () => {
  useEffect(() => {
    // get the value exsist in the local storage
    if (localStorage.getItem("tasklist")) {
      setTask(JSON.parse(localStorage.getItem("tasklist")));
    }
  }, []);
  // State to store the list of tasks
  const [task, setTask] = useState([]);
  console.log(task);
  // Refs to access the input fields
  const r = useRef();
  const k = useRef();

  return (
    <>
      <Form className="form-container">
        {console.log(task)}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label" style={{ fontFamily: "fantasy" }}>
            Name of the task
          </Form.Label>
          <Form.Control
            type="text"
            ref={r}
            placeholder="name tasks"
            required={true}
            className="form-control"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ fontFamily: "fantasy" }} className="form-label">
            description
          </Form.Label>
          <Form.Control as="textarea" rows={2} required={true} ref={k} />
        </Form.Group>
        <Button
          className="btn"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            if (r.current.value && k.current.value) {
              const newTask = {
                name: r.current.value,
                desc: k.current.value,
              };
              setTask([...task, newTask]);
              // Store the updated task list in local storage

              localStorage.setItem(
                "tasklist",
                JSON.stringify([...task, newTask])
              );
            }
          }}
        >
          Submit form
        </Button>
      </Form>
      <Listtasks user={task} setTask={setTask} />
    </>
  );
};

export default Formaat;
