import React, { useState, useEffect } from 'react'
import './Main.css'
import { MdDelete } from "react-icons/md";
import Form from '../Form/Form';
import Search from '../Search/Search';


const Main = () => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")) ?? []);

    const [search, setSearch] = useState('')

    const withSearch = items.filter(item => (
        item.head.toLowerCase().includes(search.toLowerCase()) 
      ));


    const handleCheck = (id) => {
        const arrayItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(arrayItems)
        localStorage.setItem("todo_list", JSON.stringify(arrayItems))

    }

    const handleDelete = (id) => {
        const arrayItems = items.filter((item) =>
            item.id !== id)
        setItems(arrayItems)
        localStorage.setItem("todo_list", JSON.stringify(arrayItems))
    }
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const day = currentTime.toLocaleString('en-US', { weekday: 'short' });
    const month = currentTime.toLocaleString('en-US', { month: 'short' });
    const date = currentTime.toLocaleDateString('en-US', { day: 'numeric' });

    return (
        <main>
            <p className='date' >
                <span>Your more valuable thing is here : </span>
                &nbsp;{date}<sup>th</sup>&nbsp; {day} {month}
                <time>, {formattedTime}</time>
            </p>
            <article>
                <Form
                    arrayItems={items}
                    arraySetItems={setItems}
                />
                <Search
                    search={search}
                    setSearch={setSearch}
                />
                <p style={{ color: 'gray', margin: "1rem" }} >Total {items.length === 1 ? "Task" : "Tasks"}: {items.length}</p>
            </article>

            {(items.length) ? (
                <ul>
                    {withSearch.map((item) => (
                        <li key={item.id} >
                            <input
                                onChange={() => handleCheck(item.id)}
                                type='checkbox'
                                checked={item.checked} />
                            <section>
                                <p
                                    style={(item.checked) ? { textDecoration: "line-through", textDecorationColor: "red" } : null}
                                    onDoubleClick={() => handleCheck(item.id)} >{item.head}</p>
                                <p
                                    style={(item.checked) ? { textDecoration: "line-through", textDecorationColor: "red" } : null}
                                >{item.plan}</p>
                            </section>

                            <MdDelete
                                onClick={() => handleDelete(item.id)}
                                role='button'
                                tabIndex={0}
                            />
                        </li>
                    ))}
                </ul>
            ) : (<h1 className='emptyText' >Let's create some tasks to build yourself better than before. </h1>)}

        </main>
    )
}

export default Main
