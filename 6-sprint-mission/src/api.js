export async function getProducts(params = {}) {
  // URLSearchParams을 이용하면 파라미터 값을 자동으로 쉽게 인코딩할 수 있어요.
  const query = new URLSearchParams(params).toString()

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const body = await response.json()
    return body
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}

export async function getItemsDetail(itemId) {
  if (!itemId) {
    throw new Error('Invalid product ID')
  }

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/product/${itemId}`
    )
    if (!response) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const body = await response.json()
    return body
  } catch (error) {
    console.log('Failed to fetch product detail:', error)
    throw error
  }
}