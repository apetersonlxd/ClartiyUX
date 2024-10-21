window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script3 = function()
{
  let player = GetPlayer();

let userName = player.GetVar("UserName");

let entryLength = userName.length;

if (userName.length == 0)
{ 
player.SetVar("ErrorNone", true);
player.SetVar("ErrorMax", false);
} else if (entryLength > 30) {
player.SetVar("UserName", "");
player.SetVar("ErrorMax", true);
player.SetVar("ErrorNone", false);
}
}

};
