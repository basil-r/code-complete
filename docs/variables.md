### Оголошення змінних

##### Вимкніть неявні оголошення.

```javascript
// bad

function foo() {
  bar = 42;
}

foo();

console.log(bar); // 42
```

```javascript
// good

"use strict";

function foo() {
  bar = 42;
}

foo();

console.log(bar); // ReferenceError: bar is not defined
```

##### Оголошуйте усі змінні, ті - котрі будуть використовуватися.

```javascript
// bad

const foo = () => {
  const a = 0;
  const b = 0;
  const c = 0;

  return a + b;
};
```

```javascript
// good

const foo = () => {
  const a = 0;
  const b = 0;

  return a + b;
};
```

##### Уникайте ненавмисного застосування двох змінних зі схожими іменами (застосовуйте лінтери).

```javascript
// bad

const total = 0;

const foo = (a, b) => {
  const total = a + b;
  // ...
};
```

```javascript
// good

const total = 0;

const foo = (a, b) => {
  const sum = a + b;
  // ...
};
```

### Iніціалізація змінних

##### Ініціалізуйте кожну змінну під час її оголошення (попередьте використання неініціалізованих змінних).

```javascript
// bad

const foo = (list) => {
  let result;

  if (Array.isArray(list)) {
    result = list.filter((item) => item.isValid);
  }

  return result.length;
};
```

```javascript
// good

const foo = (list) => {
  let result = [];

  if (Array.isArray(list)) {
    result = list.filter((item) => item.isValid);
  }

  return result.length;
};
```

##### Ініціалізуйте кожну змінну якомога ближче до місця першого звернення до неї.

```javascript
// bad

const foo = (list, completed) => {
  let total = 0.0;
  let isDone = completed;
  let name = "test";

  // ...

  total = list.reduce((a, b) => a + b);

  //...

  if (name.length) {
    //...
  }

  while (isDone) {
    //...
  }
};
```

```javascript
// good

const foo = (list, completed) => {
  let total = 0.0;
  total = list.reduce((a, b) => a + b);

  //...

  let name = "test";
  if (name.length) {
    //...
  }

  // ...
  let isDone = completed;
  while (isDone) {
    //...
  }
};
```

##### Оголошуйте змінні, значення яких має залишатися незмінним після ініціалізації, при можливості, - як const.

```javascript
// bad

const foo = (title, completed) => {
  let isDone = completed && title.length > 0;
  // ...
};
```

```javascript
// good

const foo = (title, completed) => {
  const isDone = completed && title.length > 0;
  // ...
};
```

##### Ініціалізуйте дані-члени класу у його конструкторі.

```javascript
// bad

class Bar {
  #name;
  #id;
  #items;

  setName(name) {
    this.#name = name;
  }

  generateId() {
    this.#id = getHash(this.#name);
  }

  // ...

  size() {
    return this.#items.length;
  }
}
```

```javascript
// good

class Bar {
  #name;
  #id;
  #items;

  constructor() {
    this.#name = "";
    this.#id = "";
    this.#items = [];
  }

  setName(name) {
    this.#name = name;
  }

  generateId() {
    this.#id = getHash(this.#name);
  }

  // ...

  size() {
    return this.#items.length;
  }
}

// or

class Bar {
  #name = "";
  #id = "";
  #items = [];

  setName(name) {
    this.#name = name;
  }

  generateId() {
    this.#id = getHash(this.#name);
  }

  // ...

  size() {
    return this.#items.length;
  }
}
```

##### Ініціалізуйте іменовані константи один раз (наприклад, у методі рівня програми `bootstrap()`); змінні ініціалізуйте у виконуваному коді.

```javascript
// bad

// module A
import { SomeDbClient } from "dblibrary";

let client;

const getClient = () => {
  const HOST = "localhost:3000";
  client = new SomeDbClient(HOST);

  return client;
};

export { getClient };

// module B
import { getClient } from "module-a";

const create = async (data) => {
  return await getClient().insert(data);
};

export { create };

// index
import { create } from "module-b";

// ...

server.pull(async (message) => {
  const data = JSON.parse(message);
  await create(data);
});

export { create };
```

```javascript
// good

// module A
import { SomeDbClient } from "dblibrary";

const HOST = "localhost:3000";
const client = new SomeDbClient(HOST);

export { client };

// module B
import { client } from "module-a";

const create = async (data) => {
  return await client.insert(data);
};

export { create };

// index
import { create } from "module-b";

// ...

server.pull(async (message) => {
  const data = JSON.parse(message);
  await create(data);
});

export { create };
```

##### Перевіряйте коректність вхідних параметрів. (Переконайтеся, що вхідні значення допустимі.)

```javascript
// bad

const foo = (list, completed) => {
  const isDone = completed;
  let result = [];

  if (isDone) {
    result = list((item) => item.isValid);
  }

  return result;
};
```

```javascript
// good

const foo = (list, completed) => {
  const isDone = typeof completed === "boolean" ? completed : false;
  const items = Array.isArray(list) ? list : [];
  let result = [];

  if (isDone) {
    result = items((item) => item.isValid);
  }

  return result;
};
```

##### Ініціалізуйте робочу пам'ять

```javascript
// bad

import { Buffer } from "node:buffer";

// Creates an uninitialized buffer of length 10.
const buf = Buffer.allocUnsafe(10);

// ... perform some actions with the buffer
```

```javascript
// good

import { Buffer } from "node:buffer";

// Creates a zero-filled Buffer of length 10.
const buf = Buffer.alloc(10);

// ... perform some actions with the buffer
```
