const dataBase = [
    {
        id: 1,
        filter: '',
        repeatedTimeStamp: 
        1673874264971,  
        timesBeenRepeated: 2,      
        title: 'Что такое this?',
        answer: `this - контекст вызова- это значение специального объекта Зис.
        данное значение в контексте функций определяется вызывающей строной (caller"ом)
        по форме вызова.
        Если слева от скобок вызова (...) находится выражение типа reference type, то значит Зис 
        будет являться БАЗОВЫЙ ОБЪЕКТ этого значения (base).
        Для работы вызовов типа user.hi(), JavaScript использует трюк – точка '.' возвращает не саму функцию, а специальное значение «ссылочного типа», называемого Reference Type.
        Этот ссылочный тип (Reference Type) является внутренним типом. Мы не можем явно использовать его, но он используется внутри языка.

        Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:

        base – это объект.
        name – это имя свойства объекта.
        strict – это режим исполнения. Является true, если действует строгий режим (use strict).
        Результатом доступа к свойству user.hi является не функция, а значение ссылочного типа. Для user.hi в строгом режиме оно будет таким:
        (user, "hi", true)
        Когда скобки () применяются к значению ссылочного типа (происходит вызов), то они получают полную информацию об объекте и его методе, и могут поставить правильный this (user в данном случае, по base).
        Таким образом, значение this передаётся правильно, только если функция вызывается напрямую с использованием синтаксиса точки obj.method() или квадратных скобок obj['method']().

        Во всех остальных случаях (другое значение отличное от reference), значением Зис всегда является null, что в последствии меняется на window
        или undefined.
        У стрелочных функций НЕТ this. Значение Зис берется снаружи. Также поэтому методы call, apply, bind не могут привязать контекст у стрелочной
        функции.
        Поскольку у стрелок нет this и super они "прозрачно" встраиваются во внешний контекст объектов instance"ов класса.`,
    },    
    {
        id: 2,
        repeatedTimeStamp: 1674024695949,  
        timesBeenRepeated: 3,      
        title: 'Что такое Замыкание?',
        answer: `Замыкание - это комбинация функции и лексического окружения, в котором эта функция
        была определена. В момент декларации функции в ее скрытое свойство [Environment] автоматически записывается ссылка на лексическое
        окружение того места, где она была декларирована.
        Лексическое окружение- это внутренний (скрытый) объект выполняемого скрипта, блока кода, функции. 
        Он состоит из двух частей:
        1) Объект Environment Record, в котором КАК СВОЙ]сТВА хранятся все локальные переменные, значение this.
        2) ССылка на внешнее лексическое окружение (которое соответствует коду снаружи от текущих фигурных скобок).`,
    },    
    {
        id: 3,
        filter: 'list--filter__react',
        repeatedTimeStamp: 1673877867177,  
        timesBeenRepeated: 2,      
        title: 'Что такое React?',
        answer: 'React - это JS библиотека с открытым исходным кодом, разработанная компанией Фейсбук. Предназначена для создания пользовательских интерфейсов. Реакт отвечает за слой Представления в мобильных и веб приложениях. Основная философия - компонентный подход. То есть весь интерфейс может быть разбит на минимальные функционирующие единицы - Компоненты. Переиспользуя такие единицы в других местах приложения, можно ускорить разработку. Особенности использования: 1) Использование Virtual ДОМ вместо реальногг, поскольку операции с реальным ДОМ ресурсозатратны. Виртуальный ДОМ- это по сути объект, на основани которого строится реальный ДОМ. Операции перерисовки происходят намного быстрее. 2) Поддержка рендеринга на стороне сервера "SSR server side rendering". Проблема - вся разметка отрисовывается внутри одного корневого элемента. Что плохо для SEO (Search Engine Optimization). С SSR первоначальная разметка строится на сервере, полностью передается и отрисовывается на клиенте. 3) Реакт придерживается принципа однонаправленного потока данных. Все данные передаются от корневых компонентов во вложенные но не в обратном направлении. 4) Использование переиспользуемых компонентов для построения пользовательского интерфейса.',
    },    
    {
        id: 4,
        repeatedTimeStamp: 1673878420687,  
        timesBeenRepeated: 2,      
        title: 'Что такое HTML?',
        answer: 'HTML - это hypertext markup language. Язык разметки гипертекста.',
    },    
    {
        id: 5,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое http/https?',
        answer: 'http - HyperText Transfer Protocol. Это клиент-серверный протокол. Протокол для передачи гипертекстовых документов по типу HTML. Используется для передачи произвольных данных. Состоит из стартовой строки (URL), заголовка и тела сообщения. Стартовая строка ответа - это трехзначный код. Протокол http передает данные в обычном виде, злоумышленниук может их перехватить. http S- secure шифрует все данные и делает невозможным их чтение при перехвате. Шифрование обеспечивают механизмы SSL и TSL',
    },    
    {
        id: 6,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 1,      
        title: 'Что такое URL',
        answer: 'URL - Uniform resource locator. Это унифицированный указатель ресурса',
    },    
    {
        id: 7,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Коды ответа сервера',
        answer: `1xx - Информирование о процессе передачи запроса.
                 2xx - Информирование об успешной передаче запроса.
                 3xx - Информирование о перенаправлении.
                 4xx - Ошибки клиента означают, что либо ты ищешь то чего нет, либо не правильно ищешь, либо тебе сюда нельзя. 
                 5xx - Ошибки сообщающие о проблемах на сервере.
                `,
    },    
    {
        id: 8,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое заголовки и тело запроса',
        answer: 'Заголовки - это параметры, которые определяю запрос или описывают тело сообщения. Информация о браузере, языке, авторизации и тд. Тело запроса - это данные, которые мы передаем в запросе (например текст комментария), либо ответ. который мы получаем оот сервера',
    },  
    {
        id: 9,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 1,      
        title: 'Что такое SSL?',
        answer: 'SSL - это secure sockets layer работает, когда мы подключаемся к сайту, то просим, чтобы сайт сначала идентифицировал себя. В ответ он пришлет нам копию своего SSL сертификата. Браузер проверит его и если ок, то начнется обмен шифрованными данными ',
    },  
    {
        id: 10,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 1,      
        title: 'Что такое TLS?',
        answer: `TLS - это Transport Layout Security- прокаченная версия SSL`,
    },   
    {
        id: 11,
        repeatedTimeStamp: 
        1673874264971,  
        timesBeenRepeated: 4,      
        title: 'Что такое JSON?',
        answer: `JavaScript Object Notation. это общий формат обмены данными. Формат ключ- значение.                                                                                                                                                                .Метод JSON.stringify() берёт объект и преобразует его в строку.
        объект в формате JSON имеет несколько важных отличий от объектного литерала:
        
        Строки используют двойные кавычки.
        Имена свойств объекта также заключаются в двойные кавычки. 
        JSON.stringify может быть применён и к примитивам.
        JSON поддерживает следующие типы данных:
        
        Объекты { ... }
        Массивы [ ... ]
        строки,
        числа,
        логические значения true/false,
        null.
        
        JSON.stringify пропускает:
        Свойства-функции (методы).
        Символьные ключи и значения Symbol.
        Свойства, содержащие undefined.
        с BigInt воде будет ошибка
        `,
    },   
    {
        id: 12,
        filter: 'list--filter__react',
        repeatedTimeStamp: 1674026959852,  
        timesBeenRepeated: 1,      
        title: 'JSX',
        answer: `JSX- это расширение синтаксиса JavaScript. JSX создаёт «элементы» React. 
        Можно сказать, что это синтаксический сахар. Под капотом функция React.creteElement()
        `,
    },   
    {
        id: 13,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое XML?',
        answer: `Это язык разметки в котором можно задавать синтаксис, структуру, тип данных и их модель. Даные обарачиваются в разметку.
        `,
    },   
    {
        id: 14,
        filter: 'list--filter__react',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 1,      
        title: 'virtual DOM',
        answer: `DOM не был расчитан для создания динамического пользовательского интерфейса. 
        Поиск элемента или его динамическая вставка занимают длительный временной интервал.
        Если на странице много динамической логики, по perfomance будет проседать.
        Для решения проблемы Реакт предложил Виртуальный ДОМ - легковесный объект, который является
        копией реального ДОМ. Поэтому если в компоненте происходят какие-то изменения, которые ведут к перерисовке,
        То сначала происходит сравнение старой версии Виртуал ДОМ и новой. После нахождения разницы изменения
        применяются к реальному ДОМ дереву. Этот процесс называется СОГЛАСОВАНИЕ. В результате перерисовывается не вся 
        страница, а лишь часть изменений.
        `,
    },
    {
        id: 15,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1674026959852,  
        timesBeenRepeated: 1,      
        title: 'Что такое Class?',
        answer: `Class- это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения
        (свойства) и реализацию поведения (методы)ю
        Класс - это разновидность функции. ОТЛИЧИЯ от функций: 
        1) Конструктор класса не может быть вызван без NEW.
        2) Методы класса являются неперечисляемыми. Если пройтись по объекту циклом for...in, 
        от мы не получим методы класса.
        3) Классы всегда используют "use strict".

        В статических методах static классов НЕЛЬЗЯ использовать this. Эти методы принадлежат только классу
        и не передаются экземплярам. Соответственно получим ошибку.
        Стрелочные функции, которые создаются ВНУТРИ класса, ссылаютсяна экземпляр (объект) этого класса
        (то есть this для них - это объект, который является экземпляром класса)
        `,
    },  
    {
        id: 16,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Типы данных в JS?',
        answer: `Ecma script выделяет 8 типов даных из которых 6 типов: bigInt, Symbol, undefined, string,
        boolean, number являются примитивами. Седьмой тип данных null специально относят к примитивам, 
        поскольку по поведению он и правда примитив, но приэтом от Нал унаследованны все объекты. По
        этой причине его тип это объект.
        Примитивные типы данных копируются по значению.
        Они являются иммутабельными, те не могут быть модифицированы, а только быть перезаписаны новым полным значением.
        Восьмой тип данных - это обджект. Является простой структурой данных, которая используется не только для хранения,
        но и для создания других структур данных.
        Объект копируется и хранится по ссылке.
        Переменная хранит не сам объект, а его адрес в памяти, то есть ссылку на него. 
        `,
    },  
    {
        id: 17,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое DOM?',
        answer: `ДОМ - (Document Object Model) это модель представляющая из себя изначальный видHTML страницы.
        Это представление HTML документа в виде дерева тэгов.
        Каждый узел этого дерева - это объект. Тэги являются узлами-элементами.
        html- окрневой узел. Текст внутри элементов образует текстовые узлы.
        4 основных видов узлов (всего вроде 10): 1) document- входная точка в DOM. 
        2) Узлы- элементы HTML теги- основные строительные блоки.
        3) Текстовые узлы
        4) Комментарии
        `,
    }, 
    {
        id: 18,
        filter: 'list--filter__typeScript',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое TypeScriipt?',
        answer: `TypeScript - это надмножество язака (расширенная версия) JS с возможностью явного статического
        назначения типов, поддержку классов и интерфейсов. Можно сказать, что это язык, а также набор инструментов.
        Преимущество ТС перед ДЖАВАС - возможность создания в различных текстовых редакторах такое среды разработки, 
        которая позволяет прямо в процессе ввода кода выявлять распространенные ошибки. В больших проектах ведет
        к повышению надежности программ, которые при этом можно разварачивать в тех же средах, где и работают обычные 
        JS приложения. Интегрировать TS в приложение также можно постепенно. Достаточно небольших настроек для linter"а
        и сборщика, после чего поменять расширение файлов с JS JSX HA TS TSX  
        `,
    }, 
    {
        id: 19,
        filter: 'list--filter__typeScript',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Основные компоненты TypeScriipt?',
        answer: `Три основных компонента:
        1) Язык - специфичный синтаксис, ключевые слова.
        2) Сборщик, компилятор - он с открытым исх кодом, кроссплатформенный, открытая спецификация, написан на TS.
        Он выполняет преобразования ТайпСкр кода в ДжавСкрип код. И выдает сообщения об ошибках.
        Позволяет объединить несколько Тайпскр файлов в один выходной ТайпСкр файл. 
        Создает карты кода (Sourse map)
        3) вспомогательные инструменты. Предназначены для облегчения процесса разработки с его использованием в различных
        редакторах кода   
        `,
    }, 
    {
        id: 20,
        filter: 'list--filter__typeScript',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Особенности TypeScriipt?',
        answer: `1) Кроссплатформенность - в любой операционной системе мб устан.  
        2) Объектно ориентированный язык- предоставляет такую функциональность, как клаасы,
        интерфейсы и модули
        3) Статическая проверка типов. ТС использует статическую типизацию и помогает проверять типы
        во время компиляции. Таким образом мождно найти ошибки при написании кода, без запуска скрипта.
        4) Взаимодействие с DOM - можно добавлять и убирать элементы
        5) ES6 синтаксис (класс, интерфейс, стрелочные функции и тд)
        `,
    }, 
    {
        id: 21,
        filter: 'list--filter__typeScript',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Система типов в TypeScriipt?',
        answer: `Система типов представляет различные типы значений, поддерживаемых языком. 
        ТС проверяет достоверность передаваемых значений до того как они будут сохранены или обработаны
        программой. Типы делятся на две большие категории:
        1) ВСТРОЕННЫЕ - число, строка, булевое значение, void, null, undefined
        2) ОПРЕДЕЛЯЕМЫЕ ПОЛЬЗОВАТЕЛЕМ - enums (перечисления),  классы, массивы, интерфейсы и кортэжи (tuple)
        это массив, каждый элемент которого имеет свой жестко заданный тип
        `,
    }, 
    {
        id: 22,
        filter: 'list--filter__typeScript',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Разница между типом и интерфейсом?',
        answer: `1) Типы могут объединяться с другим типом, интерфейс - нет
        2) Тип не может дополняться (), интерфейс - может
        3)Классы могут расширять интерфейсы, типы- нет.
        4) Тип расширяется в сообщениях об ошибках и логах
        `,
    }, 
    {
        id: 23,
        filter: 'list--filter__typeScript',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Дженерики?',
        answer: `Помогают писать универсальный, переиспользуемый код. Мы как бы задаем переменную вместо
        конкретного типа  function include<T> (array: T[], query% T):boolean { return false}
        `,
    }, 
    {
        id: 24,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Redux, ключевые принципы?',
        answer: `Redux- это стабильный предсказуемый контейнер для хранения состояния JS приложений основанный на 
        паттерне проектирования FLUX. Предназначен для управления состоянием приложения и базируется на трех 
        фундаментальных принципах:
        1) Единственный источник истины
        2) Состояние доступно только для чтения
        3) Изменение производится при помощи только чистых функций

        Для определения того, как изменяется состояние создаются reduser"ы.
        Reduser - Это чистая функция, принимающая предыдущее состояние в качестве аргумента и возвращающее новое
        состояние
        `,
    }, 
    {
        id: 25,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое Flux?',
        answer: `Flux - архитектурный подход или набор шаблонов программирования для построения пользовательского
        интерфейса веб приложений, построенный на однонаправленных потоках данных.
        Слои:
        1) Action - по сути просто события. Поступают действия ассинхронно, но деспетчиризация является 
        синхронным процессом. Кроме имени действия могут иметь полезную нагрузку (payLoad). Она содержит относящиеся 
        к действию данные.
        2) Dispatcher - диспетчер. Предназначен для передачи действий хранилищу Store. В нем одни хранилища регистрируют
        свои коллБеки и зависимости между другими хранилищами.
        3) store - хранилище - место, где сосредоточен State состояние приложения. Изменение состояния хранилища 
        происходит строго на основанииданных в Action и старого состояния хранилища при помощи чистых функций.
        4) View - представление - это компонент, который обычно отвечает за выдачу информации пользователю
        `,
    }, 
    {
        id: 26,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое межсайтовый скриптинг или XSS?',
        answer: `XSS - это распространенная уязвимость. Суть - злоумышленнику удается внедрить на страницу
        JS код, который не был предусмотрен разработчиками. Этот код будет выполняться каждый раз, когда
        пользователи будут заходить на странцу приложения. Страница с сервера не изменяется. XSS атака 
        использует уязвимость на странице, которая включает переменную, отправленную в запрос для отображения
        в необработанном виде в ответе. Специфика в том, что вредоносный код может использовать авторизацию пользователя
        в веб системе для получения к ней расширенного доступа, или для получения авторизационных данных пользователя
        
        `,
    }, 
    {
        id: 27,
        repeatedTimeStamp: 1674014610351,  
        timesBeenRepeated: 1,      
        title: 'Что такое REST?',
        answer: `ReST- REpresentational State Transfer - передача состояния представления это архитектурный стиль
        взаимодействия компонентов распределенного приложения в сети. Представляет собой согласованный набор 
        ограничений учитываемых при проектировании распределенной ГиперМедиа системы. В определенных случаях, 
        например интернетмагазины, поисковые системы, прочие системы основанные на данных, это приводит к 
        повышению производительности и упрощению архитектуры.
        REST - простой интерфейс управления информацией без дополнительных внутренних прослоек.
        Каждая единица информации определяется глобальным идентификатором таким как URL.
        А каждый URL имеет строго заданный формат.
        Принципы:
        1) Клиент и сервер две разные сущности. Сервер хранит информацию, клиент ей пользуется. 
        2) Сервер не хранит состояние клиента. Вся информация должна передаваться через запросы. 
        3) Кэшируемость настраивается через заголовки. Информация может быть закэширована на стороне сервера и 
        на стороне клиента. Можно закэшировать MySQL запросы и выдавать готовые страницы, не обращаясь к базе. 
        4) Единство интерфейса - все должны общаться по одному протоколу (только http). 
        5) Многоуровневость. Сервисы могут быть разбиты на много модулей уровней, они должны друг с другом общаться 
        по цепочке. Каждый уровень системы общается только со смежными уровнями. 
        6) Предоставление кода по запросу (клиент отправил запрос и получил что-то). 
        7) Единая точка входа на сервер. Используем Эндпоинты
        `,
    }, 
    {
        id: 28,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Что такое GraphQL?',
        answer: `GraphQL- это библиотека или язык запросов. By Facebook. Ее задача снизить нагрузку на сервера.
        Если данные получаемые через запросы РЕСТ АПИ нужны не вполном объеме, то нужна архитектура микросервисов.
        Граф позволяет полностью конфигурировать на клиенте данные, которые мы хотим получить.
        Снижает нагрузку на сервера и количество данных, которые получает пользователь. 
        `,
    }, 
    {
        id: 29,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 1,      
        title: 'EventLoop',
        answer: `EventLoop - бесконечный чикл, в котором движок JS ожидает задачи, исполняет их и снова ожидает
        появления новых.
        Если поступает задача, когда движок занят чем-то другим, то она становится в очередь  Makrotask queue, 
        например: (mousemove, click)- события, setTimeout - истечение таймера.
        Задачи из очереди исполняются по правилу FIFO.
        1) Рендеринг не происходит во время выполнения задачи.
        2) Если задача выполняется слишком долго, и браузер не может обрабатывать пользовательские действия, 
        браузер предлагает "убить" такую задачу.
        Алгоритм работы Event loop (упрощенный):
        1) Выбрать и исполнить старейшую задачу из очереди макрозадач (например "script");
        2) Исполнить все микрозадачи: - пока очередь микрозадач не пуста - выбрать из очереди старейшую микрозадачу
        и исполнить ее.
        3) Отрисовать изменения страницы, если они есть.
        4) Если очередь макрозадач пуста - подождать, пока появится макрозадача.
        
        Чтобы добавить в очередь новую макрозадачу: Используем setTimeout(f) с нулевой задержкой. 
        Это можно использовать для разбиения больших вычислений на части, чтобы браузер мог реагировать на пользовательские 
        события (и для отложенного выполнения действия).
        
        Для добавления в очередь новой микрозадачи:
         - Используем queueMikrotask(f)
         - Также обработчики промисов then/catch/finally  выполняются в рамках очереди микрозадач. Микрозадачи
         также используются под капотом await так как это форма обработки промиса.
        `,
    }, 
    {
        id: 30,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1674024695949,  
        timesBeenRepeated: 1,      
        title: 'SOLID',
        answer: `S- substitution princeple. Принцип единой ответственности. Каждая сущность должна выполнять единую функцию.
        О- open-closed . Принцип открытости-закрытости. Сущности должны быть открыты для дополнения, но закрыты для изменений.
        L - Принцип подстановки Барбары Лисков.  Классы наследники не могут противоречить родительскому классу. Не могут предоставлять 
        интерфейс уже базового.
        I - interface segregation. Принцип разделения интерфейсов. Интервейсы не должны быть избыточными. Удобнее использовать
        более тонкие интерфейсы.
        D - dependency iversion. принцип инверсии зависимостей. Модули верхнего уровня не должны зависеть от модуля нижнего
        уровня, классы не должны зависеть от деталей, это детали должны зависеть от абстракций. Детали должны зависеть от
        абстракций.
        `,
    }, 
    {
        id: 31,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'GIT',
        answer: `Git reset soft, reset hard разница?
        git reset hard позволяет полностью удалить коммит
        git reset mixed (по умолнчаению) изменения попадают в Индексе, гит за ними следит
        git reset soft изменения есть, но Гит за ними не следить (состояние до git add .)
        Разница rebase и merge?
        Команда merge - это слияние веток, создается коммит слияния. Может засорять историю коммитов. Мердж позволяет править конфликты.
        git rebase - перемещает одну ветку поверх другой без коммита.
        Sqoush commit? - когда мы хотим сделать интерактивный ребейз и подредактировать историю коммитов. Изменения попадут в предыдущий 
        коммит, а этого коммита не будет.

        `,
    }, 
    {
        id: 32,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1674026959852,  
        timesBeenRepeated: 1,      
        title: 'ООП',
        answer: `Объектно-ориентированное программирование — это методология программирования, в которой все важные вещи представлены 
        объектами, каждый из которых является экземпляром определенного класса, а классы образуют иерархию наследования.
        родительский класс принято называть суперклассом, а его потомков — подклассами. Подклассы наследуют свойства и поведения
        своего родителя, поэтому в них содержится лишь то, чего нет в суперклассе. Например, только коты могут мурчать, а собаки — лаять.
        Когда вы заводите автомобиль, вам достаточно повернуть ключи зажигания или нажать кнопку. Вам не нужно вручную соединять провода 
        под капотом, поворачивать коленчатый вал и поршни, запуская такт двигателя. Все эти детали скрыты под капотом автомобиля. 
        Вам доступен только простой интерфейс: ключ зажигания, руль и педали. Таким образом, мы приходим к определению интерфейса — 
        публичной ( public ) части объекта, доступной остальным объектам.
        `,
    }, 
    {
        id: 33,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Абстракция ООП',
        answer: `
        Абстракция — это модель некоего объекта или явления реального мира, в которой опущены незначительные детали, не играющие 
        существенной роли в данном контексте. Так, например, класс Самолёт будет актуален как для программы тренажёра пилотов, так и 
        для программы бронирования авиабилетов, но в первом случае будут важны детали пилотирования самолёта, а во втором — лишь 
        расположение и занятость мест внутри самолёта.
        `,
    }, 
    {
        id: 34,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Инкапсуляция ООП',
        answer: `
        Инкапсуляция — это способность объектов скрывать часть своего состояния и поведения от других объектов, предоставляя 
        внешнему миру только определённый интерфейс взаимодействия с собой. Например, вы можете инкапсулировать что-то внутри 
        класса, сделав его приватным ( private ) и скрыв доступ к этому полю или методу для объектов других классов. Чуть 
        более свободный, защищённый ( protected ) режим видимости сделает это поле или метод доступным в подклассах.
        `,
    }, 
    {
        id: 35,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Интерфейс',
        answer: `
        В объектных языках программирования, с помощью механизма интерфейсов, которые обычно объявляют через ключевое слово 
        interface , можно явно описывать «контракты» взаимодействия объектов. Например, вы создали интерфейс ЛетающийТранспорт 
        с методом лететь (откуда, куда, пассажиры) , а затем описали методы класса Аэропорт так, чтобы они принимали любые 
        объекты с этим интерфейсом. Теперь вы можете быть уверены, что любой объект, реализующий интерфейс — будь то Самолёт , 
        Вертолёт или ДрессированныйГрифон — сможет работать с Аэропортом .
        Вы можете как угодно менять код классов, реализующих интерфейс, не беспокоясь о том, что Аэропорт перестанет быть 
        с ними совместимым.
        `,
    }, 
    {
        id: 36,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Наследование ООП',
        answer: `
        Наследование — это возможность создания новых классов на основе существующих. Главная польза от наследования — повторное 
        использование существующего кода. Расплата за наследование проявляется в том, что подклассы всегда следуют интерфейсу
         родительского класса. Вы не можете исключить из подкласса метод, объявленный в его родителе.
        `,
    }, 
    {
        id: 37,
        filter: 'list--filter__oop',
        ßrepeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Полиморфизм ООП',
        answer: `
        Полиморфизм — это способность программы выбирать различные реализации при вызове операций с одним и тем же названием.
        Для лучшего понимания полиморфизм можно рассматривать как способность объектов «притворяться» чем-то другим. В приведённом 
        выше примере собаки и коты притворялись абстрактными животными.
        `,
    }, 
    {
        id: 38,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Отношения между объектами ООП',
        answer: `
        • Зависимость: Класс А могут затронуть изменения в классе B.
        • Ассоциация: Объект А знает об объекте B. Класс А зависит от B.
        • Агрегация: Объект А знает об объекте B и состоит из него. Класс А зависит от B.
        • Композиция: Объект А знает об объекте B, состоит из него и управляет его жизненным циклом. Класс А зависит от B.
        • Реализация: Класс А определяет методы объявленные интерфейсом B. Объекты А можно рассматривать через интерфейс B. Класс А зависит от B.
        • Наследование: Класс А наследует интерфейс и реализацию класса B, но может переопределить её. Объекты А можно рассматривать 
          через интерфейс класса B. Класс А зависит от B.
        `,
    }, 
    {
        id: 39,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Паттерны',
        answer: `
        Паттерн проектирования — это часто встречающееся решение определённой проблемы при проектировании архитектуры программ.
        — это высокоуровневое описание решения, реализа- ция которого может отличаться в двух разных программах.
        Если привести аналогии, то алгоритм — это кулинарный рецепт с чёткими шагами, а паттерн — инженерный чертёж, на котором 
        нарисовано решение, но не конкретные шаги его реализации.
        состоят из таких пунктов:
        • проблема, которую решает паттерн;
        • мотивации к решению проблемы способом, который пред- лагает паттерн;
        • структуры классов, составляющих решение;
        • примера на одном из языков программирования;
        • особенностей реализации в различных контекстах;
        • связей с другими паттернами.
        `,
    }, 
    {
        id: 40,
        filter: 'list--filter__oop',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Паттерны. Классификация.',
        answer: `
        • Порождающие паттерны беспокоятся о гибком создании объектов без внесения в программу лишних зависимостей.
        • Структурные паттерны показывают различные способы построения связей между объектами.
        • Поведенческие паттерны заботятся об эффективной коммуникации между объектами.
        `,
    }, 
    {
        id: 41,
        filter: 'list--filter__react',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Методы жизненного цикла компонента React',
        answer: `
        1) constructor - это конструктор компонента, который вызывается ДО того, как компонент будет смонтирован.
        2) componentDidMount - вызывается сразу после монтирования компонента. Отличное место, для создания сетевых запросов
        и настройки подписок компонента на различные события. Также в этом методе должны происходить действия для 
        работы которых требуется наличие ДОМ узлов (useLayoutEffect).
        3) componentDidUpdate - вызывается сразу после обновления. Метод позволяет работать с ДОМ при обновлении
        компонента. Подходит для таких сетевых запросов, которые выполняются на результате сравнения текущих Пропсов
        с предыдущими.
        4) componentWillUnmount - вызывается непосредственно перед размонтированием компонента. В нем выполняются необходимые
        сбросы таймера, а также сетевых запросов, подписок, созданых в componentDidMount.
        5) shouldComponentUpdate - вызывается перед рендером, получает новые пропсы и состояние. Используется для повышения
        производительности. Чтобы избежать лишних перерисовок.
        6) render - единственный обязательный метод в компоненте. Предназначен для возврата разметки.
        7) getDerivedStateFromProps - вызывается непосредственно перед методом render. Возвращает объект для изменения
        состояния или null, чтобы ничего не обновлять. Метод существует для редких случаев, когда состояние зависит от
        изменения в пропсах.
        8) getSnapshotBeforeUpdate - позволяет компоненту брать некоторую информацию из ДОМ перед ее возможным изменением
        9) getDerivedStateBeforeError - метод жизненного цикла вызывается после возникновения ошибки у компонента
        потомка. Он получает ошибку в качестве параметра и возвращает значение для обновления состояния.
        10) componentDidCatch - используется для логирования ошибок. Вызывается после возникновения ошибки у компонента 
        потомка
        `,
    }, 
    {
        id: 42,
        filter: 'list--filter__react',
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 0,      
        title: 'Стадии жизненного цикла компонента React',
        answer: `
        Жизненный цикл компонента состоит из трех основных стадий: 
        1) Монтирование - компонент готов к встраиванию в браузерный ДОМ. Эта стадия охватывает инициализацию в 
        constructor, а также методы жизненного цикла getDerivedStateFromProps, render, componentDidMount.
        2) Updating - на данной стадии компонент обновляется или из-за получение новых Пропсов, либо из-за
        обновления состояения. Эта стадия охватывает такие методы жизненного цикла как: getDerivedStateFromProps
        shouldComponentUpdate, render, getSnapshopBeforeUpdate, componentDidUpdate.
        3) Размонтирование - на этой стадии компонент удаляется из браузерного ДОМ. Включает в себя метод 
        жизненного цикла componentWillUnmount. 
        В Реакт имеется особsе стадии (фазы) применения изменения к ДОМ.
        4) Rendering - компонент рендерится без каких либо побочных еффектов. На данной стадии Реакт может приостанавливать,
        прерывать и перезапускать рендеринг.
        5) PreCommit - перед обновлением компонента есть момент, когда Реакт читает ДОМ через getSnapshotBeforeUpdate.
        6) Commit - Реакт изменяет ДОМ и выполняет завершающие методы жизненного цикла такие как componentDidMount 
        при монтировании, componentDidUpdate при обновлении, componentWillUmount при размонтировании.
        `,
    }, 
];

module.exports = dataBase;