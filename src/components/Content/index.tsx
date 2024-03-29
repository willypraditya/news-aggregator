import { QueryClient, dehydrate, useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component'

import { GetServerSideProps } from 'next'

import Masonry from '@mui/lab/Masonry'
import { Box, Typography } from '@mui/material'

import { getTopHeadlines } from '@/api/getTopHeadline'
import { useSearchContext } from '@/contexts/SearchContext'

import ArticleCard from '../ArticleCard'
import Loading from '../Loading'

interface ContentProps {
  category?: string
  isActive: boolean
}

const Content = ({ category, isActive }: ContentProps) => {
  const { searchQuery } = useSearchContext()

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery({
      queryKey: ['topHeadlines', category, searchQuery],
      queryFn: ({ pageParam }) =>
        getTopHeadlines({
          q: searchQuery,
          category: category || '',
          page: pageParam,
        }),
      getNextPageParam: (lastPage, allPages) => {
        if (
          lastPage.articles &&
          (lastPage.totalResults >
            allPages.flatMap((page) => page.articles || []).length ||
            lastPage.articles.length > 0)
        ) {
          return allPages.length + 1
        }
        return undefined
      },
      initialPageParam: 1,
      enabled: isActive,
    })

  const loadMore = () => {
    fetchNextPage()
  }

  if (isLoading)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <Loading />
      </Box>
    )

  return (
    <Box display="flex" justifyContent="center">
      <InfiniteScroll
        dataLength={
          data?.pages.flatMap((page) => page.articles || []).length || 0
        }
        next={loadMore}
        hasMore={hasNextPage || isFetching}
        loader={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20vh',
            }}
          >
            <Loading />
          </Box>
        }
        endMessage={
          <Typography textAlign="center" sx={{ m: 2 }}>
            No more articles to load
          </Typography>
        }
      >
        {data?.pages && (
          <Masonry
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            sx={{ margin: '0 auto' }}
          >
            {data?.pages
              .flatMap((page) => page.articles || [])
              .map((article, index) => (
                <ArticleCard
                  key={`${article.title}-${index}`}
                  article={article}
                />
              ))}
          </Masonry>
        )}
      </InfiniteScroll>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps<{
  category?: string
}> = async ({ query }) => {
  console.log(query)

  const { category } = query as { category?: string }
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['topHeadlines', category],
    queryFn: () => getTopHeadlines({ category: category || '', page: 1 }),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      category,
    },
  }
}

export default Content
