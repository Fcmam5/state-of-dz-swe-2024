"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8624],{5778:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(3274),s=a(2883);const i={sidebar_position:3},r="Methodology",o={id:"appendix/methodology",title:"Methodology",description:"The survey was fielded form February 1st to February 29th, 2024. It collected 517 entries.",source:"@site/docs/appendix/methodology.md",sourceDirName:"appendix",slug:"/appendix/methodology",permalink:"/docs/appendix/methodology",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Abdeldjalil Fortas",lastUpdatedAt:1715506546e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Glossary",permalink:"/docs/appendix/glossary"},next:{title:"Raw interviews (anonymous)",permalink:"/docs/appendix/raw-interviews"}},l={},d=[{value:"Confidentiality &amp; data usage",id:"confidentiality--data-usage",level:3},{value:"Data analysis",id:"data-analysis",level:3},{value:"1. Cleaning pass 1: Manually flagging entries",id:"1-cleaning-pass-1-manually-flagging-entries",level:4},{value:"2. Cleaning pass 2: Creating data clusters and find anomalies",id:"2-cleaning-pass-2-creating-data-clusters-and-find-anomalies",level:4},{value:"2. Cleaning pass 3: Interviewing experts and actors in Algerian tech industry",id:"2-cleaning-pass-3-interviewing-experts-and-actors-in-algerian-tech-industry",level:4}];function c(e){const n={a:"a",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"methodology",children:"Methodology"}),"\n",(0,t.jsxs)(n.p,{children:["The survey was fielded form February 1st to February 29th, 2024. It collected ",(0,t.jsx)(n.strong,{children:"517 entries"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We estimated that the survey should take between 5 to 10 minutes to complete. The form was first designed in English then we made sure to translate it to Arabic and French."}),"\n",(0,t.jsxs)(n.p,{children:["We used ",(0,t.jsx)(n.a,{href:"https://www.google.com/forms/about/",children:"Google Forms"})," to capture answers to have a user experience that our participants are used to, and because it was a free and easy option to go for."]}),"\n",(0,t.jsxs)(n.p,{children:["The survey was anonymous, we didn't collect any personal identifiable information, and we didn't use any analytics tools on the forms, or on ",(0,t.jsx)(n.a,{href:"/blog/kickstart-survey-2024/",children:"the landing page"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"confidentiality--data-usage",children:"Confidentiality & data usage"}),"\n",(0,t.jsx)(n.p,{children:"Participation in the survey was entirely voluntary. All responses were kept confidential. No personal identifiable information was collected or disclosed in any reports or publications."}),"\n",(0,t.jsx)(n.p,{children:"All data was analyzed and reported in aggregate, ensuring that individual responses cannot be traced back to specific participants."}),"\n",(0,t.jsxs)(n.p,{children:["To ensure compliance with Algerian regulations, we went through the law N\xb018-07, and we requested a confirmation from ",(0,t.jsx)(n.a,{href:"https://anpdp.dz/fr/quand-et-a-qui-sapplique-la-loi-n18-07/",children:"ANPDP"})," that we are not collecting any personally identifiable information."]}),"\n",(0,t.jsx)(n.h3,{id:"data-analysis",children:"Data analysis"}),"\n",(0,t.jsxs)(n.p,{children:["In the first phase of our data analysis we mapped data from different forms with ",(0,t.jsx)(n.a,{href:"https://github.com/Fcmam5/state-of-dz-swe-2024/tree/master/data-processing",children:"our scripts"}),". Then we cleaned up our data from fake entries."]}),"\n",(0,t.jsx)(n.p,{children:'To determine "fake entries" we cross checked some inputs, compared salaries to role and experience levels and checked free-text answers.'}),"\n",(0,t.jsx)(n.p,{children:"Data cleaning was done in serval phases:"}),"\n",(0,t.jsx)(n.h4,{id:"1-cleaning-pass-1-manually-flagging-entries",children:"1. Cleaning pass 1: Manually flagging entries"}),"\n",(0,t.jsx)(n.p,{children:"We ran a manual scan (yes, we went through 500+ lines of Excel) and flagged entries with 3 colors:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud83d\udfe9 ",(0,t.jsx)(n.strong,{children:"Green"}),": Entries that seems coherent e.g. age, years of experience, job title/level and salary are reasonable."]}),"\n",(0,t.jsxs)(n.li,{children:["\ud83d\udfe7 ",(0,t.jsx)(n.strong,{children:"Orange"}),': Entries that seem "odd", an exaggerated salary, or a high title for few years of experience, a long list of selected "used" technologies, etc.']}),"\n",(0,t.jsxs)(n.li,{children:["\ud83d\udfe5 ",(0,t.jsx)(n.strong,{children:"Red"}),": Entries that have conflicting data and it's clear that it's fake (for example we had an entry from a student who has 2 years of experience and who claimed that their salary is 2000000000 euros per year), or duplicated."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'While doing that, we redacted company names and swear words in some entries (some company names were mentioned in free text fields in "challenges" question).'}),"\n",(0,t.jsx)(n.p,{children:'After flagging all entries, we did a second pass on the dataset to cross-check the flags before we export the "clean" dataset.'}),"\n",(0,t.jsx)(n.h4,{id:"2-cleaning-pass-2-creating-data-clusters-and-find-anomalies",children:"2. Cleaning pass 2: Creating data clusters and find anomalies"}),"\n",(0,t.jsx)(n.p,{children:"In this phase we clustered data to identify abnormal entries that we might missed, or mis-flagged in the first phase."}),"\n",(0,t.jsx)(n.h4,{id:"2-cleaning-pass-3-interviewing-experts-and-actors-in-algerian-tech-industry",children:"2. Cleaning pass 3: Interviewing experts and actors in Algerian tech industry"}),"\n",(0,t.jsx)(n.p,{children:"Since data is unavailable or outdated, and our team is not working in the Algerian market, It was only fair to run our findings through experts and personas who are working day-to-day in the Algerian tech industry."}),"\n",(0,t.jsxs)(n.p,{children:["The experts and personas are defined in our ",(0,t.jsx)(n.a,{href:"/docs/insights",children:"insights page"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2883:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(9474);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);