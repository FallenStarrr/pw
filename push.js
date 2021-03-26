let push = require('web-push')

let ks = {
  publicKey: 'BEH1QFKfh9qE7eT42JtM2EE7Ta7f9afM2w9bfEzonAmR8twHOUk3yeCjIFY-xUIYw3Z-IsWYOpM1P6b_6T2GnDY',
  privateKey: 'OohF1E5Rkty-UdbmfG9HnDt6lOR3KBpJAi-J4dkWmhY'
}

push.setVapidDetails('mailto:test@code.co.uk', ks.publicKey, ks.privateKey)
let sub = {}
push.sendNotification(sub, 'test message')

