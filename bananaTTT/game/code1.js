gdjs.GameStartCode = {};
gdjs.GameStartCode.GDStartBGObjects1= [];
gdjs.GameStartCode.GDStartBGObjects2= [];
gdjs.GameStartCode.GDStartBGObjects3= [];
gdjs.GameStartCode.GDStartBGObjects4= [];
gdjs.GameStartCode.GDwallObjects1= [];
gdjs.GameStartCode.GDwallObjects2= [];
gdjs.GameStartCode.GDwallObjects3= [];
gdjs.GameStartCode.GDwallObjects4= [];
gdjs.GameStartCode.GDStartButtonObjects1= [];
gdjs.GameStartCode.GDStartButtonObjects2= [];
gdjs.GameStartCode.GDStartButtonObjects3= [];
gdjs.GameStartCode.GDStartButtonObjects4= [];
gdjs.GameStartCode.GDRuleButtonObjects1= [];
gdjs.GameStartCode.GDRuleButtonObjects2= [];
gdjs.GameStartCode.GDRuleButtonObjects3= [];
gdjs.GameStartCode.GDRuleButtonObjects4= [];
gdjs.GameStartCode.GDSettingButtonObjects1= [];
gdjs.GameStartCode.GDSettingButtonObjects2= [];
gdjs.GameStartCode.GDSettingButtonObjects3= [];
gdjs.GameStartCode.GDSettingButtonObjects4= [];
gdjs.GameStartCode.GDPlayer1Objects1= [];
gdjs.GameStartCode.GDPlayer1Objects2= [];
gdjs.GameStartCode.GDPlayer1Objects3= [];
gdjs.GameStartCode.GDPlayer1Objects4= [];
gdjs.GameStartCode.GDPlayer2Objects1= [];
gdjs.GameStartCode.GDPlayer2Objects2= [];
gdjs.GameStartCode.GDPlayer2Objects3= [];
gdjs.GameStartCode.GDPlayer2Objects4= [];
gdjs.GameStartCode.GDQuitButtonObjects1= [];
gdjs.GameStartCode.GDQuitButtonObjects2= [];
gdjs.GameStartCode.GDQuitButtonObjects3= [];
gdjs.GameStartCode.GDQuitButtonObjects4= [];
gdjs.GameStartCode.GDSettingWallObjects1= [];
gdjs.GameStartCode.GDSettingWallObjects2= [];
gdjs.GameStartCode.GDSettingWallObjects3= [];
gdjs.GameStartCode.GDSettingWallObjects4= [];
gdjs.GameStartCode.GDStartWallObjects1= [];
gdjs.GameStartCode.GDStartWallObjects2= [];
gdjs.GameStartCode.GDStartWallObjects3= [];
gdjs.GameStartCode.GDStartWallObjects4= [];
gdjs.GameStartCode.GDLeftStickObjects1= [];
gdjs.GameStartCode.GDLeftStickObjects2= [];
gdjs.GameStartCode.GDLeftStickObjects3= [];
gdjs.GameStartCode.GDLeftStickObjects4= [];
gdjs.GameStartCode.GDBButtonObjects1= [];
gdjs.GameStartCode.GDBButtonObjects2= [];
gdjs.GameStartCode.GDBButtonObjects3= [];
gdjs.GameStartCode.GDBButtonObjects4= [];
gdjs.GameStartCode.GDMoveTextObjects1= [];
gdjs.GameStartCode.GDMoveTextObjects2= [];
gdjs.GameStartCode.GDMoveTextObjects3= [];
gdjs.GameStartCode.GDMoveTextObjects4= [];
gdjs.GameStartCode.GDClickTextObjects1= [];
gdjs.GameStartCode.GDClickTextObjects2= [];
gdjs.GameStartCode.GDClickTextObjects3= [];
gdjs.GameStartCode.GDClickTextObjects4= [];
gdjs.GameStartCode.GDAButtonObjects1= [];
gdjs.GameStartCode.GDAButtonObjects2= [];
gdjs.GameStartCode.GDAButtonObjects3= [];
gdjs.GameStartCode.GDAButtonObjects4= [];
gdjs.GameStartCode.GDBackTextObjects1= [];
gdjs.GameStartCode.GDBackTextObjects2= [];
gdjs.GameStartCode.GDBackTextObjects3= [];
gdjs.GameStartCode.GDBackTextObjects4= [];
gdjs.GameStartCode.GDSettingObjects1= [];
gdjs.GameStartCode.GDSettingObjects2= [];
gdjs.GameStartCode.GDSettingObjects3= [];
gdjs.GameStartCode.GDSettingObjects4= [];


