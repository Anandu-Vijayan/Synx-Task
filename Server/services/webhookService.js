const axios = require('axios');

const webhooks = [];

exports.registerWebhook = (url, event) => {
    webhooks.push({ url, event });
};

exports.triggerWebhook = (event, data) => {
    webhooks.forEach(async (webhook) => {
        if (webhook.event === event) {
            try {
                await axios.post(webhook.url, data);
            } catch (error) {
                console.error(`Failed to trigger webhook for ${webhook.url}: ${error.message}`);
            }
        }
    });
};
