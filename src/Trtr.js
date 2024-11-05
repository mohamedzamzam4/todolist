import React, { useRef, useState } from "react";

const Trtr = ({ index, el, setTask, task }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(el.name);
  const [desc, setDesc] = useState(el.desc);
  const [supprimer, setSupprimer] = useState(true);
  const r = useRef();
  const k = useRef();
  return supprimer ? (
    <tr key={index}>
      <td style={{ width: "5vw" }}>{index + 1}</td>

      {edit ? (
        <>
          <td>
            <input
              type="text"
              style={{ width: "24vw" }}
              ref={r}
              value={name}
              onChange={() => {
                setName(r.current.value);
                setTask(
                  task.map((elt) =>
                    elt.name === el.name
                      ? { ...elt, name: r.current.value }
                      : elt
                  )
                );
              }}
            />
          </td>
          <td>
            <input
              type="text"
              style={{ width: "49vw" }}
              ref={k}
              value={desc}
              onChange={() => {
                setDesc(k.current.value);
                setTask(
                  task.map((elt) =>
                    elt.desc === el.desc
                      ? { ...elt, desc: k.current.value }
                      : elt
                  )
                );
              }}
            />
          </td>
        </>
      ) : (
        <>
          <td style={{ width: "25vw" }}>{el.name}</td>
          <td style={{ width: "50vw" }}>{el.desc}</td>
        </>
      )}

      <td style={{ width: "23vw" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/10573/10573603.png"
          style={{ width: "30px", cursor: "pointer" }}
          alt="edit"
          onClick={() => setEdit(!edit)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
          style={{ width: "30px", cursor: "pointer" }}
          alt="delete"
          onClick={() => setSupprimer(false)} // Hides the row
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/2198/2198355.png"
          style={{ width: "30px", cursor: "pointer" }}
          alt="validate"
          onClick={() => {
            console.log("Validation action");
            setEdit(false); // Optionally exit edit mode after validation
          }}
        />
      </td>
    </tr>
  ) : null;
};

export default Trtr;
