// Sample data for demonstration
const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [{
        label: 'Progress',
        data: [20, 40, 60, 80, 100],
        borderColor: '#4caf50',
        backgroundColor: 'transparent',
    }]
};

const timelineData = {
    labels: ['crushing', 'digging', 'Forming base for structure', 'Aproving tenders '],
    datasets: [{
        label: 'Timeline',
        data: [30, 20, 10, 40],
        backgroundColor: ['#4caf50', '#f44336', '#2196f3', '#ff9800'],
    }]
};

// Update metrics
document.getElementById('completionPercentage').innerText = progressData.datasets[0].data[progressData.datasets[0].data.length - 1] + '%';
document.getElementById('remainingTasks').innerText = timelineData.labels.length;
document.getElementById('daysBehindSchedule').innerText = '5'; // Example value

// Initialize charts
const progressChartCtx = document.getElementById('progressChart').getContext('2d');
const timelineChartCtx = document.getElementById('timelineChart').getContext('2d');



new Chart(progressChartCtx, {
    type: 'line',
    data: progressData,
    options: {
        
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

new Chart(timelineChartCtx, {
    type: 'pie',
    data: timelineData,
    options :{
        responsive : false,
        maintainaspectratio: true,

    }
});