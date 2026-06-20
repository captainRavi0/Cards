import React from 'react'
import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/j5FNhYRZkpcRlamgbXdPpPszJOrLUKGtgQMdE1q-Grg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDg0LzUwOS9zbWFs/bC9nb29nbGUtbGVu/cy1pY29uLWxvZ28t/c3ltYm9sLWZyZWUt/cG5nLnBuZw",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/cSGw_fGTMAWpTLl0Hxxd-bs68RaucqEzdr3eGo6lWnA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbWF6/b24tbG9nby1lZGl0/b3JpYWwtaWxsdXN0/cmF0aXZlLXdoaXRl/LWJhY2tncm91bmQt/ZXBzLWRvd25sb2Fk/LXZlY3Rvci1qcGVn/LWJhbm5lci1haS1h/bWF6b24tbG9nby1l/ZGl0b3JpYWwtaWxs/dXN0cmF0aXZlLTIw/ODMyOTEwNy5qcGc",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/HsDcwtJgWBf4MsMgN2UDYB2jKwcwjoBWVvgnYv-UnCs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2My9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/HyMf6ixBMuhTtGHK37NggVBK9sxyBSRvVCKs4S7_mFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvTmV0ZmxpeC1T/eW1ib2wtNzAweDM5/NC5wbmc",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/3rdO3PW9Fe_ZJLenCd3R6p-NerhZEJzQ7S-ZlP6uZpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ29teXdheS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvc3BvdGlm/eS1zeW1ib2wuanBn",
    company: "Spotify",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/26ahKGn5zFKUZ6qMkuUy4d_pJ_aFZyNTJgHUTj1nZsA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
    company: "Adobe",
    datePosted: "4 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    company: "Meta",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$32/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/f6RxO33FPBMZ7gNxcfISA_z-es63svCG35J1VIDzhsk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA1/L1RoZS1TdG9yeS1C/ZWhpbmQtVWJlcnMt/TW9kZXJuLWFuZC1T/bGVlay1Mb2dvLURl/c2lnbi01MDB4MjMy/LnBuZw",
    company: "Uber",
    datePosted: "8 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/SjC_YImbhGhloF9WDfJVOQ2o4vwg1AjDjz1tZEiYTEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvQWlyYm5iLUxv/Z28ucG5n",
    company: "Airbnb",
    datePosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/PuA-MUbC81G2LcMfurAle9mmuOVG8MiCoB1EFnaM1jA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/c2FsZXNmb3JjZS5z/dmc",
    company: "Salesforce",
    datePosted: "12 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Ahmedabad, India"
  }
];

console.log(jobOpenings);
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key= {idx}>
          <Card company ={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} brandLogo={elem.brandLogo} />
     </div> 
    })}  
     </div>

  )
}

export default App
