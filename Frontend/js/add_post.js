window.onload = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit",  async function (e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    console.log(...formData);
      try {
        const res = await axios.post(
          "http://localhost/Instagram_like_website/Backend/add_photo.php",
          formData
        );
        console.log(res);
        
      } catch (e) {
        console.log(error);
      }
  });
};