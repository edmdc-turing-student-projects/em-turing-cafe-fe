export const apiCalls = () => {
  const rootUrl = 'http://localhost:3001/api/v1/reservations'

  return {
    getAllReservations: async () => {
      const response = await fetch(rootUrl)
      return await response.json()
    }
  }
}
