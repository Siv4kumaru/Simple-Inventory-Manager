let form = document.querySelector('#form');
let input = document.querySelector('#text');
let posts = document.querySelector('#posts');
let msg = document.querySelector('#msg');


function formvalidation() {
    if (input.value === '') {
        msg.innerHTML = "Please enter a value";
        msg.style.color = "red";
        console.log("Please enter a value");
    } else {
        acceptdata();
        msg.innerHTML = "";
        console.log("Value entered");
    }
}

let data = {};
let count = 0;
function fun() {
    if (event.key == "Tab") {
        event.preventDefault();
        input.value += "    ";
    }
}

function createPost() {
    count += 1;
    posts.innerHTML += `
    <div class="small">
        <div class="dataa" style="text-wrap:wrap;"><pre>${data.text}</pre></div>
            <button class="btn btn-primary" onclick="editPost(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
            </button>
            <button class="btn btn-danger" onclick="deletePost(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                 <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                   </svg>
            </button>
    </div>
    `;
    input.value = "";
}

function deletePost(d) { 
    d.parentElement.remove();
    count -= 1;
}
function editPost(e) {
    let text = e.parentElement.querySelector(".dataa").innerText;
    input.value = text;
    e.parentElement.remove();
}

function acceptdata() {
    data = {
        "text": input.value
    }
    console.log(data);
    createPost();
}
