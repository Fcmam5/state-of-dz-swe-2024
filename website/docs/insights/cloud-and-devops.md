---
sidebar_position: 2
---

# Cloud and DevOps

According to our survey data, public Cloud providers such as Amazon Web Services (AWS), Google Cloud Platform (GCP) and Microsoft Azure are the most used by our participants. We notice a tendency to use Serveless/PaaS solutions such as Heroku, Vercel and Netlify.

```mermaid
xychart-beta horizontal
  x-axis ["Amazon Web Services (AWS)","Google Cloud Platform (GCP)","Vercel","Microsoft Azure","DigitalOcean","Heroku","Oracle Cloud","IBM Cloud or Watson","OVHcloud","Alibaba Cloud"]
  bar [168,117,101,92,60,44,14,8,5,4]
```

37% of the participants who use AWS work for Algerian of different sizes. For GCP, only 20% work for Algerian companies.

Vercel users for example, are mostly developers working on web front-ends. 48% of them are Full stack developers, and 20% are front-end developers.

## Cloud in Algeria

Algeria ranked #14 from 15 in [Cloud Competitiveness Index 2023 (MENA)](https://www.menacloud.org/cloud_competitiveness_index_2023.php). The index evaluates various aspects related to cloud adoption, including regulation, talent, connectivity, government, and business.

