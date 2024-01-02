function prosesStatus() {
    var npm = document.getElementById("npm").value;
    var nama = document.getElementById("nama").value;
    var nilai = document.getElementById("nilai").value;
  
    var status = "";
    if (nilai >= 80) {
      status = "LULUS";
    } else {
      status = "TIDAK LULUS";
    }
  
    document.write(
      "<h2>NPM: " +
        npm +
        "</h2>" +
        "<h2>Nama: " +
        nama +
        "</h2>" +
        "<h2>Nilai: " +
        nilai +
        "</h2>" +
        "<h2>Status: " +
        status +
        "</h2>"
    );
  }
  
  function prosesGrade() {
    var nilai = parseFloat(document.getElementById("nilai").value);
  
    var grade = "";
    if (nilai >= 80) {
      grade = "A";
    } else {
      grade = "E";
    }
  
    document.write("<h2>Grade: " + grade + "</h2>");
  }
  