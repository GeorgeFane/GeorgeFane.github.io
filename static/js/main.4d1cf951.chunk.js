(this["webpackJsonpsimple-reactjs-app"]=this["webpackJsonpsimple-reactjs-app"]||[]).push([[0],{417:function(e,t){},426:function(e,t){},444:function(e,t){},446:function(e,t){},464:function(e,t){},465:function(e,t){},529:function(e,t){},531:function(e,t){},563:function(e,t){},565:function(e,t){},566:function(e,t){},571:function(e,t){},573:function(e,t){},579:function(e,t){},581:function(e,t){},594:function(e,t){},606:function(e,t){},609:function(e,t){},614:function(e,t){},622:function(e,t){},698:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(26),s=n.n(r),o=n(11),c=n(13),l=n(18),u=n(17),d=n(30),h=n(32),p=n(3),b=n(116),j=n(6),m=n(755),f=n(756),O=n(121),g=n(142),v=n(776),x=n(773),y=n(704),w=n(705),k=n(709),C=n(762),S=n(212),T=n(760),N=n(774),F=n(765),M=n(766),A=n(767),E=n(768),I=n(769),D=n(770),B=n(771),G=n(772),H=n(752),_=n(57),R=n(228),L=n(750),V=n(751),z=n(89),P=n(753),U=n(754),q=n(2),J=Object(R.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var K=[{href:"https://github.com/GeorgeFane",icon:Object(q.jsx)(H.a,{}),text:"GitHub"},{href:"https://www.linkedin.com/in/george-fane/",icon:Object(q.jsx)(P.a,{}),text:"LinkedIn"},{href:"https://www.georgefane.com/",icon:Object(q.jsx)(U.a,{}),text:"Blog"}];var Q=function(){var e=J();return Object(q.jsxs)("div",{className:e.root,children:[Object(q.jsxs)(L.a,{container:!0,spacing:3,children:[Object(q.jsx)(L.a,{item:!0,xs:3,children:Object(q.jsx)("img",{width:"100%",src:"https://avatars.githubusercontent.com/u/39439818?v=4"})}),Object(q.jsx)(L.a,{item:!0,xs:3,children:Object(q.jsx)(S.a,{className:e.paper,children:Object(q.jsx)(g.a,{variant:"h6",children:"Hi! I'm George Fane, a sophomore at the University of Michigan studying Business Adminstration and Computer Science."})})}),Object(q.jsx)(L.a,{item:!0,xs:3,children:Object(q.jsx)(S.a,{className:e.paper,children:Object(q.jsx)(V.a,{variant:"text",orientation:"vertical",size:"large",children:K.map((function(e){return Object(q.jsx)(z.a,{href:e.href,target:"_blank",startIcon:e.icon,children:e.text})}))})})})]}),Object(q.jsxs)(L.a,{container:!0,spacing:3,children:[Object(q.jsx)(L.a,{item:!0,xs:3}),Object(q.jsx)(L.a,{item:!0,xs:3,children:Object(q.jsx)(S.a,{className:e.paper,children:Object(q.jsx)(g.a,{variant:"h6",children:"I've liked the show Mad Men for a while, but just this summer I got into music and movies from that era. Since May I've watched seven Audrey Hepburn films as well as Some Like It Hot, Casablanca, and Singin' in the Rain. It's simply a joy to go into a Ross Building conference rooms, turn off the lights, put my feet up, and start an old movie."})})})]})]})},X=n(9),W=n(335),Y=n(39),Z=n(117),$=n(71),ee=n.n($),te=n(218),ne=n(775),ae=(n(217),n(21));n(336),n(337),Object(R.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(h.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(h.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ae.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ae.d)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(9),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(h.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));n(711);var ie=n(757);Object(R.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}}));n(349),n(338),n(339),n(340),n(341),n(342),n(343),n(344);Object(R.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));var re="darkGreen green goldenRod darkGoldenRod indianRed fireBrick".split(" "),se="https://www.omdbapi.com/";function oe(e){return ee.a.get(se,{params:{apikey:"14f8eef1",s:e,type:"series"}}).then((function(e){return e.data.Search||[]}))}function ce(e,t){return ee.a.get(se,{params:{apikey:"14f8eef1",i:e,Season:t}})}var le=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={rows:[],show:{},seasons:[]},a.onChange=a.onChange.bind(Object(Z.a)(a)),a}return Object(c.a)(n,[{key:"Form",value:function(){var e=this;return Object(q.jsx)("form",{onSubmit:this.handleSubmit.bind(this),children:Object(q.jsx)(te.a,{label:"Search Show",variant:"filled",required:!0,inputRef:function(t){return e.body=t}})})}},{key:"ImageGridList",value:function(){var e=this;return this.state.rows.length?Object(q.jsx)(L.a,{container:!0,justify:"left",spacing:2,children:this.state.rows.filter((function(e){return"N/A"!==e.Poster})).map((function(t){return Object(q.jsx)(L.a,{item:!0,onClick:function(){return e.handleSelect(t.imdbID)},children:Object(q.jsx)("img",{src:t.Poster,alt:t.Title,width:144})})}))}):(ne.a,this.state.rows.map((function(e){return Object(q.jsx)(ne.a,{component:"div",display:"inline",children:Object(q.jsx)("img",{src:e.Poster,alt:e.Title,width:99})})})))}},{key:"process",value:function(){var e=this.state.seasons;if(!e.length)return!1;var t=[],n=[];e.forEach((function(e){var a={};(e.Episodes||[]).forEach((function(e){a[e.Episode]=e.imdbRating})),t.push(a),n.push(Math.max.apply(Math,Object(Y.a)(Object.keys(a).map(Number))))}));for(var a=Math.max.apply(Math,n),i=[{field:"id",headerName:"Season"}],r=1;r<a+1;r++)i.push({field:r,headerName:"E"+r});return t.forEach((function(e,t){return e.id=t+1})),{rows:t,columns:i}}},{key:"RatingsMap",value:function(){var e=this.process();if(!e)return Object(q.jsx)("div",{});var t=this.props.classes;return Object(q.jsx)(ne.a,{className:t.root,children:Object(q.jsx)(_.a,Object(d.a)(Object(d.a)({},e),{},{autoHeight:!0,getCellClassName:function(e){if("id"===e.field||!e.value||isNaN(e.value))return"";var t,n=Object(W.a)(re.entries());try{for(n.s();!(t=n.n()).done;){var a=Object(X.a)(t.value,2),i=a[0],r=a[1];if(Number(e.value)>=9-i)return r}}catch(s){n.e(s)}finally{n.f()}return re[re.length-1]}}))})}},{key:"render",value:function(){return Object(q.jsxs)("div",{children:[this.Form(),Object(q.jsx)("br",{}),this.ImageGridList(),Object(q.jsx)("br",{}),this.RatingsMap()]})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),oe(this.body.value).then((function(e){t.setState({rows:e})}))}},{key:"onChange",value:function(e){var t=this;e.preventDefault(),console.log(e.target.value),oe(e.target.value).then((function(e){t.setState({rows:e})}))}},{key:"handleSelect",value:function(e){var t=this;(function(e){return ee.a.get(se,{params:{apikey:"14f8eef1",i:e}}).then((function(e){return e.data||[]}))})(e).then((function(e){t.setState({show:e}),function(e,t){for(var n=[],a=0;a<t;a++)n.push(ce(e,a+1));return ee.a.all(n).then(ee.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.data}))})))}(t.state.show.imdbID,Number(t.state.show.totalSeasons)).then((function(e){t.setState({seasons:e})}))}))}}]),n}(i.a.Component),ue=Object(j.a)((function(e){var t={padding:e.spacing(3)};return re.forEach((function(e){t["& ."+e]={backgroundColor:e}})),{root:t}}))(le),de=n(346),he=n.n(de),pe=n(210),be=n.n(pe),je={address:"0x34b41A8f1b89e94F9E50283DD9F3a296C620E2fA",abi:[{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes",name:"TimestampEST",type:"bytes"},{indexed:!1,internalType:"address",name:"From",type:"address"},{indexed:!1,internalType:"address",name:"To",type:"address"},{indexed:!1,internalType:"uint256",name:"Continent",type:"uint256"},{indexed:!1,internalType:"uint256",name:"Value",type:"uint256"},{indexed:!1,internalType:"bytes",name:"Memo",type:"bytes"},{indexed:!1,internalType:"bytes",name:"TxnHash",type:"bytes"}],name:"trans",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"bals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"time",type:"string"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"cont",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"string",name:"memo",type:"string"},{internalType:"string",name:"hash",type:"string"}],name:"give",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"time",type:"string"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"cont",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"string",name:"memo",type:"string"},{internalType:"string",name:"hash",type:"string"}],name:"take",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]},me={omdb:"14f8eef1",truffle:"8f7572d1-e253-420a-93bc-2ed8a6f051e6"},fe=Object(R.a)({root:{"& .charity":{backgroundColor:"red"}}}),Oe=("id TimestampEST From To Continent Value Memo TxnHash".split(" "),[{field:"id",type:"number"},{field:"TimestampEST"},{field:"From"},{field:"To"},{field:"Continent"},{field:"Value",type:"number"},{field:"Memo"},{field:"TxnHash"}]);function ge(e){var t=e.rows,n=fe();return t.length?Object(q.jsx)("div",{className:n.root,children:Object(q.jsx)(_.a,{rows:t,columns:Oe,autoHeight:!0,pageSize:5,getCellClassName:function(e){return"From"===e.field&&"0x596Aa50158BFf76F8D08F848d701C83a4F754d9c"===e.value?"charity":""},sortModel:[{field:"id",sort:"desc"}]})}):Object(q.jsx)("div",{children:"Loading rows..."})}var ve=n(72),xe=["Asia","Africa","North America","South America","Antarctica","Europe","Australia"],ye="0x61eB15d8A761Fc80387F50d84Fbf7Ff47a97d92F",we="0x596Aa50158BFf76F8D08F848d701C83a4F754d9c",ke="0xAf951AE00Ab357b8a2cFa66901E0D4D0F96e397B",Ce=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).send=function(e){return"User"===a.state.agent?a.donate():a.spend()},a.state={agent:null,continent:null,value:0,memo:""},a}return Object(c.a)(n,[{key:"donate",value:function(){var e=this;this.props.web3.eth.sendTransaction({from:ye,to:we,value:this.state.value}).on("transactionHash",(function(t){e.props.myContract.methods.give((new Date).toISOString(),we,e.state.continent,e.state.value,"",t).send({from:ye})}))}},{key:"spend",value:function(){var e=this;this.props.web3.eth.sendTransaction({from:we,to:ke,value:this.state.value}).on("transactionHash",(function(t){e.props.myContract.methods.take((new Date).toISOString(),ke,e.state.continent,e.state.value,e.state.memo,t).send({from:we})}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(q.jsxs)(L.a,{container:!0,spacing:1,children:[Object(q.jsx)(L.a,{item:!0,xs:1,children:Object(q.jsx)(S.a,{className:t.paper,children:Object(q.jsx)(g.a,{variant:"h4",className:t.title,children:"Form"})})}),Object(q.jsx)(L.a,{item:!0,xs:!0,children:Object(q.jsx)(S.a,{className:t.paper,children:Object(q.jsx)(te.a,{label:"Agent",select:!0,onChange:function(t){return e.setState({agent:t.target.value})},children:"User Charity".split(" ").map((function(e){return Object(q.jsx)(ve.a,{value:e,children:e})}))})})}),Object(q.jsx)(L.a,{item:!0,xs:!0,children:Object(q.jsx)(S.a,{className:t.paper,children:Object(q.jsx)(te.a,{label:"Continent",select:!0,onChange:function(t){return e.setState({continent:t.target.value})},children:xe.map((function(e,t){return Object(q.jsx)(ve.a,{value:t,children:e})}))})})}),Object(q.jsx)(L.a,{item:!0,xs:!0,children:Object(q.jsx)(S.a,{className:t.paper,children:Object(q.jsx)(te.a,{label:"Amount",type:"number",onChange:function(t){return e.setState({value:t.target.value})}})})}),Object(q.jsx)(L.a,{item:!0,xs:!0,children:Object(q.jsx)(S.a,{className:t.paper,children:Object(q.jsx)(te.a,{label:"Memo (only stored for Charity)",onChange:function(t){return e.setState({memo:t.target.value})}})})}),Object(q.jsx)(L.a,{item:!0,xs:1,children:Object(q.jsx)("div",{className:t.paper,children:Object(q.jsx)(z.a,{variant:"contained",color:"primary",onClick:this.send,children:"Submit"})})})]})}}]),n}(i.a.Component),Se=Object(j.a)((function(e){return{root:{flexGrow:1},title:{padding:e.spacing(1)},paper:{padding:e.spacing(1),display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}}))(Ce),Te=Object(R.a)({list:{width:250},fullList:{width:"auto"}}),Ne=["Asia","Africa","NorthAmerica","SouthAmerica","Antarctica","Europe","Australia"];function Fe(e){var t=Te(),n=i.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(X.a)(n,2),r=a[0],s=a[1],o=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&s(Object(d.a)(Object(d.a)({},r),{},Object(h.a)({},e,t)))}},c=function(n){return Object(q.jsx)("div",{className:Object(p.a)(t.list,Object(h.a)({},t.fullList,"top"===n||"bottom"===n)),role:"presentation",onClick:o(n,!1),onKeyDown:o(n,!1),children:Object(q.jsx)(y.a,{children:Ne.map((function(t){return Object(q.jsx)(w.a,{children:Object(q.jsx)(C.a,{primary:t+": "+e.bals[t]})})}))})})};return Object(q.jsxs)("div",{children:[Object(q.jsx)(z.a,{onClick:o("right",!0),children:"Balances"}),["left","right","top","bottom"].map((function(e){return Object(q.jsx)(i.a.Fragment,{children:Object(q.jsx)(v.a,{anchor:e,open:r[e],onClose:o(e,!1),children:c(e)})},e)}))]})}var Me="https://sandbox.truffleteams.com/"+me.truffle,Ae=new he.a(Me),Ee=new Ae.eth.Contract(je.abi,je.address),Ie=["Asia","Africa","NorthAmerica","SouthAmerica","Antarctica","Europe","Australia"],De=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={rows:[],bals:{}},e.getEvents=e.getEvents.bind(Object(Z.a)(e)),e}return Object(c.a)(n,[{key:"getEvents",value:function(e,t){var n=t.map((function(e){return e.returnValues}));n.forEach((function(e,t){e.id=t,e.TimestampEST=be()(e.TimestampEST),e.Memo=be()(e.Memo),e.Value=Number(e.Value),e.Continent=Ie[e.Continent]})),this.setState({rows:n}),console.log(n)}},{key:"load",value:function(){Ee.getPastEvents("trans",{fromBlock:0,toBlock:"latest"},this.getEvents)}},{key:"componentDidMount",value:function(){var e=this;this.load(),Ie.map((function(t,n){Ee.methods.bals(n).call((function(n,a){return e.state.bals[t]=a}))}))}},{key:"render",value:function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)(Se,{web3:Ae,myContract:Ee}),Object(q.jsx)(Fe,{bals:this.state.bals}),Object(q.jsx)(ge,{rows:this.state.rows})]})}}]),n}(i.a.Component),Be=n(122),Ge=n(763),He=n(764),_e=n(215),Re=("id Hall Meal Time Foods".split(" "),[{field:"Foods",renderCell:function(e){return Object(q.jsx)(_e.a,{placement:"right",title:Object(q.jsx)(g.a,{variant:"h6",children:e.value}),children:Object(q.jsx)("div",{children:e.value})})}},{field:"Hall"},{field:"Meal"},{field:"Time"}]),Le=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={rows:[]},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;ee.a.get("https://raw.githubusercontent.com/GeorgeFane/MDining-Scraper/master/scraped.txt").then((function(t){var n=t.data.map((function(e,t){return e.id=t,e.Foods=e.Foods.map((function(e){return e.trim()})).join(", "),e}));e.setState({rows:n})}))}},{key:"render",value:function(){var e=this.state.rows;return e.length?Object(q.jsx)(_.a,{rows:e,columns:Re,autoHeight:!0}):Object(q.jsx)("span",{children:"Loading rows..."})}}]),n}(a.Component),Ve=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),ze={type:"number",valueFormatter:function(e){var t=e.value;return Ve.format(Number(t))},cellClassName:"font-tabular-nums"},Pe={type:"number",valueFormatter:function(e){var t=Number(100*e.value).toLocaleString();return"".concat(t," %")}},Ue=("id Hall Meal Time Foods".split(" "),[{field:"name"},{field:"last_updated"},Object(d.a)({field:"price"},ze),Object(d.a)({field:"market_cap"},ze),{field:"volume_24h",type:"number"},Object(d.a)({field:"percent_change_1h"},Pe),Object(d.a)({field:"percent_change_24h"},Pe),Object(d.a)({field:"percent_change_7d"},Pe),Object(d.a)({field:"percent_change_30d"},Pe),Object(d.a)({field:"percent_change_60d"},Pe),Object(d.a)({field:"percent_change_90d"},Pe)]),qe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={rows:[]},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;ee.a.get("https://raw.githubusercontent.com/GeorgeFane/cmc-api/main/today.json").then((function(t){var n=t.data;n.forEach((function(e,t){return e.id=t})),e.setState({rows:n})}))}},{key:"render",value:function(){var e=this.state.rows;return e.length?Object(q.jsx)(_.a,{rows:e,columns:Ue,autoHeight:!0}):Object(q.jsx)("span",{children:"Loading rows..."})}}]),n}(a.Component),Je=[{label:"Mdining",content:Object(q.jsx)(Le,{}),repo:"MDining-Scraper",sub:"Michigan's dining hall menus are split by hall and are not displayed concisely. Here's a better option that I actually used daily during first semester."},{label:"CryptoQuotes",content:Object(q.jsx)(qe,{}),repo:"cmc-api",sub:"My dad is really into crypto trading. He showed me CoinMarketCap.com, where he gets quotes, and I disliked that it is very slow and loads only 100 quotes at a time. I offered to build him a tool."}],Ke=Object(R.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));var Qe=function(){var e=Ke(),t=i.a.useState(0),n=Object(X.a)(t,2),a=n[0],r=n[1];return Object(q.jsx)("div",{className:e.root,children:Object(q.jsxs)(Be.a,{value:a,children:[Object(q.jsx)(Ge.a,{onChange:function(e,t){r(t)},children:Je.map((function(e,t){return Object(q.jsx)(ie.a,{label:e.label,value:t})}))}),Je.map((function(e,t){return Object(q.jsx)("div",{children:Object(q.jsxs)(He.a,{value:t,children:[Object(q.jsxs)(g.a,{children:[Object(q.jsx)(O.a,{color:"inherit",href:"https://github.com/GeorgeFane/"+e.repo,target:"_blank",children:Object(q.jsx)(H.a,{fontSize:"large"})}),e.sub]}),e.content]})})}))]})})},Xe=[{icon:Object(q.jsx)(F.a,{}),label:"Me",content:Object(q.jsx)(Q,{})},{icon:Object(q.jsx)(M.a,{}),label:"DataViz",content:Object(q.jsx)(Qe,{}),sub:"There is some information that is both important to me and not presented well. I retrieved this data myself, through web scraping and API calls."},{icon:Object(q.jsx)(A.a,{}),label:"CrypChar",content:Object(q.jsx)(De,{}),sub:"This is an MVP that uses blockchain to make charity operations more accountable. Made for Blockchain@Michigan's summer cohort project, this uses web3.js to call a Solidity smart contract."},{icon:Object(q.jsx)(E.a,{}),label:"RatingsMap",content:Object(q.jsx)(ue,{}),sub:"I saw a great visual of Better Call Saul's ratings, with a color-coded cell for every episode of every season. There wasn't a single episode that wasn't green. Now you can see that for any show."}],We=240,Ye={palette:{type:"light"}},Ze={palette:{type:"dark"}},$e=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setOpen=function(e){return a.setState({open:e})},a.setValue=function(e){return a.setState({value:e})},a.handleDrawerOpen=function(){return a.setState({open:!0})},a.handleDrawerClose=function(){return a.setState({open:!1})},a.switchTheme=function(){return a.setState({theme:!a.state.theme})},a.state={open:!0,value:0,theme:!1},a}return Object(c.a)(n,[{key:"Top",value:function(){var e=this.props.classes;return Object(q.jsx)(m.a,{position:"fixed",className:Object(p.a)(e.appBar,Object(h.a)({},e.appBarShift,this.state.open)),children:Object(q.jsxs)(f.a,{children:[Object(q.jsx)(O.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",className:Object(p.a)(e.menuButton,Object(h.a)({},e.hide,this.state.open)),children:Object(q.jsx)(I.a,{})}),Object(q.jsx)(g.a,{variant:"h4",className:e.title,children:"George Fane"}),Object(q.jsx)(O.a,{color:"inherit",onClick:this.switchTheme,children:this.state.theme?Object(q.jsx)(D.a,{}):Object(q.jsx)(B.a,{})})]})})}},{key:"Side",value:function(){var e,t,n=this,a=this.props.classes;return Object(q.jsxs)(v.a,{variant:"permanent",className:Object(p.a)(a.drawer,(e={},Object(h.a)(e,a.drawerOpen,this.state.open),Object(h.a)(e,a.drawerClose,!this.state.open),e)),classes:{paper:Object(p.a)((t={},Object(h.a)(t,a.drawerOpen,this.state.open),Object(h.a)(t,a.drawerClose,!this.state.open),t))},children:[Object(q.jsx)("div",{className:a.toolbar,children:Object(q.jsx)(O.a,{onClick:this.handleDrawerClose,children:Object(q.jsx)(G.a,{})})}),Object(q.jsx)(x.a,{}),Object(q.jsx)(y.a,{children:Xe.map((function(e,t){return Object(q.jsxs)(w.a,{button:!0,onClick:function(){return n.setValue(t)},children:[Object(q.jsx)(k.a,{style:{color:e.color},children:e.icon}),Object(q.jsx)(C.a,{style:{color:e.color},primary:e.label})]})}))})]})}},{key:"Bottom",value:function(){var e=this.props.classes;return Object(q.jsxs)(S.a,{className:e.content,children:[Object(q.jsx)("div",{className:e.toolbar}),Object(q.jsxs)(g.a,{variant:"h2",children:[Xe[this.state.value].label,Object(q.jsx)(O.a,{color:"inherit",href:"https://github.com/GeorgeFane/GeorgeFane.github.io/tree/master/src/"+Xe[this.state.value].label,target:"_blank",children:Object(q.jsx)(H.a,{fontSize:"large"})})]}),Object(q.jsx)(g.a,{children:Xe[this.state.value].sub}),Xe[this.state.value].content]})}},{key:"DataGridDemo",value:function(e){if(!e.length)return Object(q.jsx)("div",{children:"No Rows"});var t=[{field:"id"}].concat(Object.keys(e[0]).map((function(e){return{field:e,width:200}})));e.forEach((function(e,t){return e.id=t}));var n={rows:e,columns:t,pageSize:5,autoHeight:!0};return Object(q.jsx)("div",{style:{height:400,width:"100%"},children:Object(q.jsx)(_.a,Object(d.a)({},n))})}},{key:"render",value:function(){var e=this.props.classes,t=Object(b.a)(this.state.theme?Ye:Ze);return Object(q.jsx)(T.a,{theme:t,children:Object(q.jsxs)("div",{className:e.root,children:[Object(q.jsx)(N.a,{}),this.Top(),this.Side(),this.Bottom()]})})}}]),n}(i.a.Component),et=Object(j.a)((function(e){return{root:{flexGrow:1,display:"flex",height:"100%",backgroundColor:e.palette.background.default},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:We,width:"calc(100% - ".concat(We,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:We,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:We,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(h.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},title:{flexGrow:1}}}))($e);s.a.render(Object(q.jsx)(et,{}),document.getElementById("root"))}},[[698,1,2]]]);
//# sourceMappingURL=main.4d1cf951.chunk.js.map