const ExplicadorPubnub = require("../controllers/explicadorPubnubChannel")
const PubNub = require('pubnub');
const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
    publishKey:"pub-c-627ad9bf-507f-4fae-9a30-6fb40d8eff88" /* É preciso uma chave de pubnub*/,
    subscribeKey:"sub-c-2bc1178c-8e5e-11ea-927a-2efbc014b69f" /* É preciso uma chave de pubnub*/,
    uuid: uuid
  });

  pubnub.subscribe({
    channels: ["Begin"],
    withPresence :true
  });

  
  pubnub.addListener({
    message: function(message) {
      console.log(message)
        id = message.message.idExplicador
        ExplicadorPubnub.findConnection(id)
        .then (res => {
          if (res.length > 0)
            ExplicadorPubnub.updateConnection(id,message.publisher)
              else
              ExplicadorPubnub.createConnection({
               idExplicador : id ,
                channel : message.publisher
              }) 
        })
    },
    presence: function(userEvent) {
        console.log(userEvent)
        
    }
  
  })
  
  
  



  

module.exports.sendNotifications = (channelId,message) => {
    pubnub.publish({
        channel: channelId,
        message :message
      })  

}  