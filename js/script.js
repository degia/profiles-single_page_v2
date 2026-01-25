function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

function buttonCopy() {
  document.getElementById('copyBtn').addEventListener('click', async () => {
      const text = document.getElementById('textToCopy').innerText;

      try {
        await navigator.clipboard.writeText(text);
        alert('Copy successful!');
      } catch (err) {
        alert('Gagal menyalin teks.');
        console.error('Error saat menyalin:', err);
      }
    });
}

// Mengatur tombol agar muncul saat halaman di-scroll ke bawah 300px
window.onscroll = function() {
    const btn = document.querySelector('.icons');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};