import React, { useState } from 'react';
import axios from 'axios';

function Pairing() {
  const [pairingCode, setPairingCode] = useState('');
  const [status, setStatus] = useState('');

  const handlePairing = async () => {
    try {
      const response = await axios.post('/api/pair', { code: pairingCode });
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Pairing failed');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter pairing code"
        value={pairingCode}
        onChange={(e) => setPairingCode(e.target.value)}
      />
      <button onClick={handlePairing}>Pair</button>
      <div>{status}</div>
    </div>
  );
}

export default Pairing;
