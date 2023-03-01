const connectButton = document.getElementById('connect');
connectButton.addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    alert('Metamask is installed!');

    // Connect to Metamask
    await ethereum.request({ method: 'eth_requestAccounts' });
    alert('Connected to Metamask!');

    // Redirect to the display page
    window.location.href = 'connected.html';
  } else {
    alert('Metamask is not installed! Please install Metamask wallet');
  }

const connectButton = document.getElementById('connect');
connectButton.addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    alert('Metamask is installed!');

    // Connect to Metamask
    await ethereum.request({ method: 'eth_requestAccounts' });
    alert('Connected to Metamask!');

    // Redirect to the display page
    window.location.href = 'connected.html';
  } else {
    alert('Metamask is not installed!');
  }
});
