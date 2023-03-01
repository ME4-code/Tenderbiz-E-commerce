// Get the current account address and balance
ethereum.request({ method: 'eth_accounts' }).then(accounts => {
    const currentAccount = accounts[0];
    console.log(`Current account: ${currentAccount}`);

    const web3 = new Web3(window.ethereum);
    web3.eth.getBalance(currentAccount).then(balance => {
      const addressElement = document.getElementById('address');
      addressElement.textContent = currentAccount;
      const balanceElement = document.getElementById('balance');
      balanceElement.textContent = `${web3.utils.fromWei(balance, 'ether')} ETH`;
    });
  });