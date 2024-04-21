import { createSlice } from "@reduxjs/toolkit";
import { InitialChannelState } from "../Type";

const initialState: InitialChannelState = {
    channelId:null,
    channelName:null,
}
export const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {
        setchannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        }
    },
});
// console.log(userSlice.actions);

export const {setchannelInfo} = channelSlice.actions;
export default channelSlice.reducer;