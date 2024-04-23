// Your existing functions
// Set a cookie to store the user's preferred theme
function setThemeCookie(theme) {
  const expires = 'expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString(); // 30 days
  document.cookie = 'theme=' + theme + '; ' + expires + '; path=/';
}

// Get the user's preferred theme from the cookie
function getThemeFromCookie() {
  const name = 'theme=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

// Set the user's preferred theme
function setUserTheme() {
  const theme = getThemeFromCookie();
  if (theme === 'dark') {
    // Add dark theme styles
  } else {
    // Add light theme styles
  }
}

// Save the user's contact form input in cookies
function saveContactFormToCookies() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  setCookie('name', nameInput.value, 30);
  setCookie('email', emailInput.value, 30);
  setCookie('message', messageInput.value, 30);
}

function setCookie(name, value, days) {
  const expires = 'expires=' + new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
}

// Cookie consent functions
window.addEventListener('load', function() {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');

  // Check if the cookie consent is accepted
  function hasCookieConsent() {
    return getCookie('cookieConsent') === 'true';
  }

  // Helper function to get a cookie value
  function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }

  // Show the cookie consent popup
  function showCookieConsent() {
    if (!hasCookieConsent() && cookieConsent) {
      cookieConsent.style.display = 'block';
    }
  }

  // Handle the "Accept Cookies" button click
  function handleAcceptCookies() {
    setCookie('cookieConsent', 'true', 30);
    cookieConsent.style.display = 'none';
  }

  showCookieConsent();

  if (acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener('click', handleAcceptCookies);
  }
});



// Download resume
document.addEventListener('DOMContentLoaded', function() {
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  const resumeFilePath = '../assets/RESUME.DOCX'; // Replace with the actual file path of your resume

  if (downloadResumeBtn && resumeFilePath) {
    downloadResumeBtn.addEventListener('click', function() {
      window.location.href = resumeFilePath;
    });
  } else {
    console.error('Button or file path not found.');
    // Handle the case where the button or file path is not found
  }
});
