# This is the carbon calculator Demo App.

## Notes:
- When compared to the SETS-Eco-Footprint xls sheet, there are a few changes
  - Electricity isn't divided into groups
  - Bus and Trains aren't divided into separate types
- Changes needed:
  - Edit items in carbon calculator following this: [Simplified Carbon calculator sheet](https://onedrive.live.com/view.aspx?resid=EF43F4B7072F8749!19641&ithint=file%2cxlsx&authkey=!AP_FdQe9ATbl-Jo)
  - Edit numbers in carbon 
  - Preload both carbon and eco calculators
  - Add "gamification"/ make the form more interesting
  - Add comparison w/ Average CO2 in result
  - Add pie chart in result detailing each amount
  - Deploy with Vercel
  - Add chatbot
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
The Carbon Calculator is at [http://localhost:3000/carbon-calculator](http://localhost:3000/carbon-calculator)  
The Eco footprint calculator is at [http://localhost:3000/ecoCalc](http://localhost:3000/eco-calculator)

