const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Node.js application is running successfully!",
        timestamp: new Date().toISOString()
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        application: "Node.js EC2 GitHub Actions CI/CD",
        developer: "Ganesh Folane",
        platform: "AWS EC2",
        runtime: "Node.js",
        deployment: "GitHub Actions"
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;