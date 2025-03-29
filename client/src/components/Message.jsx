const Message = ({ text, type }) => {
  if (!text) return null;
  return (
    <p 
      className={`mt-2 text-sm font-medium ${
        type === "success" ? "text-green-600 bg-green-100 border border-green-400 p-2 rounded-md" : "text-red-600 bg-red-100 border border-red-400 p-2 rounded-md"
      }`}
    >
      {text}
    </p>
  );
};

export default Message;