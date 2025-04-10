const upload = document.getElementById("imageUpload");
const preview = document.getElementById("previewImage");

if (upload) {
  upload.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src

