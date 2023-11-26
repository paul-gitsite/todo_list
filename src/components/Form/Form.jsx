import React, { useState } from 'react';
import './Form.css';
import { IoIosAddCircle } from 'react-icons/io';

const Form = ({arrayItems, arraySetItems}) => {

    const [input, setInput] = useState({ head: '', plan: '' });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const addInArray = ({head, plan }) => {
        const id = arrayItems.length ? arrayItems[arrayItems.length -1].id+1 :1;
        const newArrayItem = {id, checked:false, head, plan}
        const resultingArray = [...arrayItems, newArrayItem]
        localStorage.setItem("todo_list", JSON.stringify(resultingArray))
        arraySetItems(resultingArray)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted', input);
        addInArray({ head: input.head, plan: input.plan });
        setInput({ head: '', plan: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Heading"
                required
                name="head"
                value={input.head}
                onChange={(e) => handleInput(e)}
            />
            <br />
            <input
                type="text"
                placeholder="Add Planning"
                required
                name="plan"
                value={input.plan}
                onChange={(e) => handleInput(e)}
            />
            <button type="submit">
                <IoIosAddCircle role="button" tabIndex={0} />
            </button>
        </form>
    );
};

export default Form;
