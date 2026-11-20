const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../server");

test("Health API returns UP status", async () => {

    const server = app.listen(0, "127.0.0.1");

    try {
        const address = server.address();

        const response = await fetch(
            `http://127.0.0.1:${address.port}/api/health`
        );

        const data = await response.json();

        assert.equal(response.status, 200);
        assert.equal(data.status, "UP");
        assert.ok(data.message);

    } finally {
        await new Promise((resolve, reject) => {
            server.close(error => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});