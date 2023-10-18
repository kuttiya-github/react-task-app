export default function AddForm(props) {
  const { title, setTitle, saveTask, editTask, editId, setEditId } = props;
  return (
    <div className="row">
      <div className="col-12 col-lg-12">
        <h2>แบบฟอร์มจัดการงาน</h2>
        <form className="row g-3" onSubmit={saveTask}>
          <div className="col-3 ms-auto">
            <label htmlFor="lblTask" className="visually-hidden">
              Task Name:
            </label>
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="lblTask"
              value="Task Name:"
            />
          </div>
          <div className="col-7 mx-auto">
            <label htmlFor="txtTask" className="visually-hidden">
              Task Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="txtTask"
              value={title}
              placeholder="Task Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-auto ms-auto">
            <button type="submit" className="btn btn-sm btn-success mb-3">
              <i className="fa fa-save me-2"></i>
              {editId ? "Update" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
