// app.js

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const statusMsg = document.getElementById("statusMsg");

  loginBtn.addEventListener("click", async () => {
    try {
      statusMsg.textContent = "Waiting for login...";
      const result = await MiniKit.commandsAsync.auth();
      if (result && result.identity) {
        statusMsg.textContent = "Login successful! Redirecting...";
        window.location.href = `submit.html?user=${result.identity}`;
      } else {
        alert("Login failed: No identity returned.");
        statusMsg.textContent = "";
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login cancelled or failed. Please try again.");
      statusMsg.textContent = "";
    }
  });
});
