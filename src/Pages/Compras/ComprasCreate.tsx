import { Form, FormField } from '../../components/Form/Form';
import { Button } from '../../components/Button/Button';
import { useFetch } from '../../Hooks/useFetch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ComprasCreate = () => {
	const navigate = useNavigate();
	const [controlErrors, setControlErrors] = useState({});
	const { error, setBodyRequest } = useFetch({url:'https://coff-v-art-api.onrender.com/api/shop', method: 'POST', headers: { 'Content-Type': 'application/json' } });

	function handleRegisterShop(e: any) {
		e.preventDefault();
		const producto = e.target.producto.value;
		const cantidad = e.target.cantidad.value;
		const iva = e.target.iva.value;
		const total = e.target.total.value;

		if (producto === '') {
			setControlErrors({ ...controlErrors, producto: 'El producto es requerido' });
			return;
		} else if (cantidad === '') {
			setControlErrors({
				...controlErrors,
				cantidad: 'La cantidad es requerida',
			});
			return;
		} else if (iva === '') {
			setControlErrors({ ...controlErrors, iva: 'El iva es requerido' });
			return;
		} else if (total === '') {
			setControlErrors({
				...controlErrors,
				total: 'El total es requerido',
			});
			return;
		}
        const shop = {
            producto,
            cantidad: +cantidad,
            iva,
            total
        }

        setBodyRequest(shop);

		if(!error) {
			setTimeout(()=>{
				navigate('/admin/compras')
			},500)
		}

		console.log(error)

        // console.log(error);

        // console.log(user);
        // console.log(data);

	}

	const comprasFields: FormField[] = [
		{
			name: 'producto',
			type: 'select',
			label: 'Producto',
			options: [
				{ value: 'Café oscuro', label: 'Café oscuro' },
				{ value: 'Café amaretto', label: 'Café amaretto' },
			],
		},
		{
			name: 'cantidad',
			type: 'number',
			label: 'Cantidad',
		},
		{
			name: 'iva',
			type: 'select',
			label: 'Iva',
			options: [
				{ value: '8%', label: '8%' },
				{ value: '18%', label: '19%' },
				{ value: 'Sin Iva', label: 'Sin Iva' },
			],
		},
		{
			name: 'total',
			type: 'text',
			label: 'Total',
		},
	];
	return (
		<>
			<Form
				fields={comprasFields}
				title='Crear Compra'
				onSubmit={handleRegisterShop}
				button={<Button text={'Registrar Compra'} onClick={() => null} />}
				errors={controlErrors}
			/>
		</>
	);
    }
