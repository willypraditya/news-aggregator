import Image from 'next/image'

import { Box, Card, CardContent, Typography, makeStyles } from '@mui/material'

import { Article } from '@/api/types'
import { articleTitleFont } from '@/styles/fonts'

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card
      onClick={() => {
        if (article.url) {
          window.open(article.url, '_blank')
        }
      }}
      sx={{
        ':hover': {
          boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.2)',
          cursor: 'pointer',
        },
      }}
    >
      <CardContent sx={{ padding: '0 !important' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 200,
            overflow: 'hidden',
          }}
        >
          <Image
            src={article.urlToImage || '/image-not-found.jpeg'}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </Box>

        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            className={articleTitleFont.className}
          >
            {article.title}
          </Typography>
          <Typography sx={{ mt: 1 }}>{article.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
