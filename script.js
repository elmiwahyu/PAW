document.getElementById("submitBtn").addEventListener("click", function () {
  const nama = document.getElementById("nama").value;
  const tujuan = document.getElementById("tujuan").value;
  const harga = parseFloat(document.getElementById("harga").value);
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const isMember = document.getElementById("member").checked;
  const diskon = parseFloat(document.getElementById("diskon").value);

  let totalBayar = harga * jumlah;
  if (isMember) {
    totalBayar *= 1 - diskon / 100;
  }

  const totalBayarTextbox = document.getElementById("totalBayar");
  totalBayarTextbox.value = totalBayar.toFixed(2);

  const detailPemesanan = `
  <div class="popup-title">Detail Pemesanan</div>
  
  <div><strong>Nama:</strong> ${nama}</div>
  <div><strong>Tujuan:</strong> ${tujuan}</div>
  <div><strong>Harga Tiket:</strong> ${harga}</div>
  <div><strong>Jumlah Tiket:</strong> ${jumlah}</div>
  <div><strong>Member:</strong> ${isMember ? "Ya" : "Tidak"}</div>
  <div><strong>Diskon:</strong> ${diskon}%</div>
  <div><strong>Total Bayar:</strong> ${totalBayar.toFixed(2)}</div>
  
  <button id="okButton" class="btn btn-primary">OK</button>`;

  const popupContainer = document.createElement("div");
  popupContainer.innerHTML = detailPemesanan;
  popupContainer.classList.add("popup");
  document.body.appendChild(popupContainer);

  const okButton = document.getElementById("okButton");
  okButton.addEventListener("click", function () {
    document.body.removeChild(popupContainer);
  });

  document.getElementById("submitBtn").innerText = "Total Bayar";
});
