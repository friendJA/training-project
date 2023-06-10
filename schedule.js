let data = [];

function addData() {
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("textarea").value

  if (option1 && option2 && option3) {
    const newData = {
      option1,
      option2,
      option3,
      option4
    };

    data.push(newData);

    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("option3").value = "";
    document.getElementById("option4").value = "";
  } else {
    alert("баарын нада");
  }
}

function showData() {
    if (data.length > 0) {
      let dataDisplay = document.getElementById("data-display");
      let html = "";

      for (let i = 0; i < data.length; i++) {
        html += '<div class="data-item">';
        html += '<p>День Недели: '+ '<span class="data-items">' + data[i].option1 + '</span>'+ '</p>';
        html += '<p>Время: ' + '<span class="data-items">' + data[i].option2 + '</span>'+ '</p>';
        html += '<p>Приоритет:  '+ '<span class="data-items">' + data[i].option3 + '</span>'+ '</p>';
        html += '<p>Предмет:' + data[i].option4 + '</p>'; 
        html += '</div>';
      }

      dataDisplay.innerHTML = html;
    } else {
      alert("неправильно");
    }
  }




