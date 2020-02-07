(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"Phonebook_form__2jsSb",label:"Phonebook_label__8Q254",input:"Phonebook_input__3h0fW",btn:"Phonebook_btn__2amIy"}},11:function(t,e,n){t.exports={form:"ContactFilter_form__6l-5D",input:"ContactFilter_input__3XxNR"}},15:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__1oTPE"}},17:function(t,e,n){t.exports=n(30)},2:function(t,e,n){t.exports={contact:"Contact_contact__1r5YA",name:"Contact_name__38NMY",number:"Contact_number__abmOj",btn:"Contact_btn__3b9jH"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),l=n(16),i=n(4),s=n(6),m=n(7),u=n(9),b=n(8),f=n(10),h=n(14),d=n.n(h),p=n(5),_=n(1),C=n.n(_),v=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){n.setState(Object(p.a)({},t.target.name,t.target.value))},n.reset=function(){n.setState({name:"",number:""})},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number;if(!a||!c)return alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f");n.props.onAddContact(Object(i.a)({},n.state)),n.reset()},n}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:C.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:C.a.label,htmlFor:"name"},"Name",c.a.createElement("input",{className:C.a.input,name:"name",type:"text",value:e,onChange:this.handleChange})),c.a.createElement("br",null),c.a.createElement("label",{className:C.a.label,htmlFor:"number"},"Number",c.a.createElement("input",{className:C.a.input,name:"number",type:"tel",value:n,onChange:this.handleChange})),c.a.createElement("button",{className:C.a.btn,type:"submit",onSubmit:this.handleSubmit},"Add Contact"))}}]),e}(a.Component),E=n(2),g=n.n(E),y=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return c.a.createElement("div",{className:g.a.contact},c.a.createElement("p",{className:g.a.name}," ",e," ")," ",c.a.createElement("p",{className:g.a.number}," ",n," ")," ",c.a.createElement("button",{type:"button",onClick:a,className:g.a.btn}," ","Delete"," ")," ")},N=n(15),j=n.n(N),O=function(t){var e=t.items,n=t.onDeleteContact;return e.length>0&&c.a.createElement("ul",{className:j.a.contact_list}," ",e.map((function(t){return c.a.createElement("li",{key:t.id},c.a.createElement(y,Object.assign({},t,{onDeleteContact:function(){return n(t.id)}}))," ")}))," ")},S=n(11),k=n.n(S),x=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("form",{className:k.a.form},c.a.createElement("label",null,"Find contacts by name"," ",c.a.createElement("input",{className:k.a.input,type:"text",value:e,onChange:n})," ")," ")},D=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.addContact=function(t){if(n.state.contacts.find((function(e){return e.name===t.name})))alert("".concat(t.name," contact is allready exist"));else{var e=Object(i.a)({id:d.a.generate()},t);n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))}},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(f.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");if(t){var e=JSON.parse(t);this.setState({contacts:e})}}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement("section",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(v,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(x,{value:n,onChangeFilter:this.changeFilter}),c.a.createElement(O,{items:a,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);r.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c1287056.chunk.js.map