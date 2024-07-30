---
sidebar_position: 7
---
import Admonition from '@theme/Admonition';

# Education and learning

<Admonition type="warning" icon="🚧" title="It's a WIP">

This page is still a work in progress, and it will be ready in the next update!

</Admonition>

<br/>

We asked our participants about their levels of education and we had the following distribution:
<!-- 
:::danger TODOs
-  Allocation from BAC to university
-  what if:
   -  one doesn'T have a degree
   -  doesn'T have a degree in CS/IT
-  degrees from elite schools: ESI, IA...
-  Salaries by education level
-  Outliers study:
   -  Insights from people with BEM
   -  Insights from PhDs
-  Is having a master degree worth it
-  Online education and its value
-  brain drain: study in algeria and work abroad, or go study abroad
::: -->

```mermaid
pie title Participants by level of education
    "Master's Degree in a non IT-related field" : 66
    "Master's Degree in an IT-related field" : 289
    "Bachelor's Degree in an IT-related field" : 65
    "High school (Baccalauréat)" : 41
    "Ph.D. or equivalent" : 21
    "Bachelor's Degree in a non IT-related field" : 24
    "Secondary school (BEM, BEF)" : 2
```

The majority (65%) of the participants have a master's degree, and 4% have a Ph.D or an equivalent qualification.

In this page we will explore the relation between academic degrees (formal education) and software engineering craftsmanship.

## Education landscape

:::tip This topic needs a dedicated research, take it from here!

To not shift away from the generic "State of Algerian software engineering" domain this report covers, I would just scratch the surface on this topic. Why? [Read more here](/docs/closing#education).
:::

### High-school

Algerian students study for 3 years in high-schools, after passing Brevet d’Enseignement Moyen (BEM) a national exam to leave lower secondary schools (college or CEM).

Students are assigned in different branches in high schools including:

- Languages and social studies (lettres)
- Sciences (natural and physical)
- Technology (mathematics, physical sciences and technology).
- Management (Gestion)

Some science, technology, engineering, and math (STEM) education fields in universities are only accessible for certain high school branches. Therefor, students willing to pursue their education in IT (for example) has to be selected in either Mathematics, Science or Technology fields upon getting their BEM.

> Can we say that having a bad grade in the national "BEM/BEF" exam can affect chances of working in software engineering?

### Higher education

Access to universities and Higher schools is open to holders of the baccalaureate or a foreign equivalent. The Ministry of Higher Education and Scientific Research sets the requirements (scores to have) annually, assigning students to specialties takes the following parameters in consideration:

- **Student choice:** Students must submit their desired specialties to study in order, then they get assigned the first matching choice.
- **Field of study in the baccalaureate:** Mathematics, Technology and scientific students for example have access to science, technology, engineering, and mathematics (STEM) branches.
- **Average score in specific fields on the baccalaureate:** Set annually based on averages, success rate and choices trends of each edition. For example access to Mathematics and Computer science (MI) branch in the university of Algiers (USTHB) was 13.74 in 2018, 13.83 in 2019, 14.27 in 2020 and 15.53 in 2021 ([source](https://finfo.usthb.dz/wp-content/uploads/2022/09/MoyennesMinimales-MI-USTHB.pdf)).
- **The number of available seats in each field and jurisdiction:** Students are assigned their first matching desired field of study.

This system makes the access to trending study specialties very competitive. Hence, we can use the scores to access these fields in big universities as a metric to see whether Computer science or similar related study fields are trending in Algeria.

For example, in the following graph we compared the minimum admission scores for The [Higher National School of Computer Science (ESI)](https://esi.dz/) compared to success rates for Experimental Science branch:

![Admission scores to ESI](/img/stats/bac-and-esi-scores.png)

<details>

<summary>Table representation</summary>

| Year | ESI Admission score | Experimental science success rate | Overall success rate |
| ---- | ------------------- | --------------------------------- | -------------------- |
| 2019 | 16.48               | 47.31%                            | 54,56%               |
| 2020 | 17.07               | 56,97%                            | 55.30%               |
| 2021 | 18.13               | 60%                               | 61,17%               |
| 2022 | 17.95               | 59,32%                            | 58.75%               |
| 2023 | 18.63               | 60,85%                            | 50,63%               |

</details>

We see that the minimum admission score is rising, the higher success rate in baccalaureate, the higher admission score is.

Note that universities have different requirements ([see results for 2023](https://www.esi.dz/wp-content/uploads/2023/08/Moyennes-minimales-BAC2023.pdf)).

### Higher/Elite schools

Students with higher marks in baccalaureate can choose one of the Algerian "Higher/elite" schools:

- [ESI (ex: INI)](https://esi.dz/).
- [ESI school in Sidi Bel Abbès (ESI SBA)](https://www.esi-sba.dz/),
- [National Higher School of Artificial Intelligence](https://www.ensia.edu.dz/)
- [National Superior School of Telecommunication And Technology Information](http://www.ensttic.dz/)

The government is also working on establishing a new higher school for cybersecurity [source:[Algeria Press Service (APS)](https://www.aps.dz/societe/166994-vers-l-elaboration-d-une-strategie-nationale-pour-faire-face-aux-menaces-cybernetiques)]

### Private universities

The Algerian ministry of Higher education [authorized](https://services.mesrs.dz/bac2023/guide/fr/priv%C3%A9.html) several private universities. According to our research only 2 private universities teach IT-related topics:

- [Higher Institute of Sciences](https://his.edu.dz/)
- [Numidia Institute of Technology](https://nit-edu.net/)

### Private schools

- Some students study IT-related topics in private schools.
- Ecole 42 is still not established ([source](https://www.agenceecofin.com/formation/2908-100661-en-visite-en-algerie-le-president-macron-relance-le-projet-de-creation-de-l-ecole-42-annonce-depuis-5-ans))

### Online (private) universities

Some students study online in foreign universities. 


### Centre & institutes

Some students study in [CFPA](https://www.mfep.gov.dz/fr/ministere/types-des-etablissements/details-cfpa/)

## Does having a degree affect the chances of finding a job?

To answer this question we crawled the biggest employment platform and fetched 48 job postings for software developers, 93% of them required a degree.

```mermaid
xychart-beta horizontal
  title "Required degrees by job offers for developers"
  x-axis ["Master 2; Ingéniorat; Bac + 5","Master 1; Licence  Bac + 4","Licence (LMD); Bac + 3","No degree","Professional Higher Education (TS)","TS Bac +2"]
  bar [36,15,11,3,2,2]

```


### In Algeria
### Abroad/remote
## Does having a degree affect salaries
### In Algeria
### Abroad/remote

<!-- Algerians with degree in IT make %X more/less than  -->

## Brain drain

## Internships

:::tip This topic needs a dedicated research, take it from here!

To not shift away from the generic "State of Algerian software engineering" domain this report covers, I would just scratch the surface on this topic. Why? [Read more here](/docs/closing#nternships).
:::

---
Degrees?

Algerian degree but working abroad?

Do you need a degree in IT to work here or not?

