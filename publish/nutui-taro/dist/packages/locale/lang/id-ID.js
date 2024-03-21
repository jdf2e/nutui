var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { B as BaseLang } from "./baseLang-Bnfy6fTl.js";
class Lang extends BaseLang {
  constructor() {
    super(...arguments);
    __publicField(this, "save", "Simpan");
    __publicField(this, "confirm", "Konfirmasi");
    __publicField(this, "cancel", "Batal");
    __publicField(this, "done", "Selesai");
    __publicField(this, "noData", "Tidak Ada Data");
    __publicField(this, "placeholder", "Kolom Input");
    __publicField(this, "select", "Pilih");
    __publicField(this, "video", {
      errorTip: "Terjadi Kesalahan",
      clickRetry: "Coba Lagi"
    });
    __publicField(this, "fixednav", {
      activeText: "Tutup Navigasi",
      unActiveText: "Buka Navigasi"
    });
    __publicField(this, "pagination", {
      prev: "Sebelumnya",
      next: "Selanjutnya"
    });
    __publicField(this, "calendaritem", {
      weekdays: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
      end: "Selesai",
      start: "Mulai",
      title: "Kalender",
      monthTitle: (year, month) => `${year}/${month}`,
      today: "Hari ini"
    });
    __publicField(this, "calendarcard", {
      weekdays: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
      end: "Selesai",
      start: "Mulai",
      title: "Kalender",
      monthTitle: (year, month) => `${year}/${month}`,
      today: "Hari ini"
    });
    __publicField(this, "shortpassword", {
      title: "SIlakan masukan kata sandi",
      desc: "Anda telah menggunakan aset virtual, mohon lakukan verifikasi.",
      tips: "Lupa Kata Sandi"
    });
    __publicField(this, "uploader", {
      ready: "File berhasil diunggah",
      readyUpload: "Siap untuk mengunggah",
      waitingUpload: "Menunggu untuk diunggah",
      uploading: "Mengunggah",
      success: "Berhasil Diunggah",
      error: "Gagal Mengunggah"
    });
    __publicField(this, "countdown", {
      day: " Hari ",
      hour: " Jam ",
      minute: " Menit ",
      second: " Detik "
    });
    __publicField(this, "address", {
      selectRegion: "Pilih Daerah",
      deliveryTo: "Kirim Ke",
      chooseAnotherAddress: "Pilih alamat lain"
    });
    __publicField(this, "signature", {
      reSign: "Masuk Kembali",
      unSupportTpl: `Maaf, browser Anda saat ini tidak mendukung Canvas, sehingga kita tidak dapat menggunakan kontrol ini!`
    });
    __publicField(this, "ecard", {
      chooseText: "Pilih",
      otherValueText: "Jumlah Lain",
      placeholder: "Kolom Input"
    });
    __publicField(this, "timeselect", {
      pickupTime: "Waktu Penjemputan"
    });
    __publicField(this, "sku", {
      buyNow: "Beli Sekarang",
      buyNumber: "Jumlah Pembelian",
      addToCart: "Tambahkan ke Keranjang"
    });
    __publicField(this, "skuheader", {
      skuId: "Nomor SKU"
    });
    __publicField(this, "addresslist", {
      addAddress: "Tambah Alamat Baru",
      default: "Bawaan"
    });
    __publicField(this, "comment", {
      complaintsText: "Saya memiliki komplain",
      additionalReview: (day) => `Ulas setelah ${day} hari dari pembelian`,
      additionalImages: (length) => `Terdapat ${length} komentar lainnya`
    });
    __publicField(this, "infiniteloading", {
      loading: "Memuat...",
      pullTxt: "Lepaskan untuk memperbarui",
      loadMoreTxt: "Oops, sudah sampai bawah"
    });
    __publicField(this, "datepicker", {
      year: "Tahun",
      month: "Bulan",
      day: "Hari",
      hour: "Jam",
      min: "Menit",
      seconds: "Detik"
    });
    __publicField(this, "audiooperate", {
      back: "kembali",
      start: "Mulailah",
      pause: "berhenti sebentar",
      forward: "Maju cepat",
      mute: "Bisu"
    });
    __publicField(this, "pullrefresh", {
      pulling: "Tarik ke bawah untuk menyegarkan",
      loosing: "Lepaskan Refresh",
      loading: "Memuat...",
      complete: "Refresh berhasil"
    });
  }
}
export {
  Lang as default
};
