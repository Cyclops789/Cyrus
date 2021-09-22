const reqEvent = (event) => require(`../events/eventsReady/${event}`)

module.exports = client => {
    client.on("ready", function() {reqEvent("ready") (client) });
 }