console.log("MPI Smart Farming loaded");

function loginSiswa() {

    const nama =
        document.getElementById("nama").value;

    const sekolah =
        document.getElementById("sekolah").value;

    if (nama === "" || sekolah === "") {
        alert("Silakan lengkapi nama dan asal sekolah.");
        return;
    }

    localStorage.setItem(
        "nama",
        nama
    );

    localStorage.setItem(
        "sekolah",
        sekolah
    );

    window.location.href =
        "dashboard.html";
}
