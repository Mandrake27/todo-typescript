import React, { useRef } from 'react';
import { TodoFormProps } from '../interfaces';

const TodoForm: React.FC<TodoFormProps> = ({ handleAdd }) => {
  const ref = useRef<HTMLInputElement>(null);
  // const [title, setTitle] = useState<string>('');
  //
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAdd(ref.current!.value);
      ref.current!.value = '';
    }
  }
  return (
    <div className="input-field mt2">
      <input
        // onChange={handleChange}
        ref={ref}
        onKeyPress={handleKeyPress}
        type="text"
        id="title"
        placeholder="Ведите название дела:"
      />
      <label htmlFor="title" className="active">
        Ведите название дела:
      </label>
    </div>
  )
}

export default TodoForm;
