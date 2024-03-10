import { useState } from "react";
import DynamicFormItem from "./DynamicFormItem";

function DynamicForm() {
  const [form, setForm] = useState({
    isim: "",
    soyad: "",
    sehir: "",
    acıklama: "",
  });

  const [gonder, setGonder] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGonder([...gonder, form.isim, form.soyad, form.sehir, form.acıklama]);
  };

  const handleDelete = (itemDelete) => {
    const updatedList = gonder.filter((item) => item !== itemDelete);
    setGonder(updatedList);
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl mb-4">FORM OLUŞTURMA</h3>

          <div className="mb-4">
            <input
              value={form.isim}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Adınız"
              name="isim"
            />
          </div>

          <div className="mb-4">
            <input
              value={form.soyad}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Soyad"
              name="soyad"
            />
          </div>

          <div className="mb-4">
            <select
              value={form.sehir}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="sehir"
            >
              <option value="">Şehir Seçiniz</option>
              <option value="sivas">Sivas</option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
            </select>
          </div>

          <div className="mb-4">
            <textarea
              value={form.acıklama}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="acıklama"
              placeholder="Açıklama"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
      <table className="flex">
        {gonder.map((item, index) => (
          <DynamicFormItem input={item} key={index} onDelete={handleDelete} />
        ))}
      </table>
    </div>
  );
}

export default DynamicForm;
