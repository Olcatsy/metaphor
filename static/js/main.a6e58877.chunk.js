(this["webpackJsonpproject-5-metaphor"]=this["webpackJsonpproject-5-metaphor"]||[]).push([[0],{17:function(e,t,a){e.exports=a(38)},22:function(e,t,a){},23:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),s=(a(22),a(3)),i=a(4),c=a(6),u=a(5),m=a(7),h=(a(23),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper flexParent"},r.a.createElement("h1",null,"Analog"),r.a.createElement("nav",{"aria-label":"navigation"},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("button",{className:"navButton homeButton",value:"home",onClick:this.props.changePage},"Home")),r.a.createElement("li",null," ",r.a.createElement("button",{className:"navButton drawButton",value:"draw",onClick:this.props.changePage},"Draw")),r.a.createElement("li",null," ",r.a.createElement("button",{className:"navButton galleryButton",value:"gallery",onClick:this.props.changePage},"Gallery"))))))}}]),t}(n.Component)),p=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homeScreen"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("p",null,"Many people are put off by visual arts because they think they are bad at it. When we are young, those of us that can draw realistically are considered \u201cgifted\u201d, but the rest internalize the idea that you need \u201ctalent\u201d to be able to draw. However, I believe that ",r.a.createElement("span",null,"drawing is just another communication skill"),", like reading and writing, that anyone can learn, and can be useful no matter what you do in life. "),r.a.createElement("p",null,r.a.createElement("span",null,"Let\u2019s do a creative exercise!"),"  Forget about drawing realistically, you don\u2019t need that to be able to express yourself and have fun. Instead, you will create ",r.a.createElement("span",null,"analog drawings"),". You will get a one-word prompt of an abstract idea (e.g. anger, depression, joy) that you have to sketch out without drawing any recognizable objects, only through shapes and lines. You can also see how other people interpreted these concepts in the Gallery! Hope you enjoy the process and find it useful for developing your visual communication skill."),r.a.createElement("p",{class:"smallCopy"},"(I\u2019ve adapted this exercise from a great book by ",r.a.createElement("a",{href:"https://www.drawright.com/"},"Betty Edwards")," called ",r.a.createElement("span",null,"Drawing on the Artist Within"),"  (specifically Chapter 7). I highly recommend it if you want to improve your creative process, or if you want to learn drawing but don\u2019t know where to start)"),r.a.createElement("button",{className:"startButton yellowButton",value:"draw",onClick:this.props.startDrawing},"Let's draw")))}}]),t}(n.Component),d=a(13),g=a.n(d);g.a.initializeApp({apiKey:"AIzaSyB7RHaKc0W2HjhoCLYK_k8oddFYSTcfYYc",authDomain:"metaphor-b5672.firebaseapp.com",databaseURL:"https://metaphor-b5672.firebaseio.com",projectId:"metaphor-b5672",storageBucket:"metaphor-b5672.appspot.com",messagingSenderId:"344226260457",appId:"1:344226260457:web:49dcd90730cdf5526b9778"});var f=g.a,w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).pushToDb=function(t){t.preventDefault();var a=f.database().ref();e.props.userDrawing?(a.push({prompt:e.props.chosenPrompt,imgString:e.props.userDrawing}),e.setState({modalMessage:"Thank you for posting!"})):e.setState({modalMessage:"Please draw something!"}),e.setState({showModal:!0}),setTimeout((function(){e.setState({showModal:!1})}),3e3)},e.state={showModal:!1,modalMessage:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"post"},r.a.createElement("button",{className:"postButton yellowButton",onClick:this.pushToDb},"Post"),this.state.showModal?r.a.createElement("div",{className:"postModal"},this.state.modalMessage):null)}}]),t}(n.Component),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).startDrawing=function(t){e.setState({isDrawing:!0,x:t.nativeEvent.offsetX,y:t.nativeEvent.offsetY})},e.draw=function(t){var a=e.refs.canvas.getContext("2d");e.state.isDrawing&&(a.beginPath(),a.moveTo(e.state.x,e.state.y),a.lineTo(t.nativeEvent.offsetX,t.nativeEvent.offsetY),a.stroke(),e.setState({x:t.nativeEvent.offsetX,y:t.nativeEvent.offsetY}),e.captureDrawing())},e.endDrawing=function(){e.setState({isDrawing:!1})},e.captureDrawing=function(){var t=e.refs.canvas.toDataURL();e.setState({drawingStr:t})},e.clear=function(){var t=e.refs.canvas;t.getContext("2d").clearRect(0,0,t.width,t.height),e.setState({drawingStr:""})},e.state={isDrawing:!1,x:0,y:0,drawingStr:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas.getContext("2d");e.strokeStyle="black",e.lineJoin="round",e.lineCap="round",e.lineWidth=5}},{key:"render",value:function(){return r.a.createElement("div",{className:"canvasInnerContainer"},r.a.createElement("canvas",{className:"canvas",ref:"canvas",onMouseDown:this.startDrawing,onMouseMove:this.draw,onMouseUp:this.endDrawing,onMouseLeave:this.endDrawing,width:"500",height:"500"}),r.a.createElement("div",{className:"canvasButtons"},r.a.createElement("button",{className:"yellowButton",onClick:this.clear},"Clear"),r.a.createElement(w,{userDrawing:this.state.drawingStr,chosenPrompt:this.props.chosenPrompt})))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).randomizePrompts=function(){var t=Math.floor(Math.random()*e.state.wordPrompts.length);e.setState({chosenPrompt:e.state.wordPrompts[t]})},e.state={userDrawing:{},wordPrompts:["Anger","Anxiety","Tranquility","Depression","Soft","Chaos","Order","Joy","Sickness","Energy","Death","Love","Dream","Fragility","Growth","Loneliness","Movement","Shock","Fatigue"],chosenPrompt:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.randomizePrompts()}},{key:"render",value:function(){return r.a.createElement("div",{className:"draw"},r.a.createElement("div",{className:"canvasOuterContainer"},r.a.createElement("p",{className:"prompt"},"Your prompt is ",r.a.createElement("span",null,this.state.chosenPrompt),"."),r.a.createElement(v,{chosenPrompt:this.state.chosenPrompt})),r.a.createElement("ul",{className:"drawCopy"},r.a.createElement("li",null,r.a.createElement("p",null,"Consider your prompt. Try to imagine what the concept feels like to you. If it\u2019s an emotion, try to remember the last time you felt it. What kind of marks and shapes would you use to render it? Straight lines? Squiggles? Tiny dots? How much space would your drawing occupy?")),r.a.createElement("li",null,r.a.createElement("p",null,"Avoid drawing recognizable objects or symbols! We are going for pure abstraction :)")),r.a.createElement("li",null,r.a.createElement("p",null,"Don\u2019t overthink your drawing or try to visualize it beforehand, let your feelings pass through your hands and render themselves on the drawing pad.")),r.a.createElement("li",null,r.a.createElement("p",null,"Take as much time as you need. There\u2019s no right or wrong way to do this, your drawing is unique to you")),r.a.createElement("li",null,r.a.createElement("p",null,"Try not to look at other people\u2019s drawings before you draw, it\u2019s more fun that way!"))))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={drawings:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push(a[r]);e.setState({drawings:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"gallery"},r.a.createElement("p",null,"It\u2019s really interesting to compare your analog drawings with the ones done by other people. Do their renditions of the same concept look like yours? You might see some similarities, yet every drawing has its own unique characteristics. Although we all experience roughly the same emotions, the intensity and quality of these emotions is different between individuals. ",r.a.createElement("span",null,"Your drawing makes your emotions visible.")),r.a.createElement("div",{className:"galleryGrid"},this.state.drawings.map((function(e,t){return r.a.createElement("div",{className:"userDrawing"},r.a.createElement("img",{src:e.imgString,alt:e.prompt,key:t}),r.a.createElement("p",null,e.prompt))}))))}}]),t}(n.Component),E=function(){return r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://olgafil.com/"},r.a.createElement("i",{className:"fas fa-external-link-alt","aria-label":"Olga's website"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/OlgaFilCodes"},r.a.createElement("i",{className:"fab fa-twitter","aria-label":"Olga's Twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://codepen.io/OlgaFil"},r.a.createElement("i",{className:"fab fa-codepen","aria-label":"Olga's Codepen"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Olcatsy"},r.a.createElement("i",{className:"fab fa-github","aria-label":"Olga's GitHub"})))))},k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).changePage=function(t){e.setState({currentPage:t.target.value})},e.randomizePrompts=function(){var t=Math.floor(Math.random()*e.state.wordPrompts.length);e.setState({chosenPrompt:e.state.wordPrompts[t]})},e.state={currentPage:"home"},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return"home"===this.state.currentPage?e=r.a.createElement(p,{startDrawing:this.changePage}):"draw"===this.state.currentPage?e=r.a.createElement(y,null):"gallery"===this.state.currentPage&&(e=r.a.createElement(b,null)),r.a.createElement("div",{className:"App"},r.a.createElement(h,{changePage:this.changePage}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},e)),r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a6e58877.chunk.js.map