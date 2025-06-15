import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  // 只替换前缀部分
  const FUNCTION_BASE_URL = import.meta.env.VITE_SUPABASE_FUNCTION_BASE_URL;
  const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;  // 从 .env 里读取
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${FUNCTION_BASE_URL}submit-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
		  'Authorization': `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify({
          username: name,
          content: message,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.message || '提交成功！');
      } else {
        setResponse(data.error || '提交失败！');
      }
    } catch (err) {
      setResponse('提交失败：网络错误');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">留言板</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <input
          className="w-full px-4 py-2 border rounded"
          type="text"
          placeholder="你的名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full px-4 py-2 border rounded"
          placeholder="你的留言"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-colors"
        >
          提交
        </button>
      </form>
      {response && <p className="mt-4 text-green-600">{response}</p>}
    </div>
  );
};

export default App;
