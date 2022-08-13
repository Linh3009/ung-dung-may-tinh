function so(number) {
    document.getElementById("display").value += number;
}

function ketQua() {
    let pt = document.getElementById("display").value;
    let ketqua = eval(pt);
    document.getElementById("display").value = ketqua;
}

function xoa() {
    let xoa = ""
    document.getElementById("display").value = xoa
}