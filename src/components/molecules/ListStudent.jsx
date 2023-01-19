import Nombre from "../atoms/Nombre";
import Widge from "../atoms/Widge";

function ListStudent({listStudent}) {
    return (
        <>
        <Nombre msn="Lista de alumnos del 4B"></Nombre>
        {
            listStudent.map(itemStudent=>(//El metodo MAP de un arreglo requiere un retorno obligatorio 
            <Widge item={itemStudent}></Widge>
                //retorno implicito nesecita {}  (return(<Widge>);) e explicito nesecita ()  (listStudent.map(item=>(<Widget>));) 
            ))
        }
        <button onClick='' >LOGIN</button>
        <button onClick='' >REGISTRO</button>
        </>
      );
}

export default ListStudent;