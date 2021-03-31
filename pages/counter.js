import { useState, useEffect } from 'react';
  
export default  function Example() {
    const [count, setCount] = useState(0);
  
    // Похож на componentDidMount и componentDidUpdate:
    useEffect(() => {
      // Обновляем название докуммента, используя API браузера
      document.title = `Вы нажали ${count} раз`;
    });
  
    return (
      <div>
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми меня
        </button>
      </div>
    );
  }