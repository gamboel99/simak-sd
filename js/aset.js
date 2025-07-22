document.getElementById("formAset").addEventListener("submit", function(e) {
    e.preventDefault();
    const namaAset = document.getElementById("namaAset").value;
    const kodeAset = document.getElementById("kodeAset").value;
    const jumlah = document.getElementById("jumlah").value;
    const output = document.getElementById("dataAset");
    const div = document.createElement("div");
    div.textContent = `${namaAset} (${kodeAset}) - ${jumlah} unit`;
    output.appendChild(div);
    this.reset();
});