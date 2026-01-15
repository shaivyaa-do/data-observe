// import external packages
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import reducers
import globalReducer from "./slices/global";
import themeReducer from "./slices/theme";

// combine reducers
export const reducers = combineReducers({
    globalReducer,
    themeReducer
});

// configure store
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false // Disable serializableCheck if using non-serializable data like Date
        })
});
