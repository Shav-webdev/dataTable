const headObj = {
    id: "id",
    name: "name",
    surname: "surname",
    age: "age",
    specialization: "specialization",
    city: "city",
    tel: "tel",
};

function User(id, name, surname, age, specialization, city, tel) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.specialization = specialization;
    this.city = city;
    this.tel = tel;
}

let headObjValuesArr = Object.values(headObj);
let arrayCreatedByChange;
let usersArr = [];
let countOfHeadObjProperties = 0;
let countToShow = 5;
let countOfPaginationButtons;
let currentArrayIndexToShowOnDataTable;

let john = new User(
    1,
    "John",
    "Smith",
    25,
    "Web developer",
    "London",
    7564856,
);

let jack = new User(
    2,
    "Jack",
    "Brown",
    24,
    "Back End developer",
    "Liverpool",
    7564857,
);

let alice = new User(
    3,
    "Alice",
    "Watson",
    28,
    "Web designer",
    "San Francisco",
    7564858,
);

let emma = new User(
    4,
    "Emma",
    "Smith",
    23,
    "Web designer",
    "San Francisco",
    7564859,
);

let george = new User(
    5,
    "George",
    "Washington",
    23,
    "Front End developer",
    "London",
    7564850,
);

let daniel = new User(
    6,
    "Daniel",
    "Richie",
    2,
    "Web developer",
    "London",
    7564856,
);

let caroline = new User(
    7,
    "Caroline",
    "Cocks",
    12,
    "Back End developer",
    "Liverpool",
    7564857,
);

let jonson = new User(
    8,
    "Jonson",
    "Doe",
    1,
    "Senior JS developer",
    "Manchester",
    7564858,
);

let leonel = new User(
    9,
    "Leonel",
    "Montana",
    11,
    "Web designer",
    "France",
    7564859,
);

let boris = new User(
    10,
    "Boris",
    "Richie",
    2,
    "Web developer",
    "London",
    7564856,
);

let henry = new User(
    11,
    "Henry",
    "Ford",
    12,
    "Senior Back End developer",
    "Liverpool",
    7564857,
);

let nicky = new User(
    12,
    "Nicky",
    "Mina",
    1,
    "QA",
    "San Francisco",
    7564858,
);

let nikolia = new User(
    13,
    "Nikolia",
    "Montana",
    11,
    "SEO",
    "Sidney",
    7564859,
);

let pete = new User(
    14,
    "Pete",
    "Washington",
    23,
    "Front End developer",
    "London",
    7564850,
);

let ahmed = new User(
    15,
    "Ahmed",
    "Richie",
    2,
    "Junior web developer",
    "London",
    7564856,
);

let rose = new User(
    16,
    "Rose",
    "Cocks",
    12,
    "Back End developer",
    "Liverpool",
    7564857,
);

let hillary = new User(
    17,
    "Hillary",
    "Doe",
    1,
    "Junior web designer",
    "Sidney",
    7564858,
);

let duff = new User(
    18,
    "Duff",
    "Montana",
    11,
    "HR",
    "San Francisco",
    7564859,
);

let arnold = new User(
    19,
    "Arnold",
    "Richie",
    2,
    "Mid JS developer",
    "London",
    7564856,
);

let raymond = new User(
    20,
    "Raymond",
    "Ford",
    12,
    "Back End developer",
    "Madrid",
    7564857,
);

let tina = new User(
    21,
    "Tina",
    "Mina",
    1,
    "QA",
    "San Francisco",
    7564858,
);

let cloe = new User(
    22,
    "Cloe",
    "Montana",
    11,
    "QA",
    "Madrid",
    7564859,
);

const sortIcon = `<button class="sort-button"><i class="fas fa-sort sort_icon_style"></i></button>`;

let arrayOfObjectsToShow = [];




window.onload = function () {
    addUsersIntoArr();
    getCountOfHeadObjProperties();
    createSearchAndSelectForm();
    createDataTable(usersArr);
    getCountToShow();
    changePagesOfDataTable();
    //showInformationAboutData();
};

function addUsersIntoArr() {
    usersArr.push(john, jack, alice, emma, george,
        daniel, caroline, jonson, leonel, boris,
        henry, nicky, nikolia, pete, ahmed, rose,
        hillary, duff, arnold, raymond, tina, cloe);
}



function getCountOfHeadObjProperties() {
    for (let prop in headObj) {
        if (headObj.hasOwnProperty(prop)) {
            ++countOfHeadObjProperties;
        }
    }
}

