<?php
session_start();

if (isset($_SERVER['REDIRECT_USER_INFO'])) {
    $user_info = $_SERVER['REDIRECT_USER_INFO'];
    $hash = hash('sha256', $user_info);

    setcookie(
        'axHub_SSID',
        $hash,
        time() + (86400 * 2), // Expires in 2 days
        '/',
        '.axiolot.com.ng',  // Accessible to all subdomains
        true, // Secure flag
        true  // HttpOnly flag
    );

    setcookie(
        'UUID',
        session_id(),
        time() + (86400 * 30), // Expires in 30 days
        '/',
        '',
        true, // Secure flag
        true  // HttpOnly flag
    );
}

// Redirect to the originally requested URL
$requested_url = isset($_GET['requested_url']) ? $_GET['requested_url'] : '/';
header("Location: /" . $requested_url);
exit();
