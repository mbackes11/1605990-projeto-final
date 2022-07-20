import React from "react";

const listaDepartamento = () => {

    return (

        <>

            <h3 className="mt-3">Departamentos</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th className="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Recursos Humanos</td>
                        <td>RH</td>
                        <td>

                            <div className="d-flex justify-content-evenly">
                                <button className='btn btn-outline-warning btn-sm'>
                                    <i className="bi bi-pencil-fill" /> Editar
                                </button>
                                <button className='btn btn-outline-danger btn-sm'>
                                    <i class="bi bi-trash3-fill" /> Excluir
                                </button>

                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>Financeiro</td>
                        <td>Financeiro</td>
                        <td>
                            <button className='btn btn-outline-warning'>Editar</button>
                            <button className='btn btn-outline-danger'>Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default listaDepartamento;