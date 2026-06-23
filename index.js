import fs from 'fs';

const data = fs.readFileSync(process.argv[2], 'utf8');
const jsonData = JSON.parse(data);
const content = jsonData.products;


const allProducts = content.map(item => item.name).join(', ');
console.log(`Товары: ${allProducts}`);


const discountedProducts = content
  .filter(item => item.discount_percentage < 20)
  .map(item => item.name)
  .join(', ');
console.log(`Товары, имеющие скидку менее 20%: ${discountedProducts}`);

const sortedByQuantity = content
  .slice()
  .sort((a, b) => b.quantity - a.quantity)
  .map(item => `${item.name}: ${item.quantity}`)
  .join(', ');
console.log(`Количество товара и его название: ${sortedByQuantity}`);

const phones = content
  .filter(item => item.category.includes('Smartphones'))
  .map(item => `{ id: ${item.id}, name: ${item.name} }`)
  .join(', ');
console.log(`id товара и производитель: ${phones}`);

const categories = content
  .filter(item => item.quantity < 1000)
  .flatMap(item => item.category)
  .filter((category, index, array) => array.indexOf(category) === index)
  .sort()
  .join(', ');
console.log(`список уникальных категорий товаров количество которых меньше 1000: ${categories}`);