gdjs.GameStartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").getXVelocity() + (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].setAngle(90);
}
}{runtimeScene.getScene().getVariables().get("bullet1").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").getXVelocity() - (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].setAngle(270);
}
}{runtimeScene.getScene().getVariables().get("bullet1").setNumber(180);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setYVelocity(gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").getYVelocity() + (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects3[i].setAngle(180);
}
}{runtimeScene.getScene().getVariables().get("bullet1").setNumber(90);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").setYVelocity(gdjs.GameStartCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").getYVelocity() - (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer1Objects2[i].setAngle(0);
}
}{runtimeScene.getScene().getVariables().get("bullet1").setNumber(270);
}}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects3Objects = Hashtable.newFrom({"Player1": gdjs.GameStartCode.GDPlayer1Objects3});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDStartButtonObjects3Objects = Hashtable.newFrom({"StartButton": gdjs.GameStartCode.GDStartButtonObjects3});
gdjs.GameStartCode.asyncCallback16827484 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Untitled scene");
}}
gdjs.GameStartCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameStartCode.asyncCallback16827484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects3Objects = Hashtable.newFrom({"Player1": gdjs.GameStartCode.GDPlayer1Objects3});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDRuleButtonObjects3Objects = Hashtable.newFrom({"RuleButton": gdjs.GameStartCode.GDRuleButtonObjects3});
gdjs.GameStartCode.asyncCallback16827932 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Rule");
}}
gdjs.GameStartCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameStartCode.asyncCallback16827932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects3Objects = Hashtable.newFrom({"Player1": gdjs.GameStartCode.GDPlayer1Objects3});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDSettingButtonObjects3Objects = Hashtable.newFrom({"SettingButton": gdjs.GameStartCode.GDSettingButtonObjects3});
gdjs.GameStartCode.asyncCallback16828660 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Setting");
}}
gdjs.GameStartCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameStartCode.asyncCallback16828660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects2Objects = Hashtable.newFrom({"Player1": gdjs.GameStartCode.GDPlayer1Objects2});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDQuitButtonObjects2Objects = Hashtable.newFrom({"QuitButton": gdjs.GameStartCode.GDQuitButtonObjects2});
gdjs.GameStartCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects3);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.GameStartCode.GDStartButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects3Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDStartButtonObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17133588);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameStartCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects3);
gdjs.copyArray(runtimeScene.getObjects("RuleButton"), gdjs.GameStartCode.GDRuleButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects3Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDRuleButtonObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17133324);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameStartCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects3);
gdjs.copyArray(runtimeScene.getObjects("SettingButton"), gdjs.GameStartCode.GDSettingButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects3Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDSettingButtonObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17133252);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameStartCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameStartCode.GDPlayer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.GameStartCode.GDQuitButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer1Objects2Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDQuitButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17133180);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameStartCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16826444);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\Button.aac", 2, false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
{ //Subevents
gdjs.GameStartCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameStartCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").getXVelocity() + (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].setAngle(90);
}
}{runtimeScene.getScene().getVariables().get("bullet2").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setYVelocity(gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").getYVelocity() + (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].setAngle(180);
}
}{runtimeScene.getScene().getVariables().get("bullet2").setNumber(90);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").getXVelocity() - (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects3[i].setAngle(-(90));
}
}{runtimeScene.getScene().getVariables().get("bullet2").setNumber(180);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects2);
{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects2[i].getBehavior("TopDownMovement").setYVelocity(gdjs.GameStartCode.GDPlayer2Objects2[i].getBehavior("TopDownMovement").getYVelocity() - (200));
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects2[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.GameStartCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameStartCode.GDPlayer2Objects2[i].setAngle(0);
}
}{runtimeScene.getScene().getVariables().get("bullet2").setNumber(270);
}}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.GameStartCode.GDPlayer2Objects2});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.GameStartCode.GDStartButtonObjects2});
gdjs.GameStartCode.asyncCallback16840804 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}
gdjs.GameStartCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameStartCode.asyncCallback16840804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.GameStartCode.GDPlayer2Objects2});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDRuleButtonObjects2Objects = Hashtable.newFrom({"RuleButton": gdjs.GameStartCode.GDRuleButtonObjects2});
gdjs.GameStartCode.asyncCallback16841252 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Rule");
}}
gdjs.GameStartCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameStartCode.asyncCallback16841252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.GameStartCode.GDPlayer2Objects2});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDSettingButtonObjects2Objects = Hashtable.newFrom({"SettingButton": gdjs.GameStartCode.GDSettingButtonObjects2});
gdjs.GameStartCode.asyncCallback16841980 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Setting");
}}
gdjs.GameStartCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameStartCode.asyncCallback16841980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameStartCode.GDPlayer2Objects1});
gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.GameStartCode.GDQuitButtonObjects1});
gdjs.GameStartCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.GameStartCode.GDStartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects2Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDStartButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17133876);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameStartCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("RuleButton"), gdjs.GameStartCode.GDRuleButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects2Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDRuleButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17134164);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameStartCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("SettingButton"), gdjs.GameStartCode.GDSettingButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects2Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDSettingButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17134540);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameStartCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameStartCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.GameStartCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDPlayer2Objects1Objects, gdjs.GameStartCode.mapOfGDgdjs_9546GameStartCode_9546GDQuitButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17134956);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameStartCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad1");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16839796);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\Button.aac", 2, false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
{ //Subevents
gdjs.GameStartCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameStartCode.eventsList12 = function(runtimeScene) {

{


gdjs.GameStartCode.eventsList0(runtimeScene);
}


{


gdjs.GameStartCode.eventsList5(runtimeScene);
}


{


gdjs.GameStartCode.eventsList6(runtimeScene);
}


{


gdjs.GameStartCode.eventsList11(runtimeScene);
}


};gdjs.GameStartCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sound\\BGM1.aac", 1, true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sound\\BGM1.aac", 1, true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16813452);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.GameStartCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameStartCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameStartCode.GDStartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameStartCode.GDStartButtonObjects1[k] = gdjs.GameStartCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.GameStartCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19664028);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RuleButton"), gdjs.GameStartCode.GDRuleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameStartCode.GDRuleButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameStartCode.GDRuleButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameStartCode.GDRuleButtonObjects1[k] = gdjs.GameStartCode.GDRuleButtonObjects1[i];
        ++k;
    }
}
gdjs.GameStartCode.GDRuleButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15174844);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Rule");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingButton"), gdjs.GameStartCode.GDSettingButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameStartCode.GDSettingButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameStartCode.GDSettingButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameStartCode.GDSettingButtonObjects1[k] = gdjs.GameStartCode.GDSettingButtonObjects1[i];
        ++k;
    }
}
gdjs.GameStartCode.GDSettingButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15508980);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Setting");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.GameStartCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameStartCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameStartCode.GDQuitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameStartCode.GDQuitButtonObjects1[k] = gdjs.GameStartCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.GameStartCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12316356);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameStartCode.eventsList12(runtimeScene);
}


};

