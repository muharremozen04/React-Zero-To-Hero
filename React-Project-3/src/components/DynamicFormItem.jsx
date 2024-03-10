import PropTypes from "prop-types";

function DynamicFormItem({ input, onDelete }) {
  return (
    <tr>
      <td className="p-3 border">{input}</td>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => onDelete(input)}
      >
        Sil
      </button>
    </tr>
  );
}

DynamicFormItem.propTypes = {
  input: PropTypes.string,
  onDelete: PropTypes.func,
};

export default DynamicFormItem;
