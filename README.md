# Правила и регламент

- [Экзамен: правила, рекомендации и порядок проведения](https://hexly.notion.site/d9289c18871c44508bc7c7f05a51d94f)

## Задание

Ваша задача написать консольную утилиту, которая анализирует переданные файлы с информацией о пользователях и выводит на экран некоторую статистику по данным. Файлы хранятся в директории *\_\_fixtures\_\_* в формате `JSON`. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе `content`. Вам остается только написать и экспортировать функцию в файле *index.js*, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строчка является решением определенного шага. Таким образом 5 шагов предполагает 5 строчек в консоли.

Пример запуска утилиты:

```bash
# запуск команды в терминале
bin/content.js __fixtures__/data1.json

# вывод всех 5 задач сразу
Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel
Пользователи до 30 лет: Charlie, Grace, David, Charlie, Emily, Daniel
Лайки и имя пользователя: Daniel: 12, Samuel: 27, Michael: 35, Alice: 41, Sophia: 48, John: 57, Bob: 64, Kate: 69, Olivia: 80, Henry: 92 Emma: 96, Charlie: 80, Emily: 75, Jack: 72, Charlie: 43, Grace: 40, Grace: 29, Daniel: 28, Eve: 25, David: 4
Gmail пользователи: { id: 3, name: Eve }, { id: 4, name: Grace }, { id: 8, name: Emily }
Уникальные имена друзей из Берлина: Alice, Bob, Charlie, Daniel, David, Emily, Emma, Frank, Henry, Ivy, Jack, John, Kate, Michael, Samuel, Sophia
```

Вывод содержит фиксированный набор строчек (Имя, Лайки, ...), каждая из которых соответствует какой-то агрегированной информации по данным из файла. Например, первая строчка содержит имя пользователя в переданном файле. Значения в этих строчках зависят от данных внутри переданного файла. В примере выше это *Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel*, в вашем случае может быть другое, зависит от того, с каким файлом ведется работа.

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:


### 1. Выведите список всех доступных товаров в магазине.

```bash
bin/content.js __fixtures__/data1.json

Товары: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
```

### 2. Дополните вывод: товары, имеющие скидку менее 20%.

```bash
bin/content.js __fixtures__/data1.json

Товары: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
Товары, имеющие скидку менее 20%: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
``` 

### 3. Дополните вывод: название товара и его количество, отсортированные в порядке убывания.

```bash
bin/content.js __fixtures__/data1.json

Товары: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
Товары, имеющие скидку менее 20%: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
Количество товара и его название: Sony PlayStation 5: 1000000, Nike Air Zoom Pegasus 37: 2000, Samsung Galaxy S20: 1500, Dell XPS 13: 1200, Samsung Galaxy Note 20: 1200, KitchenAid Stand Mixer: 1000, iPhone 11: 900, Apple iPhone 12 Pro: 700, Samsung 55-Inch Smart 4K UHD TV: 700, Canon EOS 5D Mark IV: 300
```

### 4. Дополните вывод: название и id всех продуктов, которые являются телефонами, в виде объекта.

```bash
bin/content.js __fixtures__/data1.json

Товары: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
Товары, имеющие скидку менее 20%: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
Количество товара и его название: Sony PlayStation 5: 1000000, Nike Air Zoom Pegasus 37: 2000, Samsung Galaxy S20: 1500, Dell XPS 13: 1200, Samsung Galaxy Note 20: 1200, KitchenAid Stand Mixer: 1000, iPhone 11: 900, Apple iPhone 12 Pro: 700, Samsung 55-Inch Smart 4K UHD TV: 700, Canon EOS 5D Mark IV: 300
id товара и производитель: { id: 1, name: Samsung Galaxy S20 }, { id: 2, name: Apple iPhone 12 Pro }, { id: 5, name: iPhone 11 }, { id: 8, name: Samsung Galaxy Note 20 }
```

### 5. Дополните вывод: список уникальных (без повторений) категорий товаров, количество которых меньше 1000, отсортированных в алфавитном порядке.

```bash
bin/content.js __fixtures__/data1.json

Товары: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
Товары, имеющие скидку менее 20%: Samsung Galaxy S20, Apple iPhone 12 Pro, Sony PlayStation 5, Dell XPS 13, iPhone 11, Canon EOS 5D Mark IV, Nike Air Zoom Pegasus 37, Samsung Galaxy Note 20, KitchenAid Stand Mixer, Samsung 55-Inch Smart 4K UHD TV
Количество товара и его название: Sony PlayStation 5: 1000000, Nike Air Zoom Pegasus 37: 2000, Samsung Galaxy S20: 1500, Dell XPS 13: 1200, Samsung Galaxy Note 20: 1200, KitchenAid Stand Mixer: 1000, iPhone 11: 900, Apple iPhone 12 Pro: 700, Samsung 55-Inch Smart 4K UHD TV: 700, Canon EOS 5D Mark IV: 300
id товара и производитель: { id: 1, name: Samsung Galaxy S20 }, { id: 2, name: Apple iPhone 12 Pro }, { id: 5, name: iPhone 11 }, { id: 8, name: Samsung Galaxy Note 20 }
список уникальных категорий товаров количество которых меньше 1000: Cameras, Smartphones, Televisions