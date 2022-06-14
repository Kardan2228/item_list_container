import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import data from '../helpers/data.js';

export default function ItemDetailContainer() {

const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [detalle, setDetalle] = useState({});


    useEffect(() => {

        const itemDetalle = new Promise((res, rej) => {
            
            setTimeout(() => {
                res(data.find(item => item.id === "005"));
            }, 2000);
        });

        itemDetalle
        .then((result) => {
            setDetalle(result);
          })
          .catch((error) => {
            setError(true);
            console.log(error);
          })
          .finally(() => {
            setLoading(false);

          })
      }, []);

    console.log('Este es el detalle' , detalle);
    console.log(loading);
    console.log(error);
  return (
    <div>
        <div>{loading && 'Cargando...'}</div>
        <ItemDetail detalle={detalle}/>
    </div>
  )
}

