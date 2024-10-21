function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YG5cBiJbzg":
        Script1();
        break;
      case "5ozw0lE50yI":
        Script2();
        break;
      case "5w39orrMaXk":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5Z0TdcIX5Ha');
const duration = 500;
const easing = 'ease-out';
const id = '6NtgrWnVXPz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5rumNsv0AwI');
const duration = 500;
const easing = 'ease-out';
const id = '5psS9vYQSCJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