function createSearchAndSelectForm() {
    let formContainer = document.getElementById("form_container");
    let formNestedContainer = document.createElement("div");
    formNestedContainer.setAttribute("class", "form-group");
    formNestedContainer.setAttribute("id", "form-container");
    formContainer.appendChild(formNestedContainer);
    let searchInput = document.createElement("input");
    searchInput.setAttribute("type", "search");
    searchInput.setAttribute("class", "form-control");
    searchInput.setAttribute("id", "search-input");
    searchInput.setAttribute("placeholder", "Search");
    formNestedContainer.appendChild(searchInput);

    let selectCountToShow = document.createElement("select");
    selectCountToShow.setAttribute("name", "choice_count");
    selectCountToShow.setAttribute("id", "select_count_to_show");
    selectCountToShow.setAttribute("class", "form-control");
    formNestedContainer.appendChild(selectCountToShow);
    for (let i = 1; i < 4; i++) {
        let optionForSelect = document.createElement("option");
        optionForSelect.setAttribute("value", `${i * 5}`);
        selectCountToShow.appendChild(optionForSelect);
        optionForSelect.innerText = (i * 5).toString();
    }
    searchInput.addEventListener("keyup", searchForMatches);
    searchInput.addEventListener("keydown", resetSearchMatches);
    selectCountToShow.addEventListener("change", getCountToShow);
    selectCountToShow.addEventListener("change", removeActiveClass);
    selectCountToShow.addEventListener("change", changePagesOfDataTable);
}


function createDataTable(data = usersArr) {
    if (document.getElementById('tr-header-table')) {
        document.getElementById('tr-header-table').remove();
    }
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-hover table-striped table-dark');
    let tableHead = document.createElement('thead');
    let tableRowHead = document.createElement('tr');
    tableRowHead.style.borderRadius = "12px";
    table.setAttribute('id', 'tr-header-table');
    let tableContainer = document.getElementById("table-container");
    tableHead.appendChild(tableRowHead);
    table.appendChild(tableHead);
    tableContainer.appendChild(table);
    for (let i = 0; i < countOfHeadObjProperties; i++) {
        if (headObjValuesArr[i]) {
            let th = document.createElement('th');
            th.setAttribute("class", "header-table-item");
            th.setAttribute("scope", "col");
            th.innerText = headObjValuesArr[i];
            th.innerHTML += sortIcon;
            tableRowHead.appendChild(th);
        }
    }

    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    for (let i = 0; i < data.length; i++) {
        let tableRowBody = document.createElement("tr");
        for (let j = 0; j < countOfHeadObjProperties; j++) {
            if (j === 0) {
                let tableRowBodyHead = document.createElement("th");
                tableRowBodyHead.setAttribute("scope", "row");
                tableRowBodyHead.innerText = data[i].id;
                tableRowBody.appendChild(tableRowBodyHead);
            } else {
                let td = document.createElement("td");
                tableRowBody.appendChild(td);
                let headObjValuesArray = Object.values(headObj);
                td.innerText = data[i][headObjValuesArray[j]];
            }
        }
        tableBody.appendChild(tableRowBody);
        document.getElementsByTagName('table')[0].appendChild(tableBody);
    }
    let sortByClassButton = document.getElementsByClassName("sort-button");
    for (let i = 0; i < sortByClassButton.length; i++) {
        sortByClassButton[i].setAttribute("id", `sortBtn-${i}`);
        sortByClassButton[i].addEventListener("click", function () {
            let arr = Object.values(headObj);
            return sortOrder(arr[i]);
        });
    }


}

function createPaginationContainer() {
    let tableContainer = document.getElementById("table-container");
    let paginationContainer = document.getElementById("pagination_container");
    if (paginationContainer) {
        paginationContainer.remove();
    }
    paginationContainer = document.createElement("div");
    paginationContainer.setAttribute("id", "pagination_container");
    tableContainer.appendChild(paginationContainer);
}

function resetSearchMatches() {
    matchesArr = [];
}

function searchForMatches() {
    let arr;
    if (matchesArr.length !== 0) {
        arr = matchesArr;
    } else {
        arr = usersArr;
    }

    let searchInput = document.querySelector("#search-input");
    searchInput.addEventListener("keyup", searchForMatches);
    searchInput.addEventListener("keydown", resetSearchMatches);
    let searchInputValue = searchInput.value.toLowerCase();
    let usersValuesArr = [];
    for (let prop of arr) {
        let objPropsValues = (Object.values(prop));
        usersValuesArr = usersValuesArr.concat(objPropsValues);
    }
    let usersValuesArrLength = usersValuesArr.length;
    outer:for (let i = 0; i < usersValuesArrLength; i++) {
        let usersValuesArrItem = usersValuesArr[i].toString();
        let usersValuesArrItemLength = usersValuesArrItem.length;
        for (let j = 0; j < usersValuesArrItemLength; j++) {
            usersValuesArrItem = usersValuesArrItem.toLowerCase();
            if (usersValuesArrItem.includes(searchInputValue.toString())) {
                getMatches(arr, usersValuesArrItem);
                continue outer;
            }
        }
    }
    getCountOfPaginationButtons(matchesArr);
    createDataTable(matchesArr);
    changePagesOfDataTable();
}

