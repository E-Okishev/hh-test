import type { Answer, Question, Test } from "../types/test";

export const tests: Test[] = [
  {
    id: 1,
    title: "API",
    category: "Тесты по навыкам и языкам",
    joinId: "api-join-id",
    difficulty: "easy",
    questionIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    title: "CSS",
    category: "Тесты по фронтенду",
    joinId: "css-join-id",
    difficulty: "hard",
    questionIds: [11, 12, 13],
  },
  {
    id: 3,
    title: "HTML",
    category: "Тесты по фронтенду",
    joinId: "html-join-id",
    difficulty: "easy",
    questionIds: [14, 15, 16],
  },
  {
    id: 4,
    title: "GIT",
    category: "Тесты по навыкам и языкам",
    joinId: "git-join-id",
    difficulty: "easy",
    questionIds: [17, 18, 19],
  },
  {
    id: 6,
    title: "GIT",
    category: "Тесты по навыкам и языкам",
    joinId: "git-join-id",
    difficulty: "medium",
    questionIds: [20, 21, 22],
  },
  {
    id: 5,
    title: "JavaScript",
    category: "Тесты по фронтенду",
    joinId: "javascript-join-id",
    difficulty: "hard",
    questionIds: [23, 24, 25],
  },
];

export const questions: Question[] = [
  {
    id: 1,
    testId: 1,
    text: "Какую задачу решают параметры пути в REST API запросах?",
    answerIds: [1, 2, 3, 4, 5],
    explanation:
      "Этот вариант верный, потому что параметры пути (path parameters) — это динамические сегменты в URL-адресе REST API, которые позволяют идентифицировать конкретные ресурсы или их части. Например, в URL /users/{id} параметр {id} является параметром пути, который определяет, к какому конкретному пользователю нужно получить доступ. Именно эта функция отличает их от других элементов API.",
  },
  {
    id: 2,
    testId: 1,
    text: "Какую задачу решает использование ReDoc при работе с API?",
    answerIds: [6, 7, 8, 9, 10],
    explanation:
      "Этот вариант верный, потому что ReDoc — это именно инструмент для визуализации документации API. Он принимает спецификацию OpenAPI (ранее известную как Swagger) и преобразует её в удобный для чтения интерактивный документ.",
  },
  {
    id: 3,
    testId: 1,
    text: "Зачем нужен токен доступа в аутентификации через OAuth?",
    answerIds: [11, 12, 13, 14, 15],
    explanation:
      "Этот вариант верный, потому что токен доступа в OAuth — это временный ключ, который выдается серверу после успешной авторизации пользователя. Он позволяет клиентскому приложению работать с данными пользователя без необходимости хранить или передавать его учетные данные.",
  },
  {
    id: 4,
    testId: 1,
    text: "Какой метод аутентификации наиболее устойчиво атаки с перехватом данных?",
    answerIds: [16, 17, 18, 19, 20],
    explanation:
      "Этот метод самый устойчивый к перехвату данных потому что: логин и пароль не передаются в каждом запросе, используется временный access token, часто с ограниченными правами (scopes), токен можно отозвать, и он имеет срок жизни, при перехвате ущерб ограничен, в отличие от пароля, обычно работает поверх HTTPS, что дополнительно защищает канал",
  },
  {
    id: 5,
    testId: 1,
    text: "Какой код ошибки должен вернуть сервер, если пользователь не предоставил токен аутентификации для запроса ресурса, которые существуют, и не выполнил повторную отправку или успешно валидацию токена?",
    answerIds: [21, 22, 23, 24, 25],
    explanation:
      "Объяснение: код 401 Unauthorized возвращается, когда у клиента отсутствует необходимая аутентификация для запроса (например, отсутствует токен JWT или куки). Это стандартный ответ для случаев, когда пользователь не предоставил токен или предоставил некорректный/просроченный токен.",
  },
  {
    id: 6,
    testId: 1,
    text: "Какое ключевое свойство метода POST следует учитывать при создании нового ресурса через АРІ?",
    answerIds: [26, 27, 28, 29, 30],
    explanation:
      "Почему это ключевое свойство POST: Метод POST не идемпотентен — каждый повторный запрос может создать новый ресурс. Если клиент по ошибке отправит POST дважды (например, из-за таймаута или повторной отправки формы), сервер может создать два одинаковых объекта. Поэтому при создании ресурсов через POST часто дополнительно: вводят idempotency key или проверяют уникальность на стороне сервера",
  },
  {
    id: 7,
    testId: 1,
    text: "Вы работаете с REST API для управления ресурсами на сервере. Вам необходимо внести изменения в существующий ресурс, однако вместо использования метода PUT или PATCH вы решили использовать метод GET. Какие проблемы это может вызвать?",
    answerIds: [31, 32, 33, 34, 35],
    explanation:
      "Важно понимать: метод GET предназначен только для получения данных и не должен изменять состояние сервера. Использование GET для обновления ресурсов нарушает принципы REST и может привести к: Непредсказуемому поведению приложения; Сложности в отладке ошибок; Нарушению работы кэширования; Проблемам с безопасностью; Непониманию кода другими разработчиками",
  },
  {
    id: 8,
    testId: 1,
    text: "Какой параметр лучше всего подходит для настройки пагинации в API, чтобы управлять количеством возвращаемых элементов и навигацией по большим наборам данных?",
    answerIds: [36, 37, 38, 39, 40],
    explanation:
      "Параметр limit — это стандартный способ ограничения количества возвращаемых элементов в API. Он позволяет контролировать объем данных, которые сервер отправляет клиенту. Обычно используется вместе с offset или page для полноценной реализации пагинации. Другие параметры имеют другие назначения (filter — для фильтрации данных по определенным критериям; offset — для указания начальной позиции выборки; sort — для определения порядка сортировки; page — для указания номера страницы (альтернативный подход к пагинации))",
  },
  {
    id: 9,
    testId: 1,
    text: "Какой вариант корректно объясняет выбор метода для асинхронного обмена данными между клиентом и сервером?",
    answerIds: [41, 42, 43, 44, 45],
    explanation:
      "WebSocket устанавливает постоянное двустороннее соединение. Cервер может сам инициировать отправку данных клиенту. Не требуется постоянный polling. Идеально подходит для чатов, уведомлений, real-time обновлений",
  },
  {
    id: 10,
    testId: 1,
    text: "В чём польза автоматизированной документации АРІ для разработки на стороне клиента?",
    answerIds: [46, 47, 48, 49, 50],
    explanation:
      "Автоматизированная документация API (например, Swagger или ReDoc) предоставляет разработчикам удобный интерактивный инструмент для работы с API, включающий примеры запросов и ответов, описание параметров и их типов, справочную информацию по аутентификации, возможность тестирования эндпоинтов в реальном времени и документацию по обработке ошибок, что значительно упрощает процесс разработки на стороне клиента, в то время как другие упомянутые функции (оптимизация запросов, управление ресурсами, сохранение данных, создание UI) относятся к другим аспектам разработки и не являются прямыми преимуществами автоматизированной документации.",
  },
  // мок, удалить
  {
    id: 11,
    testId: 2,
    text: "Какой селектор используется для выбора всех элементов с классом 'container'?",
    answerIds: [51, 52, 53, 54, 55],
    explanation:
      "Селектор .container используется для выбора всех элементов с классом container. Точка перед именем класса указывает на селектор класса.",
  },
  {
    id: 12,
    testId: 2,
    text: "Что определяет свойство display: flex?",
    answerIds: [56, 57, 58, 59, 60],
    explanation:
      "Свойство display: flex создает flex-контейнер, который позволяет гибко управлять расположением дочерних элементов.",
  },
  {
    id: 13,
    testId: 2,
    text: "Какое свойство используется для задания отступов вокруг элемента?",
    answerIds: [61, 62, 63, 64, 65],
    explanation:
      "Свойство margin используется для задания внешних отступов вокруг элемента.",
  },

  // Вопросы по HTML (базовый уровень)
  {
    id: 14,
    testId: 3,
    text: "Какой тег используется для создания гиперссылки?",
    answerIds: [66, 67, 68, 69, 70],
    explanation: "Тег <a> используется для создания гиперссылок в HTML.",
  },
  {
    id: 15,
    testId: 3,
    text: "Какой атрибут обязателен для тега <img>?",
    answerIds: [71, 72, 73, 74, 75],
    explanation:
      "Атрибут src обязателен для тега <img>, так как указывает путь к изображению.",
  },
  {
    id: 16,
    testId: 3,
    text: "Какой тег используется для создания нумерованного списка?",
    answerIds: [76, 77, 78, 79, 80],
    explanation: "Тег <ol> используется для создания нумерованного списка.",
  },

  // Вопросы по GIT (базовый уровень)
  {
    id: 17,
    testId: 4,
    text: "Какая команда используется для добавления файлов в индекс?",
    answerIds: [81, 82, 83, 84, 85],
    explanation: "Команда git add используется для добавления файлов в индекс.",
  },
  {
    id: 18,
    testId: 4,
    text: "Какая команда создает новый репозиторий?",
    answerIds: [86, 87, 88, 89, 90],
    explanation: "Команда git init создает новый локальный репозиторий.",
  },
  {
    id: 19,
    testId: 4,
    text: "Какая команда показывает статус репозитория?",
    answerIds: [91, 92, 93, 94, 95],
    explanation: "Команда git status показывает текущий статус репозитория.",
  },

  // Вопросы по GIT (средний уровень)
  {
    id: 20,
    testId: 6,
    text: "Какая команда используется для создания новой ветки?",
    answerIds: [96, 97, 98, 99, 100],
    explanation: "Команда git branch создает новую ветку.",
  },
  {
    id: 21,
    testId: 6,
    text: "Какая команда используется для слияния веток?",
    answerIds: [101, 102, 103, 104, 105],
    explanation: "Команда git merge используется для слияния веток.",
  },
  {
    id: 22,
    testId: 6,
    text: "Какая команда отменяет последний коммит?",
    answerIds: [106, 107, 108, 109, 110],
    explanation:
      "Команда git reset используется для отмены последнего коммита. Существует несколько режимов: --soft, --mixed и --hard, которые определяют, что произойдет с изменениями.",
  },
  {
    id: 23,
    testId: 6,
    text: "Какая команда используется для удаления локальной ветки?",
    answerIds: [111, 112, 113, 114, 115],
    explanation:
      "Команда git branch -d используется для удаления локальной ветки.",
  },
  {
    id: 24,
    testId: 6,
    text: "Какая команда показывает историю коммитов?",
    answerIds: [116, 117, 118, 119, 120],
    explanation:
      "Команда git log показывает историю коммитов с деталями каждого изменения.",
  },

  // Вопросы по JavaScript (продвинутый уровень)
  {
    id: 25,
    testId: 7,
    text: "Что такое замыкание в JavaScript?",
    answerIds: [121, 122, 123, 124, 125],
    explanation:
      "Замыкание — это функция, которая имеет доступ к переменным своей родительской функции даже после возврата родительской функции.",
  },
  {
    id: 26,
    testId: 7,
    text: "Что такое Promise в JavaScript?",
    answerIds: [126, 127, 128, 129, 130],
    explanation:
      "Promise — это объект, представляющий завершение или неудачу асинхронной операции и её результат.",
  },
  {
    id: 27,
    testId: 7,
    text: "Что такое async/await в JavaScript?",
    answerIds: [131, 132, 133, 134, 135],
    explanation:
      "Async/await — это синтаксический сахар для работы с промисами, который делает асинхронный код более читаемым и похожим на синхронный.",
  },
];

