(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(3),i=n.n(o),a=(n(13),n.p,n(14),n(4)),l=n(5),b=n(7),j=n(6),u=(n(15),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={array:[],tiles:[],score:[]},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.resetMines()}},{key:"resetMines",value:function(){var e=[],t=[],n=[];n.push(0);for(var r=0;r<100;r++)t.push("TRY ME:)");for(var s,c,o=15;o>0;){for(var i=(s=0,c=99,Math.floor(Math.random()*(c-s+1)+s)),a=0,l=0;l<e.length;l++)if(e[l]===i){a=1;break}0===a&&(o--,e.push(i))}console.log(e),this.setState({array:e,tiles:t,score:n})}},{key:"process",value:function(e){var t=this.state,n=t.array,r=t.tiles,s=t.score;if(1===O(n,e)){var c=document.getElementsByClassName("mine")[e];c.innerHTML="BOMB!",c.style.margin="2px",c.style.background="red",c.style.borderRadius="15px",document.getElementById("GameOver").style.display="block",document.getElementById("Game").style.display="none"}else{if(s[0]+=1,85===s[0])document.getElementById("Winner").style.display="block",document.getElementById("Game").style.display="none";this.setState({array:n,tiles:r,score:s});var o=document.getElementsByClassName("mine")[e],i=Math.floor(e/10),a=e%10,l=i-1,b=a-1,j=i-1,u=a,m=i-1,x=a+1,f=i,h=a+1,g=i+1,y=a+1,p=i+1,v=a,E=i+1,M=a-1,k=i,B=a-1,C=0;1===d(l,b)&&(console.log(l+" "+b),C+=O(n,10*l+b)),1===d(j,u)&&(console.log(j+" "+u),C+=O(n,10*j+u)),1===d(m,x)&&(console.log(m+" "+x),C+=O(n,10*m+x)),1===d(f,h)&&(console.log(f+" "+h),C+=O(n,10*f+h)),1===d(g,y)&&(console.log(g+" "+y),C+=O(n,10*g+y)),1===d(p,v)&&(console.log(p+" "+v),C+=O(n,10*p+v)),1===d(E,M)&&(console.log(E+" "+M),C+=O(n,10*E+M)),1===d(k,B)&&(console.log(k+" "+B),C+=O(n,10*k+B)),o.innerHTML=C,o.style.margin="2px",o.style.background="green",o.style.borderRadius="15px"}}},{key:"render",value:function(){var e=this,t=this.state,n=(t.array,t.tiles),s=t.score;return Object(r.jsxs)("div",{className:"mine-container",children:[Object(r.jsxs)("div",{id:"GameOver",children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"OOPS:( GAME OVER",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Score : ",s[0],Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{id:"newgame",onClick:function(){return m()},children:"NEW GAME"}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("div",{id:"Winner",children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"CONGRATS:) YOU HAVE WON THE GAME!!",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Score : 85",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{id:"newgame",onClick:function(){return m()},children:"NEW GAME"}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("div",{id:"Game",children:[n.map((function(t,n){return Object(r.jsx)("button",{className:"mine",onClick:function(){return e.process(n)},children:t},n)})),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{id:"Score",children:["Score : ",s[0]]})]})]})}}]),n}(c.a.Component));function d(e,t){return e<0||e>9||t<0||t>9?0:1}function O(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return 1;return 0}function m(){window.location.reload()}var x=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(u,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.5f7cd087.chunk.js.map