# Hack Quarantine Project
![HackQuarantine](https://github.com/musicenthusiastist/COVID19-Citywide-Crowd-Monitoring-System/blob/master/overview_modified.png "Our Interpretation of Sonification")

**Project Descriptions**

Have you ever wondered how data can be represented aurally? And fellow musicians, are you looking for new inspirations of your music? If you answered yes, I encourage you to take a look at our **Data Sonification** project. 

Our project provides a method to transform meteorological data into a unique piece of music. **Unlike most music compositions, our piece of music is encoded with climate data** - `the annual temperature` and `the annual total number of natural disasters` of Ontario from 1930 to 2016. By listening to our music, you will get the overall pattern of Ontario's climate in this period. We added our own interpretation when assigning instruments for the background. In our opinion, our data sonification music is more expressive than a 2-dimensional data visualization product, because it adds the time dimension in. 

**Our approaches include:**
- Data Finding: 
  + **the annual temperature of Ontario from 1930 to 2016** (hereinafter referred to as `*temp_data*`), 
  + **the annual total number of natural disasters in Ontario from 1930 to 2016** (hereinafter referred to as `*count_disaster*`).
- Statistical analysis using **SAS**: 
  + analyse the correlation of `*temp_data*` and `*count_disaster*`. 
- Scripting: 
  + parse JSON and convert to CSV.
  + extract relevant data from databases.
- Employ a **Music Algorithm** to transform the CSV to MIDI: 
  + `pitch input` = `*temp_data*`, and `note-duration input` = inverse of `*count_disaster*`. That is, at a specific instant of time, the higher a pitch is, the hotter that year used to be; the faster the notes are played, the more natural disasters that year used to have.
- **DAW** (Digital Audio Workstation): 
  + edit the MIDI generated from music algorithm.
  + compose intro, backing track, and ending.
- Postproduction

**This project is meant to:**
  1. Demonstrate how data science and artworks can be combined. 
  2. Explore new ways of data representations. 
  3. Be used in non-profit commercials to call for public awareness about climate change. 

## Our Demo Video
<a href="https://youtu.be/xhHwQcUd4Yk
" target="_blank"><img src="http://img.youtube.com/vi/xhHwQcUd4Yk/0.jpg" 
alt="COVID19_Project" width="530" height="350" border="10" /></a>