export const answers: Answer[] = [
  {
    id: 1,
    questionId: 1,
    text: "Определяют тип возвращаемых данных: JSON, XML и так далее",
    isCorrect: false,
  },
  {
    id: 2,
    questionId: 1,
    text: "Передают изменяющиеся части URL для доступа к конкретным ресурсам",
    isCorrect: true,
  },
  {
    id: 3,
    questionId: 1,
    text: "Описывают тип авторизации для доступа запросов клиентов к АРІ",
    isCorrect: false,
  },
  {
    id: 4,
    questionId: 1,
    text: "Устанавливают ограничение на размер тела и тип запроса клиента",
    isCorrect: false,
  },
  {
    id: 5,
    questionId: 1,
    text: "Определяют, какие заголовки должны быть добавлены к запросу",
    isCorrect: false,
  },
  {
    id: 6,
    questionId: 2,
    text: "Отслеживает ошибки в реальном времени и автоматически создает исправления для АРІ",
    isCorrect: false,
  },
  {
    id: 7,
    questionId: 2,
    text: "Визуализирует и создает статическую документацию АРІ на основе спецификации ОрепАРІ",
    isCorrect: true,
  },
  {
    id: 8,
    questionId: 2,
    text: "Предоставляет всем клиентам интерфейс для создания запросов API в реальном времени",
    isCorrect: false,
  },
  {
    id: 9,
    questionId: 2,
    text: "Шифрует все полученные запросы, оправляемые через АРІ от рабочего сервера",
    isCorrect: false,
  },
  {
    id: 10,
    questionId: 2,
    text: "Оптимизирует призводительность базы данных при получении клиентского АРІ запроса",
    isCorrect: false,
  },
  {
    id: 11,
    questionId: 3,
    text: "Используется для шифрования данных, оправляемых через АРІ",
    isCorrect: false,
  },
  {
    id: 12,
    questionId: 3,
    text: "Преобразует НТТР-запросы в зашифрованные данные для передачи через сеть",
    isCorrect: false,
  },
  {
    id: 13,
    questionId: 3,
    text: "Позволяет серверу запрашивать данные пользователя напрямую",
    isCorrect: false,
  },
  {
    id: 14,
    questionId: 3,
    text: "Хранит сессии пользователя на сервере для дальнейшего использования",
    isCorrect: false,
  },
  {
    id: 15,
    questionId: 3,
    text: "Позволяет клиенту получить доступ к ресурсам пользователя без повторного ввода логина и пароля",
    isCorrect: true,
  },
  {
    id: 16,
    questionId: 4,
    text: "Basic Auth с базой авторизации через заголовок Authorization",
    isCorrect: false,
  },
  {
    id: 17,
    questionId: 4,
    text: "Basic Auth с передачей логина и пароля в открытом виде",
    isCorrect: false,
  },
  {
    id: 18,
    questionId: 4,
    text: "MD5-хеширование без SSL",
    isCorrect: false,
  },
  {
    id: 19,
    questionId: 4,
    text: "Аутентификация по IP-адресу без шифрования",
    isCorrect: false,
  },
  {
    id: 20,
    questionId: 4,
    text: "OAuth 2.0 с использованием токенов доступа",
    isCorrect: true,
  },
  {
    id: 21,
    questionId: 5,
    text: "401",
    isCorrect: true,
  },
  {
    id: 22,
    questionId: 5,
    text: "500",
    isCorrect: false,
  },
  {
    id: 23,
    questionId: 5,
    text: "404",
    isCorrect: false,
  },
  {
    id: 24,
    questionId: 5,
    text: "429",
    isCorrect: false,
  },
  {
    id: 25,
    questionId: 5,
    text: "403",
    isCorrect: false,
  },
  {
    id: 26,
    questionId: 6,
    text: "POST не позволяет обновлять существующие ресурсы, что ограничивает его применение",
    isCorrect: false,
  },
  {
    id: 27,
    questionId: 6,
    text: "POST используется только для передачи данных в текстовом формате, что ограничивает передачу других типов данных",
    isCorrect: false,
  },
  {
    id: 28,
    questionId: 6,
    text: "POST требует обязательного указания уникального идентификатора для каждого создаваемого ресурса",
    isCorrect: false,
  },
  {
    id: 29,
    questionId: 6,
    text: "POST автоматически обрабатывает данные на стороне клиента перед отправкой на сервер",
    isCorrect: false,
  },
  {
    id: 30,
    questionId: 6,
    text: "POST не является идемпотентным методом, и повторный запрос может привести к созданию дубликатов",
    isCorrect: true,
  },
  {
    id: 31,
    questionId: 7,
    text: "GET отправит данные в формате, который не поддерживается сервером",
    isCorrect: false,
  },
  {
    id: 32,
    questionId: 7,
    text: "GET приведет к удалению ресурса после попытки его обновления",
    isCorrect: false,
  },
  {
    id: 33,
    questionId: 7,
    text: "GET сохранит состояние ресурса и не произведет никаких изменений",
    isCorrect: true,
  },
  {
    id: 34,
    questionId: 7,
    text: "GET нарушит целостность данных ресурса и приведет к дублированию информации",
    isCorrect: false,
  },
  {
    id: 35,
    questionId: 7,
    text: "GET обновит только часть данных ресурса, оставив другие неизменными",
    isCorrect: false,
  },
  {
    id: 36,
    questionId: 8,
    text: "Параметр filter фильтрует страницы по количеству содержащихся элементов",
    isCorrect: false,
  },
  {
    id: 37,
    questionId: 8,
    text: "Параметр offset позволяет выделять данные по выбранным критериям",
    isCorrect: false,
  },
  {
    id: 38,
    questionId: 8,
    text: "Параметр limit задает максимальное количество элементов на странице",
    isCorrect: true,
  },
  {
    id: 39,
    questionId: 8,
    text: "Параметр sort позволяет отсортировывать смещение относительно первого элемента страницы",
    isCorrect: false,
  },
  {
    id: 40,
    questionId: 8,
    text: "Параметр page задает размер страницы и количество возвращаемых элементов",
    isCorrect: false,
  },
  {
    id: 41,
    questionId: 9,
    text: "WebSocket обеспечивает постоянное соединение между клиентом и сервером",
    isCorrect: true,
  },
  {
    id: 42,
    questionId: 9,
    text: "SSH предназначен для защищенного доступа к удаленным серверам",
    isCorrect: false,
  },
  {
    id: 43,
    questionId: 9,
    text: "Webhooks требуют периодической проверки сервера для получения новых данных",
    isCorrect: false,
  },
  {
    id: 44,
    questionId: 9,
    text: "SOAP поддерживает исключительно синхронный обмен данными",
    isCorrect: false,
  },
  {
    id: 45,
    questionId: 9,
    text: "FTP используется для передачи файлов, а не для обмена сообщениями",
    isCorrect: false,
  },
  {
    id: 46,
    questionId: 10,
    text: "Она уменьшает количество серверных ресурсов, используемых для запросов по API",
    isCorrect: false,
  },
  {
    id: 47,
    questionId: 10,
    text: "Она позволяет просматривать и тестировать API без необходимости ручного написания запросов",
    isCorrect: true,
  },
  {
    id: 48,
    questionId: 10,
    text: "Она автоматически оптимизирует все запросы, отправляемые клиентами через API",
    isCorrect: false,
  },
  {
    id: 49,
    questionId: 10,
    text: "Она позволяет любому из ваших клиентов сохранять свои данные на своем сервере",
    isCorrect: false,
  },
  {
    id: 50,
    questionId: 10,
    text: "Она автоматически создает пользовательский интерфейс для всех ваших клиентов",
    isCorrect: false,
  },
  // мок, удалить
  {
    id: 51,
    questionId: 11,
    text: ".container",
    isCorrect: true,
  },
  {
    id: 52,
    questionId: 11,
    text: "#container",
    isCorrect: false,
  },
  {
    id: 53,
    questionId: 11,
    text: "container",
    isCorrect: false,
  },
  {
    id: 54,
    questionId: 11,
    text: "[container]",
    isCorrect: false,
  },
  {
    id: 55,
    questionId: 11,
    text: ":container",
    isCorrect: false,
  },

  {
    id: 56,
    questionId: 12,
    text: "Создает flex-контейнер для гибкого расположения элементов",
    isCorrect: true,
  },
  {
    id: 57,
    questionId: 12,
    text: "Устанавливает фиксированную ширину элементов",
    isCorrect: false,
  },
  {
    id: 58,
    questionId: 12,
    text: "Центрирует элементы по вертикали",
    isCorrect: false,
  },
  {
    id: 59,
    questionId: 12,
    text: "Устанавливает отступы между элементами",
    isCorrect: false,
  },
  {
    id: 60,
    questionId: 12,
    text: "Создает таблицу",
    isCorrect: false,
  },

  {
    id: 61,
    questionId: 13,
    text: "margin",
    isCorrect: true,
  },
  {
    id: 62,
    questionId: 13,
    text: "padding",
    isCorrect: false,
  },
  {
    id: 63,
    questionId: 13,
    text: "border",
    isCorrect: false,
  },
  {
    id: 64,
    questionId: 13,
    text: "width",
    isCorrect: false,
  },
  {
    id: 65,
    questionId: 13,
    text: "height",
    isCorrect: false,
  },
  {
    id: 66,
    questionId: 14,
    text: "<a>",
    isCorrect: true,
  },
  {
    id: 67,
    questionId: 14,
    text: "<link>",
    isCorrect: false,
  },
  {
    id: 68,
    questionId: 14,
    text: "<href>",
    isCorrect: false,
  },
  {
    id: 69,
    questionId: 14,
    text: "<url>",
    isCorrect: false,
  },
  {
    id: 70,
    questionId: 14,
    text: "<ref>",
    isCorrect: false,
  },

  {
    id: 71,
    questionId: 15,
    text: "src",
    isCorrect: true,
  },
  {
    id: 72,
    questionId: 15,
    text: "alt",
    isCorrect: false,
  },
  {
    id: 73,
    questionId: 15,
    text: "width",
    isCorrect: false,
  },
  {
    id: 74,
    questionId: 15,
    text: "height",
    isCorrect: false,
  },
  {
    id: 75,
    questionId: 15,
    text: "srcset",
    isCorrect: false,
  },

  {
    id: 76,
    questionId: 16,
    text: "<ol>",
    isCorrect: true,
  },
  {
    id: 77,
    questionId: 16,
    text: "<ul>",
    isCorrect: false,
  },
  {
    id: 78,
    questionId: 16,
    text: "<li>",
    isCorrect: false,
  },
  {
    id: 79,
    questionId: 16,
    text: "<dl>",
    isCorrect: false,
  },
  {
    id: 80,
    questionId: 16,
    text: "<menu>",
    isCorrect: false,
  },

  // Ответы для GIT (базовый уровень)
  {
    id: 81,
    questionId: 17,
    text: "git add",
    isCorrect: true,
  },
  {
    id: 82,
    questionId: 17,
    text: "git commit",
    isCorrect: false,
  },
  {
    id: 83,
    questionId: 17,
    text: "git push",
    isCorrect: false,
  },
  {
    id: 84,
    questionId: 17,
    text: "git pull",
    isCorrect: false,
  },
  {
    id: 85,
    questionId: 17,
    text: "git status",
    isCorrect: false,
  },

  {
    id: 86,
    questionId: 18,
    text: "git init",
    isCorrect: true,
  },
  {
    id: 87,
    questionId: 18,
    text: "git clone",
    isCorrect: false,
  },
  {
    id: 88,
    questionId: 18,
    text: "git create",
    isCorrect: false,
  },
  {
    id: 89,
    questionId: 18,
    text: "git new",
    isCorrect: false,
  },
  {
    id: 90,
    questionId: 18,
    text: "git start",
    isCorrect: false,
  },

  {
    id: 91,
    questionId: 19,
    text: "git status",
    isCorrect: true,
  },
  {
    id: 92,
    questionId: 19,
    text: "git log",
    isCorrect: false,
  },
  {
    id: 93,
    questionId: 19,
    text: "git show",
    isCorrect: false,
  },
  {
    id: 94,
    questionId: 19,
    text: "git info",
    isCorrect: false,
  },
  {
    id: 95,
    questionId: 19,
    text: "git check",
    isCorrect: false,
  },

  // Ответы для GIT (средний уровень)
  {
    id: 96,
    questionId: 20,
    text: "git branch",
    isCorrect: true,
  },
  {
    id: 97,
    questionId: 20,
    text: "git create-branch",
    isCorrect: false,
  },
  {
    id: 98,
    questionId: 20,
    text: "git new-branch",
    isCorrect: false,
  },
  {
    id: 99,
    questionId: 20,
    text: "git fork",
    isCorrect: false,
  },
  {
    id: 100,
    questionId: 20,
    text: "git split",
    isCorrect: false,
  },

  {
    id: 101,
    questionId: 21,
    text: "git merge",
    isCorrect: true,
  },
  {
    id: 102,
    questionId: 21,
    text: "git join",
    isCorrect: false,
  },
  {
    id: 103,
    questionId: 21,
    text: "git combine",
    isCorrect: false,
  },
  {
    id: 104,
    questionId: 21,
    text: "git connect",
    isCorrect: false,
  },
  {
    id: 105,
    questionId: 21,
    text: "git attach",
    isCorrect: false,
  },

  {
    id: 106,
    questionId: 22,
    text: "git reset",
    isCorrect: true,
  },
  {
    id: 107,
    questionId: 22,
    text: "git undo",
    isCorrect: false,
  },
  {
    id: 108,
    questionId: 22,
    text: "git cancel",
    isCorrect: false,
  },
  {
    id: 109,
    questionId: 22,
    text: "git back",
    isCorrect: false,
  },
  {
    id: 110,
    questionId: 22,
    text: "git revert",
    isCorrect: false,
  },

  {
    id: 111,
    questionId: 23,
    text: "git branch -d",
    isCorrect: true,
  },
  {
    id: 112,
    questionId: 23,
    text: "git delete",
    isCorrect: false,
  },
  {
    id: 113,
    questionId: 23,
    text: "git remove",
    isCorrect: false,
  },
  {
    id: 114,
    questionId: 23,
    text: "git erase",
    isCorrect: false,
  },
  {
    id: 115,
    questionId: 23,
    text: "git clean",
    isCorrect: false,
  },

  {
    id: 116,
    questionId: 24,
    text: "git log",
    isCorrect: true,
  },
  {
    id: 117,
    questionId: 24,
    text: "git history",
    isCorrect: false,
  },
  {
    id: 118,
    questionId: 24,
    text: "git timeline",
    isCorrect: false,
  },
  {
    id: 119,
    questionId: 24,
    text: "git track",
    isCorrect: false,
  },
  {
    id: 120,
    questionId: 24,
    text: "git record",
    isCorrect: false,
  },
  {
    id: 121,
    questionId: 25,
    text: "Функция, имеющая доступ к переменным родительской функции",
    isCorrect: true,
  },
  {
    id: 122,
    questionId: 25,
    text: "Специальный тип данных JavaScript",
    isCorrect: false,
  },
  {
    id: 123,
    questionId: 25,
    text: "Метод для работы с массивами",
    isCorrect: false,
  },
  {
    id: 124,
    questionId: 25,
    text: "Встроенный объект JavaScript",
    isCorrect: false,
  },
  {
    id: 125,
    questionId: 25,
    text: "Оператор сравнения",
    isCorrect: false,
  },

  {
    id: 126,
    questionId: 26,
    text: "Объект, представляющий завершение асинхронной операции",
    isCorrect: true,
  },
  {
    id: 127,
    questionId: 26,
    text: "Функция для работы с промисами",
    isCorrect: false,
  },
  {
    id: 128,
    questionId: 26,
    text: "Метод для обработки ошибок",
    isCorrect: false,
  },
  {
    id: 129,
    questionId: 26,
    text: "Специальный тип данных",
    isCorrect: false,
  },
  {
    id: 130,
    questionId: 26,
    text: "Оператор для асинхронных операций",
    isCorrect: false,
  },

  {
    id: 131,
    questionId: 27,
    text: "Синтаксический сахар для работы с промисами",
    isCorrect: true,
  },
  {
    id: 132,
    questionId: 27,
    text: "Метод для создания промисов",
    isCorrect: false,
  },
  {
    id: 133,
    questionId: 27,
    text: "Оператор для работы с асинхронными функциями",
    isCorrect: false,
  },
  {
    id: 134,
    questionId: 27,
    text: "Специальный тип данных",
    isCorrect: false,
  },
  {
    id: 135,
    questionId: 27,
    text: "Функция для обработки ошибок",
    isCorrect: false,
  },
];
