import DynamicForm from "./components/DynamicForm";
import DynamicFormItem from "./components/DynamicFormItem";
function App() {
  return (
    <>
      <div className="flex bg-gray-200 justify-center border-solid">
        <DynamicForm />
      </div>
      <div className="flex bg-gray-200 justify-center border-solid">
        <DynamicFormItem />
      </div>
    </>
  );
}

export default App;
