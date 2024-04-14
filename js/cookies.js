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
    setcookie('message', messageInput.value, 30);
  }
  
  function setcookie(name, value, days) {
    const expires = 'expires=' + new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = name + '=' + value + '; ' + expires + '; path=/';
  }