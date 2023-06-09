// Get the canvas element
const ctx = document.getElementById('heartRateChart').getContext('2d');

// Define the chart data
const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Replace with your actual time labels
    datasets: [{
        label: 'Average Heart Rate',
        data: [72, 75, 78, 80, 82, 85], // Replace with your actual heart rate data
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
    }]
};

// Create the chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Fetch CSV data and update ECG chart
fetch('path/to/your/csv/file.csv')
    .then(response => response.text())
    .then(csvData => {
        const parsedData = parseCSVData(csvData);
        updateECGChart(parsedData);
    })
    .catch(error => {
        console.error('Error fetching CSV data:', error);
    });

function parseCSVData(csvData) {
    // Parse CSV data and extract the desired columns
    const rows = csvData.split('\n');
    const labels = []; // Replace with the desired column for labels
    const data = []; // Replace with the desired column for ECG data

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const label = row[0]; // Replace with the index of the label column
        const value = parseFloat(row[1]); // Replace with the index of the data column
        labels.push(label);
        data.push(value);
    }

    return {
        labels: labels,
        datasets: [
            {
                label: 'ECG Reading',
                data: data,
                backgroundColor: 'rgba(192, 75, 75, 0.2)',
                borderColor: 'rgba(192, 75, 75, 1)',
                borderWidth: 1,
                pointRadius: 0, // Hide individual data points
            }
        ]
    };
}

function updateECGChart(data) {
    // Get the ECG chart canvas element
    const ecgCanvas = document.getElementById('ecgChart');

    // Create the ECG chart
    const ecgChart = new Chart(ecgCanvas, {
        type: 'line',
        data: data,
        options: options
    });
}
