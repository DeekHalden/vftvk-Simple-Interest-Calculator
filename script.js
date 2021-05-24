function compute() {
  const principal = document.getElementById('principal').value;

  if (!parseFloat(principal)) {
    alert('Enter a positive number');
    document.getElementById('principal').focus();
    return;
  }
  const rate = document.getElementById('rate').value;
  const years = document.getElementById('years').value;
  const interest = (principal * years * rate) / 100;

  const resultNode = document.getElementById('result');
  resultNode.innerHTML = `
        <br> If you deposit is <strong>${principal}</strong><br>
        at an interest rate of <strong>${rate}%</strong>.<br>
        You will receive an amount of <strong>${interest}</strong><br>
        in the year <strong>${
          new Date().getFullYear() + parseInt(years)
        }</strong>
    `;
}

function updateRate() {
  const rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateval + '%';
}
