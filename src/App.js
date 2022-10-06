import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./App.css";
import { userApiMiddleware, userApiReducer } from "./store/rtk-query-user";
import { userReducer } from "./store/user";
import { UserModule } from "./user/user.module";

const store = configureStore({
  reducer: {
    users: userReducer,
    userApi: userApiReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(userApiMiddleware);
  },
});

function App() {
  return (
    <Provider store={store}>
      <UserModule></UserModule>
    </Provider>
  );
}

export default App;
