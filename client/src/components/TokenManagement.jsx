import API from "../services/api";

function TokenManagement({

  fetchTokens

}) {

  const callNext =
    async () => {

      await API.put(
        "/tokens/call-next"
      );

      fetchTokens();

    };

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Queue Control
      </h2>

      <button
        onClick={callNext}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Call Next Token
      </button>

    </div>

  );

}

export default TokenManagement;