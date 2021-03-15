import {
   createSlice, 
   createAsyncThunk, 
   createSelector, 
} from "@reduxjs/toolkit"
import {generalRouter, CREATE_CARD, UPLOAD_IMAGE, DELETE_IMAGE} from "../Helper/api"
import {PushPages} from "../Helper/PushPages"


export const CreatCard = createAsyncThunk("AdjustHeroDb/CreatCard", async ({BodyForm}, {rejectWithValue, getState, requestId})=>{
   const { currentRequestId, loading } = getState().AdjustHeroDb
   if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
   try {
      let resCreateCard = await generalRouter.post(CREATE_CARD, BodyForm)
      return resCreateCard.data
   } catch (error) {
      return rejectWithValue(error.response.data)
      
   }
})


export const uploadImage = createAsyncThunk("AdjustHeroDb/uploadImage", async({File}, {rejectWithValue})=>{
   let formData = new FormData();
   formData.append("ImageHero", File)
   try {
      let resUploadImage = await generalRouter.post(UPLOAD_IMAGE, formData)

      return resUploadImage.data
   } catch (error) {
      return rejectWithValue({data: error.response.data, status: error.response.status})
      
   }
})

export const deletImage = createAsyncThunk("AdjustHeroDb/deletImage", async ({imageName, idCard}, {rejectWithValue})=>{
   try {
      let resDeletImage = await generalRouter.delete(`${DELETE_IMAGE}/?imageName=${imageName}&idCard=${idCard}`)
   } catch (error) {
      return rejectWithValue({data: error.response.data, status: error.response.status})
   }
})

export const GetCards = createAsyncThunk("AdjustHeroDb/GetCards", async({skipCards}, {rejectWithValue})=>{
   try {
      let resGetCards = await generalRouter.get(`${CREATE_CARD}/?skipCard=${skipCards}`)
console.log(resGetCards.data);

      return resGetCards.data
      
   } catch (error) {
      console.log('err', error.response);
      
      return rejectWithValue({data: error.response.data, status: error.response.status})
   }
})

export const GetCardById = createAsyncThunk("AdjustHeroDb/GetCardById", async ({idCard},{rejectWithValue})=>{
   try {
      const resGetCardById =  await generalRouter.get(`${CREATE_CARD}/${idCard}`)
      
      return resGetCardById.data
   } catch (error) {
      return rejectWithValue({data: error.response.data, status: error.response.status})
   }
})

export const upDateCard = createAsyncThunk("AdjustHeroDb/upDateCard", async ({idCard, BodyForm}, {rejectWithValue, getState, requestId})=>{
   try {
      const { currentRequestId, loading } = getState().AdjustHeroDb
      if (loading !== 'pending' || requestId !== currentRequestId) {
         return
       }
      let resUpdateCard = await generalRouter.patch(`${CREATE_CARD}/?idCard=${idCard}`, BodyForm)


      return resUpdateCard.data
   } catch (error) {
      
      return rejectWithValue({data: error.response.data, status: error.response.status})
   }
})

export const DeleteCard = createAsyncThunk("AdjustHeroDb/DeleteCard", async({idCard}, {rejectWithValue})=>{
   try {
      let resDeletCard = await generalRouter.delete(`${CREATE_CARD}/?idCard=${idCard}`)

      return resDeletCard.data
   } catch (error) {
      return rejectWithValue({data: error.response.data, status: error.response.status})
   }
})
export const AdjustHeroDbSlice = createSlice({
   name: 'AdjustHeroDb',
   initialState:{
      error:"",
      CardHeroArr: [],
      loading: "idle",
      currentRequestId: undefined,
      totalItems: 0,
      totalPages: [],
      ItemsPerPage: 5,
   },
   reducers:{},
   extraReducers:{
      [CreatCard.pending]: (state, action)=>{
         if (state.loading === 'idle') {
            state.loading = 'pending'
            state.currentRequestId = action.meta.requestId
          }
      },
      [CreatCard.fulfilled]: (state, action)=>{
      state.loading = "idle"
      state.error = ""
      state.currentRequestId = undefined

      },
      [CreatCard.rejected]: (state, action)=>{
         const { requestId } = action.meta
         if (state.loading === 'pending' && state.currentRequestId === requestId) {
            state.loading = 'idle'
            state.error = action.payload.message
            state.currentRequestId = undefined
          }
         
      },
      [GetCards.pending]:(state, action)=>{
         state.loading = 'pending'
      },
      [GetCards.fulfilled]: (state, action) =>{
         state.loading = 'idle'
         state.CardHeroArr = action.payload.Cards
         state.totalItems = action.payload.TotalCountCards
         state.totalPages = PushPages(state.totalItems, state.ItemsPerPage)
      },
      [upDateCard.pending]: (state, action)=>{
         if (state.loading === 'idle') {
            state.loading = 'pending'
            state.currentRequestId = action.meta.requestId
          }
      },
      [upDateCard.fulfilled]: (state, action)=>{
         state.loading = "idle"
         state.error = ""
         state.currentRequestId = undefined
      },
      [upDateCard.rejected]: (state, action)=>{
         const { requestId } = action.meta
         if (state.loading === 'pending' && state.currentRequestId === requestId) {
            state.loading = 'idle'
            state.error = action.payload.data.message
            state.currentRequestId = undefined
          }
      },

   }
})

export const {}=AdjustHeroDbSlice.actions
export default AdjustHeroDbSlice.reducer