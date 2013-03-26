//t = startRotating();
currentTab = 1;

function openTab(varNum){
    /* need to find a workaround */
    oldElement = document.getElementById('currentTab');
    oldElement.id = null;
    children = document.getElementById('rotatingButtonsList').getElementsByTagName('a');
    children[children.length-varNum].id = "currentTab";
    //alert(children[var1]);
    
    //document.getElementById().l
    //var1.id = "currentTab";
    setMargin = (varNum-1)*-170;
    fadeTab('rotatingLogoList',100,2,1);
    currentTab = varNum;
    return true;
}

function fadeTab(varName, varStart, varStep, varDir){
    clearTimeout(t);
    varItem = document.getElementById(varName);
    varItem.style.opacity = varStart/100;
    varItem.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity='+varStart+')';
    
    if(varStart>100){
        //this should happen if we finish fading in
        varItem.style.opacity = null;
        varItem.style.filter = null;
        startRotating(currentTab,maxTabs);
        return true;
    }
    if(varStart<=0){
        //switch the direction of fading
        varItem.style.marginTop = setMargin+"px";
        varDir = -varDir;
    }
    varString = 'fadeTab("'+varName+'",'+(varStart-(varDir*varStep))+','+varStep+','+varDir+')';
    setTimeout(varString,10);
    return true;
}

function startRotating(varTab,varMaxTab){
    //alert(currentTab);
    if(varTab == varMaxTab) varTab = 1;
    else varTab++;
    t = setTimeout('openTab('+varTab+')',5000);
}

function stopRotating(){
    clearTimeout(t);
}