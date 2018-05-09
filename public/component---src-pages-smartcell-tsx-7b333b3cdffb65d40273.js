webpackJsonp([0xeb70a1e5d88b],{388:function(e,t,o){e.exports=o.p+"static/smartcell-project-awards.a98f9cab.png"},389:function(e,t,o){e.exports=o.p+"static/smartcell-project-design-process.407c78af.png"},390:function(e,t,o){e.exports=o.p+"static/smartcell-project-designs.ed27e5e7.png"},391:function(e,t,o){e.exports=o.p+"static/smartcell-project-header.337139ee.png"},392:function(e,t,o){e.exports=o.p+"static/smartcell-project-startupweekend.4cc519dd.png"},27:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),i=o(28),h=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return s.createElement(i.Container,null,s.createElement(i.Text,null,this.props.bodyText))},t}(s.PureComponent);t.ProjectBodyWide=h},28:function(e,t,o){"use strict";function n(e,t){return e.raw=t,e}var a=n(["\n    width: 100%;\n    margin-top: 211px;\n"],["\n    width: 100%;\n    margin-top: 211px;\n"]),r=n(["\n    width: 100%;\n    height: 100%;\n    white-space: pre-wrap;\n    font-family: AvenirNext-Regular;\n    font-size: 20px;\n    color: #4a4a4a;\n"],["\n    width: 100%;\n    height: 100%;\n    white-space: pre-wrap;\n    font-family: AvenirNext-Regular;\n    font-size: 20px;\n    color: #4a4a4a;\n"]);Object.defineProperty(t,"__esModule",{value:!0});var s=o(2);t.Container=s.default.div(a),t.Text=s.default.text(r)},176:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),a=o(11),r=o(37),s=o(41),i=o(40),h=o(39),l=o(38),d=o(27),c=o(180),u=o(391),p=o(392),w=o(389),m=o(390),y=o(388);t.default=function(){return n.createElement("div",null,n.createElement(r.ProjectHeaderImage,{headerImage:u}),n.createElement(a.MainBodyHolder,null,n.createElement(s.ProjectTitle,{projectTitle:c.Title}),n.createElement(i.ProjectSubtitle,{subtitle:c.Subtitle}),n.createElement(h.ProjectSectionCard,{sectionTitle:c.sh1,sectionBody:c.sh1body}),n.createElement(h.ProjectSectionCard,{sectionTitle:c.sh2,sectionBody:c.sh2body})),n.createElement(l.ProjectImage,{image:p}),n.createElement(a.MainBodyHolder,null,n.createElement(h.ProjectSectionCard,{sectionTitle:c.sh3,sectionBody:c.sh3body}),n.createElement(h.ProjectSectionCard,{sectionTitle:c.sh4,sectionBody:c.sh4body})),n.createElement(l.ProjectImage,{image:w}),n.createElement(a.MainBodyHolder,null,n.createElement(d.ProjectBodyWide,{bodyText:c.wb1}),n.createElement(h.ProjectSectionCard,{sectionTitle:c.sh5,sectionBody:c.sh5body}),n.createElement(h.ProjectSectionCard,{sectionTitle:c.sh6,sectionBody:c.sh6body})),n.createElement(l.ProjectImage,{image:m}),n.createElement(a.MainBodyHolder,null,n.createElement(h.ProjectSectionCard,{sectionTitle:c.sh7,sectionBody:c.sh7body})),n.createElement(l.ProjectImage,{image:y}))}},180:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Title="SmartCell",t.Subtitle="A marketplace that makes it easier to buy and sell used phones through transparent listings.",t.sh1="Overview",t.sh1body="SmartCell was a project that myself and a team conceptualised and built a prototype for during Startup Weekend. \n\n“Startup Weekend is a 54-hour weekend event, during which groups of developers, business managers, startup enthusiasts, marketing gurus, graphic artists and more pitch ideas for new startup companies, form teams around those ideas, and work to develop a working prototype, demo, or presentation by Sunday evening. Startup Weekend has grown into an organization with a global presence. As of December 2016, Startup Weekend has reached 135 countries, involving over 210,000 entrepreneurs. Startup Weekend is one of the Techstars Startup Programs, alongside Startup Week and Startup Digest.”",t.sh2="Problem",t.sh2body="The idea for the platform came from wanting to solve a problem many of us have had. “I have 5 old phones just sat in a drawer in my house, I’m pretty sure I could make some money from them.”\n\nBut where do I go to sell those phones? Is it worth the effort?",t.sh3="Research",t.sh3body="After we had honed in on our problem we started to research the possible channels people could currently buy and sell on. The largest competitor we found was eBay. There were obviously people selling and buying phones on eBay but why were so many people not?\n\nWe also wanted to test our assumption beyond our team that most people have a drawer full of phones they could sell. We decided to ring up numerous friends and family and just ask them four simple questions: Do you have any old phones lying about? How many? Would you sell them? Why haven’t you already sold them/ why wouldn’t you?\n\nThe answers we got back were unanimous: every person we called had phones they no longer use lying about, the average number was ~4, everyone had considered selling them, when asked why they hadn’t the response was “seems like too much effort” and “don’t know how much money I should sell it for”.\n\nAnother area we wanted to research was do people want to buy used phones? Does anything put them off from buying used phones currently? Where would they go to buy?\n\nMost people said yes they would buy a used phone. The main reason they didn’t was the uncertainty around what they were buying. They would look on a site like eBay but the number of Chinese knockoffs that are currently listed knocks their trust of what they are buying.",t.sh4="Design Process",t.sh4body="From gathering our research we were confident there was a problem we could solve. We came up with a list of guiding principles for the platform we were building based on the research we had conducted. These were:\n\nReduce Friction - solely focusing on buying and selling used mobile phones means we can create the best user experience for someone looking to buy or sell a phone. We needed to make the process as pain-free as possible.\n\nImprove Transparency - we need a way to verify only genuine products make it onto the platform and the condition of the device be very clear.\n\nCustomer Satisfaction - we want to match the feeling a person gets from buying a new phone to the feeling they get buying a used phone. We don’t want it to look how it typically looks when you are buying something that is “used”. We want to make this process apple-esque.\n\nWe then started to sketch out the flow of a user coming to the site looking to sell a phone and the flow of a user coming to the site looking to buy a phone. How can we reduce the number of steps taken to achieve the goal? \n\nWe found we could utilise a phones IMEI code to check it against a database of registered devices when a user is listing a phone for sale. Any that don’t correspond to a registered device or that come back with discrepancies will be unable to be listed. This would protect us from fakes flooding the market.",t.wb1="We also decided to offer two different paths for someone coming onto our site looking to list their used phone. One way was for the user to list the phone themselves, which would include taking pictures, answering interested parties questions, and posting the phone to the customer. The other way was a “Hassle-Free” option whereby the customer just sent us the phone and we would list it on their behalf with a verified banner that appears next to their listing as we have manually inspected the device ourselves. For this option, we would take a higher transaction cost % in return for convenience and ease.",t.sh5="Prototype &\nTesting",t.sh5body="Before we went ahead and started designing the UI we decided to test out the flow we had come up with on members of the public. However, finding people for a user testing session was going to be difficult considering we were on a university campus over the holidays with nobody around!\n\nSo we decided to take a real “MVP” angle on our prototype and actually call people and take them through the flow over the phone. \n\nWe called numerous people and asked if they had any used phones they would be interested in selling. If they had phones they were interested in selling we then followed with the flow of questions the website would ask them. After we had a phone to sell and the details we went ahead and matched with a buyer. We actually managed to sell 6 iPhones in a few hours using this approach with buyers messaging us that they could come and pay for it within the next hour or so. Due to the logistics and the fact we were in the middle of nowhere and couldn’t get the devices to the right places at the right time the sales never actually happened but it certainly gave us the answers we were looking for.",t.sh6="Designs",t.sh6body="The next step was to go ahead and actually create the designs. I and a talented member of the team named Piny spent a couple of hours (just before the demos were about to start) mocking up designs and a prototype to show.\n\nYou can view the prototype at this link: https://invis.io/SB9LA6XAF",t.sh7="Outcome",t.sh7body="We built the prototype in time for the demo and went ahead and pitched it to the judges. After hearing all the pitches and deliberating for a while the judges came back in and awarded each team a place. We came 2nd, close on the heels to a team who had a really cool idea for a new tutoring platform. The whole experience was great fun and you ended up learning a lot in those couple of days. The other participants were all great and there was a really good vibe around everyone working towards a shared goal of making a great product and helping each other out along the way. Our team got along brilliantly and we were all good friends when it came time to go. \n\nCongrats to all the teams who took part! It was super inspiring!"}});
//# sourceMappingURL=component---src-pages-smartcell-tsx-7b333b3cdffb65d40273.js.map