import React, { Component } from "react";
import "../../App";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import TaskS from "./Task.module.css";

function ListItems(props) {
  const items = props.items;
  const lista = items.map((item) => {
    return (
      <div className="formulario" id={item.id}>
        <p>
          <input
            type="text"
            disabled="disabled"
            id={item.id}
            value={item.text}
            className={TaskS.input}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.id);
            }}
          />
          <Grid>
            <DeleteIcon
              onClick={() => {
                props.deleteItem(item.id);
              }}
            />
          </Grid>
        </p>
      </div>
    );
  });
  return (
    <div>
        {lista}
      
    </div>
  );
}

export default ListItems;
