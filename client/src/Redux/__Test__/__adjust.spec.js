import reducer, {CreatCard, GetCards, upDateCard} from "../HeroAdjust"
import {PushPages} from "../../Helper/PushPages"
import store from "../../app/store"


describe("is defined CRUD function", ()=>{
   test('CreateCard is defined', ()=>{
      expect(CreatCard).toBeDefined()
   })

   test("GetCards is defined", ()=>{
      expect(GetCards).toBeDefined()
   })
   test ("upDateCard is defined", ()=>{
      expect(upDateCard).toBeDefined()
   })
})

describe("functionality CreatCard", ()=>{
   let RootAdjustHeroDbState = store.getState().AdjustHeroDb
   let expectedState ={}
   test('CreatCard[pending]', ()=>{
      const action = {type: CreatCard.pending.type, meta:{
         requestId: "requestId"
      }}
      expectedState = {
         ...RootAdjustHeroDbState, 
         loading: "pending", 
         currentRequestId: action.meta.requestId
      }
      const state = reducer(RootAdjustHeroDbState, action)
      expect(state).toEqual(expectedState)
   })

   test("CreatCard[fulfilled]", ()=>{
      const action = {type: CreatCard.fulfilled.type,
            meta:{
         requestId: "requestId"
      }}
      const state = reducer({...RootAdjustHeroDbState, loading: "pending", currentRequestId: action.meta.requestId}, action)
      expect(state).toEqual({...expectedState, loading: "idle", currentRequestId: undefined})

   })

   test("CreatCard[rejected]", ()=>{
      const action = {type: CreatCard.rejected.type, 
         payload:{
            message: "server error"
         },
         meta: {
         requestId: "requestId"
      }}

    const state = reducer({...RootAdjustHeroDbState, loading: "pending", currentRequestId: action.meta.requestId}, action)
    expect(state).toEqual({...expectedState, loading: "idle", currentRequestId: undefined, error: action.payload.message})
   })
})


describe("functionality, GetCards", ()=>{
   let RootAdjustHeroDbState = store.getState().AdjustHeroDb
   let expectedState ={}

   test("GetCards[pending]", ()=>{
      const action = {type: GetCards.pending.type}
      expectedState = {
         ...RootAdjustHeroDbState, 
         loading: "pending", 
      }
      const state = reducer(RootAdjustHeroDbState, action)
      expect(state).toEqual(expectedState)
   })

   test("GetCards[fulfilled]", ()=>{
      const action= {type: GetCards.fulfilled.type, payload:{
         Cards: [1,2,3,4],
         TotalCountCards: 20,
      }}
      expectedState={
         ...RootAdjustHeroDbState,
         loading: "idle",
         CardHeroArr: action.payload.Cards,
         totalItems: action.payload.TotalCountCards,
         totalPages: expect.any(Array)
      }
      const state = reducer(RootAdjustHeroDbState, action)
      expect(state).toEqual(expectedState)
   })
})

describe("functionality, upDateCard", ()=>{
   let RootAdjustHeroDbState = store.getState().AdjustHeroDb
   let expectedState ={}

   test('upDateCard[pending]', ()=>{
      const action = {type: upDateCard.pending.type, meta:{
         requestId: "requestId"
      }}
      expectedState = {
         ...RootAdjustHeroDbState, 
         loading: "pending", 
         currentRequestId: action.meta.requestId
      }
      const state = reducer(RootAdjustHeroDbState, action)
      expect(state).toEqual(expectedState)
   })
   test("upDateCard[fulfilled]", ()=>{
      const action = {type: upDateCard.fulfilled.type,
            meta:{
         requestId: "requestId"
      }}
      const state = reducer({...RootAdjustHeroDbState, loading: "pending", currentRequestId: action.meta.requestId}, action)
      expect(state).toEqual({...expectedState, loading: "idle", currentRequestId: undefined})

   })
   test("upDateCard[rejected]", ()=>{
      const action = {type: upDateCard.rejected.type, 
         payload:{
           data: {message: "server error"} 
         },
         meta: {
         requestId: "requestId"
      }}

    const state = reducer({...RootAdjustHeroDbState, loading: "pending", currentRequestId: action.meta.requestId}, action)
    expect(state).toEqual({...expectedState, loading: "idle", currentRequestId: undefined, error: action.payload.data.message})
   })

})