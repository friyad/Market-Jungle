const statisticsAccordionData = [
    {
        _id: 1,
        title: 'Overview',
        subTitle: 'High Level Trading Metrics',
        data: [
            {
                id: 1,
                columnA: 'Account Start Value:',
                columnB: 9966.63,
                columnC: 'Total equity at work at one given time:',
                columnD: 9966.63,
            },
            {
                id: 2,
                columnA: 'Account Ending Value:',
                columnB: -38.18,
                columnC: 'Largest Gain:',
                columnD: -38.18,
            },
            {
                id: 3,
                columnA: 'Start Date:',
                columnB: '12/12/21',
                columnC: 'Largest Loss:',
                columnD: 18442,
            },
            {
                id: 4,
                columnA: 'End Date:',
                columnB: '12/12/21',
                columnC: 'Max consecutive wins:',
                columnD: 153.36,
            },
            {
                id: 5,
                columnA: 'Total Numbers of trading days deployed:',
                columnB: -149.44,
                columnC: 'Max consecutive Losses:',
                columnD: -149.44,
            },
            {
                id: 6,
                columnA: 'Total gain/loss:',
                columnB: 9966.63,
                columnC: 'Average per share gain/loss:',
                columnD: 9966.63,
            },
            {
                id: 7,
                columnA: 'Account Start Value:',
                columnB: 9966.63,
                columnC: 'Total equity at work at one given time:',
                columnD: 9966.63,
            },
            {
                id: 8,
                columnA: 'Account Ending Value:',
                columnB: -38.18,
                columnC: 'Largest Gain:',
                columnD: -38.18,
            },
            {
                id: 9,
                columnA: 'Start Date:',
                columnB: '12/12/21',
                columnC: 'Largest Loss:',
                columnD: 18442,
            },
            {
                id: 10,
                columnA: 'End Date:',
                columnB: "12/12/21",
                columnC: 'Max consecutive wins:',
                columnD: 153,
            },
        ],
    },
    {
        _id: 2,
        title: 'Risk Management ',
        subTitle: 'Avoid and minimize the impact of losses',
        data: [
            {
                id: 1,
                columnA: 'Account Start Value:',
                columnB: 9966.63,
                columnC: 'Total equity at work at one given time:',
                columnD: 9966.63,
            },
            {
                id: 2,
                columnA: 'Account Ending Value:',
                columnB: -38.18,
                columnC: 'Largest Gain:',
                columnD: -38.18,
            },
            {
                id: 3,
                columnA: 'Start Date:',
                columnB: '12/12/21',
                columnC: 'Largest Loss:',
                columnD: 18442,
            },
            {
                id: 4,
                columnA: 'End Date:',
                columnB: '12/12/21',
                columnC: 'Max consecutive wins:',
                columnD: 153.36,
            },
            {
                id: 5,
                columnA: 'Total Numbers of trading days deployed:',
                columnB: -149.44,
                columnC: 'Max consecutive Losses:',
                columnD: -149.44,
            },
            {
                id: 6,
                columnA: 'Total gain/loss:',
                columnB: 9966.63,
                columnC: 'Average per share gain/loss:',
                columnD: 9966.63,
            },
            {
                id: 7,
                columnA: 'Account Start Value:',
                columnB: 9966.63,
                columnC: 'Total equity at work at one given time:',
                columnD: 9966.63,
            },
            {
                id: 8,
                columnA: 'Account Ending Value:',
                columnB: -38.18,
                columnC: 'Largest Gain:',
                columnD: -38.18,
            },
            {
                id: 9,
                columnA: 'Start Date:',
                columnB: '12/12/21',
                columnC: 'Largest Loss:',
                columnD: 18442,
            },
            {
                id: 10,
                columnA: 'End Date:',
                columnB: "12/12/21",
                columnC: 'Max consecutive wins:',
                columnD: 153,
            },
        ],
    },
    {
        _id: 3,
        title: 'Draw Down Analysis',
        subTitle: 'Understand your worse case scenario',
        data: [
            {
                id: 1,
                columnA: 'Account Start Value:',
                columnB: 9966.63,
                columnC: 'Total equity at work at one given time:',
                columnD: 9966.63,
            },
            {
                id: 2,
                columnA: 'Account Ending Value:',
                columnB: -38.18,
                columnC: 'Largest Gain:',
                columnD: -38.18,
            },
            {
                id: 3,
                columnA: 'Start Date:',
                columnB: '12/12/21',
                columnC: 'Largest Loss:',
                columnD: 18442,
            },
            {
                id: 4,
                columnA: 'End Date:',
                columnB: '12/12/21',
                columnC: 'Max consecutive wins:',
                columnD: 153.36,
            },
            {
                id: 5,
                columnA: 'Total Numbers of trading days deployed:',
                columnB: -149.44,
                columnC: 'Max consecutive Losses:',
                columnD: -149.44,
            },
            {
                id: 6,
                columnA: 'Total gain/loss:',
                columnB: 9966.63,
                columnC: 'Average per share gain/loss:',
                columnD: 9966.63,
            },
            {
                id: 7,
                columnA: 'Account Start Value:',
                columnB: 9966.63,
                columnC: 'Total equity at work at one given time:',
                columnD: 9966.63,
            },
            {
                id: 8,
                columnA: 'Account Ending Value:',
                columnB: -38.18,
                columnC: 'Largest Gain:',
                columnD: -38.18,
            },
            {
                id: 9,
                columnA: 'Start Date:',
                columnB: '12/12/21',
                columnC: 'Largest Loss:',
                columnD: 18442,
            },
            {
                id: 10,
                columnA: 'End Date:',
                columnB: "12/12/21",
                columnC: 'Max consecutive wins:',
                columnD: 153,
            },
        ],
    },

]

