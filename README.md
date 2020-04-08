# Hack Quarantine Project
![HackQuarantine](https://github.com/musicenthusiastist/COVID19-Citywide-Crowd-Monitoring-System/blob/master/overview_modified.png "Our Interpretation of Sonification")

**Project Descriptions**
This project provides a system prototype for the government/health department to mitigate the chance of community spread by keeping track of the occupancy of major grocery stores within a city or a geographical area. Each store is equipped with a people counter. The people counter is connected to the store’s gateway, through which it sends real-time people counts to the internet. A dedicated server is configured for this system to receive and store these data in a database. The data for each store is then computed as occupancy rate and is logged in a convenient webapp for citizens to browse. In this way, people can avoid densely occupied stores, thus lower the chance of community spread. 

**Project Architecture:**
- Hardware: 
  + Arduino Uno: serves as a gateway
  + IR sensor module: serves as people counters
- Software: 
  + Front-end: HTML, CSS, Javascript
  + Back-end: Node.js
  + Scripting: Python: serial communication, post data to server.

**This project is meant to:**
  1. Provide an easy-to-deploy system to control the community spread of COVID-19. 
  2. Be used in future pandemics & outbreaks & other emergency situations. 

## Demo Video
<a href="https://youtu.be/xhHwQcUd4Yk
" target="_blank"><img src="http://img.youtube.com/vi/xhHwQcUd4Yk/0.jpg" 
alt="COVID19_Project" width="530" height="350" border="10" /></a>
