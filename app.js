const input = document.getElementById('input');
const word1 =document.getElementById('span1')
const word2 =document.getElementById('span2')
const word3 =document.getElementById('span3')
input.addEventListener("input", (e) => {
  let value = e.target.value;
  let newValue = String(value);
  

function getSubstring(str, start, end) {
  char1 = str. indexOf(start) + 1;
  char2 = str. lastIndexOf(end);
  return str. substring(char1, char2);
}

let substring1 = getSubstring(newValue, '*', '*');
let substring2 = getSubstring(newValue, '#', '#');
let substring3 = getSubstring(newValue, '$', '$');
word1.textContent=substring1
word2.textContent=substring2
word3.textContent=substring3
})

