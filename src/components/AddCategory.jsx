import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => { //desestructura event y usa solo target
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text" 
                placeholder="search gifs"
                value = { inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
