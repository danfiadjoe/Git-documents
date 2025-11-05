import { useEffect } from 'react';

function Toast({ message, clearMessage }) {
  useEffect(() => {
    const timer = setTimeout(() => clearMessage(), 3000);
    return () => clearTimeout(timer);
  }, [clearMessage]); // ✅ Added dependency

  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
}

export default Toast;
