# This is the carbon calculator Demo App.

## Notes:
- When compared to the SETS-Eco-Footprint xls sheet, there are a few changes
  - Electricity isn't divided into groups
  - Bus and Trains aren't divided into separate types
- Changes needed:
  - Edit the values in ItemInfo.js (everything is currently default to 1) for the logic
  - Maybe update formula?
  - Add header to match w/ Wordpress Header in Demo app
  - Make the carbon calculator look a bit better
    - Create a icon wrapper to edit icons
    - Add color?
    - Change size & spacing
  - Change display & specific text
## Getting Started & Testing
1. Requirements
- Node: please use one of the latest versions of node (14.16.1, >=15 should work). If there is an outdated node version, I recommend using the nvm package.
2. run 
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
The Carbon Calculator is at [http://localhost:3000/carbonCalc](http://localhost:3000/carbonCalc)  
The Eco footprint calculator is at [http://localhost:3000/ecoCalc](http://localhost:3000/carbonCalc)
