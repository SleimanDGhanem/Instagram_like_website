window.onload = () => {
  axios
    .get("http://localhost/Instagram_like_website/Backend/get_posts.php")
    .then((res) => {
      const pics = res.data;
      console.log(pics);
      const mainContainer = document.getElementById("feed");
      
      let box = "hello";
      for (let i = 0; i < pics.length; i++) {
        console.log("uyes");
        box += `
    <div class="post">
      <div class="title"><p class="username">username</p><i class="fa fa-ellipsis"></i></div>
      <img class="photo" src="../images/${pics[i]['filename']}" alt="template of a photo">
      <input type="button" value="like"></input>
      <input type="button" value="comment"></input>
      <div class="captions"><strong>AhmadDarzi</strong><p>This looks great</p></div>
    </div>
      `;
    }
    console.log("hello")
    console.log(box);
    mainContainer.innerHTML = "";
    console.log(res)
    })
    .catch((err) => console.log(err));
};
