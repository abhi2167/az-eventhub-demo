const {EventHubProducerClient} = require('@azure/event-hubs')
const connectionString = '';
const eventHubName = '';

async function sendMessage() {
    console.log('Sending Message...');
    const producer = new EventHubProducerClient(connectionString, eventHubName);
    const batch = await producer.createBatch();
    batch.tryAdd({body: 'first'});
    batch.tryAdd({body: 'second'});
    batch.tryAdd({body: 'Third'});
    await producer.sendBatch(batch);
    await producer.close();
    console.log('Messages Sent');
}

(function(){
    try {
        sendMessage();
    } catch(err) {
        console.log('Error occured while sending Message '+ err);
    }
})();