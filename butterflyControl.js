const container = document.getElementById("container");
const btnAddAll = document.getElementById("1");
const btnAddOne = document.getElementById("2");
const btnRemoveOne = document.getElementById("3");
const btnRemoveAll = document.getElementById("4");

let availableCollection = document.getElementById("available");
let selectedCollection = document.getElementById("selected");

let activeAvailable = availableCollection.getElementsByTagName("li");
let activeSelected = selectedCollection.getElementsByTagName("li");

const checkActions = {
  'available': (e) => e.target.classList.toggle("active"),
  'selected': (e) => e.target.classList.toggle("active"),
};

const swapFromAvaibleAll = () => {
    selectedCollection.innerHTML += availableCollection.innerHTML;
    availableCollection.innerHTML = null;
    for (let elem of activeSelected) {
      elem.classList.remove("active");
    }
}

const swapFromAvaibleSingle = () => {
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
    length > 0 ? setContent.map((el) => selectedCollection.appendChild(el)) : alert("Ошибка выберерите элемент из списка");
}

const swapFromSelectedSingle = () => {
    setContent = [];
    length = 0;
    Array.from(selectedCollection.children).map((el) => {
      el.classList.contains("active")
        ? ((length += 1),
          el.classList.remove("active"),
          setContent.push(el.cloneNode(true)),
          selectedCollection.removeChild(el))
        : selectedCollection.appendChild(el);
    });
    length > 0 ? setContent.map((el) => availableCollection.appendChild(el)) : alert("Ошибка выберерите элемент из списка");
}

const swapFromSelectedAll = () => {
    availableCollection.innerHTML += selectedCollection.innerHTML;
    selectedCollection.innerHTML = null;
    for (let elem of activeAvailable) {
      elem.classList.remove("active");
    }
}

const checkClickBtn = {
    '1': swapFromAvaibleAll,
    '2': swapFromAvaibleSingle,
    '3': swapFromSelectedSingle,
    '4': swapFromSelectedAll
}

function checkedEvent(e) {
  let setContent,length

  let check = e.target.parentNode.id;
  let clickBtn = e.target.id
  return check ? checkActions[check](e) : checkClickBtn[clickBtn](e)

}


container.onclick = checkedEvent;