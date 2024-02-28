import PropTypes from "prop-types";

function ListItem(props) {
  return (
    <div className="ListItemContainer">
      <div className="listItem">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2"> {props.input}</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  input: PropTypes.string,
};

export default ListItem;
