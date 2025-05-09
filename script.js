function hitungNilai() {
    // Ambil nilai dari input
    const quis = parseFloat(document.getElementById('quis').value) || 0;
    const tugas = parseFloat(document.getElementById('tugas').value) || 0;
    const uts = parseFloat(document.getElementById('uts').value) || 0;
    const uas = parseFloat(document.getElementById('uas').value) || 0;
    
    // Validasi input
    if (quis < 0 || quis > 100 || tugas < 0 || tugas > 100 || 
        uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Masukkan nilai antara 0-100 untuk semua field!");
        return;
    }
    
    // Hitung nilai akhir
    const na = (0.10 * quis) + (0.20 * tugas) + (0.30 * uts) + (0.40 * uas);
    
    // Tentukan grade dan keterangan
    let grade, ket, gradeClass;
    
    if (na > 80 && na <= 100) {
        grade = "A";
        ket = "Lulus dengan Pujian";
        gradeClass = "grade-A";
    } else if (na > 68 && na <= 80) {
        grade = "B";
        ket = "Lulus dengan Baik";
        gradeClass = "grade-B";
    } else if (na > 55 && na <= 68) {
        grade = "C";
        ket = "Lulus dengan cukup";
        gradeClass = "grade-C";
    } else if (na > 38 && na <= 55) {
        grade = "D";
        ket = "Lulus dengan Kurang";
        gradeClass = "grade-D";
    } else {
        grade = "E";
        ket = "Tidak Lulus";
        gradeClass = "grade-E";
    }
    
    // Tampilkan hasil
    document.getElementById('na-value').textContent = na.toFixed(2);
    
    const gradeElement = document.getElementById('grade-value');
    gradeElement.textContent = grade;
    gradeElement.className = "result-value " + gradeClass;
    
    document.getElementById('ket-value').textContent = ket;
    
    // Tampilkan hasil
    document.getElementById('result').style.display = 'block';
}