const labels = [
    '12/13/2021',
    '12/16/2021',
    '12/19/2021',
    '12/22/2021',
    '12/25/2021',
    '12/28/2021',
    '12/31/2021',
    '1/02/2022',
    '1/05/2022',
    '1/08/2022',
];
// data: [600, -280, 80, 100, 300, 210, 130, 150, 210, 80, 600, -280, 80, 100, 300, 210, 130, 150, 210, 80, 600, -280, 80, 100, 300, 210, 130, 150, 210, 80,],

const dataBar1stData = [600, 100, 30, -210, 200, 600, 100, 30, -210, 200,]
const dataBar2ndData = [-280, 300, 50, 80, 180, -280, 300, 50, 80, 180,]
const dataBar3rdData = [80, 210, -40, -210, 120, 80, 210, -40, -210, 120,]
const dataBar = {
    labels: labels,
    datasets: [
        {
            label: "Value",
            backgroundColor: dataBar1stData.map((value) => value < 0 ? '#922121' : '#00620c'),
            data: dataBar1stData,
            maxBarThickness: 27
        },
        {
            label: "Value",
            backgroundColor: dataBar2ndData.map((value) => value < 0 ? '#922121' : '#00620c'),
            data: dataBar2ndData,
            maxBarThickness: 27
        },
        {
            label: "Value",
            backgroundColor: dataBar3rdData.map((value) => value < 0 ? '#922121' : '#00620c'),
            data: dataBar3rdData,
            maxBarThickness: 27
        },
    ],
};


const dataGross1stData = [0, 1200, -300, 250, 1300, 1960, 1350, 250, 60, 1400]
const dataGross = {
    labels: labels,
    datasets: [{
        fill: false,
        borderColor: '#000000',
        borderWidth: 1,
        tension: 0.0,
        label: "Value",
        // backgroundColor: dataGross1stData.map((value) => value < 0 ? '#B84D2B' : '#38712F'),
        data: dataGross1stData,
    }]
};


const endDataBar1stData = [4000, 4500, 3000, 5500, 8000, 8400, 6500, 1400, 1500, 2200]
const endDataBar2ndtData = [3000, 1500, 6000, 4066, 1800, 6400, 1500, 4050, 6844, 6444]
const endDataBar3rdData = [5000, 2900, 2200, 4560, 3800, 4400, 8700, 2000, 3145, 5500]

const dataBar2 = {
    labels: labels,
    datasets: [
        {
            label: "Value",
            backgroundColor: endDataBar1stData.map((value) => value < 0 ? '#922121' : '#00620c'),
            data: endDataBar1stData,
            maxBarThickness: 18
        },
        {
            label: "Value",
            backgroundColor: endDataBar2ndtData.map((value) => value < 0 ? '#922121' : '#00620c'),
            data: endDataBar2ndtData,
            maxBarThickness: 18
        },
        {
            label: "Value",
            backgroundColor: endDataBar3rdData.map((value) => value < 0 ? '#922121' : '#00620c'),
            data: endDataBar3rdData,
            maxBarThickness: 18
        },
    ]
};





const dailyGrossConfig = {
    type: 'bar',
    data: dataBar,
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        legend: { display: false, },
        title: {
            display: true,
            fontColor: '#000000',
            fontStyle: 'bold',
            text: 'Daily gross P&L',
            fontSize: 20,
            position: 'top',
            padding: 0,
            lineHeight: 4,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    autoSkip: true,
                    // autoSkipPadding: 10,
                    maxRotation: 30,
                    minRotation: 30,
                    fontSize: 10,
                    padding: 0,
                },
            }],
            yAxes: [{
                ticks: {
                    max: 750,
                    min: -250,
                    stepSize: 250,
                }
            }],
        },
    },
};

const grossConfig = {
    type: 'line',
    data: dataGross,
    options: {
        legend: { display: false },
        title: {
            text: 'Gross cumulative P&L',
            display: true,
            fontColor: '#000000',
            fontStyle: 'bold',
            fontSize: 20,
            position: 'top',
            padding: 0,
            lineHeight: 4,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    autoSkip: true,
                    maxRotation: 30,
                    minRotation: 30,
                    fontSize: 10,
                    padding: 5,
                },
            }],
            yAxes: [{
                ticks: {
                    max: 2600,
                    min: -650,
                    stepSize: 650,
                }
            }],
        },
        elements: {
            point: {
                radius: 1
            }
        }
    }
};




const dailyVolumeConfig = {
    type: 'bar',
    data: dataBar2,
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Daily Volume',
            fontColor: '#000000',
            fontStyle: 'bold',
            fontSize: 20,
            position: 'top',
            padding: 0,
            lineHeight: 4,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    autoSkip: true,
                    maxRotation: 30,
                    minRotation: 30,
                    fontSize: 10,
                    padding: 5,
                },
            }],
            yAxes: [{
                ticks: {
                    max: 10000,
                    min: 0,
                    stepSize: 2500,
                }
            }],
        }
    }
};
const dailyWinConfig = {
    type: 'bar',
    data: dataBar2,
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Daily Win %',
            fontColor: '#000000',
            fontStyle: 'bold',
            fontSize: 20,
            position: 'top',
            padding: 0,
            lineHeight: 4,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    autoSkip: true,
                    maxRotation: 30,
                    minRotation: 30,
                    fontSize: 10,
                    padding: 5,
                },
            }],
            yAxes: [{
                ticks: {
                    max: 10000,
                    min: 0,
                    stepSize: 2500,
                }
            }],
        }
    }
};
const dailyGrossBar = new Chart('dailyGross', dailyGrossConfig);
const grossLine = new Chart('gross', grossConfig);
const dailyVolumeBar = new Chart('dailyVolume', dailyVolumeConfig);
const dailyWinBar = new Chart('dailyWin', dailyWinConfig);
// dailyGrossBar.canvas.parentNode.style.width = '100%';
// dailyGrossBar.canvas.parentNode.style.height = '100%';
// grossLine.canvas.parentNode.style.width = '595px';
// grossLine.canvas.parentNode.style.height = '280px';
// dailyVolumeBar.canvas.parentNode.style.width = '595px';
// dailyVolumeBar.canvas.parentNode.style.height = '280px';
// dailyWinBar.canvas.parentNode.style.width = '595px';
// dailyWinBar.canvas.parentNode.style.height = '280px';


function updateColor(chart) {
    var dataset = chart.data.datasets[0];
    dataset.backgroundColor = []
    for (var i = 0; i < dataset.data.length; i++) {
        if (dataset.data[i] < 0) {
            dataset.backgroundColor[i] = "#922121";
            // console.log(dataset.backgroundColor)
        }
        else {
            dataset.backgroundColor[i] = "#00620c";
        }
    }
    chart.update();
}

updateColor(dailyGrossBar)

