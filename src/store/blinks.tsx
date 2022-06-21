import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
// import moment from "moment";

// interface initState{
//   list: Array<any>;
//   loading:string;
//   lastFetch:number;
// }

const slice = createSlice({
  name: "blinks",
  initialState: {
    list: [] as any,
    loading: false,
    lastFetch: 0,
  },
  reducers: {
    blinksRequested: (blinks, action) => {
      blinks.loading = true;
    },

    blinksReceived: (blinks, action) => {
      blinks.list = action.payload;
      blinks.loading = false;
      blinks.lastFetch = Date.now();
    },

    blinksRequestFailed: (blinks, action) => {
      blinks.loading = false;
    },

    blinkUpdateStatus: (blinks: any, action) => {
      const { id } = action.payload;
      const index = blinks.list.findIndex((blink: any) => blink.id === id);
      blinks.list[index] = action.payload;
    },

    // command - event
    blinkAdded: (blinks, action) => {
      blinks.list.push(action.payload);
    },

    blinkUpdated : (blinks, action) => {
      console.log(action.payload);

      const index = blinks.list.findIndex(
        (bug: any) => bug.id === action.payload.id
      );
      blinks.list[index] = action.payload;
      blinks.loading=false;

      
    },
  },
});

export const {
  blinkAdded,
  blinkUpdated,
  blinkUpdateStatus,
  blinksReceived,
  blinksRequested,
  blinksRequestFailed,
} = slice.actions;

export default slice.reducer;

// Action Creators
const url = "";

export const loadblinks: any = () => async (dispatch: any, getState: any) => {
  // const { lastFetch } = getState().entities.blinks;

  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 1) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: slice.actions.blinksRequested.type,
      onSuccess: slice.actions.blinksReceived.type,
      onError: slice.actions.blinksRequestFailed.type,
    })
  );
};

// export const updateBlinkStatus: any =
//   () => (dispatch: any, getState: any)=> (id: any, updatedStatus: string) => {
//     return dispatch(
//       apiCallBegan({
//         // /blinks
//         // PATCH /blinks/1
//         url: url + "/" + id,
//         onStart: slice.actions.blinksRequested.type,
//         method: "patch",
//         data: { status: updatedStatus },
//         onSuccess: slice.actions.blinkUpdated.type,
//       })
//     );
//   };

export const updateBlinkStatus:any =  (id: any, updatedStatus: string) =>
  apiCallBegan({
    // PATCH /blinks/1
    url: url + "/" + id,
    // onStart: slice.actions.blinksRequested.type,
    method: "patch",
    data: { status: updatedStatus },
    onSuccess:  slice.actions.blinkUpdated.type,
  });
