import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../Store/states";
import { redirect } from "react-router";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export function checkToken() {
  const token = getToken();
  if (!token) return redirect("/");
  return null;
}

export function DeleteToken() {
  localStorage.removeItem("token");
}
