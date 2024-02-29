import PropTypes from "prop-types";

function ListItem(props) {
  const handleDelete = () => {
    if (props.onDelete) {
      props.onDelete(props.input);
    }
  };

  return (
    <div className="ListItemContainer">
      <div className="listItem">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">{props.input}</th>
              <th>
                <button
                  onClick={handleDelete}
                  className="px-2 py-1 bg-red-500 text-white"
                >
                  Sil
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  input: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ListItem;
