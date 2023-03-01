const connectButton = document.getElementById('connect');
connectButton.addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log('Metamask is installed!');

    // Connect to Metamask
    await ethereum.request({ method: 'eth_requestAccounts' });
    console.log('Connected to Metamask!');

    // Redirect to the display page
    window.location.href = 'connected.html';
  } else {
    alert('Metamask is not installed! Install Metamask');
  }
});