let dataBro = [];
function btnClickHandler() {
  var xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
      var dataObj = JSON.parse(data);

      for (var i = 0; i < dataObj.length; i++) {
        dataBro.push(dataObj[i]);
      }
    //   let SuccessMessage = document.getElementById("SuccessMessage");
    //   SuccessMessage.style.width = "50%";
    //   SuccessMessage.style.display = "flex%";
    //   SuccessMessage.style.margin = "20px";

    //   SuccessMessage.style.alignItems = "center";
    //   SuccessMessage.style.justifyItems = "center";
    //   SuccessMessage.style.justifyContent = "center";


    //     SuccessMessage.innerHTML = "Data Fetched Successfully!";
        document.getElementById("popBtn").style.display = "inline";
    }
};

const API_URL = "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";

xhr.open("GET", API_URL);
  xhr.send();
  console.log("We are done fetching data!");
}

function popHandler(key){
    let currentElement = `cardComponent${key}`;
    let list = document.getElementById(currentElement);
    
    str = "";
    str += `<h2 class="card-title" id="cardTitle">${dataBro[key].title}</h2>`;
    str += `<p class="card-text" id="cardBody">${dataBro[key].body}</p>`;
    
    list.innerHTML = str;
}

function populateBlogs(){
    document.getElementById("parentComponent").style.display = "grid";    
    for(let i = 1; i < 10; i++){
        popHandler(i);
    }
    console.log("Populating Data : )");
    document.getElementById("clearBtn").style.display = "inline";
}

function clearBlogs(){
    dataBro = [];
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("popBtn").style.display = "none";
    document.getElementById("parentComponent").style.display = "none";    
    console.log('Data Cleared Successfully');
}