Области хранения данных:

-   База данных на json-server
-   BFF
-   редакс стор

Сущности приложения:

-   пользователь: БД (список пользователей) BFF (сессия текущего пользователя) стор (отображение в браузере)
-   роль: БД (список ролей) BFF (роль текущей сессии) стор (использование роли на клиенте)
-   товар: БД (список товаров) стор (отображение в браузере)
-   отзыв: БД (список отзывов) стор (отображение отзывов)

Таблицы БД:

-   пользователи users: id / login / password / regster_at / role_id
-   роли role: id / name
-   товары products: id / name / price / image_url / category / count / published_at
-   отзывы feedbacks: id / author_id / product_id / content

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

-   user id / login / roleId
-   products массив product: id / name / price / imageUrl / publishedAt / count / feedbacksCount
-   product: id / name / imageUrl / count / price / feedbacks: массив feedback: id / author / content / publishedAt
