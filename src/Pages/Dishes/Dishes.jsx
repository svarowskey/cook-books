import style from './Dishes.module.scss';
import useApi from '../../hooks/api';

const Dishes = () => {
    const {data: {dishes}, actions} = useApi();
    return (
        <div>
            {dishes.map(dish => {
                return (<div key={dish.id}>
                    <span>{dish.name}</span>
                </div>
                )
            })}
        </div>
    )
}

export default Dishes;
