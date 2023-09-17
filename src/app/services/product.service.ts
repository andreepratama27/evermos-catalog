export async function getProduct() {
  try {
    const response = await fetch("http://localhost:3001/products");
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCategory() {
  try {
    const response = await fetch("http://localhost:3001/category");
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryDetail({ id }: { id: number }) {
  try {
    const response = await fetch(`http://localhost:3001/category/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getProductDetail({ id }: { id: number }) {
  try {
    const response = await fetch(`http://localhost:3001/products/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
