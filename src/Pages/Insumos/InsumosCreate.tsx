import { Form, FormField } from '../../components/Form/Form';
import { Button } from '../../components/Button/Button';
import { useFetch } from '../../Hooks/useFetch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InsumosCreate = () => {
	const navigate = useNavigate();
	const [controlErrors, setControlErrors] = useState({});
	const { error, setBodyRequest } = useFetch({url:'https://coff-v-art-api.onrender.com/api/insumo', method: 'POST', headers: { 'Content-Type': 'application/json' } });

	function handleRegisterInsumo(e: any) {
		e.preventDefault();
		const nombre = e.target.nombre.value;
		const costoSaco = e.target.costoSaco.value;
		const cantidad = e.target.cantidad.value;
		const categoria = e.target.categoria.value;
		const descripcion = e.target.descripcion.value;

		if (nombre === '') {
			setControlErrors({ ...controlErrors, nombre: 'El nombre es requerido' });
			return;
		} else if (costoSaco === '') {
			setControlErrors({
				...controlErrors,
				costoSaco: 'El costo del saco es requerido',
			});
			return;
		} else if (cantidad === '') {
			setControlErrors({ ...controlErrors, cantidad: 'La cantidad es requerida' });
			return;
		} else if (categoria === '') {
			setControlErrors({
				...controlErrors,
				categoria: 'La categoría es requerida',
			});
			return;
		} else if (descripcion === '') {
			setControlErrors({ ...controlErrors, descripcion: 'La decripción es requerida' });
			return;
		}

        const insumo = {
            nombre,
            costoSaco,
            cantidad,
            categoria,
            descripcion
        }

        setBodyRequest(insumo);

		if(!error) {
			navigate('/admin/insumo')
		}

		console.log(error)

        // console.log(error);

        // console.log(user);
        // console.log(data);

	}

	const insumosFields: FormField[] = [
		{
			name: 'nombre',
			type: 'text',
			label: 'Nombre',
		},
		{
			name: 'costoSaco',
			type: 'text',
			label: 'Costo Saco',
		},
		{
			name: 'cantidad',
			type: 'text',
			label: 'Cantidad',
		},
        {
			name: 'categoria',
			type: 'select',
			label: 'Categoría',
			options: [
				{ value: 'Café finca Pueblo Rico', label: 'Café finca Pueblo Rico' },
				{ value: 'Café finca Santa Rosa', label: 'Café finca Santa Rosa' },
			],
		},
		{
			name: 'descripcion',
			type: 'text',
			label: 'Descripción',
		},
	];
	return (
		<>
			<Form
				fields={insumosFields}
				title='Crear Insumo'
				onSubmit={handleRegisterInsumo}
				button={<Button text={'Registrar Insumo'} onClick={() => null} />}
				errors={controlErrors}
			/>
		</>
	);
    }
