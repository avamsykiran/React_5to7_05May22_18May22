
import axios from 'axios';

const apiUrl = "http://localhost:9999/todos";

const getAll = () => axios.get(apiUrl);

const getById = id => axios.get(`${apiUrl}/${id}`) ;

const add = todo => axios.post(apiUrl,todo);

const update = todo => axios.put(apiUrl,todo);

const delById = id => axios.delete(`${apiUrl}/${id}`) ;

const TodoService = {getAll,getById,add,update,delById};

export default TodoService;