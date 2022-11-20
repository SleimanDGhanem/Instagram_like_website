window.onload = () => {
  const form = document.getElementById("form");
  console.log("hello ");
  form.addEventListener("submit",  function (e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    console.log(...formData);
    if (formData.get("password") == formData.get("confirm_password")) {
      try {
        const res = axios.post(
          "http://localhost/Instagram_like_website/Backend/register.php",
          formData
        );
        console.log(res);
      } catch (e) {
        console.log(error);
      }
    }
  });
};
