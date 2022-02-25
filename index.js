const clientId = '946791837543305247';
const RPC = require('discord-rpc')
const client = new RPC.Client({ transport: 'ipc' });

RPC.register(clientId)

async function setActivity(){
    if(!client) return
    client.setActivity({
        details:`How to drink water`,
        state:`Watching`,
        startTimestamp: Date.now(),
        largeImageKey:`youtube`,
        largeImageText:`YouTube`,
        // smallImageKey:`youtube`,
        // smallImageText:`YouTube`,
        instance:false,
        buttons:[
            {
                label:`YouTube`,
                url:'https://youtube.com'
            },{
                label:`Neoncm`,
                url:`https://discord.gg/neoncm`
            }
        ]
    })
}
client.on('ready', () => {

console.log(`Logged in for ${client.user.username} `)

setActivity()

setTimeout(()=>{
    setActivity()
},15000)

});


client.login({ clientId}).catch(console.error)