gdjs.RuleCode = {};
gdjs.RuleCode.GDRuleObjects1= [];
gdjs.RuleCode.GDRuleObjects2= [];
gdjs.RuleCode.GDRuleObjects3= [];
gdjs.RuleCode.GDRuleObjects4= [];
gdjs.RuleCode.GDL1Objects1= [];
gdjs.RuleCode.GDL1Objects2= [];
gdjs.RuleCode.GDL1Objects3= [];
gdjs.RuleCode.GDL1Objects4= [];
gdjs.RuleCode.GDR1Objects1= [];
gdjs.RuleCode.GDR1Objects2= [];
gdjs.RuleCode.GDR1Objects3= [];
gdjs.RuleCode.GDR1Objects4= [];
gdjs.RuleCode.GDRObjects1= [];
gdjs.RuleCode.GDRObjects2= [];
gdjs.RuleCode.GDRObjects3= [];
gdjs.RuleCode.GDRObjects4= [];
gdjs.RuleCode.GDLObjects1= [];
gdjs.RuleCode.GDLObjects2= [];
gdjs.RuleCode.GDLObjects3= [];
gdjs.RuleCode.GDLObjects4= [];
gdjs.RuleCode.GDHCObjects1= [];
gdjs.RuleCode.GDHCObjects2= [];
gdjs.RuleCode.GDHCObjects3= [];
gdjs.RuleCode.GDHCObjects4= [];
gdjs.RuleCode.GDPlayer1Objects1= [];
gdjs.RuleCode.GDPlayer1Objects2= [];
gdjs.RuleCode.GDPlayer1Objects3= [];
gdjs.RuleCode.GDPlayer1Objects4= [];
gdjs.RuleCode.GDPlayer2Objects1= [];
gdjs.RuleCode.GDPlayer2Objects2= [];
gdjs.RuleCode.GDPlayer2Objects3= [];
gdjs.RuleCode.GDPlayer2Objects4= [];
gdjs.RuleCode.GDwallObjects1= [];
gdjs.RuleCode.GDwallObjects2= [];
gdjs.RuleCode.GDwallObjects3= [];
gdjs.RuleCode.GDwallObjects4= [];
gdjs.RuleCode.GDBButtonObjects1= [];
gdjs.RuleCode.GDBButtonObjects2= [];
gdjs.RuleCode.GDBButtonObjects3= [];
gdjs.RuleCode.GDBButtonObjects4= [];
gdjs.RuleCode.GDMoveTextObjects1= [];
gdjs.RuleCode.GDMoveTextObjects2= [];
gdjs.RuleCode.GDMoveTextObjects3= [];
gdjs.RuleCode.GDMoveTextObjects4= [];
gdjs.RuleCode.GDLeftStickObjects1= [];
gdjs.RuleCode.GDLeftStickObjects2= [];
gdjs.RuleCode.GDLeftStickObjects3= [];
gdjs.RuleCode.GDLeftStickObjects4= [];
gdjs.RuleCode.GDBButton2Objects1= [];
gdjs.RuleCode.GDBButton2Objects2= [];
gdjs.RuleCode.GDBButton2Objects3= [];
gdjs.RuleCode.GDBButton2Objects4= [];
gdjs.RuleCode.GDClickTextObjects1= [];
gdjs.RuleCode.GDClickTextObjects2= [];
gdjs.RuleCode.GDClickTextObjects3= [];
gdjs.RuleCode.GDClickTextObjects4= [];
gdjs.RuleCode.GDRTextObjects1= [];
gdjs.RuleCode.GDRTextObjects2= [];
gdjs.RuleCode.GDRTextObjects3= [];
gdjs.RuleCode.GDRTextObjects4= [];
gdjs.RuleCode.GDLTextObjects1= [];
gdjs.RuleCode.GDLTextObjects2= [];
gdjs.RuleCode.GDLTextObjects3= [];
gdjs.RuleCode.GDLTextObjects4= [];
gdjs.RuleCode.GDSettingObjects1= [];
gdjs.RuleCode.GDSettingObjects2= [];
gdjs.RuleCode.GDSettingObjects3= [];
gdjs.RuleCode.GDSettingObjects4= [];


