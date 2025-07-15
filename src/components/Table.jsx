import { Copy, Pencil, Trash } from "lucide-react"
import { ToastContainer, toast, Bounce } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Table = ({ passwordArray, setPasswordArray, setForm }) => {
  const handleCopy = (item) => {
    navigator.clipboard.writeText(item);
    toast.success('Password copied to clipboard!');
  }

  const handleDelete = (id) => {
    const updated = passwordArray.filter(item => item.id !== id);
    setPasswordArray(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
    toast.error('Password deleted!');
  }

  const handleEdit = (item) => {
    setForm({
      siteUrl: item.siteUrl,
      username: item.username,
      password: item.password
    });
    setPasswordArray(passwordArray.filter(p => p.id !== item.id));
    toast.info('Password ready for editing!');
  }

  return (
    <>
      <div className="mt-10 w-full px-5 overflow-x-auto lg:max-h-[70vh] custom-scrollbar">
        <div className="max-w-7xlxl mx-auto">
          <table className="w-full text-center bg-[#EEEEEE] rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-[#00ADB5] text-white">
              <tr>
                <th className="py-3 px-6">Site URL</th>
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Password</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 text-[#393E46]">
                    No passwords saved yet!
                  </td>
                </tr>
              ) : (
                passwordArray.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#CCCCCC] ${
                      index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"
                    }`}
                  >
                    <td className="py-2 px-6 text-[#393E46]">{item.siteUrl}</td>
                    <td className="py-2 px-6 text-[#393E46]">{item.username}</td>
                    <td className="py-2 px-6 text-[#393E46]">
                      <div className="flex items-center justify-between gap-2">
                        <span>{item.password}</span>
                        <button
                          onClick={() => handleCopy(item.password)}
                          className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#00ADB5]/10 transition ml-auto"
                          title="Copy password"
                        >
                          <Copy size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="flex gap-2 justify-center items-center py-2 px-6">
                      <Pencil onClick={() => handleEdit(item)} className="w-5 cursor-pointer" />
                      <Trash onClick={() => handleDelete(item.id)} className="w-5 cursor-pointer" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
