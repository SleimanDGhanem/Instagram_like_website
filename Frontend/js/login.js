// Get function
window.onload = () => {
  // retrieve form element
  const form = document.getElementById("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // create form data class and add data
    const formData = new FormData(form);
    console.log(...formData);

    try {
      const res = await axios.post(
        "http://localhost/Instagram_like_website/Backend/login.php",
        formData
      );
      console.log(res);
      window.location.href = "html/feed.html"
    } catch (e) {
      console.log(error);
    }
  });
};

