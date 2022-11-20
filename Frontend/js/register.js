window.onload = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit",  async function (e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    console.log(...formData);
    if (formData.get("password") == formData.get("confirm_password")) {
      try {
        const res = await axios.post(
          "http://localhost/Instagram_like_website/Backend/register.php",
          formData
        );
        console.log(res);
        window.location.href = "../index.html"
      } catch (e) {
        console.log(error);
      }
    }
  });
};
