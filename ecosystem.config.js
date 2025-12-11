module.exports = {
    apps: [
        {
            name: "scaique",
            script: "npm",
            args: "run start",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};