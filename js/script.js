tailwind.config = {
    theme: {
        extend: {},
        screens: {
            'xs': '0px',
            // => @media (min-width: 0px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '1700px',
            // => @media (min-width: 1536px) { ... }
        }
    }
}
// ================================================================

function handleSmallDeviceMenu() {
    document.getElementById('leftSideBar').classList.toggle("leftSideBarActive")
}

const { pathname } = location;
const navlinks = document.querySelectorAll(`[href='${pathname}']`)
const navlinksNotFound = document.querySelectorAll("[href='/index.html']")

navlinks.forEach(links => {
    links.classList.add('activeLink')
})
if (pathname === "/") {
    navlinksNotFound.forEach(links => {
        links.classList.add('activeLink')
    })
}


document.getElementById('rightSidefilterBtn').addEventListener('click', function () {
    document.getElementById('filterMenuBox').classList.toggle('filterMenuActive')
})
document.getElementById('rightSidefilterBtn2').addEventListener('click', function () {
    document.getElementById('filterMenuBox').classList.toggle('filterMenuActive')
})


// Set Date Picker value
document.getElementById('DatePicker').valueAsDate = new Date();
document.getElementById('DatePicker2').valueAsDate = new Date();








// for add tags menu in filter
const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");

let allTags = ["tag 1", "tag 2", "tag 3", "tag 4", "tag 5", "tag 6",];

let allSelectedTags = [];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    allTags.forEach(tag => {
        let isSelected = tag === selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${tag}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateSelectedAllTags() {
    selectBtn.firstElementChild.innerHTML = "";

    allSelectedTags.forEach(selectedTag => {
        selectBtn.firstElementChild.innerHTML += `
            <div class="bg-white rounded-lg flex justify-between items-center w-20 px-2">
            <p class="selectedTag">${selectedTag}</p>
           <button onclick="deleteATagFromArray(this)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
           </button>
           </div>
           `;
    })
    if (allSelectedTags.length <= 0) {
        selectBtn.firstElementChild.innerText = "Select An Tag";
    }
}

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");

    const findPreviousElement = allSelectedTags.find(tg => tg === selectedLi.innerText)
    if (!findPreviousElement) {
        allSelectedTags.push(selectedLi.innerText)
    }
    updateSelectedAllTags()

    // for disable label
    if (allSelectedTags.length >= 1) {
        document.getElementById('wraperExpandLabel').setAttribute('for', "")
    }
}

function deleteATagFromArray(easf) {
    const forDeleteText = easf.previousElementSibling.innerText;
    const afterDeletedElement = allSelectedTags.filter(tg => tg !== forDeleteText)
    allSelectedTags = afterDeletedElement
    updateSelectedAllTags()

    // for enable label
    if (allSelectedTags.length <= 0) {
        document.getElementById('wraperExpandLabel').setAttribute('for', "wraperExpandBtn")
    }
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = allTags.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

document.getElementById('wraperExpandBtn').addEventListener("click", () => wrapper.classList.toggle("active"));

