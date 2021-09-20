import style from './PopUp.module.scss';
import {Button, FormControl, InputLabel, OutlinedInput} from "@material-ui/core";
import {useEffect, useState} from "react";
import useApi from '../../hooks/api';

const PopUp = (props) => {
    const {actions} = useApi();
    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productPic, setProductPic] = useState('');

    let data = {};

    const handleSubmit = async (event) => {
        event.preventDefault();
        data.name = productName;
        data.description = productDesc;
        data.urlPic = productPic;
        setProductName('');
        setProductDesc('');
        setProductPic('');
        await actions.createProduct(data);
        props.handleClick();
    }

    const changeName = (e) => {
        setProductName(e.target.value);
    }

    const changeDesc = (e) => {
        setProductDesc(e.target.value);
    }

    const changePic = (e) => {
        setProductPic(e.target.value);
    }

    const render = () => {
        return (
            <div className={style.modal}>
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h2 className={style.title}>Добавление продукта</h2>
                        <span className={style.close} onClick={props.handleClick}>&times;</span>
                    </div>
                    <form className={style.form}
                          onSubmit={handleSubmit}
                    >
                        <FormControl required>
                            <InputLabel htmlFor='component-outlined'>Наименование</InputLabel>
                            <OutlinedInput
                                name='product_name'
                                id='product_name'
                                value={ productName }
                                label='Наименование'
                                onChange={changeName}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor='component-outlined'>Описание</InputLabel>
                            <OutlinedInput
                                id='product_desc'
                                name='product_desc'
                                value={ productDesc }
                                label='Описание'
                                onChange={changeDesc}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor='component-outlined'>URL картинки</InputLabel>
                            <OutlinedInput
                                id='product_pic'
                                name='product_pic'
                                value={ productPic }
                                label='URL картинки'
                                onChange={changePic}
                            />
                        </FormControl>
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
