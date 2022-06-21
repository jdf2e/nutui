import { BaseLang } from './baseLang';
class Lang extends BaseLang {
  save = 'Simpan';
  confirm = 'Konfirmasi';
  cancel = 'Batal';
  done = 'Selesai';
  noData = 'Tidak Ada Data';
  placeholder = 'Kolom Input';
  select = 'Pilih';
  video = {
    errorTip: 'Terjadi Kesalahan',
    clickRetry: 'Coba Lagi'
  };
  fixednav = {
    activeText: 'Tutup Navigasi',
    unActiveText: 'Buka Navigasi'
  };
  pagination = {
    prev: 'Sebelumnya',
    next: 'Selanjutnya'
  };
  calendaritem = {
    weekdays: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    end: 'Selesai',
    start: 'Mulai',
    title: 'Kalender',
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    today: 'Hari ini'
  };
  shortpassword = {
    title: 'SIlakan masukan kata sandi',
    desc: 'Anda telah menggunakan aset virtual, mohon lakukan verifikasi.',
    tips: 'Lupa Kata Sandi'
  };
  uploader = {
    ready: 'File berhasil diunggah',
    readyUpload: 'Siap untuk mengunggah',
    waitingUpload: 'Menunggu untuk diunggah',
    uploading: 'Mengunggah',
    success: 'Berhasil Diunggah',
    error: 'Gagal Mengunggah'
  };
  countdown = {
    day: ' Hari ',
    hour: ' Jam ',
    minute: ' Menit ',
    second: ' Detik '
  };
  address = {
    selectRegion: 'Pilih Daerah',
    deliveryTo: 'Kirim Ke',
    chooseAnotherAddress: 'Pilih alamat lain'
  };
  signature = {
    reSign: 'Masuk Kembali',
    unSupportTpl: `Maaf, browser Anda saat ini tidak mendukung Canvas, sehingga kita tidak dapat menggunakan kontrol ini!`
  };
  ecard = {
    chooseText: 'Pilih',
    otherValueText: 'Jumlah Lain',
    placeholder: 'Kolom Input'
  };
  timeselect = {
    pickupTime: 'Waktu Penjemputan'
  };
  sku = {
    buyNow: 'Beli Sekarang',
    buyNumber: 'Jumlah Pembelian',
    addToCart: 'Tambahkan ke Keranjang'
  };
  skuheader = {
    skuId: 'Nomor SKU'
  };
  addresslist = {
    addAddress: 'Tambah Alamat Baru',
    default: 'Bawaan'
  };
  comment = {
    complaintsText: 'Saya memiliki komplain',
    additionalReview: (day: number) => `Ulas setelah ${day} hari dari pembelian`,
    additionalImages: (length: number) => `Terdapat ${length} komentar lainnya`
  };
  infiniteloading = {
    loading: 'Memuat...',
    pullTxt: 'Lepaskan untuk memperbarui',
    loadMoreTxt: 'Oops, sudah sampai bawah'
  };
  datepicker = {
    year: 'Tahun',
    month: 'Bulan',
    day: 'Hari',
    hour: 'Jam',
    min: 'Menit',
    seconds: 'Detik'
  };
  audiooperate = {
    back: 'kembali',
    start: 'Mulailah',
    pause: 'berhenti sebentar',
    forward: 'Maju cepat',
    mute: 'Bisu'
  };
}
export default Lang;
