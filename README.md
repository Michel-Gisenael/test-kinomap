# Test kinomap

This project is a test for Kinomap about webOS

# Installation

* run ```yarn```
* change **.env.example** into **.env**
* set value of *REACT_APP_API_URL* with the exact url of video

# Launch project

## In Browser

* run ```yarn serve```

## In Simulator

### Prerequisites

* Follow the step on [WebOS Tv developers tools](https://webostv.developer.lge.com/develop/tools/cli-introduction) from the *cli introduction* to *simulator installation*

* After all the environment is setted, run ```yarn pack-tv``` to create a build for webOS app

* run ```yarn launch-simulator``` to launch the builded app on simulator webOS
    
* If you encounter an error about app image, just follow the instructions on the link provided in the console. 
