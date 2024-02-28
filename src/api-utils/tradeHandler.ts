import dexterity, { Trader } from "@hxronetwork/dexterity-ts";
import { sendTradeMessageToUser } from "../bot";
import { Trade } from "./types";

export const tradeHandler = async (
  req: Request,
  trader: Trader,
  CopiedTrader: undefined | Trader,
  AppState: Map<string, any>
) => {
  
};
