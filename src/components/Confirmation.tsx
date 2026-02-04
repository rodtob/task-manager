export const Confirmation = ({ handleDelete, setShowConfirm }: any) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow">
        <p className="text-black">Are you sure you want to delete this task?</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
