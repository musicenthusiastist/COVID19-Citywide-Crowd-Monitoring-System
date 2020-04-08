let m = document.getElementById("maincontent");
let testList = document.getElementById("dropdownContent").getElementsByTagName("input");
let checkAns = document.getElementById("maincontent").getElementsByTagName("div");
let ans_keys = [];

function dropDown(){
  document.getElementById("dropdownContent").style.display="block";
}

function out(){
  document.getElementById("dropdownContent").style.display="none";
}

function loadTest(){
  while (m.hasChildNodes()) {
    m.removeChild(m.childNodes[0]);
  }
  let toggle = false;
  for (let i = 0; i < testList.length; i++) {
    if (testList[i].checked) {
      let testName = "Test " + (i+1);
      for (var j = 0; j < tests[testName].length; j++) {
        toggle = !toggle;
        let div = document.createElement("div");
        div.setAttribute("id","questions")
        let page = document.createElement("p");

        m.appendChild(div);
        div.appendChild(page);
        page.innerHTML = tests[testName][j].question;
        div.style.backgroundColor = toggle? "Aqua": "AntiqueWhite";
        ans_keys += tests[testName][j].correct_answer + ',';

        let ans = tests[testName][j].correct_answer;
        let choices = insertAns(ans,tests[testName][j].incorrect_answers);

        for (var k = 0; k < 4; k++) {
          let radio = document.createElement("input");
          let name = "radans" +i+ j;
          radio.setAttribute("type","radio");
          radio.setAttribute("name",name);
          let label = document.createElement("label");
          div.appendChild(radio);
          div.appendChild(label);

          let c = choices.split(",");
          label.innerText = c[k];
        }
      }
    }
  }
  let Clearbutt = document.createElement("button");
  Clearbutt.setAttribute("type","button");
  Clearbutt.setAttribute("onclick","clearTest()");
  Clearbutt.innerHTML = "Clear Test";
  m.appendChild(Clearbutt);

  let Checkbutt = document.createElement("button");
  Checkbutt.setAttribute("type","button");
  Checkbutt.setAttribute("onclick","checkTest()");
  Checkbutt.innerHTML = "Check Test";
  m.appendChild(Checkbutt);
}

function insertAns(a, b){
  let r = Math.floor(Math.random()*3);
  let answers = b.splice(r,0,a);
  answers = b.join();
  return answers;
}

function clearTest(){
  var txt;
  var r = confirm("Are you sure that you want to clear?");
  if (r == true) {
    while (m.hasChildNodes()) {
      m.removeChild(m.childNodes[0]);
    }
    loadTest();
    alert("Test cleared!");
  }

}

function checkTest(){
  let flag = false;
  let toggle = false;
  //val.style.display="none";
  for (var i = 0; i < checkAns.length; i++) {
    let answered = checkAns[i].getElementsByTagName("input");
    let val = document.createElement("var");
    checkAns[i].appendChild(val);
    for (var j = 0; j < 4; j++) {
      if(answered[j].checked){
        let qval = checkAns[i].getElementsByTagName("var");
        qval.innerHTML ="1";
        //console.log("Question ",i,qval.innerHTML);
        break;
      }
    }
    if (checkAns[i].getElementsByTagName("var").innerHTML !== "1") {
      checkAns[i].style.backgroundColor = "Red";
      flag = true;
    }else {
      toggle = !toggle;
      checkAns[i].style.backgroundColor = toggle? "Aqua": "AntiqueWhite";
    }
  }

  if (flag) {
    alert("Please answer all questions!");
  }else {
    let a = ans_keys.split(",");
    let div = document.createElement("div");
    let p_score = document.createElement("p");
    div.setAttribute("id", "score");
    m.appendChild(div);
    let usr_score = div.appendChild(p_score);
    let score = 0;
    p_score.style.backgroundColor = "Orange";
    p_score.innerHTML = "<b>Your total score is: </b>";
    for (let i = 0; i < checkAns.length-1; i++) {
      let checkedAns = checkAns[i].getElementsByTagName("input");
      for (var j = 0; j < 4; j++) {
        if (checkedAns[j].checked) {
          let ansText = checkedAns[j].nextSibling;
          if (ansText.innerHTML == a[i]) {
            score++;
            break;
          }
        }
      }
    }
    p_score.innerHTML+=score;
    alert("Check your score at the bottom! ");
  }
}

function randomTest(){
  while (m.hasChildNodes()) {
    m.removeChild(m.childNodes[0]);
  }
  req = new XMLHttpRequest();
  req.onreadystatechange = function(){
    if(this.readyState == 4){
      let data = JSON.parse(this.responseText);
      if(this.status==200 && data.response_code==0){
        //let data = JSON.parse(this.responseText);
        //console.log(data.results);
        let toggle = false;
        for (var j = 0; j < data.results.length; j++) {
          toggle = !toggle;
          let div = document.createElement("div");
          div.setAttribute("id","questions")
          let page = document.createElement("p");

          m.appendChild(div);
          div.appendChild(page);
          page.innerHTML = data.results[j].question;
          div.style.backgroundColor = toggle? "Aqua": "AntiqueWhite";
          ans_keys += data.results[j].correct_answer + ',';
          let ans = data.results[j].correct_answer;
          let choices = insertAns(ans,data.results[j].incorrect_answers);

          for (var k = 0; k < 4; k++) {
            let radio = document.createElement("input");
            let name = "radans" +j;
            radio.setAttribute("type","radio");
            radio.setAttribute("name",name);
            let label = document.createElement("label");
            div.appendChild(radio);
            div.appendChild(label);

            let c = choices.split(",");
            label.innerText = c[k];
          }
        }
        let Clearbutt = document.createElement("button");
        Clearbutt.setAttribute("type","button");
        Clearbutt.setAttribute("onclick","clearTest()");
        Clearbutt.innerHTML = "Clear Test";
        m.appendChild(Clearbutt);

        let Checkbutt = document.createElement("button");
        Checkbutt.setAttribute("type","button");
        Checkbutt.setAttribute("onclick","checkTest()");
        Checkbutt.innerHTML = "Check Test";
        m.appendChild(Checkbutt);

      }else{
        alert("Request FAILED!");
      }
    }
  }
  req.open("GET", "https://opentdb.com/api.php?amount=10",true);
  req.send();
}
