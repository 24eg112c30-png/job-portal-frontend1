const API_URL = "http://localhost:8080/api/jobs";

async function loadJobs() {
    const jobList = document.getElementById("job-list");

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Could not load jobs");
        }

        const jobs = await response.json();
        jobList.innerHTML = "";

        jobs.forEach(job => {
            const card = document.createElement("div");
            card.className = "job-card";

            const title = document.createElement("h3");
            title.textContent = job;

            card.appendChild(title);
            jobList.appendChild(card);
        });

        if (jobs.length === 0) {
            jobList.textContent = "No jobs available.";
        }
    } catch (error) {
        jobList.textContent =
            "Could not connect to backend. Please check if it is running.";
        console.error(error);
    }
}

loadJobs();