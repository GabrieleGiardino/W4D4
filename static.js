window.onload = function() {
    const jobList = [
        { title: "java dev", location: "NY, US" },
        { title: "web dev", location: "Genoa, IT" },
        { title: "dev", location: "US" }
    ];

    displayResults(jobList);

    document.getElementById('searchButton').addEventListener('click', function() {
        const title = document.getElementById('title').value;
        const location = document.getElementById('location').value;
        const filteredResults = searchJobs(jobList, title, location);
        displayResults(filteredResults);
    });
};

    function searchJobs(jobList, jobTitle, jobLocation) {
    const titleLower = jobTitle.toLowerCase();
    const locationLower = jobLocation.toLowerCase();

    const result = jobList.filter(job =>
        (job.title.toLowerCase().includes(titleLower) || titleLower === "") &&
        (job.location.toLowerCase().includes(locationLower) || locationLower === "")
    );

    return result;
}

function displayResults(jobs) {
    const jobListElement = document.getElementById('jobList');
    jobListElement.innerHTML = '';  

    if (jobs.length === 0) {
        jobListElement.innerHTML = '<li>No jobs found</li>';
    } else {
        jobs.forEach(job => {
            const listItem = document.createElement('li');
            listItem.textContent = `${job.title} - ${job.location}`;
            jobListElement.appendChild(listItem);
        });
    }
}
