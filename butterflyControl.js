const container = document.getElementById("container");
const btnAddAll = document.getElementById("1");
const btnAddOne = document.getElementById("2");
const btnRemoveOne = document.getElementById("3");
const btnRemoveAll = document.getElementById("4");

let availableCollection = document.getElementById("available");
let selectedCollection = document.getElementById("selected");

let activeAvailable = availableCollection.getElementsByTagName("li");
let activeSelected = selectedCollection.getElementsByTagName("li");

function click(e) {
  let setContent = [];
  let length = 0;

  let check = e.target.parentNode.id;
  switch (check) {
    case "available":
      e.target.classList.toggle("active");
      break;
    case "selected":
      e.target.classList.toggle("active");
      break;

    default:
      switch (e.target.id) {
        case "1":
          selectedCollection.innerHTML += availableCollection.innerHTML;
          availableCollection.innerHTML = null;
          for (let elem of activeSelected) {
            elem.classList.remove("active");
          }

          break;
        case "2":
          setContent = []; // у каждого зануляется массив ли и длина массива, которые мы хотим переместить
          length = 0;
          Array.from(availableCollection.children).map((el) => {
            el.classList.contains("active")
              ? ((length += 1),
                el.classList.remove("active"),
                setContent.push(el.cloneNode(true)),
                availableCollection.removeChild(el))
              : availableCollection.appendChild(el);
          });
          length > 0
            ? (setContent.map((el) => selectedCollection.appendChild(el)),
              console.log("Добавляем"),
              console.log(setContent))
            : alert("Ошибка выберерите элемент из списка");

          break;
        case "3":
          setContent = [];
          length = 0;
          console.log(selectedCollection);
          Array.from(selectedCollection.children).map((el) => {
            el.classList.contains("active")
              ? ((length += 1),
                el.classList.remove("active"),
                setContent.push(el.cloneNode(true)),
                selectedCollection.removeChild(el))
              : selectedCollection.appendChild(el);
          });
          length > 0
            ? (console.log("Добавляем"),
              setContent.map((el) => availableCollection.appendChild(el)))
            : alert("Ошибка выберерите элемент из списка");
          break;
        case "4":
          availableCollection.innerHTML += selectedCollection.innerHTML;
          selectedCollection.innerHTML = null;
          for (let elem of activeAvailable) {
            elem.classList.remove("active");
          }

          break;
        default:
          alert("не кнопка");
      }
  }
}

container.onclick = click;
