var express = require('express');
var router = express.Router();

const StreamChat = require('stream-chat').StreamChat;
const client = StreamChat.getInstance('g63cwhyr4w6s','fq6s3ke4rbpfpxvkmkujxpz8v7bnu7da22sb9jsf4d594hdh7acksr97qhx34z24'); 



router.get('/token',passport.authenticate('jwt',{session:false}), async function(req,res) {

    const token = await client.createToken(req.user.userId);
    res.jsonp(token)
})



router.post('/createRoom',passport.authenticate('jwt',{session:false}), async function(req,res){
/*
body = {channelName:
        member:
}

*/
const channel = await client.channel('messaging', req.user.userId + req.body.member,{ 
    name: req.body.channelName, 
    created_by_id: req.user.userId,
    members:[req.body.member,req.user.userId]
  }); 
  await channel.create();

res.jsonp("channel Create")
})
 
const channel = await client.channel('messaging', 'new_chat', { 
  name: 'new_channel', 
  created_by_id: req.params.nameOfuser,
  members:["john",req.params.nameOfuser]
}); 
await channel.create();


module.exports = router;