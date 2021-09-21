import style from './PopUp.module.scss';
import {Button, FormControl, InputLabel, OutlinedInput} from "@material-ui/core";
import {useState} from "react";
import useApi from '../../hooks/api';
import Autocomplete from '@mui/material/Autocomplete';
import {Stack, TextField} from "@mui/material";

const PopUp = (props) => {
    const {data: {products}, actions} = useApi();
    let data = {};
    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productPic, setProductPic] = useState('');
    const [dishName, setDishName] = useState('');
    const [dishDesc, setDishDesc] = useState('');
    const [dishPic, setDishPic] = useState('');
    const [dishProducts, setDishProducts] = useState([]);
    const [countInputs, setCountInputs] = useState(1);
    const title = props.action === 'add_dish' ? 'блюда' : 'продукта';

    // Формируем список продуктов для inputs
    const productsOptions = () => {
        let productsOps = [];
        productsOps = products.map(prod => {
            return prod.name;
        })
        return productsOps;
    }

    // Функция отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.action === 'add_dish') {
            data.name = dishName;
            data.description = dishDesc;
            data.urlPic = dishPic;
            data.recipe_id = '';
            data.type_dish = '';
            data.products_list = dishProducts.map((dishProd) => {
                // Формируем ссылку на продукт в firestore
                const refProd = '/products/' + products[dishProd.id].id;
                return refProd;
            });
            await actions.createDish(data);
        }
        if (props.action === 'add_product') {
            data.name = productName;
            data.description = productDesc;
            data.urlPic = productPic;
            await actions.createProduct(data);
        }
        props.handleClick();
    }

    // Функция изменения поля с наименованием
    const changeName = (e) => {
        if (props.action === 'add_dish') {
            setDishName(e.target.value);
        }
        if (props.action === 'add_product') {
            setProductName(e.target.value);
        }
    }

    // Функция изменения поля с описанием
    const changeDesc = (e) => {
        if (props.action === 'add_dish') {
            setDishDesc(e.target.value);
        }
        if (props.action === 'add_product') {
            setProductDesc(e.target.value);
        }
    }

    // Функция изменения поля с URL картинки
    const changePic = (e) => {
        if (props.action === 'add_dish') {
            setDishPic(e.target.value);
        }
        if (props.action === 'add_product') {
            setProductPic(e.target.value);
        }
    }

    // Функция изменения полей с выбором продуктов
    const changeDishProducts = (event, i) => {
        let prevDishProducts = [...dishProducts];
        let item = {...prevDishProducts[i]};
        item.id = event.target.dataset.optionIndex;
        prevDishProducts[i] = item;
        setDishProducts(prevDishProducts);
    }

    const deleteInput = () => {
        let prevDishProducts = [...dishProducts];
        prevDishProducts.pop();
        setDishProducts(prevDishProducts);
    }

    // Формируем список полей с продуктами
    const listInputs = () => {
         if (props.action === 'add_dish') {
             return (
                <Stack spacing={1} id='stack_inputs'>
                    <h3 className={style.title}>Используемые продукты</h3>
                    <div>
                        { [...Array(countInputs)].map((e, i) => {
                            return(
                                <div className={style.input_wrapper}>
                                    <Autocomplete
                                        key={i}
                                        disablePortal
                                        sx={{ flexGrow: 10 }}
                                        options={productsOptions()}
                                        id="combo-box-demo"
                                        onChange={(event) => {
                                            changeDishProducts(event, i);
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Продукт" required />}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.button_wrapper}>
                        <Button variant='outlined' className={style.button_item} onClick={() => setCountInputs(countInputs + 1)}>Ещё продукт</Button>
                        { countInputs > 1 ? <Button variant='outlined' color='error' className={style.button_item} onClick={() => {
                            setCountInputs(countInputs - 1);
                            deleteInput();
                        }}>&times;</Button> : null}
                    </div>
                </Stack>
        )} else { return null }
    }

    const render = () => {
        return (
            <div className={style.modal}>
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h2 className={style.title}>Добавление {title}</h2>
                        <span className={style.close} onClick={props.handleClick}>&times;</span>
                    </div>
                    <form className={style.form}
                          onSubmit={handleSubmit}
                    >
                        <FormControl required>
                            <InputLabel htmlFor='component-outlined'>Наименование</InputLabel>
                            <OutlinedInput
                                id='field_name'
                                value={ props.action === 'add_dish' ? dishName : productName }
                                label='Наименование'
                                onChange={changeName}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor='component-outlined'>Описание</InputLabel>
                            <OutlinedInput
                                id='field_desc'
                                value={ props.action === 'add_dish' ? dishDesc : productDesc }
                                label='Описание'
                                onChange={changeDesc}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor='component-outlined'>URL картинки</InputLabel>
                            <OutlinedInput
                                id='field_pic'
                                value={ props.action === 'add_dish' ? dishPic : productPic }
                                label='URL картинки'
                                onChange={changePic}
                            />
                        </FormControl>

                        { props.action === 'add_dish' ? listInputs() : null }

                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            >Добавить</Button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            {props.toggle ? render() : null}
        </div>
    )
}

export default PopUp;
