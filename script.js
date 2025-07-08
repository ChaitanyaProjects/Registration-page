let clickCount = 0;
const shareBtn = document.getElementById("shareBtn");
const clickCounter = document.getElementById("clickCounter");
const submitBtn = document.getElementById("submitBtn");

if (localStorage.getItem("submitted") === "true") {
  document.getElementById("registrationForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
}

shareBtn.addEventListener("click", () => {
  if (clickCount < 5) {
    clickCount++;
    window.open("https://wa.me/?text=Hey%20Buddy%20,%20Join%20Tech%20For%20Girls%20Community", "_blank");
    clickCounter.innerText = `Click count: ${clickCount}/5`;

    if (clickCount === 5) {
      clickCounter.innerText += " - Sharing complete. Please continue.";
      submitBtn.disabled = false;
    }
  }
});

document.getElementById("registrationForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (clickCount < 5) return;

  const formData = new FormData(e.target);
  const file = document.getElementById("screenshot").files[0];
  const reader = new FileReader();

  reader.onloadend = async () => {
    const base64File = reader.result.split(',')[1];
    const body = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      college: formData.get("college"),
      screenshot: base64File
    };

    await fetch("https://script.google.com/macros/s/AKfycbxobFCrFzb_94wRtLzsblKTtMXyPsbTRnkp80-eFC8jYv9uL2BPyv1VgL7VpvPQawdubQ/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(body)
    });

    localStorage.setItem("submitted", "true");
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  };

  reader.readAsDataURL(file);
});
