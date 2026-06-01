// Sample job data - In production, this would come from an API
const jobListings = [
    {
        id: 1,
        title: "Azure DevOps Engineer",
        company: "Tech Solutions India",
        location: "bangalore",
        locationDisplay: "Bangalore",
        salary: "₹8,00,000 - ₹12,00,000",
        experience: "3-5 years",
        postedDate: "2 hours ago",
        description: "Looking for experienced Azure DevOps Engineer to manage cloud infrastructure and CI/CD pipelines.",
        tags: ["Azure", "CI/CD", "DevOps", "Cloud"],
        applyUrl: "https://example.com/jobs/1"
    },
    {
        id: 2,
        title: "Azure DevOps Engineer",
        company: "Cloud Innovations Ltd",
        location: "hyderabad",
        locationDisplay: "Hyderabad",
        salary: "₹7,50,000 - ₹11,00,000",
        experience: "2-4 years",
        postedDate: "5 hours ago",
        description: "Join our DevOps team to automate deployments and manage Azure infrastructure at scale.",
        tags: ["Azure", "Kubernetes", "Infrastructure"],
        applyUrl: "https://example.com/jobs/2"
    },
    {
        id: 3,
        title: "Senior Azure DevOps Engineer",
        company: "Enterprise Systems Corp",
        location: "bangalore",
        locationDisplay: "Bangalore",
        salary: "₹12,00,000 - ₹16,00,000",
        experience: "5-7 years",
        postedDate: "8 hours ago",
        description: "Lead DevOps initiatives and architect cloud solutions using Azure platform.",
        tags: ["Azure", "Leadership", "Architecture"],
        applyUrl: "https://example.com/jobs/3"
    },
    {
        id: 4,
        title: "Azure DevOps Engineer",
        company: "Digital Transformation Inc",
        location: "kolkata",
        locationDisplay: "Kolkata",
        salary: "₹6,50,000 - ₹9,50,000",
        experience: "1-3 years",
        postedDate: "12 hours ago",
        description: "Start your DevOps career with us. We'll help you master Azure DevOps and cloud technologies.",
        tags: ["Azure", "Entry-level", "DevOps"],
        applyUrl: "https://example.com/jobs/4"
    },
    {
        id: 5,
        title: "Azure DevOps Engineer",
        company: "StartUp Ventures",
        location: "bangalore",
        locationDisplay: "Bangalore",
        salary: "₹7,00,000 - ₹10,00,000",
        experience: "2-3 years",
        postedDate: "1 day ago",
        description: "Help us build scalable infrastructure for our fast-growing SaaS platform.",
        tags: ["Azure", "SaaS", "Automation"],
        applyUrl: "https://example.com/jobs/5"
    },
    {
        id: 6,
        title: "Azure DevOps Engineer - Infrastructure",
        company: "GlobalTech Services",
        location: "hyderabad",
        locationDisplay: "Hyderabad",
        salary: "₹8,50,000 - ₹12,50,000",
        experience: "4-6 years",
        postedDate: "1 day ago",
        description: "Manage and optimize Azure infrastructure, implement IaC, and oversee deployment pipelines.",
        tags: ["Azure", "Infrastructure as Code", "DevOps"],
        applyUrl: "https://example.com/jobs/6"
    },
    {
        id: 7,
        title: "Azure DevOps Engineer",
        company: "NextGen Solutions",
        location: "kolkata",
        locationDisplay: "Kolkata",
        salary: "₹7,00,000 - ₹10,50,000",
        experience: "2-4 years",
        postedDate: "1 day ago",
        description: "Work with cutting-edge Azure technologies and build CI/CD pipelines for microservices.",
        tags: ["Azure", "Microservices", "CI/CD"],
        applyUrl: "https://example.com/jobs/7"
    },
    {
        id: 8,
        title: "Senior Azure DevOps Engineer",
        company: "MegaCorp India",
        location: "bangalore",
        locationDisplay: "Bangalore",
        salary: "₹13,00,000 - ₹17,00,000",
        experience: "6-8 years",
        postedDate: "2 days ago",
        description: "Lead a team of DevOps engineers and architect enterprise-scale cloud solutions.",
        tags: ["Azure", "Team Lead", "Enterprise"],
        applyUrl: "https://example.com/jobs/8"
    }
];

let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadJobs();
    setupEventListeners();
    updateTimestamp();
    setInterval(updateTimestamp, 60000); // Update timestamp every minute
});

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            filterJobs();
        });
    });

    // Refresh button
    document.getElementById('refreshBtn').addEventListener('click', function() {
        this.style.transform = 'rotate(360deg)';
        loadJobs();
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 600);
    });
}

function loadJobs() {
    // Simulate loading from an API
    // In production, use: fetch('/api/jobs?position=Azure%20DevOps%20Engineer&locations=bangalore,hyderabad,kolkata')
    
    // For now, using sample data
    setTimeout(() => {
        displayJobs(jobListings);
        updateStats();
        updateTimestamp();
    }, 500);
}

function filterJobs() {
    let filtered = jobListings;
    
    if (currentFilter !== 'all') {
        filtered = jobListings.filter(job => job.location === currentFilter);
    }
    
    displayJobs(filtered);
}

function displayJobs(jobs) {
    const container = document.getElementById('jobsContainer');
    
    if (jobs.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No job openings found</h3>
                <p>Try adjusting your filters or check back later for new positions.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = jobs.map(job => createJobCard(job)).join('');
}

function createJobCard(job) {
    return `
        <div class="job-card ${job.location}">
            <h2 class="job-title">${job.title}</h2>
            <p class="job-company">${job.company}</p>
            <span class="job-location ${job.location}">${job.locationDisplay}</span>
            
            <p class="job-description">${job.description}</p>
            
            <div class="job-details">
                <div class="job-detail-item">
                    <span>💰 Salary:</span>
                    <strong>${job.salary}</strong>
                </div>
                <div class="job-detail-item">
                    <span>👤 Experience:</span>
                    <strong>${job.experience}</strong>
                </div>
                <div class="job-detail-item">
                    <span>📅 Posted:</span>
                    <strong>${job.postedDate}</strong>
                </div>
            </div>
            
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
            
            <div class="job-footer">
                <button class="apply-btn" onclick="window.open('${job.applyUrl}', '_blank')">Apply Now</button>
            </div>
        </div>
    `;
}

function updateStats() {
    const stats = {
        total: jobListings.length,
        bangalore: jobListings.filter(j => j.location === 'bangalore').length,
        hyderabad: jobListings.filter(j => j.location === 'hyderabad').length,
        kolkata: jobListings.filter(j => j.location === 'kolkata').length
    };
    
    document.getElementById('totalJobs').textContent = stats.total;
    document.getElementById('bangaloreJobs').textContent = stats.bangalore;
    document.getElementById('hyderabadJobs').textContent = stats.hyderabad;
    document.getElementById('kolkataJobs').textContent = stats.kolkata;
}

function updateTimestamp() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const dateString = now.toLocaleDateString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    const lastUpdatedText = `Last updated: ${dateString} at ${timeString}`;
    document.getElementById('lastUpdated').textContent = lastUpdatedText;
    document.getElementById('footerTime').textContent = timeString;
}

// Optional: Add auto-refresh every 5 minutes
setInterval(() => {
    loadJobs();
}, 5 * 60 * 1000);
