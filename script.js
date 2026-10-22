const photoInput = document.getElementById("photoInput");
const profileImage = document.getElementById("profileImage");
const profilePlaceholder = document.getElementById("profilePlaceholder");

photoInput.addEventListener("change", function () {
  const selectedFile = this.files && this.files[0];
  if (!selectedFile) return;

  if (!selectedFile.type.startsWith("image/")) {
    alert("Please choose an image file.");
    this.value = "";
    return;
  }

  const imageUrl = URL.createObjectURL(selectedFile);
  profileImage.src = imageUrl;
  profileImage.hidden = false;
  profilePlaceholder.hidden = true;
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
