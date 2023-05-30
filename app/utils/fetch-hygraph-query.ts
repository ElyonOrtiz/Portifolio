export const fetchHygraphQuery = async(query: string) =>{
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24 // one day
    },
    body: JSON.stringify({
      query,
    }),
  })

  const { data } = await response.json()

  return data
}