gdjs.RuleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rule"), gdjs.RuleCode.GDRuleObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.RuleCode.GDRuleObjects1.length ;i < len;++i) {
    gdjs.RuleCode.GDRuleObjects1[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.RuleCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rule"), gdjs.RuleCode.GDRuleObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.RuleCode.GDRuleObjects1.length ;i < len;++i) {
    gdjs.RuleCode.GDRuleObjects1[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.RuleCode.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RuleCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").getXVelocity() + (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].setAngle(90);
}
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
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RuleCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").getXVelocity() - (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].setAngle(270);
}
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
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RuleCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setYVelocity(gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").getYVelocity() + (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects3[i].setAngle(180);
}
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
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RuleCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").setYVelocity(gdjs.RuleCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").getYVelocity() - (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer1Objects2[i].setAngle(0);
}
}}

}


};gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer1Objects3Objects = Hashtable.newFrom({"Player1": gdjs.RuleCode.GDPlayer1Objects3});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDHCObjects3Objects = Hashtable.newFrom({"HC": gdjs.RuleCode.GDHCObjects3});
gdjs.RuleCode.asyncCallback16939028 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.RuleCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.RuleCode.asyncCallback16939028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer1Objects3Objects = Hashtable.newFrom({"Player1": gdjs.RuleCode.GDPlayer1Objects3});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDL1Objects3Objects = Hashtable.newFrom({"L1": gdjs.RuleCode.GDL1Objects3});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer1Objects2Objects = Hashtable.newFrom({"Player1": gdjs.RuleCode.GDPlayer1Objects2});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDR1Objects2Objects = Hashtable.newFrom({"R1": gdjs.RuleCode.GDR1Objects2});
gdjs.RuleCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HC"), gdjs.RuleCode.GDHCObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RuleCode.GDPlayer1Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer1Objects3Objects, gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDHCObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RuleCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.RuleCode.GDL1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RuleCode.GDPlayer1Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer1Objects3Objects, gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDL1Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rule"), gdjs.RuleCode.GDRuleObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.RuleCode.GDRuleObjects3.length ;i < len;++i) {
    gdjs.RuleCode.GDRuleObjects3[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RuleCode.GDPlayer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("R1"), gdjs.RuleCode.GDR1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer1Objects2Objects, gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDR1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 5;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rule"), gdjs.RuleCode.GDRuleObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.RuleCode.GDRuleObjects2.length ;i < len;++i) {
    gdjs.RuleCode.GDRuleObjects2[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.RuleCode.eventsList5 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16938044);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\Button.aac", 2, false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
{ //Subevents
gdjs.RuleCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.RuleCode.eventsList6 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RuleCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").getXVelocity() + (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].setAngle(90);
}
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
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RuleCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setYVelocity(gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").getYVelocity() + (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].setAngle(180);
}
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
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RuleCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setXVelocity(gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").getXVelocity() - (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].getBehavior("TopDownMovement").setYVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects3[i].setAngle(-(90));
}
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
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RuleCode.GDPlayer2Objects2);
{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects2[i].getBehavior("TopDownMovement").setYVelocity(gdjs.RuleCode.GDPlayer2Objects2[i].getBehavior("TopDownMovement").getYVelocity() - (200));
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects2[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{for(var i = 0, len = gdjs.RuleCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.RuleCode.GDPlayer2Objects2[i].setAngle(0);
}
}}

}


};gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.RuleCode.GDPlayer2Objects2});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDHCObjects2Objects = Hashtable.newFrom({"HC": gdjs.RuleCode.GDHCObjects2});
gdjs.RuleCode.asyncCallback16952308 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.RuleCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.RuleCode.asyncCallback16952308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.RuleCode.GDPlayer2Objects2});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDL1Objects2Objects = Hashtable.newFrom({"L1": gdjs.RuleCode.GDL1Objects2});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.RuleCode.GDPlayer2Objects1});
gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDR1Objects1Objects = Hashtable.newFrom({"R1": gdjs.RuleCode.GDR1Objects1});
gdjs.RuleCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HC"), gdjs.RuleCode.GDHCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RuleCode.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer2Objects2Objects, gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDHCObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RuleCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.RuleCode.GDL1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RuleCode.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer2Objects2Objects, gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDL1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rule"), gdjs.RuleCode.GDRuleObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.RuleCode.GDRuleObjects2.length ;i < len;++i) {
    gdjs.RuleCode.GDRuleObjects2[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RuleCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("R1"), gdjs.RuleCode.GDR1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDPlayer2Objects1Objects, gdjs.RuleCode.mapOfGDgdjs_9546RuleCode_9546GDR1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 5;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rule"), gdjs.RuleCode.GDRuleObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.RuleCode.GDRuleObjects1.length ;i < len;++i) {
    gdjs.RuleCode.GDRuleObjects1[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.RuleCode.eventsList9 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16951324);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\Button.aac", 2, false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
{ //Subevents
gdjs.RuleCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.RuleCode.eventsList10 = function(runtimeScene) {

{


gdjs.RuleCode.eventsList2(runtimeScene);
}


{


gdjs.RuleCode.eventsList5(runtimeScene);
}


{


gdjs.RuleCode.eventsList6(runtimeScene);
}


{


gdjs.RuleCode.eventsList9(runtimeScene);
}


};gdjs.RuleCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sound\\BGM2.aac", 1, true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 1);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16919796);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "L1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "L1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16921204);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\Button.aac", 2, false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
{ //Subevents
gdjs.RuleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "R1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "R1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16923804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\Button.aac", 2, false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
{ //Subevents
gdjs.RuleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BButton"), gdjs.RuleCode.GDBButtonObjects1);
{for(var i = 0, len = gdjs.RuleCode.GDBButtonObjects1.length ;i < len;++i) {
    gdjs.RuleCode.GDBButtonObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BButton"), gdjs.RuleCode.GDBButtonObjects1);
{for(var i = 0, len = gdjs.RuleCode.GDBButtonObjects1.length ;i < len;++i) {
    gdjs.RuleCode.GDBButtonObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "PS_Button", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "PS_Button", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16927692);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\Button.aac", 2, false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.RuleCode.eventsList10(runtimeScene);
}


};

gdjs.RuleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RuleCode.GDRuleObjects1.length = 0;
gdjs.RuleCode.GDRuleObjects2.length = 0;
gdjs.RuleCode.GDRuleObjects3.length = 0;
gdjs.RuleCode.GDRuleObjects4.length = 0;
gdjs.RuleCode.GDL1Objects1.length = 0;
gdjs.RuleCode.GDL1Objects2.length = 0;
gdjs.RuleCode.GDL1Objects3.length = 0;
gdjs.RuleCode.GDL1Objects4.length = 0;
gdjs.RuleCode.GDR1Objects1.length = 0;
gdjs.RuleCode.GDR1Objects2.length = 0;
gdjs.RuleCode.GDR1Objects3.length = 0;
gdjs.RuleCode.GDR1Objects4.length = 0;
gdjs.RuleCode.GDRObjects1.length = 0;
gdjs.RuleCode.GDRObjects2.length = 0;
gdjs.RuleCode.GDRObjects3.length = 0;
gdjs.RuleCode.GDRObjects4.length = 0;
gdjs.RuleCode.GDLObjects1.length = 0;
gdjs.RuleCode.GDLObjects2.length = 0;
gdjs.RuleCode.GDLObjects3.length = 0;
gdjs.RuleCode.GDLObjects4.length = 0;
gdjs.RuleCode.GDHCObjects1.length = 0;
gdjs.RuleCode.GDHCObjects2.length = 0;
gdjs.RuleCode.GDHCObjects3.length = 0;
gdjs.RuleCode.GDHCObjects4.length = 0;
gdjs.RuleCode.GDPlayer1Objects1.length = 0;
gdjs.RuleCode.GDPlayer1Objects2.length = 0;
gdjs.RuleCode.GDPlayer1Objects3.length = 0;
gdjs.RuleCode.GDPlayer1Objects4.length = 0;
gdjs.RuleCode.GDPlayer2Objects1.length = 0;
gdjs.RuleCode.GDPlayer2Objects2.length = 0;
gdjs.RuleCode.GDPlayer2Objects3.length = 0;
gdjs.RuleCode.GDPlayer2Objects4.length = 0;
gdjs.RuleCode.GDwallObjects1.length = 0;
gdjs.RuleCode.GDwallObjects2.length = 0;
gdjs.RuleCode.GDwallObjects3.length = 0;
gdjs.RuleCode.GDwallObjects4.length = 0;
gdjs.RuleCode.GDBButtonObjects1.length = 0;
gdjs.RuleCode.GDBButtonObjects2.length = 0;
gdjs.RuleCode.GDBButtonObjects3.length = 0;
gdjs.RuleCode.GDBButtonObjects4.length = 0;
gdjs.RuleCode.GDMoveTextObjects1.length = 0;
gdjs.RuleCode.GDMoveTextObjects2.length = 0;
gdjs.RuleCode.GDMoveTextObjects3.length = 0;
gdjs.RuleCode.GDMoveTextObjects4.length = 0;
gdjs.RuleCode.GDLeftStickObjects1.length = 0;
gdjs.RuleCode.GDLeftStickObjects2.length = 0;
gdjs.RuleCode.GDLeftStickObjects3.length = 0;
gdjs.RuleCode.GDLeftStickObjects4.length = 0;
gdjs.RuleCode.GDBButton2Objects1.length = 0;
gdjs.RuleCode.GDBButton2Objects2.length = 0;
gdjs.RuleCode.GDBButton2Objects3.length = 0;
gdjs.RuleCode.GDBButton2Objects4.length = 0;
gdjs.RuleCode.GDClickTextObjects1.length = 0;
gdjs.RuleCode.GDClickTextObjects2.length = 0;
gdjs.RuleCode.GDClickTextObjects3.length = 0;
gdjs.RuleCode.GDClickTextObjects4.length = 0;
gdjs.RuleCode.GDRTextObjects1.length = 0;
gdjs.RuleCode.GDRTextObjects2.length = 0;
gdjs.RuleCode.GDRTextObjects3.length = 0;
gdjs.RuleCode.GDRTextObjects4.length = 0;
gdjs.RuleCode.GDLTextObjects1.length = 0;
gdjs.RuleCode.GDLTextObjects2.length = 0;
gdjs.RuleCode.GDLTextObjects3.length = 0;
gdjs.RuleCode.GDLTextObjects4.length = 0;
gdjs.RuleCode.GDSettingObjects1.length = 0;
gdjs.RuleCode.GDSettingObjects2.length = 0;
gdjs.RuleCode.GDSettingObjects3.length = 0;
gdjs.RuleCode.GDSettingObjects4.length = 0;

gdjs.RuleCode.eventsList11(runtimeScene);

return;

}

gdjs['RuleCode'] = gdjs.RuleCode;
