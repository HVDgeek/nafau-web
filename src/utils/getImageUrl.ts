export const getImageUrl = (url: string | undefined) => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return `${process.env.NEXT_PUBLIC_API_URL}${url}`
  }

  if (url) {
    return url
  }
  return null
}
