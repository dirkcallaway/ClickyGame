(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e){e.exports=[{id:1,name:"1",color:"red"},{id:2,name:"2",color:"orange"},{id:3,name:"3",color:"gold"},{id:4,name:"4",color:"green"},{id:5,name:"5",color:"blue"},{id:6,name:"6",color:"indigo"},{id:7,name:"7",color:"violet"},{id:8,name:"8",color:"red"},{id:9,name:"9",color:"orange"},{id:10,name:"10",color:"gold"},{id:11,name:"11",color:"green"},{id:12,name:"12",color:"blue"}]},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),o=t.n(c),l=(t(14),t(3)),i=t(4),s=t(6),m=t(5),u=t(7);t(15);var d=function(e){return r.a.createElement("div",{className:"row scorebar"},r.a.createElement("div",{className:"col s1 m6 right-align"},r.a.createElement("h5",{className:"inline"},"Current Streak:"),r.a.createElement("h5",{className:"inline ml-2"},e.score)),r.a.createElement("div",{className:"col s1 m6"},r.a.createElement("h5",{className:"inline"},"Top Streak:"),r.a.createElement("h5",{className:"inline ml-2"},e.highScore)))};t(16);var h=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"home",className:"brand-logo center"},"Clicky Game")))};t(17);var v=function(e){return r.a.createElement("div",{className:"card",id:e.color,onClick:function(){return e.handleClick(e.name)}},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("h1",{className:"numbers center-block center"},e.name)))};t(18);var f=function(e){return r.a.createElement("div",{id:"playAgain"},r.a.createElement("div",{className:"modal-content center-align"},r.a.createElement("h4",null,"Game Over"),r.a.createElement("p",null,"Want to play again?")),r.a.createElement("div",{className:"modal-footer center-align"},r.a.createElement("button",{onClick:e.reset,className:"waves-effect waves-light btn"},"Play Again")))},g=t(19),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={numbers:g,currentScore:0,highScore:0,beenClicked:[],gameOver:!1},t.ResetGame=function(){t.setState({currentScore:0,gameOver:!1,beenClicked:[]}),t.ShuffleCards(g)},t.ShuffleCards=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}},t.HandleClickEvent=function(e){t.state.beenClicked.includes(e)?(t.setState({currentScore:0}),t.setState({gameOver:!0}),t.state.currentScore>t.state.highScore&&t.setState({highScore:t.state.currentScore})):(t.setState({beenClicked:t.state.beenClicked.concat(e),currentScore:t.state.currentScore+1}),t.ShuffleCards(t.state.numbers))},t.MakeNumberCards=function(){return t.state.numbers.map(function(e){return r.a.createElement(v,{key:e.id,name:e.name,color:e.color,handleClick:t.HandleClickEvent})})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(d,{highScore:this.state.highScore,score:this.state.currentScore}),r.a.createElement("div",{className:"container",id:"main-content"},this.state.gameOver&&r.a.createElement(f,{reset:this.ResetGame}),r.a.createElement("div",{className:"flex-box"},this.MakeNumberCards())))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.028044e2.chunk.js.map