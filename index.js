export default (data) => {
  const content = data.products;

  // 1. Список всех товаров
  const allProducts = content.map(item => item.name).join(', ');
  console.log(`Товары: ${allProducts}`);

  // 2. Товары со скидкой менее 20%
  const discountedProducts = content
    .filter(item => item.discount_percentage < 20)
    .map(item => item.name)
    .join(', ');
  console.log(`Товары, имеющие скидку менее 20%: ${discountedProducts}`);

  // 3. Количество товара и его название (по убыванию количества)
  const sortedByQuantity = content
    .slice()
    .sort((a, b) => b.quantity - a.quantity)
    .map(item => `${item.name}: ${item.quantity}`)
    .join(', ');
  console.log(`Количество товара и его название: ${sortedByQuantity}`);

  // 4. ID и название всех телефонов
  const phones = content
    .filter(item => item.category.includes('Smartphones'))
    .map(item => `{ id: ${item.id}, name: ${item.name} }`)
    .join(', ');
  console.log(`id товара и производитель: ${phones}`);

  // 5. Уникальные категории товаров с количеством < 1000
  const categories = content
    .filter(item => item.quantity < 1000)
    .flatMap(item => item.category)
    .filter((category, index, array) => array.indexOf(category) === index)
    .sort()
    .join(', ');
  console.log(`список уникальных категорий товаров количество которых меньше 1000: ${categories}`);
};