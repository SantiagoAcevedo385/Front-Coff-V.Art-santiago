import { Form, FormField } from "../../components/Form/Form"
import { Button } from "../../components/Button/Button"

export const RolesCreate = () => {
    const fieldsFormRoles: FormField[] = [
        {
            name: 'Nombre del Rol',
            type: 'text',
            label: 'Nombre del Rol',
        },
        {
            name: 'Permisos',
            type: 'select',
            label: 'Permisos',
            options: [
                { value: '1', label: 'Permiso 1' },
                { value: '2', label: 'Permiso 2' },
                { value: '3', label: 'Permiso 3' },
                { value: '4', label: 'Permiso 4' },
            ]
        }
    ]
    return (
        <Form title="Crear Rol" fields={fieldsFormRoles} onSubmit={e=>e.preventDefault()} button={<Button text={"Crear Rol"} onClick={()=>null}/>}/>
    )
}