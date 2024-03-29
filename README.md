## Tech Stack
NextJs w/ TypeScript
React-Query (https://tanstack.com/query/latest/)
Material UI (https://mui.com/)

## Issue Notes
- Only used 1 Data Source since the others are either deprecated / Paid, I decided to use NewsApi.org since it is the most complete
- NewsApi.org have rate limiter for Free accounts, which only limits to 100 requests per day

## Improvement Notes
- React virtualization for the Articles list

## Docker Commands
- Build Image:
    docker build -t news-aggregator .
- Run:
    
