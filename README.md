# EnKoat Quote Portal & Performance Dashboard

## Summary
I built a React + Tailwind CSS frontend with a form for contractors to submit project quotes (contractor name, company, roof size/type, city/state, project date). Submissions post to a Node.js/Express API backed by MongoDB Atlas. A performance dashboard then visualizes:

- Total projects, average roof size, and estimated energy savings summary cards  
- Bar chart: projects by state  
- Bar chart: average roof size by roof type  
- Pie chart: project distribution by roof type  
- Line chart: monthly project trend

## Tools Used

- Frontend: React, Tailwind CSS, Chart.js, React Router
- Backend: Node.js, Express, Mongoose, CORS, dotenv
- Database: MongoDB Atlas (free tier)
- Mock Data: Generated via @faker-js/faker (1,000 records)

## How to run locally
1. **Clone the repository** 
   git clone https://github.com/krp0803/enkoat-quote-portal
   cd enkoat-quote-portal
2. **Backend setup**
   cd server
   # Install dependencies\> npm install
   # Start the API server (with nodemon)\> npm run dev
- API will run on http://localhost:5000
- Test with http://localhost:5000/api/quotes in your browser
3. **Frontend Setup**
  cd ../contracterfrontend
  # Install dependencies\> npm install
  # Start the React app\> npm start
- App will run on http://localhost:3000
- Form at /
- Dashboard at /dashboard

## Mock Data
- Records: 1,000 roofing project quotes
- Fields: contractorName, company, roofSize (500–20,000 sq ft), roofType (Metal, TPO, Foam, Other), city, state (AZ, CA, TX, NY, FL, CO, UT, NV), date (past 2 years)
- Energy Savings Factors: Metal 0.10, TPO 0.15, Foam 0.20, Other 0.05 (demo values generated from ChatGPT)

## Future Improvements
- Advanced filtering (date range, state, roof type)
- Data export (CSV/PDF)
