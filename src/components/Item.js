import { BiTrash, BiEdit } from "react-icons/bi";
export default function Item(props) {
  const { data, deleteTask, editTask } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{data.title}</div>
      </div>
      <BiTrash className="icon ms-2" onClick={() => deleteTask(data.id)} />
      <BiEdit className="icon ms-2" onClick={() => editTask(data.id)} />
    </li>
  );
}
