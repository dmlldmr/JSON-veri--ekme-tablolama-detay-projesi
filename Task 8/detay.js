function postOn() {
    $("#posts").toggle("slow");
  }
  //Kullanıcıların bir web sayfasına giriş yapma anından, içeriğin yüklenmesine kadar geçen süre
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");

  $(function () {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const table = $('#userDetail');
      const data = JSON.parse(this.responseText)
      // console.log(element);
      table[0].innerHTML += `
              <p>${data.id}</p>
              <p>${data.name}</p>
              <p>${data.username}</p>
              <p>${data.email}</p>`;}
    xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`)
    xhr.send()
  })

  $(function () {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const table = $('#userDetail');
      const data2 = JSON.parse(this.responseText)
      const titleArray = data2;
      let titles = []
      let texts = []

      titleArray.forEach(item => {
        const title = item.title
        titles.push(title)
        const text = item.body
        texts.push(text)
        console.log(title)
      });
      $("#posts").html(`
                  <p><strong>${titles + ", "}</strong>${texts}</p>`)
    }
    xhr.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    xhr.send()
  })