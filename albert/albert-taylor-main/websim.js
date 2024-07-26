const apiKey = 'ws_b7x9f2p0q3m5k1r8t6v4y7z';
const websimUrl = 'https://api.websim.ai/v1/simulate';

async function simulateWebsite(url) {
  const response = await fetch(websimUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({ url: url })
  });
  
  const data = await response.json();
  return data.simulatedHtml;
}

// Usage
simulateWebsite('https://example.com')
  .then(html => {
    document.getElementById('websim-container').innerHTML = html;
  })
  .catch(error => console.error('WebSim API Error:', error));