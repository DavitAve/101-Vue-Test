# 101 Group Vue test task 

Тестовое задание (Vue 3, Vite и TypeScript)

### Установка и запуск

**Для установки зависимостей выполните команду:**

`npm install`

**Для запуска проекта:**

`npm run dev`

### Описание логики фильтрации транзакций

. Сначала клонируем исходный массив с помощью structuredClone для безопасности.

. Затем фильтруем массив по заданным критериям — по типу и по дате.

. После фильтрации сортируем транзакции, если выбран соответствующий параметр.

. Используем computed, чтобы избежать лишних ререндеров и оптимизировать производительность.
