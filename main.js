// bai 1
document.getElementById("btnTinhDiem").onclick = function () {
  // đầu vào
    var mon_1 = document.getElementById("mon1").value * 1;
    var mon_2 = document.getElementById("mon2").value * 1;
    var mon_3 = document.getElementById("mon3").value * 1;
    var tongDiem;
    var diemChuan = document.getElementById("dc").value *1;
    var khuVuc = document.getElementById("khuvuc").value;
    var doiTuong = document.getElementById("doituong").value;
    var diemKhuVuc;
    var diemDoiTuong;


  //xử lý
    if (khuVuc == "A") {
        diemKhuVuc = 2;
    } else if (khuVuc == "B") {
        diemKhuVuc = 1;
    } else if (khuVuc == "C") {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0;
    }

    if (doiTuong == "dt1") {
        diemDoiTuong = 2.5;
    } else if (doiTuong == "dt2") {
        diemDoiTuong = 1.5;
    } else if (doiTuong == "dt3") {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }

    console.log(diemDoiTuong,diemKhuVuc);
    function checkScore(diemChuan) {
        return (diemChuan > 0);
    }
//đầu ra
        if (checkScore(mon_1) && checkScore(mon_2) && checkScore(mon_3)) {
            var tongDiem = mon_1 + mon_2 + mon_3 + diemKhuVuc + diemDoiTuong;
            document.getElementById("infoTD").innerHTML = tongDiem >= diemChuan ? "Bạn đã đậu. Tổng điểm: " + tongDiem : "Bạn đã rớt. Tổng điểm: " + tongDiem; 
        }else{
            document.getElementById("infoTD").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
        }
}
