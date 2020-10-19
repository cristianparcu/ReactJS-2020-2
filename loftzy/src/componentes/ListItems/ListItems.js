// import React from 'react';
// import classes from'./ListItems.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faPencilAlt}  from '@fortawesome/free-solid-svg-icons';
import React from "react";
// import {Link} from 'react-router-dom';
import TextArea from "../../componentes/TextArea/TextArea";

// library.add(faPencilalt);

function ListItems(props) {
  const items = props.usuarios;
  // function ListItems(){
  //     const usu=this.props.usuarios.map((user,i) => {
  // class ListItems extends Component {
  // var ListItems = (props.usuarios){
  console.log("Lista activa:");
  console.log(props.usuarios[0]);
  const lista = items.map((item) => {
    console.log(item.id);

    // <tr className={classes['tr']} key={i} onClick={this.clickHandler.bind(this, i)}>
    //     <td className={classes['td']}>
    //         <h4>{post.title}</h4>
    //     </td>
    //     <td className={classes['td']}>
    //         <p>{post.date}</p>
    //     </td>
    //     <td className={classes['td']}>
    //         <p>{post.hour}</p>
    //     </td>
    //     <td className={classes['td']}>
    //         <p>{post.author}</p>
    //     </td>
    // </tr>

    return (
      <div>
        <TextArea i={item.i} nombre={item.nombre}></TextArea>
      </div>
    );
  });
  return <div>{lista}</div>;
}

// render(){
// const ListItems = ({usuar}) =>{
// const items= props;
//  console.log("esta es la lista")
//  console.log(this.props.items)
//  console.log("esta es la lista sin delimitar")
//  console.log(items)
// const lista = this.props.items.map((usuario,id) =>{
//     console.log("pasar el id")
//     console.log(usuario.items.nombre)
//     return <div className={classes.list}
//                 key={usuario.id} >

//         <p className={classes.p}>{usuario.nombre}
//         <span className={classes.trash}>
//             <FontAwesomeIcon className={classes.icono1}
//                              icon='trash'
//                              onClick={() => props.deleteItem(item.id)}
//                              />
//         </span>
//         <span className={classes.edit}>
//             <FontAwesomeIcon className={classes.icono2}
//                              icon={faPencilAlt}
//                              />
//         </span>
//         {/* fa-pencil-alt */}
//         onClick={() => props.deleteItem(item.id)}

//         </p>

//     </div>
//     })
// const lista = usuar.map(usuario =>{
//         console.log(usuario.id)
//     return <div className={classes.list}
//                 key={usuario.id} >

//         <p className={classes.p}>{usuario.nombre}
//         <span className={classes.trash}>
//             <FontAwesomeIcon className={classes.icono1}
//                              icon='trash'
//                             //  onClick={() => props.deleteItem(item.id)}
//                              />
//         </span>
//         <span className={classes.edit}>
//             <FontAwesomeIcon className={classes.icono2}
//                              icon={faPencilAlt}
//                              />
//         </span>
//         {/* fa-pencil-alt */}
//         {/* onClick={() => props.deleteItem(item.id)}  */}

//         </p>

//     </div>

// return(
//     <div>{lista}</div>
// <div></div>

//     )
// }
// }
export default ListItems;
