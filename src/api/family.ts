import { createServerFn } from '@tanstack/react-start'

export const getFamilyData = createServerFn({
  method: 'GET',
}).handler(async () => {
  // TODO
  // 1. FETCH GOOGLE API

  // 2. MAP TO INTERFACE
  const data = [
    { id: 1, firstName: 'Frode', spouseId: 2 },
    { id: 2, firstName: 'Karin', spouseId: 1 },
    { id: 3, firstName: 'Liv', fatherId: 1, motherId: 2 },
    { id: 4, firstName: 'Freja', fatherId: 1, motherId: 2 },
  ]

  // 3. RETURN DATA
  return data
})
