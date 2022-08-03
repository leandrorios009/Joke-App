import { useState } from "react";
import { AddCategory, GifGrid} from "./components/index";


export const JokeApp = () => {

    const [categories, setCategories] = useState(['The Office']);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>Joke App</h1>
            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />                     
                ))
            }
        </>
    )
}
