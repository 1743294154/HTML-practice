var art=new Object();

art.Browser={ie:/msie/.test(window.navigator.userAgent.toLowerCase()),moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),opera:/opera/.test(window.navigator.userAgent.toLowerCase()),safari:/safari/.test(window.navigator.userAgent.toLowerCase())};

art.JsLoader={load:function(sUrl,fCallback){var _script=document.createElement('script');_script.setAttribute('charset','gb2312');_script.setAttribute('type','text/javascript');_script.setAttribute('src',sUrl);document.getElementsByTagName('head')[0].appendChild(_script);if(art.Browser.ie){_script.onreadystatechange=function(){if(this.readyState=='loaded'||this.readyStaate=='complete'){fCallback();}};}else if(art.Browser.moz){_script.onload=function(){fCallback();};}else{fCallback();}}};

var articl=new Object();

articl={$:function(v){return document.getElementById(v)},getEles:function(id,ele){return this.$(id).getElementsByTagName(ele);},tabId:"sildPicBar",tabDot:"dot",tabBox:"cnt-wrap",tabSilder:"cnt",tabSilderSon:"li",comtList:"ComList",rightBorder:"silidBarBorder",Count:function(){return this.getEles(this.tabSilder,this.tabSilderSon).length},Now:0,isCmt:true,isSild:true,timer:null,site:'0',cmtId:'0',cmtBase:'0',sideTab:{heads:'tabTit',heads_ele:'span',bodys:'tabBody',bodys_ele:'ol'},SildTab:function(now){this.Now=Number(now);if(this.Now>Math.ceil(this.Count()/4)-1){this.Now=0;}else if(this.Now<0){this.Now=Math.ceil(this.Count()/4)-1;}
if(parseInt(this.$(this.tabSilder).style.left)>-156*parseInt(this.Now*4)){this.moveR();}else{this.moveL();}
for(var i=0;i<Math.ceil(this.Count()/4);i++){if(i==this.Now){this.getEles(this.tabId,"li")[this.Now].className="select";}else{this.getEles(this.tabId,"li")[i].className="";}}},moveR:function(setp){var _curLeft=parseInt(this.$(this.tabSilder).style.left);var _distance=50;if(_curLeft>-156*parseInt(this.Now*4)){this.$(this.tabSilder).style.left=(_curLeft-_distance)+26+"px";window.setTimeout("articl.moveR()",1);}},moveL:function(setp){var _curLeft=parseInt(this.$(this.tabSilder).style.left);var _distance=50;if(_curLeft<-156*parseInt(this.Now*4)){this.$(this.tabSilder).style.left=(_curLeft+_distance)-26+"px";window.setTimeout("articl.moveL()",1);}},pagePe:function(way){if(way=="next"){this.Now+=1;this.SildTab(this.Now);}else{this.Now-=1;this.SildTab(this.Now);}},smallCk:function(){for(var i=0;i<Math.ceil(this.Count()/4);i++){if(i==0){this.$(this.tabDot).innerHTML+="<li class='select' onclick='articl.SildTab("+i+")'></li>";}else{this.$(this.tabDot).innerHTML+="<li onclick='articl.SildTab("+i+")'></li>";}}},TabChang:function(){var eles=this.getEles(this.sideTab.heads,this.sideTab.heads_ele);var body=this.getEles(this.sideTab.bodys,this.sideTab.bodys_ele);for(var i=0;i<eles.length;i++){(function(){var p=i;eles[p].onmouseover=function(){articl._TabChang(p,body,eles);}})();}},_TabChang:function(n,body,obj){for(var i=0;i<body.length;i++){if(i==n){body[n].className="block";obj[n].className="select";}else{body[i].className="none";obj[i].className="";}}},ComList:function(){},setFont:function(n){this.$("Cnt-Main-Article-QQ").style.fontSize=n+"px";},onload:function(){if(art.Browser.moz){document.addEventListener("DOMContentLoaded",function(){articl.ints()},null);}else{if(document.readyState=="complete"){articl.ints();}else{document.onreadystatechange=function(){if(document.readyState=="complete"){articl.ints();}}}}},ints:function(){if(this.isCmt){this.ComList();}
if(this.isSild){this.$(this.tabBox).style.position="relative";this.$(this.tabSilder).style.position="absolute";this.$(this.tabSilder).style.left=0+"px";this.getEles(this.tabId,"span")[1].onclick=function(){articl.pagePe("next");}
this.getEles(this.tabId,"span")[0].onclick=function(){articl.pagePe("pre");}
this.smallCk();}
}};

articl.onload();
