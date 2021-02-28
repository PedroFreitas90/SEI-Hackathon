
const StreamChat = require('stream-chat').StreamChat;
const client = StreamChat.getInstance('g63cwhyr4w6s','fq6s3ke4rbpfpxvkmkujxpz8v7bnu7da22sb9jsf4d594hdh7acksr97qhx34z24'); 


async function create_token(userEmail){
  const token = await client.createToken(userEmail);
  return token
}  

async function createRoom(userEmail,member, chatName){
  const channel = await client.channel('messaging', { 
    name: chatName,
    created_by_id: userEmail,
    members:[userEmail,member]
  }); 
  console.log(channel)
  await channel.create();
  return
}

module.exports.create_token = create_token;
module.exports.createRoom = createRoom
/*
router.get('/token',passport.authenticate('jwt',{session:false}), async function(req,res) {

    const token = await client.createToken(req.user.userId);
    res.jsonp(token)
})



router.post('/createRoom',passport.authenticate('jwt',{session:false}), async function(req,res){
/*
body = {
        member:
}


const channel = await client.channel('messaging',{ 
    created_by_id: req.user.userId,
    members:[req.body.member,req.user.userId]
  }); 
  await channel.create();

res.jsonp("channel Create")
})
*/


