(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={list:"statistics_list__1dX3a",value:"statistics_value__i5riE"}},,function(e,t,a){e.exports={wrapper:"fedbackOption_wrapper__3vYnu",good:"fedbackOption_good__ZdazN",neutral:"fedbackOption_neutral__1JxUW",bad:"fedbackOption_bad__iosc4"}},,,function(e,t,a){e.exports={title:"section_title__jUxtq"}},function(e,t,a){e.exports={wrapper:"card_wrapper__LtIdC"}},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(9),i=a.n(s),o=(a(18),a(10)),l=a(2),u=a(3),b=a(5),d=a(4),j=a(8),p=a.n(j),h=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onLeaveFeedback,a=e.options,c=Object.keys(a);return Object(n.jsx)("div",{className:p.a.wrapper,children:c.map((function(e){return Object(n.jsx)("button",{className:p.a[e],onClick:function(){t(e)},children:e.slice(0,1).toLocaleUpperCase()+e.slice(1)},e)}))})}}]),a}(c.Component),O=a(11),v=a.n(O),f=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.title;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{className:v.a.title,children:a}),t]})}}]),a}(c.Component),x=a(6),k=a.n(x),g=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.good,a=e.neutral,c=e.bad,r=e.total,s=e.positivePercentage;return Object(n.jsxs)("ul",{className:k.a.list,children:[Object(n.jsxs)("li",{children:["Good: ",Object(n.jsx)("span",{className:k.a.value,children:t})]}),Object(n.jsxs)("li",{children:["Neutral: ",Object(n.jsx)("span",{className:k.a.value,children:a})]}),Object(n.jsxs)("li",{children:["Bad: ",Object(n.jsx)("span",{className:k.a.value,children:c})]}),Object(n.jsxs)("li",{children:["Total: ",Object(n.jsx)("span",{className:k.a.value,children:r})]}),Object(n.jsxs)("li",{children:["Positive feedback:"," ",Object(n.jsxs)("span",{className:k.a.value,children:[s,"%"]})]})]})}}]),a}(c.Component),_=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.message;return Object(n.jsx)("p",{children:e})}}]),a}(c.Component),m=a(12),y=a.n(m),F=function(e){var t=e.children;return Object(n.jsx)("div",{className:y.a.wrapper,children:t})},N=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(u.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state,t=e.good,a=e.neutral;return e.bad+t+a}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good,t=this.countTotalFeedback();return 0===t?0:Math.floor(e/t*100)}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(n.jsxs)(F,{children:[Object(n.jsx)(f,{title:"Please leave feedback",children:Object(n.jsx)(h,{options:this.state,onLeaveFeedback:this.handleFeedback})}),Object(n.jsx)(f,{title:"Statistics",children:0===this.countTotalFeedback()?Object(n.jsx)(_,{message:"No feedback given"}):Object(n.jsx)(g,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),w()}],[[19,1,2]]]);
//# sourceMappingURL=main.dab0549f.chunk.js.map