The audit happened before Law on the Protection of Private Persons in the Processing of Personal Data (No. 18-07) was [enabled on August 10th, 2023](https://anpdp.dz/fr/quand-et-a-qui-sapplique-la-loi-n18-07/), and before many other improvements took effect. Since the last year [Algeria's International Bandwidth improved](https://www.mpt.gov.dz/en/the-equipped-capacity-of-our-countrys-international-telecom-network-reaches-9-8tb-s/) and the government continued promoting new e-services. These factors should be reflected in better scores for Algeria's in future editions of CCI.

The report stated the following about Algeria's `TALENTS` index:

> *"Algeria's score in our Talent domain is related to
the country's rankings in Meritocracy &
Incentivization-related indicators, particularly
Reliance on Professional Management & Labor Tax
Rate, where the lowest regional numbers were
recorded. Similarly, Talent Impact & Employability
indicators such as Innovation Output, High-value
Exports, Software Development, and Ease of
Finding Skilled Employees registered rather poor
scores region-wide. Another indicator that could
improve Algeria's current ranking in our Talent
domain is Delegation of Authority, where it ranked
15th."* - [CIC MENA 2024](https://www.menacloud.org/cloud_competitiveness_index_2023.php)

Only 1% of our survey participants work as SRE/DevOps engineers, and 2% work as system administrators. Our participants work for companies from different sizes (from small companies to large companies of 1000+ employees). This may point to a lack of specialized engineers in site reliability.

[DevOps and Site Reliability Engineering](#devops-and-site-reliability-engineering) will elaborate this point further more.

### Algerian companies on the cloud

Fast-growing startups like [Yassir](https://maystro-delivery.com/) and [Maystro Delivery](https://maystro-delivery.com/) are adopting cloud-native approaches based on international cloud providers such as Google Cloud Platform.

*This may cause compliance challenges where data has to be stored and processed in Algeria, or it would require requesting exceptions from ANPDP*

According to some interviewees, some startups and working on lawyers to clarify means to be compliant with Algerian regulations. In some cases, they use a hybrid approach between local and public (international) cloud providers.

While other companies use public cloud providers ignoring or not knowing about different Algerian regulations.

:::tip
Google Cloud published [Yassir Case Study](https://cloud.google.com/customers/yassir) recently, where they talk about how Yassir is building their superapp on GCP.
:::

### Algerian cloud providers

The new Algerian law n° 22-39 on January 10th, 2022 [regulates cloud computing and data storage](https://www.arpce.dz/fr/service/cloud). Since then, [ARPCE](https://www.arpce.dz) authorized some of the leading companies behind some of Algeria's data centers to offer web hosting and cloud services.

Among the companies listed in [ARPCE](https://www.arpce.dz/fr/service/cloud)'s website, we have: [ISAAL](https://issal.dz/), [AYRADE](https://www.ayrade.com/), [eBS](https://www.ebs.dz/) and [ADEX Cloud](https://adexcloud.dz/).

### Private clouds

Large Algerian corporate and some government agencies (ministries) have their own private clouds.

For example, some of Sonatrach's services [are running on Huawei Cloud Stack (HCS)](https://e.huawei.com/kz/ict-insights/global/ict_insights/201902271023/Success-Story/201904170833).

## DevOps and site reliability engineering

Our participants' professional levels are the following:

```mermaid
pie
    "Mid-level" : 8
    "Entry-level" : 5
    "Senior-level" : 3
    "Managerial/Lead" : 3
    "Intern or a working student" : 1
```

According to our survey data:

- Some Algerian companies hire interns or working students.
- Medium scale companies (100 to 1000 employees) may hire entry level and junior SRE/DevOps engineers and system administrators.
- Small companies and startups may give "Lead" titles to engineers with 5 to 10 years of experience.
- Senior system administrators are paid between 100 000 DZD and 150 000 DZD, mid-level and juniors are paid less than 60 000 DZD.
- Some participants work remotely as SRE/DevOps for foreign companies.
- Mid-level and junior SRE/DevOps engineers are paid between 80 000 DZD and 100 000 DZD.

We asked `If you are willing to leave the country, what would be your destination?`, and the answers from SREs and DevOps engineers were the following:

```mermaid
xychart-beta horizontal
  x-axis ["Middle East and/or Gulf countries","North America region (USA or Canada)","Western European countries","Eastern European countries","East and North East Asia","Russia","Sub-Saharan Africa","Other north African country","South America"]
  bar [12,9,6,4,3,1,1,1,1]
```

The numbers are alarming, as 100% of our participants with DevOps/SRE titles are willing to leave the country if the have better opportunities abroad. This is mainly due to the lack of challenging opportunities and incentives (explained in [Challenges](/docs/insights/challenges) section), and due to the lack of roles specialized in DevOps and site reliability engineering.

According to our interviews: Some companies prefer to hire "good developers with DevOps culture", or developers who can build, deploy and maintain application runtime environments. This was also reflected by our survey data, we see that many software developers also maintain cloud infrastructures, infrastructure provisioning, CI/CD pipelines, etc.

We notice a lack of mature DevOps cultures in several companies, this is reflected by the lack of job offers form different companies, and from the different runtime and availability issues.

Some government websites suffer to keep a decent uptime on peak hours on big events (publishing baccalaureate exam results, AADL registrations, etc), other websites and applications face technical problems that are often noticed by users, or exploited by threat actors, for example: 
- [ANAE.dz](https://anae.dz/) had their `DEBUG` setting set to true, which made all their Django website errors visible.
- A high profile website sends one of their databases password to the client.
- A have a public (unauthenticated) uploads directors, which makes their users' ID cards exposed (*we reported this to different entities, and we're chasing them for a week now to patch this*).
- Some critical website were breached and threat actors provide "Live access" to databases, which may lead that no proper monitoring was in place.

However, we notice a will to change and to improve the government's digital infrastructure, as we see that the [High Commission for Digitalization](https://hcn.gov.dz/) is hiring DevOps engineers:

<a href="https://www.facebook.com/hcn.gov.dz/posts/pfbid0wFWbHycQDPZGWEM6DHg8VLHJDLWSgn3SVSmT1afa2bnNyqma8Lmj45xHzT9qBDcPl" target="_blank">
    <img src="/img/stats/job-posting-on-fb.png" alt="High Commission for Digitalization Post: Job offers" width="500"/>
</a>

We also notice that they started using modern technologies, for example we noticed that they used Kubernetes in one of their websites (*Yes, we shouldn't see that, but they had a misconfiguration that went to production*).

<br/>

The lack of a mature DevOps culture might be a result of a gap in skills and in the market, as seniors are leaving the country or working for foreign companies. This will leave the few open positions to juniors and self-taught engineers who may not have a proper mentorship.

:::info Why companies can't hire senior engineers who are in Algeria?

Some seniors prefer to work remotely from Algeria, as explained in our [Remote working](/docs/insights/remote-working) page: Salaries from remote jobs are hard to compete with.
:::

To close that gap, some companies are trying to solve the problem in different ways:

- **Hunting for top talents**: Despite of the high competition in attracting "confirmed" experts, we see that some Algerian companies and startups could hire (or partner with) some of Algeria's top talents in certain fields.
- **Hiring experts from abroad**: Some companies like Yassir are expending and hiring engineering from different countries. When we asked [Yassir's Berlin Tech Hub](https://medium.com/@Yassirtech/why-has-yassir-launched-a-tech-hub-in-berlin-e2f9bc1ce464) (aka. Yassir GmbH) management: why Berlin? Why not hiring Algerians who live in Algeria? We learned that the company is trying to get seniors and experts who had long years of hands-on experience, and that's most likely easier to find in a technology hub like Berlin.
- **Upskilling and investing in training**: Some companies invest in upskilling their developers and shaping their DevOps culture, while others focus on training interns and juniors in infrastructure and SRE skills.

## Most used tools according to our survey

Our survey covered some DevOps/Infrastructure related topics with few questions, and below are some of our findings.

### VCS: Git is the most used one (no surprise), `nothing` is in second place

We asked our participants [`Which version control systems do you primarily use for managing your software projects?`](/docs/appendix/raw-results#which-version-control-systems-do-you-primarily-use-for-managing-your-software-projects).

```mermaid
xychart-beta horizontal
  x-axis ["Git","We don't use any VCS at work","SVN (Subversion)","Mercurial","PTFs"]
  bar [471,35,5,3,1]
```

As expected, [Git](https://git-scm.com/) is the most used solution by 91% of our participants. 

However, we see that 6% are not using any version-control-system in their projects. In large companies, we see that some system administrators, security professionals, Telco and database engineers don't use VCS at their work.

This point that engineers in these companies do their work "manually", which signals that those companies don't use IaC, CaC or GaC to provision and manage infrastructures.

Some ERP/CRM are bought and/or developed from external providers, then companies may only user their internal engineers to "manage" or just use them, therefor they may not develop that much.

Other developers (Graph below) mainly use WYSIWYG tools like WinDev, or only build websites with CMS technologies such as WordPress.

```mermaid
pie showData
    "Full stack web developer" : 8
    "Desktop applications developer" : 4
    "Security professional" : 3
    "System administrator" : 3
    "Student" : 3
    "Software engineer" : 2
    "Database engineer" : 2
    "Mobile developer (Android)" : 2
    "Front-end web developer" : 2
    "General manager" : 1
    "Automatism engineer" : 1
    "ERP/CRM specialist" : 1
    "AI/ML engineer" : 1
    "Backend web developer" : 1
    "Network and security" : 1
    "Telecom" : 1
    "Professor or Teacher" : 1
```

### CI/CD: What tools are used? Or, is it even applied?

We asked our participants [`Which CI/CD technology do you use?`](/docs/appendix/raw-results#which-cicd-technology-do-you-use), 31% replied that they don't use any CI/CD tools.

Teams who have CI/CD pipelines use different solutions that can be broken down as the following:

- Solutions provided by their repositories hosting services such as GitHub Actions, GitlabCI and Bitbucket Pipelines. 
- Dedicated technologies to create CI/CD pipelines such as CircleCI, Jenkins, TeamCity and Travis CI.
- Cloud providers' tools, such as Microsoft Azure DevOps, Google Cloud Build and AWS CodePipeline.
- Specialized CI/CD technologies, such as Bitrise for mobile applications and Ploi.io for web applications.

The full breakdown from our survey responses is the following:

```mermaid
xychart-beta horizontal
  x-axis ["Github Actions","We don't have CI/CD pipelines","GitlabCI","Jenkins","Microsoft Azure DevOps","Bitbucket Pipelines","CircleCI","Travis CI","Ploi","TeamCity","Internal tools","Bitrise","Google Cloud Build","drone.io","Concourse","Buddy.Works","AWS CodePipeline"]
  bar [234,159,71,57,51,22,9,8,4,4,2,2,1,1,1,1,1]
```


### Deployment and infrastructure provisioning tools
	
We asked [`What tools do you use for deployment and infrastructure provisioning?`](/docs/appendix/raw-results#what-tools-do-you-use-for-deployment-and-infrastructure-provisioning) The answers were the following: 

```mermaid
xychart-beta horizontal
  x-axis ["Docker","Shell scripts","Kubernetes","Jenkins","Google Cloud Deployment Manager","Terraform","Ansible","Heroku","Puppet","Chef","Internal company tools"]
  bar [266,141,89,62,38,38,34,29,3,2,2]
```

<br/>

We see that more than 51% of our participants use Docker, while 27% are using Shell/Bash scripts, while other companies are using "modern" platform provisioning tools such as Terraform, Ansible, Puppet and Chef.

Kubernetes is being used by different companies, from startups to government agencies.
