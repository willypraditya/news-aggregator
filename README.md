## Tech Stack
- Next.js with TypeScript
- React-Query ([Documentation](https://tanstack.com/query/latest/))
- Material UI ([Documentation](https://mui.com/))

## Notes
- Utilized a single data source due to deprecation or paid options. Chose NewsApi.org for its comprehensiveness.
- NewsApi.org imposes rate limits on Free accounts, allowing only 100 requests per day.

## Docker Commands
- Build Image:
    ```
    docker build -t news-aggregator .
    ```
- Run:
    ```
    docker run -p 3000:3000 news-aggregator
    ```
- Open in localhost:3000

## Improvement Note
- Consider implementing React virtualization for the Articles list.