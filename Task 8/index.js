$(function () {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const table = $('#userTable');
        console.log(table)
        const data = JSON.parse(this.responseText)
        data.forEach(element => {
            // console.log(element);
            var userId = element.id
            table[0].innerHTML += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td><button><a href="detay.html?userId=${element.id}" id="buton">Detay</a> </button></td>
        </tr>`;
        });
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.send()
})