import "./datatable.css";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch.js';
import { faEye, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { columnsStateInitializer } from "@mui/x-data-grid/internals";

const Datatable = ({ columns }) => {
    const location = useLocation();
    const path = location.pathname.split("/").pop();
    const { data, loading, error } = useFetch(`/api/${path}`);
    const [list, setList] = useState();

    useEffect(() => {
        setList(data);
    }, [data]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/${path}/${id}`);
            setList(list.filter((item) => item._id !== id));
        } catch (err) {
            console.log("Erro na deleção!");
            console.log(err);
        }
    }

    const handleConfirm = async (id) => { //mermao essa porra n funciona fica dando 404
        try {
            await axios.patch(`/api/${path}/${id}`, {status: 'ativa'});
            setList(list.filter((item) => item._id !== id));
        } catch (err) {
            console.log("Erro na confirmação!");
        }
    }

    const actionColumn = [
        {
            field: "action", headerName: "Opções", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="viewButton"><FontAwesomeIcon icon={faEye} /></div>
                        <div className="deleteButton"><FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(params.row._id)} /></div>
                    </div>
                )
            }
        }
    ];

    const actionColumnQuarto = [
        {
            field: "action", headerName: "Opções", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="viewButton"><FontAwesomeIcon icon={faEye} /></div>
                    </div>
                )
            }
        }
    ];

    const actionColumnReserva = [
        {
            field: "action", headerName: "Opções", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="confirmButton"><FontAwesomeIcon icon={faCheck} onClick={() => handleConfirm(params.row._id)} /></div>
                        <div className="viewButton"><FontAwesomeIcon icon={faEye} /></div>
                        <div className="deleteButton"><FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(params.row._id)} /></div>
                    </div>
                )
            }
        }
    ];

    return (
        <div className="datatable">
            <DataGrid
                rows={list}
                columns={path == 'quartos' ? columns.concat(actionColumnQuarto) : path == 'reservas' ? columns.concat(actionColumnReserva) : columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableRowSelectionOnClick
                getRowId={row => row._id}
            />
        </div>
    );
};

export default Datatable;
