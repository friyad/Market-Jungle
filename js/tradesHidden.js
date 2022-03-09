
// --------------------------------------------------------------------------------------\\
// --------------------------------for hidden Trades Page--------------------------------\\
// --------------------------------------------------------------------------------------\\


// for add tags menu in filter
const tradesWrapper = document.querySelector(".tradesAddFilter__wrapper"),
    tradesSelectBtn = tradesWrapper.querySelector(".tradesAddFilter__select-btn"),
    tradesSearchInp = tradesWrapper.querySelector("input"),
    tradesOptions = tradesWrapper.querySelector(".trades__options");

let tradesAllTags = ["tag 1", "tag 2", "tag 3", "tag 4", "tag 5", "tag 6",];

let tradesAllSelectedTags = [];

function addNewTag(selectedTag) {
    tradesOptions.innerHTML = "";
    tradesAllTags.forEach(tag => {
        let isSelected = tag === selectedTag ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${tag}</li>`;
        tradesOptions.insertAdjacentHTML("beforeend", li);
    });
}
addNewTag();

function updateSelectedAllTags() {
    tradesSelectBtn.firstElementChild.innerHTML = "";

    tradesAllSelectedTags.forEach(selectedTag => {
        tradesSelectBtn.firstElementChild.innerHTML += `
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
    if (tradesAllSelectedTags.length <= 0) {
        tradesSelectBtn.firstElementChild.innerText = "Select An Tag";
    }
}

function updateName(selectedLi) {
    tradesSearchInp.value = "";
    addNewTag(selectedLi.innerText);
    tradesWrapper.classList.remove("active");

    const findPreviousElement = tradesAllSelectedTags.find(tg => tg === selectedLi.innerText)
    if (!findPreviousElement) {
        tradesAllSelectedTags.push(selectedLi.innerText)
    }
    updateSelectedAllTags()

    // for disable label
    if (tradesAllSelectedTags.length >= 1) {
        document.getElementById('trades_wraperExpandLabel').setAttribute('for', "")
    }
}

function deleteATagFromArray(easf) {
    const forDeleteText = easf.previousElementSibling.innerText;
    const afterDeletedElement = tradesAllSelectedTags.filter(tg => tg !== forDeleteText)
    tradesAllSelectedTags = afterDeletedElement
    updateSelectedAllTags()

    // for enable label
    if (tradesAllSelectedTags.length <= 0) {
        document.getElementById('trades_wraperExpandLabel').setAttribute('for', "tradesAddFilter__wraperExpandBtn")
    }
}

tradesSearchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = tradesSearchInp.value.toLowerCase();
    arr = tradesAllTags.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == tradesSelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    tradesOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

document.getElementById('tradesAddFilter__wraperExpandBtn').addEventListener("click", () => tradesWrapper.classList.toggle("active"));






const topBoxData = [
    {
        id: 1,
        date: '2021-12-07 11:03:01',
        symbol: 'TSLA',
        qly: 2500,
        price: 5800.85,
        position: 25,
        action: '',
    },
    {
        id: 2,
        date: '2021-12-07 11:03:01',
        symbol: 'TSLA',
        qly: 25,
        price: 700.85,
        position: 25,
        action: '',
    },
    {
        id: 3,
        date: '2021-12-07 11:03:01',
        symbol: 'TSLA',
        qly: 25,
        price: 700.85,
        position: 25,
        action: '',
    },
    {
        id: 4,
        date: '2021-12-07 11:03:01',
        symbol: 'TSLA',
        qly: 25,
        price: 700.85,
        position: 25,
        action: '',
    },
    {
        id: 5,
        date: '2021-12-07 11:03:01',
        symbol: 'TSLA',
        qly: 25,
        price: 700.85,
        position: 25,
        action: '',
    },
    {
        id: 6,
        date: '2021-12-07 11:03:01',
        symbol: 'TSLA',
        qly: 25,
        price: 700.85,
        position: 25,
        action: '',
    },
    {
        id: 7,
        date: '2021-12-07 11:03:01',
        symbol: 'TSLA',
        qly: 25,
        price: 700.85,
        position: 25,
        action: '',
    },

]


const addDataIntoTopBox = () => {
    const includedTopBox = document.getElementById('includedTopBox')
    includedTopBox.innerHTML = "";

    includedTopBox.innerHTML += `
    <div class="grid grid-cols-6 justify-start items-center topBoxItemHeader
    p-3 pl-8 font-bold">
        <h4>Date/Time</h4>
        <h4>Symbol</h4>
        <h4>Qly</h4>
        <h4>Price</h4>
        <h4>Position</h4>
        <h4>Action</h4>
    </div>
    `

    topBoxData.forEach((singleData, index) => {
        const { id, date, symbol, qly, price, position, action } = singleData;

        includedTopBox.innerHTML += `
    <div class="grid grid-cols-6 justify-start items-center topBoxItem p-3  pl-10 mt-1">
        <h4>${date}</h4>
        <h4>${symbol}</h4>
        <h4 class="editableData">${qly}</h4>
        <h4 class="editableData">${price}</h4>
        <h4 class="editableData">${position}</h4>
        <div class="flex justify-start items-center space-x-2" id="editDeleteBtnBox">
            <button onclick="editTopBoxData(${index}, this)"  class="">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.0495 1.17387C15.3255 0.60735 14.363 0.294922 13.3393 0.294922C12.3157 0.294922 11.3531 0.60735 10.6291 1.17387L1.81307 8.07222C1.4406 8.36366 1.19786 8.73242 1.11165 9.13848L0.450446 12.2415C0.383486 12.5558 0.515748 12.8788 0.802837 13.1034C1.04138 13.2901 1.36527 13.3929 1.69756 13.3929C1.76703 13.3929 1.83565 13.3883 1.90512 13.3791L5.87083 12.8617C6.38977 12.7943 6.86099 12.6043 7.23345 12.3129L16.0495 5.41452C16.7735 4.84801 17.1728 4.09416 17.1728 3.29383C17.1728 2.49285 16.7735 1.74038 16.0495 1.17387ZM6.04994 11.3881C5.92607 11.4851 5.76872 11.5486 5.5963 11.5709L2.19642 12.0143L2.76306 9.35394C2.79152 9.21902 2.8727 9.0959 2.99658 8.99897L9.61386 3.82109L12.6672 6.21024L6.04994 11.3881ZM14.866 4.48913L13.8507 5.28349L10.7974 2.89434L11.8127 2.0999C12.2203 1.78095 12.7635 1.60478 13.3393 1.60478C13.916 1.60478 14.4584 1.78095 14.866 2.0999C15.2736 2.41885 15.4988 2.84323 15.4988 3.29447C15.4988 3.74572 15.2736 4.17018 14.866 4.48913Z"
                        fill="#656565" />
                </svg>
            </button>
    
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" fill=""/>
            </svg>
            </button>
    
        </div>
    </div>
    `

    })
}
addDataIntoTopBox()

const editTopBoxData = (index, data) => {
    const allTopBoxItems = document.querySelectorAll(".topBoxItem")
    const editableDatas = allTopBoxItems[index].querySelectorAll('.editableData')

    editableDatas.forEach(dt => {
        dt.classList.toggle('hidden')

        const input = document.createElement('input')
        input.value = dt.innerText;
        input.style.padding = '3px 4px 3px 10px'
        input.style.marginRight = '8px'
        input.style.backgroundColor = '#e6e5e5'
        input.style.outline = 'none'
        input.style.borderRadius = '5px'
        insertAsSecond(input, allTopBoxItems[index]);
    })

    const editDeleteBtnBox = allTopBoxItems[index].querySelector('#editDeleteBtnBox')
    editDeleteBtnBox.children[0].classList.toggle('hidden')

    const button = document.createElement('button')
    button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    `
    editDeleteBtnBox.prepend(button)
    button.setAttribute('onclick', `updateInputValue(${index}, this)`)

}

function insertAsSecond(element, parent) {
    if (parent.children.length > 2) {
        parent.insertBefore(element, parent.children[2]);
    }
    else parent.appendChild(element);
}


const updateInputValue = (index, data) => {
    const allTopBoxItems = document.querySelectorAll(".topBoxItem")
    const editedInputs = allTopBoxItems[index].querySelectorAll('input')

    editedInputs.forEach(dt => {
        dt.style.display = "none"
    })
    topBoxData[index].qly = editedInputs[0].value
    topBoxData[index].price = editedInputs[1].value
    topBoxData[index].position = editedInputs[2].value
    addDataIntoTopBox()
}