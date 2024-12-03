function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EQgMfL0keq":
        Script1();
        break;
      case "5t8TXuy0dKn":
        Script2();
        break;
      case "6go9Q4gASiK":
        Script3();
        break;
      case "6KY4UtNCK21":
        Script4();
        break;
      case "6VXC9aGzOum":
        Script5();
        break;
      case "6Fp9vJ5Wnrf":
        Script6();
        break;
      case "6bnxmgfGB39":
        Script7();
        break;
      case "6AGATJxbPE6":
        Script8();
        break;
      case "5vhYcr5uBGK":
        Script9();
        break;
      case "62FfidpNlVa":
        Script10();
        break;
      case "6a5LF922fyF":
        Script11();
        break;
      case "5hmgJ0eWzgZ":
        Script12();
        break;
      case "6HpbMOrm30q":
        Script13();
        break;
      case "61PCQ2CKId2":
        Script14();
        break;
      case "6q9n1PyjPj9":
        Script15();
        break;
      case "6pOLNROC3EN":
        Script16();
        break;
      case "5tl1nZRlz5J":
        Script17();
        break;
      case "5z86VmCsWKg":
        Script18();
        break;
      case "5UnSaV8brDe":
        Script19();
        break;
      case "65Gn7KoORO5":
        Script20();
        break;
      case "5Xd9rqJQtHY":
        Script21();
        break;
      case "5eUhckXI8R4":
        Script22();
        break;
      case "5sLUP13a7iF":
        Script23();
        break;
      case "6bOc1j9SOX2":
        Script24();
        break;
      case "5XLbsjd7V2D":
        Script25();
        break;
      case "6gez3JGH3rn":
        Script26();
        break;
      case "6E7RCxnGWNI":
        Script27();
        break;
      case "6q3LyeJ4iem":
        Script28();
        break;
      case "61Ry1uBFEZE":
        Script29();
        break;
      case "5yw6k9fIFDN":
        Script30();
        break;
      case "5hGdWrUc6cV":
        Script31();
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
