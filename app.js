// execute after dom load
document.addEventListener('DOMContentLoaded', function() {

  // cat sound
  const sideCat = document.getElementById('side-cat');
  sideCat.addEventListener('mouseover', function() {
    let audio = new Audio("./metadata/lick.mp3");
    audio.play();
  });
  const sideCat2 = document.getElementById('side-cat');
  sideCat2.addEventListener('click', function() {
    let audio = new Audio("./metadata/lick.mp3");
    audio.play();
  });

  // copy button logic
  const copyButton = document.getElementById('copy-ca-button');
  const textToCopy = "6SPbrnC3z4r42jbFBgC3gatF6dKCiDZsKWPtbKa95cVz";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

  // links
  const twitterBtn = document.getElementById('twitter-button');
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/lickcatonsolana', '_blank');
  });

  const telegramBtn = document.getElementById('telegram-button');
  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/+lnqeawGEkeY0Yjhh', '_blank');
  });

  const chartBtn = document.getElementById('chart-button');
  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com/solana/fdt3pvstnhekzk8fx4sybnjmb3tzrx6yj7epmaebvdum', '_blank');
  });

  const buyBtn = document.getElementById('buy-button');
  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6SPbrnC3z4r42jbFBgC3gatF6dKCiDZsKWPtbKa95cVz', '_blank');
  });

});