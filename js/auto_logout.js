// Set timeout variables.
var warningTimer;
var timeoutTimer;

// Start warning timer.
function startAutoLogoutTimer() {
    warningTimer = setTimeout("autoLogoutIdleWarning()", 15000);
}

// Reset timers.
function resetAutoLogoutTimer() {
    window.location = '#';
    clearTimeout(timeoutTimer);
    startAutoLogoutTimer();
}

// Show idle timeout warning dialog.
function autoLogoutIdleWarning() {
    clearTimeout(warningTimer);
    timeoutTimer = setTimeout("AutoLogoutIdleTimeout()", 10000);
    window.location = '#popupLogoutWarning';
}

// Logout the user.
function AutoLogoutIdleTimeout() {
    window.location = 'loggedout.html';
}