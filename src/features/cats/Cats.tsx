import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    getCats,
    selectCats,
} from './catsSlice';
import styles from './cats.module.css';

type CatsParams = {
    category_id: string | undefined;
};

export default function Cats(props: {match: any}) {
    const cats = useAppSelector(selectCats);
    const params:CatsParams = props.match.params;
    let category_id = -1;
    if (params.category_id) category_id = +params.category_id;

    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCats({
            page: page,
            limit: 10,
            category_id: category_id
        }));
    }, []);

    const fetchMoreCats = () => {
        setPage(page + 1);
        dispatch(getCats({
            page: page + 1,
            limit: 10,
            category_id: category_id
        }));
    }

    return (<>
        <div>
            {
                cats.length > 0 && cats.map((cat: any) => {
                    return <div key={cat.id} className={styles.container}>
                        <img src={cat.url} className={styles.image} />
                    </div>
                })
            }
        </div>
        <button onClick={() => { fetchMoreCats() }}>Read more</button>
    </>);
}
