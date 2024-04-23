// Save the user's recently viewed projects in local storage
function saveRecentlyViewedProjects(projectId) {
    let recentlyViewedProjects = JSON.parse(localStorage.getItem('recentlyViewedProjects')) || [];
    recentlyViewedProjects.unshift(projectId);
    recentlyViewedProjects = recentlyViewedProjects.slice(0, 5); // Keep only the latest 5 projects
    localStorage.setItem('recentlyViewedProjects', JSON.stringify(recentlyViewedProjects));
  }
  
  // Retrieve the user's recently viewed projects from local storage
  function getRecentlyViewedProjects() {
    const recentlyViewedProjects = JSON.parse(localStorage.getItem('recentlyViewedProjects')) || [];
    return recentlyViewedProjects;
  }
  
  // Save the user's custom settings in local storage
  function saveCustomSettings(settings) {
    localStorage.setItem('customSettings', JSON.stringify(settings));
  }
  
  // Retrieve the user's custom settings from local storage
  function getCustomSettings() {
    const settings = JSON.parse(localStorage.getItem('customSettings')) || {};
    return settings;
  }