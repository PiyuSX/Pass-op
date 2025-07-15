import { Copy } from "lucide-react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Table = ({ passwordArray }) => {
  const handleCopy = (item) => {
    navigator.clipboard.writeText(item);
    toast.success('Password copied to clipboard!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }

  return (
    <>
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> 
      <div className="mt-10 w-full px-5 overflow-x-auto">
        <div className="max-w-7xlxl mx-auto">
          <table className="w-full text-center bg-[#EEEEEE] rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-[#00ADB5] text-white">
              <tr>
                <th className="py-3 px-6">Site URL</th>
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Password</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-4 text-[#393E46]">
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
                    <td className="py-2 px-6 text-[#393E46]">
                      {item.username}
                    </td>
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