let matchesArr = [];

function getMatches(objectsArr, match) {
    let objArrLength = objectsArr.length;
    for (let i = 0; i < objArrLength; i++) {
        let objValuesArr = Object.values(objectsArr[i]);
        let objValuesArrLength = objValuesArr.length;
        for (let j = 0; j < objValuesArrLength; j++) {
            if (typeof objValuesArr[j] === "number") {
                objValuesArr[j] = objValuesArr[j].toString();
            }
            objValuesArr[j] = objValuesArr[j].toLowerCase();
            if (objValuesArr.includes(match)) {
                if (!(matchesArr.includes(objectsArr[i]))) {
                    matchesArr.push(objectsArr[i]);
                }
            }
        }
    }
}

let sortByDescendingOrder = true;

function sortOrder(value, arrayForSort = arrayOfObjectsToShow) {
    if (arrayForSort.length === 0) {
        if (matchesArr.length !== 0) {
            arrayForSort = matchesArr;
        } else {
            arrayForSort = usersArr;
        }
    }
    if (sortByDescendingOrder === true) {
        arrayForSort.sort((a, b) => {
            if (typeof a[value] === "number" && typeof b[value] === "number") {
                return b[value] - a[value];
            } else if (typeof a[value] === "string" && typeof b[value] === "string") {
                if (a[value] < b[value]) {
                    return -1;
                }
            }
        });
        sortByDescendingOrder = false;
    } else {
        arrayForSort.sort((a, b) => {
            if (typeof a[value] === "number" && typeof b[value] === "number") {
                return a[value] - b[value];
            } else if (typeof a[value] === "string" && typeof b[value] === "string") {
                if (a[value] > b[value]) {
                    return -1;
                }
            }
        });
        sortByDescendingOrder = true;
    }
    createDataTable(arrayForSort);
}

function getCountToShow() {
    countToShow = +document.getElementById("select_count_to_show").value;
    currentArrayIndexToShowOnDataTable = null;
    getCountOfPaginationButtons();
}

function getCountOfPaginationButtons(arr = usersArr) {
    let countOfObjects = arr.length;

    if (countOfObjects > countToShow) {
        countOfPaginationButtons = countOfObjects % countToShow;
        if (countOfPaginationButtons === 0) {
            countOfPaginationButtons = countOfObjects / countToShow;
        } else {
            countOfPaginationButtons = Math.floor(countOfObjects / countToShow) + 1;
        }
    }else {
        countOfPaginationButtons = 1;
    }
    createTableBySelectChange(countToShow);
    insertPaginationButtons(countOfPaginationButtons);
}

function removePagination() {
    if (document.getElementById('btn-prev') &&
        document.getElementById('btn-next') &&
        document.getElementById('pagination_container')) {
        document.getElementById('btn-prev').remove();
        document.getElementById('btn-next').remove();
        document.getElementById('pagination_container').remove();
    }

    let countOfBtn;
    if (usersArr.length % countToShow === 0) {
        countOfBtn = usersArr.length / countToShow;
    } else {
        countOfBtn = Math.floor(usersArr.length / countToShow) + 1;
    }
    for (let i = 1; i < countOfBtn; i++) {
        let btnItem = document.getElementById('btn-' + i);
        if (btnItem) {
            btnItem.remove();
        }
    }
}

function insertPaginationButtons(count) {
    let arr = [];
    while (count > 0) {
        arr.push(count);
        count--;
    }
    arr.reverse();
    removePagination();
    removeActiveClass();
    let container = document.getElementById("pagination_container");
    let prevBtn = document.createElement("button");
    prevBtn.setAttribute("class", "btn btn-link");
    prevBtn.setAttribute("id", "btn-prev");
    prevBtn.innerText = `Previous`;
    container.appendChild(prevBtn);

    for (let i = 0; i < arr.length; i++) {
        let button = document.createElement("button");
        button.setAttribute("class", "btn btn-dark btn-page");
        button.setAttribute("id", "btn-" + i);
        button.innerText = `${i + 1}`;
        container.appendChild(button);
    }

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "btn btn-link");
    nextBtn.setAttribute("id", "btn-next");
    nextBtn.innerText = `Next`;
    container.appendChild(nextBtn);
}