gdjs.GameStartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameStartCode.GDStartBGObjects1.length = 0;
gdjs.GameStartCode.GDStartBGObjects2.length = 0;
gdjs.GameStartCode.GDStartBGObjects3.length = 0;
gdjs.GameStartCode.GDStartBGObjects4.length = 0;
gdjs.GameStartCode.GDwallObjects1.length = 0;
gdjs.GameStartCode.GDwallObjects2.length = 0;
gdjs.GameStartCode.GDwallObjects3.length = 0;
gdjs.GameStartCode.GDwallObjects4.length = 0;
gdjs.GameStartCode.GDStartButtonObjects1.length = 0;
gdjs.GameStartCode.GDStartButtonObjects2.length = 0;
gdjs.GameStartCode.GDStartButtonObjects3.length = 0;
gdjs.GameStartCode.GDStartButtonObjects4.length = 0;
gdjs.GameStartCode.GDRuleButtonObjects1.length = 0;
gdjs.GameStartCode.GDRuleButtonObjects2.length = 0;
gdjs.GameStartCode.GDRuleButtonObjects3.length = 0;
gdjs.GameStartCode.GDRuleButtonObjects4.length = 0;
gdjs.GameStartCode.GDSettingButtonObjects1.length = 0;
gdjs.GameStartCode.GDSettingButtonObjects2.length = 0;
gdjs.GameStartCode.GDSettingButtonObjects3.length = 0;
gdjs.GameStartCode.GDSettingButtonObjects4.length = 0;
gdjs.GameStartCode.GDPlayer1Objects1.length = 0;
gdjs.GameStartCode.GDPlayer1Objects2.length = 0;
gdjs.GameStartCode.GDPlayer1Objects3.length = 0;
gdjs.GameStartCode.GDPlayer1Objects4.length = 0;
gdjs.GameStartCode.GDPlayer2Objects1.length = 0;
gdjs.GameStartCode.GDPlayer2Objects2.length = 0;
gdjs.GameStartCode.GDPlayer2Objects3.length = 0;
gdjs.GameStartCode.GDPlayer2Objects4.length = 0;
gdjs.GameStartCode.GDQuitButtonObjects1.length = 0;
gdjs.GameStartCode.GDQuitButtonObjects2.length = 0;
gdjs.GameStartCode.GDQuitButtonObjects3.length = 0;
gdjs.GameStartCode.GDQuitButtonObjects4.length = 0;
gdjs.GameStartCode.GDSettingWallObjects1.length = 0;
gdjs.GameStartCode.GDSettingWallObjects2.length = 0;
gdjs.GameStartCode.GDSettingWallObjects3.length = 0;
gdjs.GameStartCode.GDSettingWallObjects4.length = 0;
gdjs.GameStartCode.GDStartWallObjects1.length = 0;
gdjs.GameStartCode.GDStartWallObjects2.length = 0;
gdjs.GameStartCode.GDStartWallObjects3.length = 0;
gdjs.GameStartCode.GDStartWallObjects4.length = 0;
gdjs.GameStartCode.GDLeftStickObjects1.length = 0;
gdjs.GameStartCode.GDLeftStickObjects2.length = 0;
gdjs.GameStartCode.GDLeftStickObjects3.length = 0;
gdjs.GameStartCode.GDLeftStickObjects4.length = 0;
gdjs.GameStartCode.GDBButtonObjects1.length = 0;
gdjs.GameStartCode.GDBButtonObjects2.length = 0;
gdjs.GameStartCode.GDBButtonObjects3.length = 0;
gdjs.GameStartCode.GDBButtonObjects4.length = 0;
gdjs.GameStartCode.GDMoveTextObjects1.length = 0;
gdjs.GameStartCode.GDMoveTextObjects2.length = 0;
gdjs.GameStartCode.GDMoveTextObjects3.length = 0;
gdjs.GameStartCode.GDMoveTextObjects4.length = 0;
gdjs.GameStartCode.GDClickTextObjects1.length = 0;
gdjs.GameStartCode.GDClickTextObjects2.length = 0;
gdjs.GameStartCode.GDClickTextObjects3.length = 0;
gdjs.GameStartCode.GDClickTextObjects4.length = 0;
gdjs.GameStartCode.GDAButtonObjects1.length = 0;
gdjs.GameStartCode.GDAButtonObjects2.length = 0;
gdjs.GameStartCode.GDAButtonObjects3.length = 0;
gdjs.GameStartCode.GDAButtonObjects4.length = 0;
gdjs.GameStartCode.GDBackTextObjects1.length = 0;
gdjs.GameStartCode.GDBackTextObjects2.length = 0;
gdjs.GameStartCode.GDBackTextObjects3.length = 0;
gdjs.GameStartCode.GDBackTextObjects4.length = 0;
gdjs.GameStartCode.GDSettingObjects1.length = 0;
gdjs.GameStartCode.GDSettingObjects2.length = 0;
gdjs.GameStartCode.GDSettingObjects3.length = 0;
gdjs.GameStartCode.GDSettingObjects4.length = 0;

gdjs.GameStartCode.eventsList13(runtimeScene);

return;

}

gdjs['GameStartCode'] = gdjs.GameStartCode;
