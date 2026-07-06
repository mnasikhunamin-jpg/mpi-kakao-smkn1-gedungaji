console.log("MPI aktif");

function loginSiswa(){

    let nama =
        document.getElementById("nama").value;

    let sekolah =
        document.getElementById("sekolah").value;

    if(nama=="" || sekolah==""){
        alert("Silakan lengkapi data.");
        return;
    }

    localStorage.setItem(
        "nama", nama
    );

    localStorage.setItem(
        "sekolah", sekolah
    );

    alert(
        "Selamat datang " + nama
    );

    window.location.href =
        "dashboard.html";
}
