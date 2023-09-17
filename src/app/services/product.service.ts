export async function getProduct(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:3001/products");
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCategory(): Promise<Category[]> {
  try {
    const response = await fetch("http://localhost:3001/category");
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryDetail({
  id,
}: {
  id: number;
}): Promise<Category> {
  try {
    const response = await fetch(`http://localhost:3001/category/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getProductDetail({
  id,
}: {
  id: number;
}): Promise<Product> {
  try {
    const response = await fetch(`http://localhost:3001/products/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
