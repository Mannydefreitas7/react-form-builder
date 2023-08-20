import React, { useContext } from "react";
import FormBuilderContext from "../stores/form-builder.store";
import { Droppable, SortableRowItem } from "../components/dnd";

import {  DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { RowSection } from "../components/form";

function Main() {
  const state = useContext(FormBuilderContext);

  return (
    <>
      <Droppable
        id={"general"}
        accepts={['row']}
        index={0}
      >
      <div className="flex w-full px-4 py-2">
        <div className="flex flex-col w-full">
          {state.payload.length > 0 && (
            <SortableContext
              strategy={verticalListSortingStrategy}
              items={state.payload.map((row) => row.id)}
            >
              {state.payload.length > 0 &&
                state.payload.map((row, index) => {
                  return <SortableRowItem index={index} key={index} row={row} id={row.id} />;
                })}
            </SortableContext>
          )}
          
        </div>
      </div>
      </Droppable>
      <DragOverlay>
        {state.activeRow ? <RowSection row={state.activeRow} /> : null}
      </DragOverlay>
    </>
  );
}

export default Main;
