import { Presets } from "userop";
// @ts-ignore
import config from "../../config.json";

export async function address() {
  const simpleAccount = await Presets.Builder.SimpleAccount.init(
    config.signingKey,
    config.rpcUrl,
    config.entryPoint,
    config.simpleAccountFactory
  );
  const address = simpleAccount.getSender();

  console.log(`SimpleAccount address: ${address}`);
}
