// pages/api/pair.js
export default (req, res) => {
    if (req.method === 'POST') {
      const { code } = req.body;
      // Implement your pairing logic here, communicate with ESP32
      // For simplicity, we're just returning a success message.
      res.status(200).json({ message: `Paired with code: ${code}` });
    } else {
      res.status(405).end();  // Method Not Allowed
    }
  };
  