let chart;

function updateChart() {
  const school = document.querySelector(".tab.active").dataset.school;
  const period = document.getElementById("period").value;
  const metric = document.getElementById("metric").value;

  const before = trafficData[school][period].before[metric];
  const after = trafficData[school][period].after[metric];
  const label = metrics[metric];

  const ctx = document.getElementById("metricsChart").getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Before", "After (Demo)"],
      datasets: [
        {
          label: label,
          data: [before, after],
          backgroundColor: ["#d9534f", "#5cb85c"]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `${label} – ${school.toUpperCase()} (${period.toUpperCase()})`
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    updateChart();
  });
});

document.getElementById("period").addEventListener("change", updateChart);
document.getElementById("metric").addEventListener("change", updateChart);

// Initial chart
updateChart();