function createTableBySelectChange(count) {
    createPaginationContainer();
    arrayOfObjectsToShow = [];
    for (let i = 0; i < count; i++) {
        arrayOfObjectsToShow.push(usersArr[i]);
    }
    createDataTable(arrayOfObjectsToShow);
}



function changePagesOfDataTable() {
    let arrayForPagination = [];
    arrayCreatedByChange = arrayForPagination;
    //console.log(arrayCreatedByChange);
    let count = countToShow;
    let btnPaginationArray = Array.from(document.querySelectorAll(".btn-page"));
    for (let i = 0; i < usersArr.length; i += count) {
        for (let j = 0; j < btnPaginationArray.length; j++) {
            if (j * count === i) {
                arrayForPagination.push(usersArr.slice((j * count), (j * count + count)));
                btnPaginationArray[j].addEventListener("click", function () {
                    removeActiveClass();
                    this.classList.add("active");
                    currentArrayIndexToShowOnDataTable = Number(this.innerText - 1);
                    createDataTable(arrayForPagination[j]);
                    addRemoveDisableAttrOfPaginationBtn();
                  //  showInformationAboutData(arrayForPagination[j]);
                });
            }
        }
    }
    prevNextButtonsFunctionality();
}

function addRemoveDisableAttrOfPaginationBtn() {
    let btnPaginationArray = document.querySelectorAll(".btn-page");
    let prevBtn = document.getElementById("btn-prev");
    let nextBtn = document.getElementById("btn-next");
    let firstBtn = btnPaginationArray[0];
    let lastBtn = btnPaginationArray[btnPaginationArray.length - 1];

    if (firstBtn.classList.contains("active")) {
        prevBtn.setAttribute("disabled", "disabled");
    }else {
        prevBtn.removeAttribute("disabled");
    }
    if (lastBtn.classList.contains("active")) {
        nextBtn.setAttribute("disabled", "disabled");
    }else{
        nextBtn.removeAttribute("disabled");
    }
}

function removeActiveClass() {
    let btnPaginationArray = Array.from(document.querySelectorAll(".btn-page"));
    for (let i = 0; i < btnPaginationArray.length; i++) {
        btnPaginationArray[i].classList.remove("active");
    }
}

function prevNextButtonsFunctionality() {
    let prevBtn = document.getElementById("btn-prev");
    let nextBtn = document.getElementById("btn-next");
    let btnPaginationArray = document.querySelectorAll(".btn-page");
    prevBtn.addEventListener("click", () => {
        let isset = null;
        for (let i = 0; i < btnPaginationArray.length; i++) {
            if (btnPaginationArray[i].classList.contains('active')) {
                isset = true;
            }
        }
        if (isset) {
            removeActiveClass();
            createDataTable(arrayCreatedByChange[currentArrayIndexToShowOnDataTable -= 1]);
            btnPaginationArray[currentArrayIndexToShowOnDataTable].classList.add("active");
            addRemoveDisableAttrOfPaginationBtn();
            //showInformationAboutData(arrayCreatedByChange[currentArrayIndexToShowOnDataTable -= 1]);
        } else {
            currentArrayIndexToShowOnDataTable = btnPaginationArray.length - 1;
            btnPaginationArray[currentArrayIndexToShowOnDataTable].classList.add("active");
        }
    });
    nextBtn.addEventListener("click", () => {
        let isset = null;
        for (let i = 0; i < btnPaginationArray.length; i++) {
            if (btnPaginationArray[i].classList.contains('active')) {
                isset = true;
            }
        }
        if (isset) {
            removeActiveClass();
            createDataTable(arrayCreatedByChange[currentArrayIndexToShowOnDataTable += 1]);
            btnPaginationArray[currentArrayIndexToShowOnDataTable].classList.add("active");
            addRemoveDisableAttrOfPaginationBtn();
           // showInformationAboutData(arrayCreatedByChange[currentArrayIndexToShowOnDataTable += 1]);
        } else {
            currentArrayIndexToShowOnDataTable = 0;
            btnPaginationArray[currentArrayIndexToShowOnDataTable].classList.add("active");
        }
    });
}

/*

function showInformationAboutData(index) {
    let countOfAllObj = usersArr.length;
    let arr = arrayCreatedByChange;
    index = currentArrayIndexToShowOnDataTable;
    const tableContainer = document.getElementById("table-container");
    const infoAboutDataTable = document.createElement("div");
    infoAboutDataTable.setAttribute("id", "info_container");
    tableContainer.appendChild(infoAboutDataTable);
    console.log("arr" + arr);
    console.log("index" + index);
    let begin = arr[index][0].id;
    let end = arr[index][length].id;

    console.log("begin" + begin);
    console.log("end" + end);
}
*/