const accordionMainBOx = document.getElementById('accordionMainBOx')

statisticsAccordionData.forEach(data => {
    accordionMainBOx.innerHTML += `
    <div class="tab w-full overflow-hidden border-t mt-5 futuraMD">
        <input class="absolute opacity-0 " id="tab-multi-${statisticsAccordionData.indexOf(data)}" type="radio" name="tabs">

        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-${statisticsAccordionData.indexOf(data)}">            
                    <h3 class="font-bold ">${data.title}</h3>
                    <h3>${data.subTitle}</h3>
        </label>

        <div id="collapsDataDiv"
            class="tab-content overflow-hidden bg-white leading-normal">

        </div>
    </div> 
    `
})

const collapsDataDivs = accordionMainBOx.querySelectorAll('#collapsDataDiv')

collapsDataDivs.forEach((collapsDiv, index) => {

    statisticsAccordionData[index].data.forEach(dt => {
        const { columnA, columnB, columnC, columnD } = dt;

        collapsDataDivs[index].innerHTML += `
             <div
                class="grid grid-cols-6 justify-start items-center collapsDataContainer px-4 py-2 border-b-2">
                <h4 class="col-span-2 ">${columnA}</h4>

                <h4 style="${columnB >= -1 ? "color: #38712F;"
                : columnB <= 0 ? "color: #B84D2B;" : "color:#656565"}"  
                 class="cusGreen font-bold">${isNaN(columnB) ? "" : "$"}${columnB}</h4>

                <h4 class="col-span-2 ">${columnC}</h4>

                <h4 style="${columnD >= -1 ? "color: #38712F;"
                : columnD <= 0 ? "color: #B84D2B;" : "color:#656565"}" 
                 class="cusGreen font-bold">${isNaN(columnD) ? "" : "$"}${columnD}</h4>
             </div>        
        `
    })
})





let myRadios = document.getElementsByName('tabs');
myRadios[0].checked = true

let setCheck;
let x = 0;
for (x = 0; x < myRadios.length; x++) {
    myRadios[x].onclick = function () {
        if (setCheck != this) {
            setCheck = this;
        } else {
            this.checked = false;
            setCheck = null;
        }
    };
}