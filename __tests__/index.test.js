// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/content.js __fixtures__/data1.json',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/content.js __fixtures__/data2.json',
  // @ts-ignore
  options,
);
const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Товары: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV');
  assert.strictEqual(rows2[0], 'Товары: LG G8 ThinQ, Apple iPhone 12, Dell XPS 15, Samsung Galaxy Note 20 Ultra, Canon EOS R5, Nike Air Zoom Pegasus 37, Bose QuietComfort 35 Wireless Headphones, Samsung Galaxy S21, LG 27-Inch 4K UHD IPS Monitor, Fitbit Versa 3 Smartwatch');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Товары, имеющие скидку менее 20%: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV');
  assert.strictEqual(rows2[1], 'Товары, имеющие скидку менее 20%: LG G8 ThinQ, Apple iPhone 12, Dell XPS 15, Samsung Galaxy Note 20 Ultra, Canon EOS R5, Nike Air Zoom Pegasus 37, Bose QuietComfort 35 Wireless Headphones, Samsung Galaxy S21, LG 27-Inch 4K UHD IPS Monitor, Fitbit Versa 3 Smartwatch');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Количество товара и его название: Sony PlayStation 5: 1000000, Nike Air Zoom Pegasus 37: 2000, Samsung Galaxy S20: 1500, Dell XPS 13: 1200, Samsung Galaxy Note 20: 1200, KitchenAid Stand Mixer: 1000, iPhone 11: 900, Apple iPhone 12 Pro: 700, Samsung 55-Inch Smart 4K UHD TV: 700, Canon EOS 5D Mark IV: 300');
  assert.strictEqual(rows2[2], 'Количество товара и его название: Apple iPhone 12: 2000, Nike Air Zoom Pegasus 37: 2000, LG G8 ThinQ: 1500, Bose QuietComfort 35 Wireless Headphones: 1500, Fitbit Versa 3 Smartwatch: 1500, Dell XPS 15: 1200, Samsung Galaxy S21: 1000, Samsung Galaxy Note 20 Ultra: 800, LG 27-Inch 4K UHD IPS Monitor: 700, Canon EOS R5: 500');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'id товара и производитель: { id: 1, name: Samsung Galaxy S20 }, { id: 2, name: Apple iPhone 12 Pro }, { id: 5, name: iPhone 11 }, { id: 8, name: Samsung Galaxy Note 20 }');
  assert.strictEqual(rows2[3], 'id товара и производитель: { id: 1, name: LG G8 ThinQ }, { id: 2, name: Apple iPhone 12 }, { id: 4, name: Samsung Galaxy Note 20 Ultra }, { id: 8, name: Samsung Galaxy S21 }');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'список уникальных категорий товаров количество которых меньше 1000: Cameras, Smartphones, Televisions');
  assert.strictEqual(rows2[4], 'список уникальных категорий товаров количество которых меньше 1000: Cameras, Monitors, Smartphones');
});
