function sms(){
    document.getElementById('apps').style.display="none";
    document.getElementById('bottom').style.display="none";
    document.getElementById('messages').style.display="block";
}

function round(){
    document.getElementById('apps').style.display="flex";
    document.getElementById('bottom').style.display="flex";
    document.getElementById('messages').style.display="none";
    document.getElementById('message-inbox').style.display="none";
}

function xabar(){
    document.getElementById('messages').style.display="none";
    document.getElementById('message-inbox').style.display="block";
}

function back(){
    document.getElementById('messages').style.display="block";
    document.getElementById('message-inbox').style.display="none";
}