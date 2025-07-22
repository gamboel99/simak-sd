document.getElementById("formPegawai").addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const nip = document.getElementById("nip").value;
    const jabatan = document.getElementById("jabatan").value;
    const output = document.getElementById("dataPegawai");
    const div = document.createElement("div");
    div.textContent = `${nama} (${nip}) - ${jabatan}`;
    output.appendChild(div);
    this.reset();
});