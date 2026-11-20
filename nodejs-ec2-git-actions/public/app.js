async function checkHealth() {
    const status = document.getElementById("status");
    const message = document.getElementById("message");

    status.innerText = "Checking...";

    try {
        const response = await fetch("/api/health");
        const data = await response.json();

        if (response.ok) {
            status.innerText = data.status;
            message.innerText = data.message;
        } else {
            status.innerText = "ERROR";
            message.innerText = "Application health check failed.";
        }

    } catch (error) {
        status.innerText = "DOWN";
        message.innerText = "Unable to connect to the server.";
    }
}

checkHealth();