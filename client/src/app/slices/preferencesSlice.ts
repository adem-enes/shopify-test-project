/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction, } from '@reduxjs/toolkit';
import { fetchProductMetafields, putProduct } from '../api';
import { PreferencesType } from '../..';

type InitialState = {
    preferences: PreferencesType,
    loading: boolean,
    errors: string | null | undefined,
}

const name = "preferences";
const initialState: InitialState = {
    preferences: {
        description: '',
        title: ''
    },
    loading: false,
    errors: null
}

export const getPreferences = createAsyncThunk(
    name,
    async (id: string | number, { rejectWithValue }) => await fetchProductMetafields(id).then(data => data)
        .catch(({ response }) => rejectWithValue(response.data))
);

export const updatePreferences = createAsyncThunk(
    `${name}/update`,
    async (data: PreferencesType, { rejectWithValue }) => await putProduct(data.id!, data).then((data: any) => data)
        .catch(({ response }) => rejectWithValue(response.data))
);

export const preferencesSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPreferences.fulfilled, (state, action: PayloadAction<any>) => {
            state.preferences = { description: '', title: '' };
            const metafields = action.payload.metafields;
            state.preferences = {
                id: metafields[0].owner_id,
                title: metafields.find((item: any) => item.key === 'title_tag').value,
                description: metafields.find((item: any) => item.key === 'description_tag').value
            };
            state.loading = false;
        });
        builder.addCase(getPreferences.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getPreferences.rejected, (state, action) => {
            state.errors = action.error.message;
            state.loading = false;
        });

        builder.addCase(updatePreferences.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updatePreferences.fulfilled, (state, action: PayloadAction<any>) => {
            const metafields = action.payload.metafields;
            state.preferences = {
                id: metafields[0].owner_id,
                title: metafields.find((item: any) => item.key === 'title_tag').value,
                description: metafields.find((item: any) => item.key === 'description_tag').value
            };
            state.loading = false;
        })
    }
})

export default preferencesSlice.reducer;