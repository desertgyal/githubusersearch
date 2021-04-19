var userQuery = document.getElementById("input");
var result = document.getElementById("result");
var total = document.getElementById("count");
var pages = document.getElementById("pages");
var pfp = '';
var username = '';
let resultCount = 0;
let clicked = false;

function showResults(){
    clear();
    const url = "https://api.github.com/search/users?q=" + userQuery.value + "+in:user&per_page=50";
    $.get(url, function(data) {
        data.items.forEach(item => {
            resultCount++;
            pfp = `<img src= ${item.avatar_url}/>`
            username = `<a href=http://github.com/${item.login} target="_blank"><h1>${item.login}</h1></a>`
            result.innerHTML += pfp;
            result.innerHTML += username;
        });
        total.innerHTML += `${data.total_count} user(s) found`;
    });
}

function clear() {
    result.innerHTML = '';
    total.innerHTML = '';
}