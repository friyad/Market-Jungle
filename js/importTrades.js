document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
    });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };


        const btn = document.createElement('button')
        btn.setAttribute('class', "mt-2 ml-auto mr-3")
        btn.innerHTML = `
        <label for="drop-zone__input" class="cursor-pointer flex justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                    d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
            </svg>
            <h3 class="font-semibold">Upload another file</h3>
        </label>
        `
        const dropZoneMainBox = document.getElementById('drop-zone-main-box')
        if (dropZoneMainBox.children.length > 0) {
            dropZoneMainBox.removeChild(dropZoneMainBox.lastChild)
            dropZoneMainBox.appendChild(btn)
        }
        else {
            dropZoneMainBox.appendChild(btn)
        }


    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}















// for add tags menu in filter
const imTradesWrapper = document.querySelector(".imTrades_wrapper"),
    imTradesSelectBtn = imTradesWrapper.querySelector(".imTrades_select-btn"),
    imTradesSearchInp = imTradesWrapper.querySelector("input"),
    imTradesOptions = imTradesWrapper.querySelector(".imTrades_options");

let imTradesAllTags = ["tag 1", "tag 2", "tag 3", "tag 4", "tag 5", "tag 6",];

let imTradesAllSelectedTags = [];

function addTags(selectedCountry) {
    imTradesOptions.innerHTML = "";
    imTradesAllTags.forEach(tag => {
        let isSelected = tag === selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${tag}</li>`;
        imTradesOptions.insertAdjacentHTML("beforeend", li);
    });
}
addTags();

function updateSelectedAllTags() {
    imTradesSelectBtn.firstElementChild.innerHTML = "";

    imTradesAllSelectedTags.forEach(selectedTag => {
        imTradesSelectBtn.firstElementChild.innerHTML += `
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
    if (imTradesAllSelectedTags.length <= 0) {
        imTradesSelectBtn.firstElementChild.innerText = "Select An Tag";
    }
}

function updateName(selectedLi) {
    imTradesSearchInp.value = "";
    addTags(selectedLi.innerText);
    imTradesWrapper.classList.remove("active");

    const findPreviousElement = imTradesAllSelectedTags.find(tg => tg === selectedLi.innerText)
    if (!findPreviousElement) {
        imTradesAllSelectedTags.push(selectedLi.innerText)
    }
    updateSelectedAllTags()
    // for disable label
    if (imTradesAllSelectedTags.length >= 1) {
        document.getElementById('imTrades_wraperExpandLabel').setAttribute('for', "")
    }
}

function deleteATagFromArray(easf) {
    const forDeleteText = easf.previousElementSibling.innerText;
    const afterDeletedElement = imTradesAllSelectedTags.filter(tg => tg !== forDeleteText)
    imTradesAllSelectedTags = afterDeletedElement
    updateSelectedAllTags()
    // for enable label
    if (imTradesAllSelectedTags.length <= 0) {
        document.getElementById('imTrades_wraperExpandLabel').setAttribute('for', "imTrades_wraperExpandBtn")
    }
}

imTradesSearchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = imTradesSearchInp.value.toLowerCase();
    arr = imTradesAllTags.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == imTradesSelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    imTradesOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

document.getElementById('imTrades_wraperExpandBtn').addEventListener("click", () => imTradesWrapper.classList.toggle("active"));



