import { Form, FormField } from '../../components/Form/Form';
import { Button } from '../../components/Button/Button';
import { useFetch } from '../../Hooks/useFetch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CategoriaCreate = () => {
	const navigate = useNavigate();
	const [controlErrors, setControlErrors] = useState({});
	const { error, setBodyRequest } = useFetch({url:'https://coff-v-art-api.onrender.com/api/categoria', method: 'POST', headers: { 'Content-Type': 'application/json' } });

	function handleRegisterCategory(e: any) {
		e.preventDefault();
		const nombre = e.target.nombre.value;
		const descripcion = e.target.descripcion.value;
        

		if (nombre === '') {
			setControlErrors({ ...controlErrors, nombre: 'El nombre es requerido' });
			return;
        }else if (descripcion === '') {
			setControlErrors({ ...controlErrors, descripcion: 'La decripción es requerida' });
			return;
		}

        const categoria = {
            nombre,
            descripcion
        }

        setBodyRequest(categoria);

		if(!error) {
			setTimeout ( ()=> {navigate('/admin/categoria')}, 500)
		}



        // console.log(error);

        // console.log(user);
        // console.log(data);

	}

	const categoriasFields: FormField[] = [
		{
			name: 'nombre',
			type: 'text',
			label: 'Nombre',
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
				fields={categoriasFields}
				title='Crear Categoría de Insumo'
				onSubmit={handleRegisterCategory}
				button={<Button text={'Registrar Categoría'} onClick={() => null} />}
				errors={controlErrors}
			/>
		</>
	);
    }
