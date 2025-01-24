export const GET = async (url: string) => {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    return error
  }
}
