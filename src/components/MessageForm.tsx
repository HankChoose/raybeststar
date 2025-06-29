// src/components/MessageForm.tsx
import { useState } from 'react';

const MessageForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const FUNCTION_BASE_URL = import.meta.env.VITE_SUPABASE_FUNCTION_BASE_URL;
  const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      type ResponseData = {
        error?: string;
        message?: string;
        [key: string]: any;
      };

      let data: ResponseData;
      try {
        data = await res.json();
      } catch (jsonErr) {
        console.error('❌ Failed to parse JSON response:', jsonErr);
        throw new Error('Invalid server response');
      }

      console.log('✅ Server response:', data);

      if (res.ok) {
        setResponse(`✅ Message received! Thank you, ${name}. You said: "${message}"`);
        setName('');
        setMessage('');
      } else {
        setResponse(data.error || '❌ Failed to submit message.');
      }
    } catch (err) {
      console.error('❌ Submission error:', err);
      setResponse('❌ Submission failed: Network or server error.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md">
	  
        <h1 className="text-3xl font-bold mb-6 text-center">Message Board</h1>
		<div className="bg-green-200 text-green-800 p-2 text-center font-medium text-xs border border-green-400 rounded">
		  Tailwind CSS applied successfully!
		</div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md space-y-4"
        >
          <input
            className="w-full px-2 py-1 border rounded text-sm"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

		


          <textarea
            className="w-full px-2 py-1 border rounded text-sm"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-400 transition-colors"
          >
            Submit
          </button>
        </form>

        {response && (
          <p className="mt-4 text-green-600 text-center whitespace-pre-line">
            {response}
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageForm;
