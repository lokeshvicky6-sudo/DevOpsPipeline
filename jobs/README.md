# Azure DevOps Engineer Job Portal

A modern, responsive web application to display Azure DevOps Engineer job openings in Bangalore, Hyderabad, and Kolkata.

## 📋 Features

- **Location Filtering**: Filter jobs by Bangalore, Hyderabad, Kolkata, or view all
- **Real-time Statistics**: View job counts for each location
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Auto-refresh**: Data refreshes automatically every 5 minutes
- **Professional UI**: Modern card-based design with smooth animations
- **Daily Updates**: Check back daily for fresh job opportunities

## 🎨 Design Features

- **Gradient Backgrounds**: Attractive modern design with gradient overlays
- **Color-coded Locations**: Each location has a unique color scheme
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile Responsive**: Fully responsive grid layout
- **Accessibility**: Semantic HTML and clear visual hierarchy

## 📁 File Structure

```
jobs/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🚀 How to Use

### Local Development

1. Open `index.html` in your web browser
2. The page will load with sample job listings
3. Use the filter buttons to search by location
4. Click "Apply Now" to apply for jobs

### Deploy to GitHub Pages

To access this portal daily via a URL:

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Set the source to the branch containing this code
4. The site will be available at: `https://lokeshvicky6-sudo.github.io/DevOpsPipeline/jobs/`

## 🔄 Integrating with Real Job API

To connect with real job listings, modify the `loadJobs()` function in `script.js`:

```javascript
function loadJobs() {
    // Replace with your actual API endpoint
    fetch('/api/jobs?position=Azure%20DevOps%20Engineer&locations=bangalore,hyderabad,kolkata')
        .then(response => response.json())
        .then(data => {
            displayJobs(data);
            updateStats();
        })
        .catch(error => console.error('Error loading jobs:', error));
}
```

## 📊 Job Data Structure

Each job object should have:

```javascript
{
    id: 1,
    title: "Azure DevOps Engineer",
    company: "Company Name",
    location: "bangalore",           // Options: bangalore, hyderabad, kolkata
    locationDisplay: "Bangalore",
    salary: "₹8,00,000 - ₹12,00,000",
    experience: "3-5 years",
    postedDate: "2 hours ago",
    description: "Job description...",
    tags: ["Azure", "CI/CD", "DevOps"],
    applyUrl: "https://example.com/jobs/1"
}
```

## 🎯 Location Codes

- `bangalore` - Bangalore
- `hyderabad` - Hyderabad
- `kolkata` - Kolkata

## 🔧 Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0078d4;      /* Main color */
    --success-color: #107c10;       /* Success/Refresh button */
    --warning-color: #ffb900;       /* Accent color */
}
```

### Modify Refresh Interval

In `script.js`, change the interval (default: 5 minutes):

```javascript
// Auto-refresh every X minutes
setInterval(() => {
    loadJobs();
}, 5 * 60 * 1000);  // 5 minutes in milliseconds
```

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimization

- CSS Grid for efficient layout
- Smooth transitions and animations
- Lazy-loaded images (when integrated with real data)
- Minimal JavaScript dependencies
- Fast page load times

## 📝 Notes

- Currently uses sample data for demonstration
- Real job data should be fetched from an API
- Update the `applyUrl` to point to actual job application links
- Modify job listings regularly to keep content fresh

## 🔐 Security Considerations

- Sanitize any user input if adding search functionality
- Use HTTPS when deploying
- Validate job data from API sources
- Implement proper CORS headers if using external APIs

## 📞 Contact & Support

For issues or suggestions, create a GitHub issue in the repository.

---

**Happy job hunting!** 🚀
